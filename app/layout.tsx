import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'https://operiva.onrender.com'),
  title: {
    default: 'Opervia — Websites, Automation & Digital Growth',
    template: '%s | Opervia',
  },
  description: 'Opervia builds high-performing websites, intelligent automations and conversion-focused digital experiences for ambitious businesses.',
  keywords: [
    'website development company India',
    'business automation',
    'web design agency',
    'SEO friendly website',
    'custom web applications',
    'Opervia',
  ],
  authors: [{ name: 'Opervia' }],
  creator: 'Opervia',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: 'Opervia — Build. Automate. Grow.',
    description: 'High-performing websites, intelligent automation and digital products built for business growth.',
    siteName: 'Opervia',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Opervia — Build. Automate. Grow.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opervia — Build. Automate. Grow.',
    description: 'High-performing websites, intelligent automation and digital products built for business growth.',
    images: ['/og.png'],
  },
  icons: { icon: '/opervia-logo.png', apple: '/opervia-logo.png' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem('opervia-theme')||((window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches)?'light':'dark');document.documentElement.dataset.theme=t;document.documentElement.classList.toggle('dark',t==='dark')}catch(e){}`,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
