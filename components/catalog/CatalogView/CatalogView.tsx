'use client';

import { useState } from 'react';
import { IoClose } from 'react-icons/io5';

import CamperList from '@/components/catalog/CamperList/CamperList';
import CatalogEmptyIllustration from '@/components/catalog/CatalogEmptyIllustration/CatalogEmptyIllustration';
import FilterSidebar from '@/components/catalog/FilterSidebar/FilterSidebar';
import LoadMoreButton from '@/components/catalog/LoadMoreButton/LoadMoreButton';
import Button from '@/components/ui/Button/Button';
import Loader from '@/components/ui/Loader/Loader';
import StatusMessage from '@/components/ui/StatusMessage/StatusMessage';
import { EMPTY_FILTERS } from '@/constants/catalog';
import { useCampersInfinite } from '@/lib/queries/useCampersInfinite';
import type { CatalogFilters } from '@/types/camper';

import styles from './CatalogView.module.css';

export default function CatalogView() {
  const [draftFilters, setDraftFilters] = useState<CatalogFilters>(EMPTY_FILTERS);
  const [appliedFilters, setAppliedFilters] = useState<CatalogFilters>(EMPTY_FILTERS);

  const {
    data,
    error,
    isPending,
    isError,
    isFetchNextPageError,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCampersInfinite(appliedFilters);

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];

  const handleSearch = () => {
    setAppliedFilters({ ...draftFilters, location: draftFilters.location.trim() });
  };

  const handleClearFilters = () => {
    setDraftFilters(EMPTY_FILTERS);
    setAppliedFilters(EMPTY_FILTERS);
  };

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) fetchNextPage({ cancelRefetch: false });
  };

  const renderResults = () => {
    if (isError && campers.length === 0) {
      return (
        <StatusMessage
          role="alert"
          title="Something went wrong"
          text={error.message || 'We could not load campers. Please try again.'}
          action={<Button onClick={() => refetch()}>Try again</Button>}
        />
      );
    }

    if (campers.length === 0) {
      return (
        <div className={styles.empty} role="status">
          <div className={styles.emptyContent}>
            <CatalogEmptyIllustration />
            <h2 className={styles.emptyTitle}>No campers found</h2>
            <p className={styles.emptyText}>
              We couldn&apos;t find any campers that match your filters. Try adjusting your search
              or clearing some filters.
            </p>
            <div className={styles.emptyActions}>
              <Button variant="secondary" onClick={handleClearFilters}>
                <IoClose size={20} aria-hidden="true" />
                Clear filters
              </Button>
              <Button onClick={handleClearFilters}>View all campers</Button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <>
        <CamperList campers={campers} />
        {isFetchNextPageError && (
          <p className={styles.loadMoreError} role="alert">
            Could not load more campers. Please try again.
          </p>
        )}
        {hasNextPage && <LoadMoreButton onClick={handleLoadMore} isLoading={isFetchingNextPage} />}
      </>
    );
  };

  return (
    <div className={`container ${styles.layout}`}>
      <FilterSidebar
        filters={draftFilters}
        onChange={setDraftFilters}
        onSearch={handleSearch}
        onClear={handleClearFilters}
      />
      <section
        className={`${styles.results} ${isPending ? styles.resultsLoading : ''}`}
        aria-label="Campers"
        aria-busy={isPending}
      >
        {!isPending && renderResults()}
      </section>
      {isPending && (
        <div className={styles.loadingOverlay}>
          <Loader variant="modal" />
        </div>
      )}
    </div>
  );
}
