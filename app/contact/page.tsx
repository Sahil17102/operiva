import type { Metadata } from 'next';
import SubpageShell from '@/components/subpage-shell';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Discuss your website, automation or digital product project with Opervia.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return <SubpageShell kind="contact" />;
}
