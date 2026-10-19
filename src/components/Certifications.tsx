import { BadgeCheck, Cloud } from 'lucide-react';
import { certifications } from '../data/content';
import Reveal from './Reveal';
import Section from './Section';

export default function Certifications() {
  return (
    <Section id="certifications" index="06" eyebrow="certifications" title="Certifications">
      <div className="grid gap-5 md:grid-cols-2">
        {certifications.map((c, i) => {
          const Icon = c.icon === 'badge' ? BadgeCheck : Cloud;
          return (
            <Reveal key={c.title} delay={i * 0.06} className="h-full">
              <div className="card flex h-full items-start gap-4 p-6 sm:p-8">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{c.title}</h3>
                  <p className="mt-1 font-mono text-sm text-accent">{c.detail}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
