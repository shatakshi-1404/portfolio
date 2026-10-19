import { ArrowUpRight, Github } from 'lucide-react';
import { projects, type Project } from '../data/content';
import Reveal from './Reveal';
import Section from './Section';

interface CardProps {
  project: Project;
  onOpen: (p: Project) => void;
}

function ProjectCard({ project: p, onOpen }: CardProps) {
  return (
    <article
      className={`card group relative flex h-full flex-col p-6 transition hover:border-fg sm:p-8 ${
        p.featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm text-muted">{p.index}</span>
        {p.featured && (
          <span className="rounded-full border border-accent/60 px-2.5 py-1 font-mono text-[11px] text-accent">
            featured
          </span>
        )}
      </div>

      <h3 className={`mt-4 font-semibold tracking-tight ${p.featured ? 'text-4xl sm:text-5xl' : 'text-3xl'}`}>
        <button
          type="button"
          onClick={() => onOpen(p)}
          aria-haspopup="dialog"
          className="text-left after:absolute after:inset-0 after:content-['']"
        >
          {p.title}
        </button>
      </h3>
      <p className="mt-1 text-muted">{p.subtitle}</p>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted">{p.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
        {p.stack.map((s) => (
          <li key={s} className="tag">
            {s}
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <h4 className="mono-label">Key engineering decisions</h4>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          {p.decisions.map((d) => (
            <li key={d} className="flex gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {d}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-10 mt-auto flex flex-wrap items-center gap-3 pt-8">
        <button type="button" onClick={() => onOpen(p)} className="btn-primary !py-2.5">
          Case study
        </button>
        <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-ghost !py-2.5">
          <Github size={16} /> GitHub
        </a>
        <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-ghost !py-2.5">
          Live demo <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
}

export default function Projects({ onOpen }: { onOpen: (p: Project) => void }) {
  return (
    <Section id="projects" index="04" eyebrow="featured projects" title="Projects">
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.05} className={`h-full ${p.featured ? 'lg:col-span-2' : ''}`}>
            <ProjectCard project={p} onOpen={onOpen} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
