import type { BookingPayload, BookingResponse } from '@/types/camper';

import { apiFetch } from './client';

export function createBookingRequest(
  camperId: string,
  payload: BookingPayload,
): Promise<BookingResponse> {
  return apiFetch<BookingResponse>(`/campers/${encodeURIComponent(camperId)}/booking-requests`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}
