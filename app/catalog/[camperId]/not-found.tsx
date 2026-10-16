import ButtonLink from '@/components/ui/Button/ButtonLink';
import StatusMessage from '@/components/ui/StatusMessage/StatusMessage';

export default function CamperNotFound() {
  return (
    <StatusMessage
      title="Camper not found"
      text="The camper you are looking for does not exist or is no longer available."
      action={<ButtonLink href="/catalog">Back to catalog</ButtonLink>}
    />
  );
}
