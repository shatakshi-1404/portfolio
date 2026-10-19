import { ArrowUpRight, GitCommit, GitPullRequest } from 'lucide-react';
import { openSource } from '../data/content';
import Reveal from './Reveal';
import Section from './Section';

export default function OpenSource() {
  return (
    <Section id="open-source" index="05" eyebrow="open source" title="Open Source">
      <div className="grid gap-5 md:grid-cols-2">
        {openSource.map((o, i) => {
          const Icon = o.kind === 'pr' ? GitPullRequest : GitCommit;
          return (
            <Reveal key={o.title} delay={i * 0.06} className="h-full">
              <article className="card flex h-full flex-col p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-line">
                    <Icon size={18} />
                  </div>
                  <span className="font-mono text-xs text-muted">{o.period}</span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight">{o.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
                  {o.stack.map((s) => (
                    <li key={s} className="tag">
                      {s}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 space-y-2 text-muted">
                  {o.details.map((d) => (
                    <li key={d} className="flex gap-3">
                      <span className="mt-2.5 h-px w-4 shrink-0 bg-fg" />
                      {d}
                    </li>
                  ))}
                </ul>
                <a
                  href={o.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost mt-auto self-start !py-2.5"
                  style={{ marginTop: '2rem' }}
                >
                  {o.linkLabel} <ArrowUpRight size={16} />
                </a>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
