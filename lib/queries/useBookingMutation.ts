'use client';

import { useMutation } from '@tanstack/react-query';

import { createBookingRequest } from '@/lib/api/booking';
import type { BookingPayload } from '@/types/camper';

export function useBookingMutation(camperId: string) {
  return useMutation({
    mutationFn: (payload: BookingPayload) => createBookingRequest(camperId, payload),
  });
}
