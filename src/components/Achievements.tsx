import { motion } from 'framer-motion'
import { ArrowUpRight, Award, Code2, Medal, Trophy } from 'lucide-react'
import { achievements, certifications } from '../data/achievements'
import { profile } from '../data/profile'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const icons = { trophy: Trophy, medal: Medal, code: Code2, award: Award } as const

export function Achievements() {
  return (
    <section id="achievements" aria-labelledby="ach-title" className="relative pb-24 sm:pb-32">
      <div className="container-x">
        <SectionHeading
          id="ach-title"
          eyebrow="Achievements & certifications"
          title={
            <>
              Milestones <span className="text-gradient">along the way.</span>
            </>
          }
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
          {/* achievements timeline */}
          <ol className="relative space-y-4 border-l border-line pl-6">
            {achievements.map((a, i) => {
              const Icon = icons[a.icon]
              return (
                <motion.li
                  key={a.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="group relative rounded-2xl border border-line bg-white/[0.025] p-5 transition-colors hover:border-white/20"
                >
                  <span
                    aria-hidden
                    className="absolute -left-[31px] top-6 h-2.5 w-2.5 rounded-full border border-cyan bg-bg"
                  />
                  <div className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet/25 to-cyan/15 text-ink">
                      <Icon size={18} aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-display text-[17px] font-medium text-ink">{a.title}</h3>
                      {a.detail && <p className="mt-1 text-[14.5px] text-muted">{a.detail}</p>}
                    </div>
                  </div>
                </motion.li>
              )
            })}
          </ol>

          {/* certifications */}
          <div>
            <Reveal>
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">Certifications</p>
            </Reveal>
            <ul className="space-y-4">
              {certifications.map((c, i) => (
                <motion.li
                  key={c.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className="glass rounded-2xl p-5"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan">{c.issuer}</p>
                  <h3 className="mt-2 font-display text-[17px] font-medium leading-snug text-ink">{c.title}</h3>
                  {c.detail && (
                    <p className="mt-2 font-mono text-[13px] text-lime">Score: {c.detail}</p>
                  )}
                </motion.li>
              ))}
            </ul>

            <Reveal delay={0.1}>
              <a
                href={profile.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-6 w-full justify-between"
              >
                <span className="inline-flex items-center gap-2">
                  <Code2 size={16} aria-hidden /> LeetCode profile
                </span>
                <ArrowUpRight size={16} aria-hidden />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
