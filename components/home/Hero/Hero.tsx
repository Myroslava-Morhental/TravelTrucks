import Image from 'next/image';

import ButtonLink from '@/components/ui/Button/ButtonLink';

import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.media} aria-hidden="true">
        <div className={styles.mediaZoom}>
          <Image
            src="/hero.jpg"
            alt="Campers of your dreams"
            fill
            preload
            sizes="100vw"
            className={styles.background}
          />
        </div>
      </div>
      <div className={`container ${styles.content}`}>
        <h1 id="hero-title" className={styles.title}>
          Campers of your dreams
        </h1>
        <p className={styles.text}>You can find everything you want in our catalog</p>
        <ButtonLink href="/catalog" className={styles.cta}>
          View Now
        </ButtonLink>
      </div>
    </section>
  );
}
