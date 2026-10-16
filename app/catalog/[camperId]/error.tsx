'use client';

import Button from '@/components/ui/Button/Button';
import StatusMessage from '@/components/ui/StatusMessage/StatusMessage';

export default function CamperError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <StatusMessage
      role="alert"
      title="Something went wrong"
      text="We could not load this camper. Please try again."
      action={<Button onClick={() => reset()}>Try again</Button>}
    />
  );
}
