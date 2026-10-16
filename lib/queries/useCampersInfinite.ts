'use client';

import { useInfiniteQuery } from '@tanstack/react-query';

import { getCampers } from '@/lib/api/campers';
import type { CatalogFilters } from '@/types/camper';

import { camperKeys } from './keys';

export function useCampersInfinite(filters: CatalogFilters) {
  return useInfiniteQuery({
    queryKey: camperKeys.list(filters),
    queryFn: ({ pageParam, signal }) => getCampers({ page: pageParam, filters, signal }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
    // Dropping inactive filter sets ensures re-applying filters restarts from page 1
    // instead of restoring previously loaded pages.
    gcTime: 0,
  });
}
