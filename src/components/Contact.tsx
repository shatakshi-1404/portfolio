import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile'
import { Reveal } from './ui/Reveal'

async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
      return true
    }
  } catch {
    /* fall through to legacy path */
  }
  try {
    const ta = document.createElement('textarea')
    ta.value = text
    ta.setAttribute('readonly', '')
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(ta)
    return ok
  } catch {
    return false
  }
}

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle')
  const timer = useRef<number>()

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const onCopy = async () => {
    const ok = await copyText(profile.email)
    setStatus(ok ? 'copied' : 'failed')
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setStatus('idle'), 2200)
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate overflow-hidden pb-20 pt-8 sm:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[480px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/[0.14] blur-[150px]" />
        <div className="absolute right-0 top-10 h-[300px] w-[300px] rounded-full bg-cyan/[0.1] blur-[120px]" />
      </div>

      <div className="container-x">
        <div className="glass relative overflow-hidden rounded-[2rem] px-6 py-14 sm:px-12 sm:py-20">
          <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 opacity-50" />

          <div className="relative mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="eyebrow mb-5">Contact</p>
              <h2 id="contact-title" className="heading-xl">
                Have an interesting <span className="text-gradient">problem to solve?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead mx-auto mt-5 max-w-xl">
                I&apos;m interested in opportunities where software engineering and applied AI meet. Let&apos;s build
                something meaningful.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mx-auto mt-10 flex max-w-xl flex-col items-stretch gap-2 rounded-2xl border border-line bg-bg/60 p-2 sm:flex-row sm:items-center">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex min-w-0 flex-1 items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors hover:bg-white/[0.05]"
                >
                  <Mail size={18} className="shrink-0 text-cyan" aria-hidden />
                  <span className="truncate font-mono text-[13px] text-ink sm:text-[14px]">{profile.email}</span>
                </a>
                <button
                  type="button"
                  onClick={onCopy}
                  className="btn-ghost shrink-0 !rounded-xl"
                  aria-label="Copy email address"
                >
                  {status === 'copied' ? <Check size={16} className="text-lime" aria-hidden /> : <Copy size={16} aria-hidden />}
                  {status === 'copied' ? 'Copied' : status === 'failed' ? 'Copy failed' : 'Copy'}
                </button>
              </div>
              <p className="sr-only" role="status" aria-live="polite">
                {status === 'copied' ? 'Email address copied to clipboard' : status === 'failed' ? 'Could not copy email address' : ''}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <li>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                    <Linkedin size={16} aria-hidden /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                    <Github size={16} aria-hidden /> GitHub
                  </a>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-14 border-t border-line pt-12">
                <p className="font-display text-[clamp(1.6rem,3.6vw,2.6rem)] font-semibold tracking-tight">
                  Let&apos;s build the <span className="text-gradient-cyan">next thing.</span>
                </p>
                <a href={`mailto:${profile.email}?subject=Hello%20Shatakshi`} className="btn-primary mt-7">
                  Say hello <ArrowUpRight size={16} aria-hidden />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
