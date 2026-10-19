import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Code2, Github, Linkedin, Mail } from 'lucide-react';
import { links, rotatingThemes } from '../data/content';

const socials = [
  { label: 'GitHub', href: links.github, Icon: Github },
  { label: 'LinkedIn', href: links.linkedin, Icon: Linkedin },
  { label: 'LeetCode', href: links.leetcode, Icon: Code2 },
  { label: 'Email', href: links.email, Icon: Mail },
];

export default function Hero() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = window.setInterval(() => setI((n) => (n + 1) % rotatingThemes.length), 2800);
    return () => window.clearInterval(t);
  }, [reduce]);

  return (
    <section id="top" className="relative flex min-h-[calc(100svh-4rem)] items-center py-16">
      <div className="container-x">
        <p className="mono-label mb-6">
          <span className="text-accent">●</span> SDE + AI/ML Developer · Full-Stack · Backend Systems
        </p>

        <h1 className="text-[clamp(2.75rem,9vw,7.5rem)] font-semibold leading-[0.95] tracking-tighter">
          Hi, I'm Shatakshi Prasad.
        </h1>

        <p className="mt-6 text-[clamp(1.75rem,5vw,3.75rem)] font-medium leading-tight tracking-tight text-muted">
          I build software that works.
        </p>

        <div className="mt-4 flex min-h-[2.25rem] items-center font-mono text-base sm:text-xl" aria-live="polite">
          <span className="mr-2 text-accent">&gt;</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {rotatingThemes[i]}
            </motion.span>
          </AnimatePresence>
          <span className="cursor" aria-hidden="true" />
        </div>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          I'm a Computer Science Engineering student specializing in AI/ML, building full-stack applications, secure
          backend systems, developer tools, and intelligent software using Python, FastAPI, React, PostgreSQL, and
          machine learning.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#projects" className="btn-primary">
            Explore My Projects <ArrowRight size={16} />
          </a>
          <a href="#contact" className="btn-ghost">
            Get in Touch
          </a>
        </div>

        <ul className="mt-10 flex items-center gap-3">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition hover:border-fg hover:text-fg"
              >
                <Icon size={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
