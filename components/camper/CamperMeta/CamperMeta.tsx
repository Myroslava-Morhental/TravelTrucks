import { BsMap, BsStarFill } from 'react-icons/bs';

import { formatLocation, formatRatingLabel } from '@/utils/format';

import styles from './CamperMeta.module.css';

interface CamperMetaProps {
  rating: number;
  totalReviews: number;
  location: string;
}

export default function CamperMeta({ rating, totalReviews, location }: CamperMetaProps) {
  return (
    <div className={styles.meta}>
      <span className={styles.item}>
        <BsStarFill className={styles.star} size={16} aria-hidden="true" />
        {formatRatingLabel(rating, totalReviews)}
      </span>
      <span className={styles.item}>
        <BsMap size={16} aria-hidden="true" />
        {formatLocation(location)}
      </span>
    </div>
  );
}
