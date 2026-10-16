import { BsStarFill } from 'react-icons/bs';

import styles from './StarRating.module.css';

const MAX_RATING = 5;
const STARS = Array.from({ length: MAX_RATING }, (_, index) => index + 1);

export default function StarRating({ rating }: { rating: number }) {
  const roundedRating = Math.round(rating);

  return (
    <div className={styles.stars} role="img" aria-label={`Rating ${rating} out of ${MAX_RATING}`}>
      {STARS.map((star) => (
        <BsStarFill
          key={star}
          className={star <= roundedRating ? styles.filled : styles.empty}
          size={16}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
