import Image from 'next/image';

import CamperFeatures from '@/components/camper/CamperFeatures/CamperFeatures';
import CamperMeta from '@/components/camper/CamperMeta/CamperMeta';
import ButtonLink from '@/components/ui/Button/ButtonLink';
import type { CamperListItem } from '@/types/camper';
import { formatPrice } from '@/utils/format';

import styles from './CamperCard.module.css';

export default function CamperCard({ camper }: { camper: CamperListItem }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={camper.coverImage}
          alt={camper.name}
          fill
          sizes="220px"
          className={styles.image}
        />
      </div>

      <div className={styles.info}>
        <div className={styles.header}>
          <div className={styles.titleRow}>
            <h2 className={styles.title}>{camper.name}</h2>
            <p className={styles.price}>{formatPrice(camper.price)}</p>
          </div>
          <CamperMeta
            rating={camper.rating}
            totalReviews={camper.totalReviews}
            location={camper.location}
          />
        </div>

        <p className={styles.description}>{camper.description}</p>

        <CamperFeatures
          transmission={camper.transmission}
          engine={camper.engine}
          form={camper.form}
          amenities={camper.amenities}
          compact
        />

        <ButtonLink
          href={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
          className={styles.showMore}
        >
          Show more
        </ButtonLink>
      </div>
    </article>
  );
}
