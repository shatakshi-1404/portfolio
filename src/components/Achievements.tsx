import { ArrowUpRight, Code2, Flag, Trophy } from 'lucide-react';
import { achievements } from '../data/content';
import Reveal from './Reveal';
import Section from './Section';

const icons = { code: Code2, flag: Flag, trophy: Trophy };

export default function Achievements() {
  return (
    <Section id="achievements" index="07" eyebrow="achievements" title="Achievements">
      <div className="grid gap-5 sm:grid-cols-2">
        {achievements.map((a, i) => {
          const Icon = icons[a.icon];
          return (
            <Reveal key={a.text} delay={i * 0.05} className="h-full">
              <div className="card flex h-full items-start gap-4 p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line">
                  <Icon size={17} />
                </div>
                <div>
                  <p className="font-medium leading-snug">{a.text}</p>
                  {a.href && (
                    <a
                      href={a.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 font-mono text-xs text-muted hover:text-fg"
                    >
                      LeetCode profile <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
