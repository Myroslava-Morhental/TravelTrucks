import StarRating from '@/components/ui/StarRating/StarRating';
import type { Review } from '@/types/camper';

import styles from './ReviewList.module.css';

export default function ReviewList({ reviews }: { reviews: Review[] }) {
  return (
    <section className={styles.section} aria-labelledby="reviews-title">
      <h2 id="reviews-title" className={styles.title}>
        Reviews
      </h2>

      {reviews.length === 0 ? (
        <p className={styles.empty}>No reviews yet.</p>
      ) : (
        <ul className={styles.list}>
          {reviews.map((review) => (
            <li key={review.id} className={styles.item}>
              <div className={styles.person}>
                <span className={styles.avatar} aria-hidden="true">
                  {review.reviewer_name.charAt(0).toUpperCase()}
                </span>
                <div className={styles.personInfo}>
                  <h3 className={styles.name}>{review.reviewer_name}</h3>
                  <StarRating rating={review.reviewer_rating} />
                </div>
              </div>
              <p className={styles.comment}>{review.comment}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
