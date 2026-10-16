import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import { Suspense } from 'react';

import Header, { HeaderFallback } from '@/components/layout/Header/Header';
import Providers from '@/providers/Providers';

import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: {
    default: 'TravelTrucks — Camper rental',
    template: '%s | TravelTrucks',
  },
  description:
    'TravelTrucks is a camper rental service. Browse campers, filter by location, body type, engine and transmission, and book your campervan online.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <Providers>
          <Suspense fallback={<HeaderFallback />}>
            <Header />
          </Suspense>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
