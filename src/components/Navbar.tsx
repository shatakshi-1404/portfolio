import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Download, Github, Linkedin, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems, profile, sectionIds } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(sectionIds)
  const activeItem = navItems.find((n) => n.ids.includes(active))?.href ?? '#home'

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Primary"
        className={`relative w-full max-w-[1100px] overflow-hidden rounded-full border transition-all duration-300 ${
          scrolled || open
            ? 'border-white/10 bg-bg/80 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between gap-3 py-2 pl-3 pr-2 sm:pl-4">
          <a href="#home" className="group flex items-center gap-2.5" aria-label="Shatakshi Prasad — home">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-gradient-to-br from-violet/30 to-cyan/20 font-display text-[13px] font-bold tracking-wide transition-transform duration-300 group-hover:rotate-[-6deg]">
              SP
            </span>
            <span className="hidden font-display text-[15px] font-medium tracking-tight sm:block">
              {profile.name}
            </span>
          </a>

          {/* desktop links */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) => {
              const isActive = activeItem === item.href
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative block rounded-full px-3.5 py-2 text-[13.5px] transition-colors ${
                      isActive ? 'text-ink' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-white/[0.08] ring-1 ring-white/10"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-1.5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hidden h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-white/[0.07] hover:text-ink sm:grid"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hidden h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-white/[0.07] hover:text-ink sm:grid"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-bg transition-all hover:bg-white hover:shadow-[0_0_0_4px_rgba(139,92,246,0.25)]"
            >
              <Download size={14} aria-hidden />
              <span>Resume</span>
            </a>
            <button
              type="button"
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden"
            >
              <ul className="flex flex-col gap-1 px-3 pb-4 pt-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] transition-colors ${
                        activeItem === item.href ? 'bg-white/[0.07] text-ink' : 'text-muted hover:text-ink'
                      }`}
                    >
                      {item.label}
                      {activeItem === item.href && <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden />}
                    </a>
                  </li>
                ))}
                <li className="mt-2 flex items-center gap-2 px-1">
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-ghost flex-1 !py-2.5">
                    <Github size={16} /> GitHub
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost flex-1 !py-2.5">
                    <Linkedin size={16} /> LinkedIn
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* scroll progress */}
        <motion.span
          aria-hidden
          style={{ scaleX: progress }}
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-violet to-cyan"
        />
      </nav>
    </header>
  )
}
