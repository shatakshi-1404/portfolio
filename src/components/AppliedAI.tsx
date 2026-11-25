import { motion } from 'framer-motion'
import { Bot, Brain, DatabaseZap, ShieldCheck, Sparkles } from 'lucide-react'
import { capabilityGroups } from '../data/ai'
import type { CapabilityGroup } from '../types'
import { AINetwork } from './AINetwork'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const icons = {
  llm: Sparkles,
  rag: DatabaseZap,
  agent: Bot,
  shield: ShieldCheck,
  ml: Brain,
} as const

function CapabilityCard({ group, i, wide }: { group: CapabilityGroup; i: number; wide?: boolean }) {
  const Icon = icons[group.icon]
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 transition-colors duration-300 hover:border-cyan/40 sm:p-7 ${
        wide ? 'lg:col-span-2' : ''
      }`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="flex items-start justify-between">
        <span className="font-mono text-[12px] tracking-[0.2em] text-cyan">{group.index}</span>
        <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-white/[0.04] text-cyan-soft transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
          <Icon size={18} aria-hidden />
        </span>
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold leading-snug tracking-tight">{group.title}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li key={item} className="chip !border-cyan/15 hover:!border-cyan/50 hover:!bg-cyan/10">
            {item}
          </li>
        ))}
      </ul>
    </motion.li>
  )
}

export default function AppliedAI() {
  return (
    <section aria-labelledby="ai-title" className="relative isolate mt-24 overflow-hidden sm:mt-32">
      {/* distinct identity: cooler, dotted, banded */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A1224] to-transparent" />
        <div className="dot-bg absolute inset-0 opacity-70" />
        <div className="absolute left-1/2 top-1/4 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-cyan/[0.08] blur-[150px]" />
        <div className="absolute -right-32 bottom-10 h-[380px] w-[380px] rounded-full bg-violet/[0.14] blur-[130px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet/40 to-transparent" />
      </div>

      <div className="container-x section-pad">
        <SectionHeading
          id="ai-title"
          eyebrow="// Applied AI"
          title={
            <>
              Applied AI. <span className="text-gradient-cyan">Beyond API calls.</span>
            </>
          }
          description="Building intelligent systems with structured reasoning, retrieval, tool execution, evaluation and guardrails."
        />

        <Reveal className="mt-14" delay={0.05}>
          <AINetwork />
        </Reveal>

        <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilityGroups.map((g, i) => (
            <CapabilityCard key={g.index} group={g} i={i} wide={i === 1} />
          ))}
        </ul>
      </div>
    </section>
  )
}
