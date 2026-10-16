import type { IconType } from 'react-icons';
import { BsDiagram3, BsFuelPump } from 'react-icons/bs';
import { IoCarOutline } from 'react-icons/io5';

import type { CamperForm, Engine, Transmission } from '@/types/camper';

export interface FilterOption<T extends string> {
  value: T;
  label: string;
}

export const FORM_OPTIONS: FilterOption<CamperForm>[] = [
  { value: 'alcove', label: 'Alcove' },
  { value: 'panel_van', label: 'Panel Van' },
  { value: 'integrated', label: 'Integrated' },
  { value: 'semi_integrated', label: 'Semi Integrated' },
];

export const ENGINE_OPTIONS: FilterOption<Engine>[] = [
  { value: 'diesel', label: 'Diesel' },
  { value: 'petrol', label: 'Petrol' },
  { value: 'hybrid', label: 'Hybrid' },
  { value: 'electric', label: 'Electric' },
];

export const TRANSMISSION_OPTIONS: FilterOption<Transmission>[] = [
  { value: 'automatic', label: 'Automatic' },
  { value: 'manual', label: 'Manual' },
];

export const FORM_LABELS = toLabelMap(FORM_OPTIONS);
export const ENGINE_LABELS = toLabelMap(ENGINE_OPTIONS);
export const TRANSMISSION_LABELS = toLabelMap(TRANSMISSION_OPTIONS);

export const FORM_ICON: IconType = IoCarOutline;
export const ENGINE_ICON: IconType = BsFuelPump;
export const TRANSMISSION_ICON: IconType = BsDiagram3;

function toLabelMap<T extends string>(options: FilterOption<T>[]): Record<T, string> {
  return Object.fromEntries(options.map(({ value, label }) => [value, label])) as Record<T, string>;
}
