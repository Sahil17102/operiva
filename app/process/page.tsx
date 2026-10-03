import type { Metadata } from 'next';
import SubpageShell from '@/components/subpage-shell';

export const metadata: Metadata = {
  title: 'Process',
  description: 'Discover the Opervia Orbit: a connected digital product process from discovery through continuous growth.',
  alternates: { canonical: '/process' },
};

export default function ProcessPage() {
  return <SubpageShell kind="process" />;
}
