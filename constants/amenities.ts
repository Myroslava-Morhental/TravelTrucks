import type { IconType } from 'react-icons';
import { BsCupHot, BsDroplet, BsFire, BsTv, BsUiRadios, BsWind } from 'react-icons/bs';
import { LuMicrowave, LuRefrigerator, LuShowerHead } from 'react-icons/lu';

import type { Amenity } from '@/types/camper';

export const AMENITIES: Record<Amenity, { label: string; icon: IconType }> = {
  ac: { label: 'AC', icon: BsWind },
  bathroom: { label: 'Bathroom', icon: LuShowerHead },
  kitchen: { label: 'Kitchen', icon: BsCupHot },
  tv: { label: 'TV', icon: BsTv },
  radio: { label: 'Radio', icon: BsUiRadios },
  refrigerator: { label: 'Refrigerator', icon: LuRefrigerator },
  microwave: { label: 'Microwave', icon: LuMicrowave },
  gas: { label: 'Gas', icon: BsFire },
  water: { label: 'Water', icon: BsDroplet },
};
