'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import toast from 'react-hot-toast';
import { MdErrorOutline } from 'react-icons/md';

import Button from '@/components/ui/Button/Button';
import { useBookingMutation } from '@/lib/queries/useBookingMutation';
import type { BookingPayload } from '@/types/camper';
import { validateBooking, type BookingErrors } from '@/utils/validateBooking';

import styles from './BookingForm.module.css';

const INITIAL_VALUES: BookingPayload = { name: '', email: '' };
const SUCCESS_FALLBACK = 'Your booking request has been sent. We will contact you soon.';
const ERROR_FALLBACK = 'Could not send your booking request. Please try again.';

const FIELDS: { name: keyof BookingPayload; label: string; type: string; autoComplete: string }[] =
  [
    { name: 'name', label: 'Name*', type: 'text', autoComplete: 'name' },
    { name: 'email', label: 'Email*', type: 'email', autoComplete: 'email' },
  ];

export default function BookingForm({ camperId }: { camperId: string }) {
  const [values, setValues] = useState<BookingPayload>(INITIAL_VALUES);
  const [errors, setErrors] = useState<BookingErrors>({});
  const { mutate, isPending } = useBookingMutation(camperId);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const field = event.target.name as keyof BookingPayload;
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isPending) return;

    const validationErrors = validateBooking(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    mutate(
      { name: values.name.trim(), email: values.email.trim() },
      {
        onSuccess: (response) => {
          toast.success(response.message || SUCCESS_FALLBACK);
          setValues(INITIAL_VALUES);
          setErrors({});
        },
        onError: (error) => {
          toast.error(error.message || ERROR_FALLBACK);
        },
      },
    );
  };

  return (
    <section className={styles.wrapper} aria-labelledby="booking-title">
      <div className={styles.header}>
        <h2 id="booking-title" className={styles.title}>
          Book your campervan now
        </h2>
        <p className={styles.text}>Stay connected! We are always ready to help you.</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        {FIELDS.map(({ name, label, type, autoComplete }) => {
          const error = errors[name];
          const errorId = `booking-${name}-error`;
          const inputClassName = error ? `${styles.input} ${styles.inputError}` : styles.input;
          return (
            <div key={name} className={styles.field}>
              <label
                htmlFor={`booking-${name}`}
                className={error ? styles.labelError : 'visually-hidden'}
              >
                {label}
              </label>
              <div className={styles.inputWrap}>
                <input
                  id={`booking-${name}`}
                  name={name}
                  type={type}
                  placeholder={label}
                  autoComplete={autoComplete}
                  value={values[name]}
                  onChange={handleChange}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? errorId : undefined}
                  className={inputClassName}
                />
                {error && (
                  <MdErrorOutline className={styles.inputIcon} size={20} aria-hidden="true" />
                )}
              </div>
              {error && (
                <p id={errorId} className={styles.error}>
                  {error}
                </p>
              )}
            </div>
          );
        })}

        <Button type="submit" disabled={isPending} aria-busy={isPending} className={styles.submit}>
          {isPending ? 'Sending...' : 'Send'}
        </Button>
      </form>
    </section>
  );
}
