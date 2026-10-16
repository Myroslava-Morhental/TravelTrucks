import styles from './Loader.module.css';

interface LoaderProps {
  title?: string;
  text?: string;
  variant?: 'inline' | 'modal';
}

export default function Loader({
  title = 'Loading tracks...',
  text = 'Please wait while we fetch the best travel trucks for you',
  variant = 'inline',
}: LoaderProps) {
  return (
    <div
      className={variant === 'modal' ? styles.modal : styles.loader}
      role="status"
      aria-live="polite"
    >
      <span className={styles.spinner} aria-hidden="true" />
      <p className={styles.title}>{title}</p>
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
}
