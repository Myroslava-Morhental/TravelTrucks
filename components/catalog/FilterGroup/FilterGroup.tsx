import type { FilterOption } from '@/constants/filters';

import styles from './FilterGroup.module.css';

interface FilterGroupProps<T extends string> {
  name: string;
  legend: string;
  options: FilterOption<T>[];
  value: T | null;
  onChange: (value: T | null) => void;
}

export default function FilterGroup<T extends string>({
  name,
  legend,
  options,
  value,
  onChange,
}: FilterGroupProps<T>) {
  return (
    <fieldset className={styles.group}>
      <legend className={styles.legend}>{legend}</legend>
      <div className={styles.options}>
        {options.map((option) => {
          const checked = option.value === value;
          return (
            <label key={option.value} className={styles.option}>
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={checked}
                onChange={() => onChange(option.value)}
                onClick={() => {
                  if (checked) onChange(null);
                }}
                className="visually-hidden"
              />
              <span className={styles.radio} aria-hidden="true" />
              <span className={styles.label}>{option.label}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
