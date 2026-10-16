import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import BookingForm from '@/components/camper/BookingForm/BookingForm';
import CamperGallery from '@/components/camper/CamperGallery/CamperGallery';
import CamperInfo from '@/components/camper/CamperInfo/CamperInfo';
import ReviewList from '@/components/camper/ReviewList/ReviewList';
import VehicleDetails from '@/components/camper/VehicleDetails/VehicleDetails';
import { getCamperById, getCamperReviews } from '@/lib/api/campers';
import { ApiError } from '@/lib/api/client';
import type { CamperDetails, Review } from '@/types/camper';

import styles from './page.module.css';

interface CamperPageProps {
  params: Promise<{ camperId: string }>;
}

function isNotFound(error: unknown): boolean {
  return error instanceof ApiError && error.status === 404;
}

export async function generateMetadata({ params }: CamperPageProps): Promise<Metadata> {
  const { camperId } = await params;

  try {
    const camper = await getCamperById(camperId);
    return {
      title: camper.name,
      description: camper.description.slice(0, 160),
    };
  } catch (error) {
    if (isNotFound(error)) return { title: 'Camper not found' };
    throw error;
  }
}

export default async function CamperPage({ params }: CamperPageProps) {
  const { camperId } = await params;

  let camper: CamperDetails;
  let reviews: Review[];
  try {
    [camper, reviews] = await Promise.all([getCamperById(camperId), getCamperReviews(camperId)]);
  } catch (error) {
    if (isNotFound(error)) notFound();
    throw error;
  }

  return (
    <div className={`container ${styles.page}`}>
      <section className={styles.top}>
        <CamperGallery images={camper.gallery} name={camper.name} />
        <div className={styles.summary}>
          <CamperInfo camper={camper} />
          <VehicleDetails camper={camper} />
        </div>
      </section>

      <div className={styles.bottom}>
        <div className={styles.reviews}>
          <ReviewList reviews={reviews} />
        </div>
        <div className={styles.booking}>
          <BookingForm camperId={camper.id} />
        </div>
      </div>
    </div>
  );
}
