import { CAMPERS_PER_PAGE } from '@/constants/catalog';
import type { CatalogFilters } from '@/types/camper';

export function buildCampersQuery(page: number, filters: CatalogFilters): string {
  const params = new URLSearchParams({
    page: String(page),
    perPage: String(CAMPERS_PER_PAGE),
  });

  const location = filters.location.trim();
  if (location) params.set('location', location);
  if (filters.form) params.set('form', filters.form);
  if (filters.engine) params.set('engine', filters.engine);
  if (filters.transmission) params.set('transmission', filters.transmission);

  return params.toString();
}
