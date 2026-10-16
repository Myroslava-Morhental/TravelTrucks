import type { FormEvent } from 'react';
import { BsMap } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

import FilterGroup from '@/components/catalog/FilterGroup/FilterGroup';
import Button from '@/components/ui/Button/Button';
import { ENGINE_OPTIONS, FORM_OPTIONS, TRANSMISSION_OPTIONS } from '@/constants/filters';
import type { CatalogFilters } from '@/types/camper';

import styles from './FilterSidebar.module.css';

interface FilterSidebarProps {
  filters: CatalogFilters;
  onChange: (filters: CatalogFilters) => void;
  onSearch: () => void;
  onClear: () => void;
}

export default function FilterSidebar({
  filters,
  onChange,
  onSearch,
  onClear,
}: FilterSidebarProps) {
  const updateFilter = <K extends keyof CatalogFilters>(key: K, value: CatalogFilters[K]) =>
    onChange({ ...filters, [key]: value });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <aside className={styles.sidebar} aria-label="Camper filters">
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.location}>
          <label htmlFor="location" className={styles.label}>
            Location
          </label>
          <div className={styles.inputWrapper}>
            <BsMap className={styles.inputIcon} size={20} aria-hidden="true" />
            <input
              id="location"
              name="location"
              type="text"
              placeholder="City"
              autoComplete="off"
              value={filters.location}
              onChange={(event) => updateFilter('location', event.target.value)}
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.filters}>
          <p className={styles.filtersTitle}>Filters</p>

          <FilterGroup
            name="form"
            legend="Camper form"
            options={FORM_OPTIONS}
            value={filters.form}
            onChange={(value) => updateFilter('form', value)}
          />
          <FilterGroup
            name="engine"
            legend="Engine"
            options={ENGINE_OPTIONS}
            value={filters.engine}
            onChange={(value) => updateFilter('engine', value)}
          />
          <FilterGroup
            name="transmission"
            legend="Transmission"
            options={TRANSMISSION_OPTIONS}
            value={filters.transmission}
            onChange={(value) => updateFilter('transmission', value)}
          />
        </div>

        <div className={styles.actions}>
          <Button type="submit" className={styles.actionButton}>
            Search
          </Button>
          <Button variant="secondary" onClick={onClear} className={styles.actionButton}>
            <IoClose size={20} aria-hidden="true" />
            Clear filters
          </Button>
        </div>
      </form>
    </aside>
  );
}
