import type { Metadata } from 'next';

import CatalogView from '@/components/catalog/CatalogView/CatalogView';

export const metadata: Metadata = {
  title: 'Catalog',
  description:
    'Browse TravelTrucks campers. Filter by location, camper form, engine and transmission type.',
};

export default function CatalogPage() {
  return (
    <>
      <h1 className="visually-hidden">Camper catalog</h1>
      <CatalogView />
    </>
  );
}
