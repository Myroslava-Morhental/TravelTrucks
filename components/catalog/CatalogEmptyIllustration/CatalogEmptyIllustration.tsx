import Image from 'next/image';

import styles from './CatalogEmptyIllustration.module.css';

export default function CatalogEmptyIllustration() {
  return (
    <Image
      className={styles.illustration}
      src="/no-results.svg"
      alt=""
      width={488}
      height={463}
      unoptimized
    />
  );
}
