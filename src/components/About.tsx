import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education, journey } from '../data/profile'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          id="about-title"
          eyebrow="About"
          title={
            <>
              An engineer at the intersection of <span className="text-gradient">software</span> and{' '}
              <span className="text-gradient-cyan">intelligence.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="space-y-5 text-[16.5px] leading-[1.75] text-muted">
            <Reveal>
              <p>
                I&apos;m pursuing a B.Tech in Computer Science and Engineering with an AI/ML specialization at VIT
                Bhopal University.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                I enjoy building software beyond isolated features — designing backend architectures, secure APIs,
                database-driven systems, asynchronous workflows and intelligent applications.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                My interests span backend engineering, distributed systems, full-stack development and practical AI
                engineering.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="border-l-2 border-violet/70 pl-5 text-ink/90">
                I believe useful AI is not just about connecting an LLM to an application. It is about building
                reliable systems around it — with deterministic execution, evaluation, security and human oversight.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="glass mt-8 flex items-start gap-4 rounded-2xl p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet/30 to-cyan/20">
                  <GraduationCap size={20} aria-hidden />
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan">Education</p>
                  <p className="mt-1 font-display text-lg font-medium text-ink">{education.school}</p>
                  <p className="mt-1 text-[14.5px] leading-snug text-muted">{education.degree}</p>
                  <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[12.5px] text-ink/80">
                    <span>{education.years}</span>
                    <span className="text-lime">{education.cgpa}</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* journey timeline */}
          <Reveal delay={0.1}>
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">The journey</p>
            <ol className="relative space-y-7 pl-8">
              <motion.span
                aria-hidden
                className="absolute bottom-2 left-[9px] top-2 w-px origin-top bg-gradient-to-b from-violet via-cyan to-transparent"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
              {journey.map((step, i) => (
                <motion.li
                  key={step.title}
                  className="relative"
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                >
                  <span
                    aria-hidden
                    className="absolute -left-8 top-1 grid h-[19px] w-[19px] place-items-center rounded-full border border-white/20 bg-bg"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-violet to-cyan" />
                  </span>
                  <h3 className="font-display text-[17px] font-medium text-ink">{step.title}</h3>
                  <p className="mt-1 text-[14.5px] leading-relaxed text-muted">{step.body}</p>
                </motion.li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
