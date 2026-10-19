import { ArrowUpRight, Briefcase } from 'lucide-react';
import { experience } from '../data/content';
import Reveal from './Reveal';
import Section from './Section';

export default function Experience() {
  const e = experience;
  return (
    <Section id="experience" index="03" eyebrow="experience" title="Experience">
      <Reveal>
        <div className="grid gap-6 md:grid-cols-[200px_1fr]">
          <div className="font-mono text-sm text-muted">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent align-middle" />
            {e.period}
          </div>
          <article className="card p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line">
                <Briefcase size={18} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">{e.company}</h3>
                <p className="text-sm text-muted">{e.subtitle}</p>
                <p className="mt-3 font-medium">{e.role}</p>
              </div>
            </div>

            <ul className="mt-6 space-y-3 text-muted">
              {e.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2.5 h-px w-4 shrink-0 bg-fg" />
                  {p}
                </li>
              ))}
            </ul>

            {e.certificateUrl && (
              <a
                href={e.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-8 !py-2.5"
              >
                View certificate <ArrowUpRight size={16} />
              </a>
            )}
          </article>
        </div>
      </Reveal>
    </Section>
  );
}
