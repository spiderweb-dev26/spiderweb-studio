import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SpiderWeb Studio - Elite Frontend Engineering Agency',
  description: 'We build high-performance, visually stunning websites that defy templates and elevate brands.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={typeof window !== 'undefined' ? (window.localStorage.getItem('theme') === 'dark' ? 'dark' : '') : ''}>
      <body className={inter.className} style={{ fontFeatureSettings: '"clav" 1' }}>
        {children}
      </body>
    </html>
  );
}