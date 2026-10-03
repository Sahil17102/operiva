import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
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
      <Link className="brand" href="/" aria-label="Opervia home">
        <Image src="/opervia-logo.png" alt="Opervia logo" width={46} height={46} priority />
        <span>OPERVIA</span>
      </Link>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link className={active === item.key ? 'active' : undefined} href={item.href} key={item.key}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="nav-actions">
        <ThemeToggle />
        <Link className="nav-cta" href="/contact">
          Start a project <ArrowUpRight size={17} />
        </Link>
      </div>
    </header>
  );
}
