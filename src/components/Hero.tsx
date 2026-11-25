import { motion } from 'framer-motion'
import { ChevronDown, Code2, Download, Github, Linkedin } from 'lucide-react'
import { Suspense, lazy, useMemo, useRef } from 'react'
import { profile } from '../data/profile'
import { useInViewport } from '../hooks/useInViewport'
import { useIsLiteDevice, usePrefersReducedMotion } from '../hooks/useMediaQuery'
import { CoreFallback } from './ui/CoreFallback'
import { ErrorBoundary } from './ui/ErrorBoundary'

const EngineeringCore = lazy(() => import('./EngineeringCore'))

interface Segment {
  text: string
  className?: string
}

const headline: Segment[][] = [
  [
    { text: 'Building' },
    { text: 'intelligent', className: 'text-gradient' },
    { text: 'systems.' },
  ],
  [{ text: 'Engineering' }, { text: 'what comes next.', className: 'text-gradient-cyan' }],
]

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas')
    return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'))
  } catch {
    return false
  }
}

function Headline() {
  return (
    <h1 className="font-display text-[clamp(2.4rem,5.2vw,4rem)] font-semibold leading-[1.04] tracking-[-0.03em]">
      {headline.map((line, li) => (
        <span key={li} className="block">
          {line.map((seg, si) => (
            <span key={si} className="mr-[0.22em] inline-block overflow-hidden pb-[0.08em] align-bottom">
              <motion.span
                className={`inline-block ${seg.className ?? ''}`}
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.15 + li * 0.18 + si * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                {seg.text}
              </motion.span>
            </span>
          ))}
        </span>
      ))}
    </h1>
  )
}

function CoreStage() {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useInViewport(ref)
  const lite = useIsLiteDevice()
  const reduce = usePrefersReducedMotion()
  const webgl = useMemo(() => supportsWebGL(), [])

  const fallback = <CoreFallback animated={!reduce} />

  return (
    <div
      ref={ref}
      className="relative mx-auto aspect-square w-full max-w-[560px] lg:max-w-none"
      role="img"
      aria-label="Interactive 3D illustration: a glowing glass core with orbiting rings and a connected network of nodes."
    >
      {reduce || !webgl ? (
        fallback
      ) : (
        <ErrorBoundary fallback={fallback}>
          <Suspense fallback={fallback}>
            <EngineeringCore lite={lite} active={visible} />
          </Suspense>
        </ErrorBoundary>
      )}

      {/* HUD labels */}
      <div className="pointer-events-none absolute left-0 top-[8%] hidden font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted/80 sm:block">
        <span className="text-violet-soft">●</span> FastAPI · PostgreSQL
      </div>
      <div className="pointer-events-none absolute bottom-[10%] right-0 hidden font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted/80 sm:block">
        RAG · LangGraph <span className="text-cyan">●</span>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      {/* background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="grid-bg absolute inset-0 animate-grid-pan opacity-80" />
        <div className="absolute -left-32 top-10 h-[480px] w-[480px] rounded-full bg-violet/20 blur-[140px]" />
        <div className="absolute -right-24 top-1/3 h-[420px] w-[420px] rounded-full bg-cyan/[0.14] blur-[140px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="container-x grid min-h-screen items-center gap-10 pb-28 pt-32 lg:grid-cols-[1.12fr_0.88fr] lg:gap-6 lg:pt-28">
        {/* left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass mb-7 inline-flex items-center gap-2.5 rounded-full py-1.5 pl-3 pr-4"
          >
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink/90 sm:text-[11px]">
              Open to SDE &amp; Applied AI opportunities
            </span>
          </motion.div>

          <span id="hero-title" className="sr-only">
            Shatakshi Prasad — Building intelligent systems. Engineering what comes next.
          </span>
          <Headline />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="lead mt-7 max-w-xl"
          >
            I&apos;m {profile.firstName} — a Computer Science undergraduate building production-oriented software
            systems and practical AI applications.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-4 font-mono text-[12.5px] tracking-wide text-ink/75"
          >
            Backend Engineering <span className="text-violet-soft">·</span> Full-Stack Development{' '}
            <span className="text-cyan">·</span> Applied AI
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#engineering" className="btn-primary">
              Explore My Work
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <Download size={15} aria-hidden /> View Resume
            </a>
            <a href="#contact" className="btn-ghost">
              Let&apos;s Connect
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mt-9 flex items-center gap-2"
            aria-label="Social links"
          >
            {[
              { href: profile.github, label: 'GitHub', Icon: Github },
              { href: profile.linkedin, label: 'LinkedIn', Icon: Linkedin },
              { href: profile.leetcode, label: 'LeetCode', Icon: Code2 },
            ].map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full border border-line bg-white/[0.03] py-2 pl-3 pr-4 text-[13px] text-muted transition-all hover:border-white/25 hover:text-ink"
                >
                  <Icon size={15} aria-hidden className="transition-colors group-hover:text-cyan" />
                  {label}
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <CoreStage />
        </motion.div>
      </div>

      {/* scroll indicator */}
      <a
        href="#stats"
        aria-label="Scroll to content"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-ink sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="relative h-9 w-[22px] rounded-full border border-white/20">
          <span className="absolute left-1/2 top-2 h-1.5 w-1 -translate-x-1/2 animate-scroll-hint rounded-full bg-cyan" />
        </span>
        <ChevronDown size={14} aria-hidden className="-mt-1 opacity-60" />
      </a>
    </section>
  )
}
