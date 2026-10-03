import type { Metadata } from 'next';
import SubpageShell from '@/components/subpage-shell';

export const metadata: Metadata = {
  title: 'Work & Capabilities',
  description: 'Explore the digital platforms, business systems and connected growth experiences Opervia can build.',
  alternates: { canonical: '/work' },
};

export default function WorkPage() {
  return <SubpageShell kind="work" />;
}
