import { Mail, Moon, Sun } from 'lucide-react';
import { links } from '../data/content';
import { useTheme } from '../hooks/useTheme';

export default function FloatingControls() {
  const { theme, toggle } = useTheme();
  const btn =
    'flex h-12 w-12 items-center justify-center rounded-full border border-line bg-card/90 shadow-sm backdrop-blur transition hover:border-fg';

  return (
    <div className="fixed bottom-5 right-5 z-30 flex flex-col gap-3">
      <a href={links.email} aria-label="Send me an email" className={btn}>
        <Mail size={18} />
      </a>
      <button
        type="button"
        onClick={toggle}
        aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        className={btn}
      >
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </div>
  );
}
