import CamperCard from '@/components/catalog/CamperCard/CamperCard';
import type { CamperListItem } from '@/types/camper';

import styles from './CamperList.module.css';

export default function CamperList({ campers }: { campers: CamperListItem[] }) {
  return (
    <ul className={styles.list}>
      {campers.map((camper) => (
        <li key={camper.id}>
          <CamperCard camper={camper} />
        </li>
      ))}
    </ul>
  );
}
