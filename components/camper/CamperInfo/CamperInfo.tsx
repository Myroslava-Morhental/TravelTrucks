import CamperMeta from '@/components/camper/CamperMeta/CamperMeta';
import type { CamperDetails } from '@/types/camper';
import { formatPrice } from '@/utils/format';

import styles from './CamperInfo.module.css';

export default function CamperInfo({ camper }: { camper: CamperDetails }) {
  return (
    <div className={styles.info}>
      <div className={styles.header}>
        <h1 className={styles.title}>{camper.name}</h1>
        <CamperMeta
          rating={camper.rating}
          totalReviews={camper.totalReviews}
          location={camper.location}
        />
        <p className={styles.price}>{formatPrice(camper.price)}</p>
      </div>
      <p className={styles.description}>{camper.description}</p>
    </div>
  );
}
