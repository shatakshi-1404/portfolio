import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems, sectionIds } from '../data/content';
import { useActiveSection } from '../hooks/useActiveSection';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <a href="#top" className="font-mono text-sm font-medium">
          ./shatakshi<span className="cursor" aria-hidden="true" />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-5 xl:flex">
          {navItems.slice(1).map((item) => (
            <a
              key={item.id}
              href={item.href}
              aria-current={active === item.id ? 'true' : undefined}
              className={`font-mono text-xs transition hover:text-fg ${
                active === item.id ? 'text-fg' : 'text-muted'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-ghost hidden !py-2 sm:inline-flex">
            Get in touch
          </a>
          <button
            type="button"
            className="btn-ghost !p-2.5 xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-bg xl:hidden">
          <ul className="container-x grid gap-1 py-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 font-mono text-sm text-muted hover:bg-card hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
                Get in touch
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
