import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface Props {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, index, eyebrow, title, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <p className="mono-label">
            <span className="text-accent">{index}</span> / {eyebrow}
          </p>
          <h2 id={`${id}-title`} className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
            {title}
          </h2>
        </Reveal>
        <div className="mt-10 sm:mt-14">{children}</div>
      </div>
    </section>
  );
}
