import Button from '@/components/ui/Button/Button';

import styles from './LoadMoreButton.module.css';

interface LoadMoreButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

export default function LoadMoreButton({ onClick, isLoading }: LoadMoreButtonProps) {
  return (
    <div className={styles.wrapper}>
      <Button
        variant="secondary"
        onClick={onClick}
        disabled={isLoading}
        aria-busy={isLoading}
        className={styles.button}
      >
        {isLoading && <span className={styles.spinner} aria-hidden="true" />}
        {isLoading ? 'Loading...' : 'Load more'}
      </Button>
    </div>
  );
}
