import type { Metadata } from 'next';
import SubpageShell from '@/components/subpage-shell';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Website development, business automation, custom web products, SEO and AI integrations by Opervia.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return <SubpageShell kind="services" />;
}
