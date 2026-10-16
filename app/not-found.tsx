import ButtonLink from '@/components/ui/Button/ButtonLink';
import StatusMessage from '@/components/ui/StatusMessage/StatusMessage';

export default function NotFound() {
  return (
    <StatusMessage
      title="Page not found"
      text="The page you are looking for does not exist."
      action={<ButtonLink href="/">Go home</ButtonLink>}
    />
  );
}
