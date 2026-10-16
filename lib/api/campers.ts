import { cache } from 'react';

import type { CamperDetails, CampersResponse, CatalogFilters, Review } from '@/types/camper';
import { buildCampersQuery } from '@/utils/buildCampersQuery';

import { apiFetch } from './client';

interface GetCampersParams {
  page: number;
  filters: CatalogFilters;
  signal?: AbortSignal;
}

export function getCampers({ page, filters, signal }: GetCampersParams): Promise<CampersResponse> {
  return apiFetch<CampersResponse>(`/campers?${buildCampersQuery(page, filters)}`, { signal });
}

export const getCamperById = cache((camperId: string): Promise<CamperDetails> =>
  apiFetch<CamperDetails>(`/campers/${encodeURIComponent(camperId)}`),
);

export function getCamperReviews(camperId: string): Promise<Review[]> {
  return apiFetch<Review[]>(`/campers/${encodeURIComponent(camperId)}/reviews`);
}
