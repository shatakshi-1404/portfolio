import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, Check, Github } from 'lucide-react'
import type { PointerEvent } from 'react'
import type { Project } from '../types'
import { AurenOpsMockup } from './ui/mockups/AurenOpsMockup'
import { VoxeraMockup } from './ui/mockups/VoxeraMockup'
import { Reveal } from './ui/Reveal'

const accents = {
  ops: {
    glow: 'from-violet/30 via-violet/10 to-transparent',
    index: 'text-violet-soft',
    bar: 'from-violet to-violet/0',
    tag: 'AurenOps interface — original illustration, not a screenshot',
  },
  support: {
    glow: 'from-cyan/25 via-cyan/10 to-transparent',
    index: 'text-cyan',
    bar: 'from-cyan to-cyan/0',
    tag: 'Voxera interface — original illustration, not a screenshot',
  },
} as const

function Visual({ project }: { project: Project }) {
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 140, damping: 18 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 140, damping: 18 })
  const a = accents[project.visual]

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType === 'touch') return
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div className="relative" style={{ perspective: 1200 }}>
      <div
        aria-hidden
        className={`absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br ${a.glow} blur-2xl`}
      />
      <motion.div
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={reduce ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="glass relative aspect-[16/11] rounded-[1.4rem] p-2.5 sm:p-3"
      >
        {/* animated background inside the frame */}
        <div
          aria-hidden
          className="dot-bg absolute inset-0 rounded-[1.4rem] opacity-40"
          style={{ animation: reduce ? undefined : 'grid-pan 18s linear infinite' }}
        />
        <div className="relative h-full w-full">
          {project.visual === 'ops' ? <AurenOpsMockup /> : <VoxeraMockup />}
        </div>
      </motion.div>
      <p className="mt-3 text-center font-mono text-[10.5px] tracking-wide text-muted">{a.tag}</p>
    </div>
  )
}

export function ProjectShowcase({ project, flip }: { project: Project; flip?: boolean }) {
  const a = accents[project.visual]
  return (
    <article
      aria-labelledby={`${project.id}-title`}
      className="group relative grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24"
    >
      <span
        aria-hidden
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${a.bar} opacity-60`}
      />

      <div className={flip ? 'lg:order-2' : ''}>
        <Reveal>
          <p className={`font-mono text-[12px] tracking-[0.25em] ${a.index}`}>PROJECT {project.index}</p>
          <h3
            id={`${project.id}-title`}
            className="mt-3 font-display text-[clamp(2.6rem,6vw,4.6rem)] font-semibold leading-none tracking-[-0.03em]"
          >
            {project.name}
          </h3>
          <p className="mt-3 font-display text-lg text-ink/80">{project.title}</p>
          <p className="lead mt-5 max-w-xl">{project.description}</p>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
            {project.tech.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.14}>
          <ul className="mt-7 space-y-3">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-[14.5px] leading-relaxed text-muted">
                <Check size={16} className={`mt-[3px] shrink-0 ${a.index}`} aria-hidden />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Live Demo <ArrowUpRight size={16} aria-hidden />
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <Github size={16} aria-hidden /> GitHub
            </a>
          </div>
        </Reveal>
      </div>

      <div className={flip ? 'lg:order-1' : ''}>
        <Reveal delay={0.1} y={30}>
          <Visual project={project} />
        </Reveal>
      </div>
    </article>
  )
}
