import type { IconType } from 'react-icons';

import styles from './Badge.module.css';

export default function Badge({ icon: Icon, label }: { icon?: IconType; label: string }) {
  return (
    <span className={styles.badge}>
      {Icon && <Icon size={20} aria-hidden="true" />}
      {label}
    </span>
  );
}
