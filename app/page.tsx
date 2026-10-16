import type { Metadata } from 'next';

import Hero from '@/components/home/Hero/Hero';

export const metadata: Metadata = {
  title: { absolute: 'TravelTrucks — Campers of your dreams' },
  description: 'Rent a camper with TravelTrucks. Find the campervan of your dreams in our catalog.',
};

export default function HomePage() {
  return <Hero />;
}
