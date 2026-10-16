import type { CatalogFilters } from '@/types/camper';

export const camperKeys = {
  all: ['campers'] as const,
  list: (filters: CatalogFilters) => [...camperKeys.all, 'list', filters] as const,
};
