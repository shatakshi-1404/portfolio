import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/content';
import Reveal from './Reveal';
import Section from './Section';

const spanClass: Record<string, string> = {
  backend: 'lg:col-span-2',
  cs: 'lg:col-span-2',
};

export default function Skills() {
  const [focus, setFocus] = useState<string | null>(null);

  // Flatten for the floating cloud; keep first category for duplicated names (e.g. TypeScript)
  const nodes = useMemo(() => {
    const seen = new Set<string>();
    const out: { name: string; cat: string; tier: 'core' | 'secondary'; ai: boolean }[] = [];
    skillCategories.forEach((c) =>
      c.skills.forEach((s) => {
        if (seen.has(s)) return;
        seen.add(s);
        out.push({ name: s, cat: c.id, tier: c.tier, ai: c.id === 'ai' });
      })
    );
    return out;
  }, []);

  return (
    <Section id="skills" index="02" eyebrow="skills" title="Skills">
      <Reveal>
        <div className="mb-5 flex flex-wrap gap-2" role="group" aria-label="Highlight a skill category">
          {skillCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={focus === c.id}
              onClick={() => setFocus((f) => (f === c.id ? null : c.id))}
              onMouseEnter={() => setFocus(c.id)}
              onMouseLeave={() => setFocus(null)}
              className={`rounded-full border px-3 py-1.5 font-mono text-xs transition ${
                focus === c.id ? 'border-fg bg-fg text-bg' : 'border-line text-muted hover:border-fg hover:text-fg'
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        <div className="card relative overflow-hidden p-6 sm:p-10" aria-label="Skill constellation">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-5 sm:gap-x-6 sm:gap-y-7">
            {nodes.map((n, idx) => {
              const dim = focus && focus !== n.cat;
              const big = n.tier === 'core';
              return (
                <motion.span
                  key={n.name}
                  animate={{ y: [0, idx % 2 ? -6 : 6, 0] }}
                  transition={{
                    duration: 4 + (idx % 5) * 0.7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: (idx % 7) * 0.25,
                  }}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 transition-opacity duration-300 ${
                    big ? 'text-base font-semibold sm:text-xl' : 'text-sm font-medium sm:text-base'
                  } ${n.ai ? 'border-accent/60' : 'border-line'} ${dim ? 'opacity-20' : 'opacity-100'}`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${n.ai ? 'bg-accent' : 'bg-fg'}`} aria-hidden="true" />
                  {n.name}
                </motion.span>
              );
            })}
          </div>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((c, i) => (
          <Reveal key={c.id} delay={i * 0.04} className={`${spanClass[c.id] ?? ''} h-full`}>
            <div className="card h-full p-6">
              <h3 className="mono-label">
                {c.title}
                {c.id === 'ai' && <span className="ml-2 text-accent">●</span>}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {c.skills.map((s) => (
                  <li key={s} className="rounded-full border border-line px-3 py-1.5 text-sm">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
