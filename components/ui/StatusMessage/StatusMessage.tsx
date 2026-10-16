import type { ReactNode } from 'react';

import styles from './StatusMessage.module.css';

interface StatusMessageProps {
  title: string;
  text?: string;
  action?: ReactNode;
  role?: 'status' | 'alert';
}

export default function StatusMessage({
  title,
  text,
  action,
  role = 'status',
}: StatusMessageProps) {
  return (
    <div className={styles.wrapper} role={role}>
      <h2 className={styles.title}>{title}</h2>
      {text && <p className={styles.text}>{text}</p>}
      {action && <div className={styles.action}>{action}</div>}
    </div>
  );
}
