'use client';

import Image from 'next/image';
import { useMemo, useRef, useState, useSyncExternalStore } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import type { Swiper as SwiperInstance } from 'swiper';
import { Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { CamperImage } from '@/types/camper';

import 'swiper/css';

import styles from './CamperGallery.module.css';

interface CamperGalleryProps {
  images: CamperImage[];
  name: string;
}

const THUMBS_PER_VIEW = 4;
const emptySubscribe = () => () => {};

function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

function isUsableThumbs(swiper: SwiperInstance | null): swiper is SwiperInstance {
  return Boolean(swiper && !swiper.destroyed);
}

export default function CamperGallery({ images, name }: CamperGalleryProps) {
  const sortedImages = useMemo(
    () => [...images].sort((first, second) => first.order - second.order),
    [images],
  );

  if (sortedImages.length === 0) {
    return <div className={styles.placeholder}>No photos available</div>;
  }

  const galleryKey = sortedImages.map((image) => image.id).join('|');

  return <CamperGalleryView key={galleryKey} images={sortedImages} name={name} />;
}

function CamperGalleryView({ images, name }: { images: CamperImage[]; name: string }) {
  const isReady = useIsClient();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInstance | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const showArrows = images.length > 1;
  // One slide is visible, so a continuous loop needs at least two slides.
  const canLoopMain = images.length >= 2;
  // Four thumbnails are visible, so their loop needs at least five slides.
  const canLoopThumbs = images.length >= THUMBS_PER_VIEW + 1;

  const bindNavigation = (swiper: SwiperInstance) => {
    queueMicrotask(() => {
      if (swiper.destroyed || !showArrows) return;

      const prev = rootRef.current?.querySelector<HTMLButtonElement>(`.${styles.prev}`);
      const next = rootRef.current?.querySelector<HTMLButtonElement>(`.${styles.next}`);
      if (!prev || !next) return;

      const navigation = swiper.params.navigation;
      if (!navigation || typeof navigation === 'boolean') return;

      navigation.prevEl = prev;
      navigation.nextEl = next;
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    });
  };

  if (!isReady) {
    return <GalleryFrame images={images} name={name} activeIndex={0} showArrows={showArrows} />;
  }

  return (
    <div className={styles.gallery} ref={rootRef}>
      <div className={styles.main}>
        <Swiper
          className={styles.mainSwiper}
          modules={[Navigation, Thumbs]}
          loop={canLoopMain}
          loopPreventsSliding={false}
          navigation={
            showArrows
              ? {
                  prevEl: `.${styles.prev}`,
                  nextEl: `.${styles.next}`,
                  addIcons: false,
                }
              : false
          }
          thumbs={{ swiper: isUsableThumbs(thumbsSwiper) ? thumbsSwiper : null }}
          onSwiper={bindNavigation}
          onRealIndexChange={(swiper) => {
            const thumbButtons = swiper.thumbs?.swiper?.el?.querySelectorAll('button');
            thumbButtons?.forEach((button, index) => {
              button.setAttribute('aria-pressed', String(index === swiper.realIndex));
            });
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={image.id} className={styles.mainSlide}>
              <Image
                src={image.original}
                alt={`${name} — photo ${index + 1} of ${images.length}`}
                fill
                preload={index === 0}
                sizes="648px"
                className={styles.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {showArrows && (
          <>
            <ArrowButton direction="prev" />
            <ArrowButton direction="next" />
          </>
        )}
      </div>

      {showArrows && (
        <Swiper
          className={styles.thumbs}
          modules={[Thumbs]}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
          slidesPerView={THUMBS_PER_VIEW}
          spaceBetween={32}
          loop={canLoopThumbs}
        >
          {images.map((image, index) => (
            <SwiperSlide key={image.id} className={styles.thumbSlide}>
              <button
                type="button"
                className={styles.thumb}
                aria-label={`Show photo ${index + 1}`}
                aria-pressed={index === 0}
              >
                <Image src={image.thumb} alt="" fill sizes="150px" className={styles.image} />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

function ArrowButton({ direction }: { direction: 'prev' | 'next' }) {
  const isPrevious = direction === 'prev';
  const Icon = isPrevious ? IoChevronBack : IoChevronForward;

  return (
    <button
      type="button"
      className={`${styles.arrow} ${isPrevious ? styles.prev : styles.next}`}
      aria-label={isPrevious ? 'Previous photo' : 'Next photo'}
    >
      <Icon size={24} aria-hidden="true" />
    </button>
  );
}

function GalleryFrame({
  images,
  name,
  activeIndex,
  showArrows,
}: {
  images: CamperImage[];
  name: string;
  activeIndex: number;
  showArrows: boolean;
}) {
  const activeImage = images[activeIndex] ?? images[0];

  return (
    <div className={styles.gallery}>
      <div className={styles.main}>
        {activeImage && (
          <Image
            src={activeImage.original}
            alt={`${name} — photo ${activeIndex + 1} of ${images.length}`}
            fill
            preload
            sizes="648px"
            className={styles.image}
          />
        )}
        {showArrows && (
          <>
            <ArrowButton direction="prev" />
            <ArrowButton direction="next" />
          </>
        )}
      </div>
      {showArrows && (
        <div className={styles.thumbGrid}>
          {images.map((image, index) => {
            const isSelected = index === activeIndex;
            return (
              <button
                key={image.id}
                type="button"
                className={isSelected ? `${styles.thumb} ${styles.active}` : styles.thumb}
                aria-label={`Show photo ${index + 1}`}
                aria-pressed={isSelected}
              >
                <Image src={image.thumb} alt="" fill sizes="150px" className={styles.image} />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
