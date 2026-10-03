import { ArrowUpRight } from 'lucide-react';
import ThemeToggle from '@/app/theme-toggle';

type ActivePage = 'home' | 'services' | 'work' | 'process' | 'contact';

const navItems: { label: string; href: string; key: ActivePage }[] = [
  { label: 'Home', href: '/', key: 'home' },
  { label: 'Services', href: '/services', key: 'services' },
  { label: 'Work', href: '/work', key: 'work' },
  { label: 'Process', href: '/process', key: 'process' },
  { label: 'Contact', href: '/contact', key: 'contact' },
];

export default function SiteHeader({ active }: { active: ActivePage }) {
  return (
    <header className="nav-wrap">
      <a className="brand" href="/" aria-label="Opervia home">
        <img src="/opervia-logo.png" alt="Opervia logo" />
        <span>OPERVIA</span>
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <a className={active === item.key ? 'active' : undefined} href={item.href} key={item.key}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <ThemeToggle />
        <a className="nav-cta" href="/contact">
          Start a project <ArrowUpRight size={17} />
        </a>
      </div>
    </header>
  );
}
