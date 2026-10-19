import { about } from '../data/content';
import Reveal from './Reveal';
import Section from './Section';

export default function About() {
  return (
    <Section id="about" index="01" eyebrow="about" title="About">
      <Reveal>
        <p className="max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">{about.description}</p>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal className="h-full">
          <div className="card h-full p-6 sm:p-8">
            <h3 className="mono-label">Quick Facts</h3>
            <ul className="mt-5 space-y-3">
              {about.quickFacts.map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal className="h-full" delay={0.08}>
          <div className="card h-full p-6 sm:p-8">
            <h3 className="mono-label">What I Work On</h3>
            <ul className="mt-5 space-y-3">
              {about.whatIWorkOn.map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
