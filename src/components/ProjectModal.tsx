import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Github, X } from 'lucide-react';
import type { Project } from '../data/content';

function Block({ title, items, accent }: { title: string; items?: string[]; accent?: boolean }) {
  if (!items || items.length === 0) return null;
  return (
    <section className="mt-8">
      <h3 className={`mono-label ${accent ? '!text-accent' : ''}`}>{title}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((it) => (
          <li key={it} className="flex gap-3 text-muted">
            <span className="mt-2.5 h-px w-4 shrink-0 bg-fg" />
            {it}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Dialog({ project: p, onClose }: { project: Project; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      previous?.focus();
    };
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
      return;
    }
    if (e.key !== 'Tab' || !ref.current) return;
    const focusables = ref.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const cs = p.caseStudy;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      onKeyDown={onKeyDown}
    >
      <motion.div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-title"
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="relative max-h-[92svh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-line bg-bg p-6 sm:rounded-3xl sm:p-10"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close case study"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-line hover:border-fg"
        >
          <X size={18} />
        </button>

        <p className="mono-label">Case study · {p.index}</p>
        <h2 id="case-title" className="mt-2 pr-12 text-3xl font-semibold tracking-tight sm:text-5xl">
          {p.title}
        </h2>
        <p className="mt-1 text-muted">{p.subtitle}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-ghost !py-2.5">
            <Github size={16} /> GitHub repository
          </a>
          <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-primary !py-2.5">
            Live demo <ArrowUpRight size={16} />
          </a>
        </div>

        <section className="mt-8">
          <h3 className="mono-label">Overview</h3>
          <p className="mt-3 text-muted">{cs.overview}</p>
        </section>
        <section className="mt-8">
          <h3 className="mono-label">Problem being solved</h3>
          <p className="mt-3 text-muted">{cs.problem}</p>
        </section>

        <Block title="Main features" items={cs.features} />

        <section className="mt-8">
          <h3 className="mono-label">Technology stack</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <li key={s} className="tag">
                {s}
              </li>
            ))}
          </ul>
        </section>

        <Block title="Backend & database design" items={cs.backend} />

        {(cs.conventional || cs.ai) && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {cs.conventional && (
              <div className="rounded-2xl border border-line p-5">
                <h3 className="mono-label">Conventional software logic</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {cs.conventional.map((c) => (
                    <li key={c}>— {c}</li>
                  ))}
                </ul>
              </div>
            )}
            {cs.ai && (
              <div className="rounded-2xl border border-accent/50 p-5">
                <h3 className="mono-label !text-accent">AI/ML-powered functionality</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {cs.ai.map((c) => (
                    <li key={c}>— {c}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <Block title="Security & reliability" items={cs.security} />
        <Block title="Testing" items={cs.testing} />
        <Block title="Deployment" items={cs.deployment} />
      </motion.div>
    </motion.div>
  );
}

export default function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <AnimatePresence>{project && <Dialog key={project.id} project={project} onClose={onClose} />}</AnimatePresence>
  );
}
