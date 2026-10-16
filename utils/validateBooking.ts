import type { BookingPayload } from '@/types/camper';

export type BookingErrors = Partial<Record<keyof BookingPayload, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateBooking({ name, email }: BookingPayload): BookingErrors {
  const errors: BookingErrors = {};
  if (!name.trim()) errors.name = 'Please enter your name.';
  if (!EMAIL_PATTERN.test(email.trim())) errors.email = 'Please enter your email.';
  return errors;
}
