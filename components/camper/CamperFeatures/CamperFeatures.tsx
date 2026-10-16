import Badge from '@/components/ui/Badge/Badge';
import { AMENITIES } from '@/constants/amenities';
import {
  ENGINE_ICON,
  ENGINE_LABELS,
  FORM_ICON,
  FORM_LABELS,
  TRANSMISSION_ICON,
  TRANSMISSION_LABELS,
} from '@/constants/filters';
import type { CamperListItem } from '@/types/camper';

import styles from './CamperFeatures.module.css';

type CamperFeaturesProps = Pick<
  CamperListItem,
  'transmission' | 'engine' | 'form' | 'amenities'
> & {
  compact?: boolean;
  showIcons?: boolean;
};

export default function CamperFeatures({
  transmission,
  engine,
  form,
  amenities,
  compact = false,
  showIcons = true,
}: CamperFeaturesProps) {
  return (
    <ul className={styles.list} aria-label="Camper features">
      <li>
        <Badge icon={showIcons ? ENGINE_ICON : undefined} label={ENGINE_LABELS[engine]} />
      </li>
      <li>
        <Badge
          icon={showIcons ? TRANSMISSION_ICON : undefined}
          label={TRANSMISSION_LABELS[transmission]}
        />
      </li>
      <li>
        <Badge icon={showIcons ? FORM_ICON : undefined} label={FORM_LABELS[form]} />
      </li>
      {!compact &&
        amenities.map((amenity) => {
          const config = AMENITIES[amenity];
          if (!config) return null;
          return (
            <li key={amenity}>
              <Badge icon={showIcons ? config.icon : undefined} label={config.label} />
            </li>
          );
        })}
    </ul>
  );
}
