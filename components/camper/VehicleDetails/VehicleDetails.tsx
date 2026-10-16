import CamperFeatures from '@/components/camper/CamperFeatures/CamperFeatures';
import { FORM_LABELS } from '@/constants/filters';
import type { CamperDetails } from '@/types/camper';
import { formatDimension } from '@/utils/format';

import styles from './VehicleDetails.module.css';

export default function VehicleDetails({ camper }: { camper: CamperDetails }) {
  const specRows = [
    { label: 'Form', value: FORM_LABELS[camper.form] },
    { label: 'Length', value: formatDimension(camper.length) },
    { label: 'Width', value: formatDimension(camper.width) },
    { label: 'Height', value: formatDimension(camper.height) },
    { label: 'Tank', value: formatDimension(camper.tank) },
    { label: 'Consumption', value: formatDimension(camper.consumption) },
  ];

  return (
    <section className={styles.section} aria-labelledby="vehicle-details-title">
      <h2 id="vehicle-details-title" className={styles.title}>
        Vehicle details
      </h2>

      <CamperFeatures
        transmission={camper.transmission}
        engine={camper.engine}
        form={camper.form}
        amenities={camper.amenities}
        showIcons={false}
      />

      <dl className={styles.list}>
        {specRows.map(({ label, value }) => (
          <div key={label} className={styles.row}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
