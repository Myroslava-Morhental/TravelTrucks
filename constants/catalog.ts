import type { CatalogFilters } from '@/types/camper';

export const CAMPERS_PER_PAGE = 4;

export const EMPTY_FILTERS: CatalogFilters = {
  location: '',
  form: null,
  engine: null,
  transmission: null,
};
