import { motion } from 'framer-motion'
import { ArrowUpRight, GitCommitHorizontal, GitPullRequest } from 'lucide-react'
import { openSource } from '../data/projects'
import { SectionHeading } from './ui/SectionHeading'

export function OpenSource() {
  return (
    <section id="experience" aria-labelledby="oss-title" className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          id="oss-title"
          eyebrow="Open source"
          title={
            <>
              Contributing beyond <span className="text-gradient">my own repositories.</span>
            </>
          }
        />

        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {openSource.map((c, i) => {
            const Icon = c.kind === 'pr' ? GitPullRequest : GitCommitHorizontal
            return (
              <motion.li
                key={c.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet/50 sm:p-7"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-semibold tracking-tight">{c.name}</h3>
                      <p className="mt-1 text-[14px] text-muted">{c.subtitle}</p>
                    </div>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-white/[0.04] text-violet-soft">
                      <Icon size={18} aria-hidden />
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2.5 text-[14.5px] leading-relaxed text-muted">
                    {c.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span aria-hidden className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-violet" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {c.tech.map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-6 inline-flex items-center gap-1.5 pt-1 text-[13.5px] font-medium text-ink">
                    {c.linkLabel}
                    <ArrowUpRight
                      size={15}
                      aria-hidden
                      className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </a>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
