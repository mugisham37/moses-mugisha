import type { Metadata } from 'next';
import { Geist, Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/layout/Navigation';
import { SmoothScrollProvider } from '@/components/layout/SmoothScrollProvider';

// Geist 500 — all heading/body text (from Framer TextStyles)
const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-geist',
  display: 'swap',
});

// Inter 500 + 600 — buttons and nav links (from Framer TextStyles)
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Maelle — Digital Designer & Photographer',
  description:
    'A digital designer & photographer with 12 years of experience — specializing in crafting visual experiences that feel intentional, refined, and human.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${inter.variable}`}>
      <body>
        <SmoothScrollProvider>
          <Navigation />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
