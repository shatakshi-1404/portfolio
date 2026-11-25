import { motion } from 'framer-motion'
import { ArrowUp, Code2, Github, Linkedin } from 'lucide-react'
import { navItems, profile } from '../data/profile'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-line">
      <div className="container-x py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-xl font-semibold tracking-tight">{profile.name}</p>
            <p className="mt-1 text-[14px] text-muted">{profile.tagline}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-3 gap-x-10 gap-y-3 text-[14px] text-muted sm:grid-cols-6 md:grid-cols-3">
              {navItems.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition-colors hover:text-ink">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex items-center gap-2" aria-label="Social links">
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
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-all hover:border-white/25 hover:text-ink"
                >
                  <Icon size={17} aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex items-center justify-between gap-4 border-t border-line pt-6 text-[13px] text-muted">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <motion.a
            href="#home"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 transition-colors hover:border-white/25 hover:text-ink"
          >
            Back to top <ArrowUp size={14} aria-hidden />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
