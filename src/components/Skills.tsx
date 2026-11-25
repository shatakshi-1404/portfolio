import { motion } from 'framer-motion'
import { BrainCircuit, Code2, Cpu, Database, LayoutTemplate, Server, ShieldCheck, Wrench } from 'lucide-react'
import { skillGroups } from '../data/skills'
import { SectionHeading } from './ui/SectionHeading'

const icons = {
  code: Code2,
  server: Server,
  database: Database,
  layout: LayoutTemplate,
  ai: BrainCircuit,
  shield: ShieldCheck,
  wrench: Wrench,
  cs: Cpu,
} as const

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="relative pb-24 sm:pb-32">
      <div className="container-x">
        <SectionHeading
          id="skills-title"
          eyebrow="Technical skills"
          title={
            <>
              The toolkit, <span className="text-gradient-cyan">grouped by what it does.</span>
            </>
          }
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon]
            return (
              <motion.section
                key={group.title}
                aria-label={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-white/[0.035] to-transparent p-5 transition-colors duration-300 hover:border-white/20"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-white/[0.04] text-violet-soft transition-all duration-300 group-hover:border-violet/50 group-hover:text-cyan">
                    <Icon size={17} aria-hidden />
                  </span>
                  <h3 className="font-mono text-[11px] uppercase leading-snug tracking-[0.16em] text-ink/90">
                    {group.title}
                  </h3>
                </div>
                {/* animated underline draws in on reveal */}
                <motion.span
                  aria-hidden
                  className="mt-4 block h-px origin-left bg-gradient-to-r from-violet via-cyan to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 + (i % 4) * 0.07 }}
                />
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-line bg-white/[0.03] px-2.5 py-1 text-[12.5px] text-muted transition-colors duration-200 hover:border-violet/40 hover:text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.section>
            )
          })}
        </div>
      </div>
    </section>
  )
}
