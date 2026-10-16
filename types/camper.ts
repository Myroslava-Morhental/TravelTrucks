export type CamperForm = 'alcove' | 'panel_van' | 'integrated' | 'semi_integrated';
export type Engine = 'diesel' | 'petrol' | 'hybrid' | 'electric';
export type Transmission = 'automatic' | 'manual';
export type Amenity =
  'ac' | 'bathroom' | 'kitchen' | 'tv' | 'radio' | 'refrigerator' | 'microwave' | 'gas' | 'water';

interface CamperBase {
  id: string;
  name: string;
  price: number;
  rating: number;
  totalReviews: number;
  location: string;
  description: string;
  form: CamperForm;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: Transmission;
  engine: Engine;
  // Swagger types details.amenities as a string; the live backend returns an array.
  amenities: Amenity[];
}

// `description` is returned by the live list endpoint but is missing from the Swagger list schema.
export interface CamperListItem extends CamperBase {
  coverImage: string;
}

export interface CamperImage {
  id: string;
  camperId: string;
  thumb: string;
  original: string;
  order: number;
}

export interface CamperDetails extends CamperBase {
  gallery: CamperImage[];
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  camperId: string;
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
  createdAt: string;
}

export interface CampersResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: CamperListItem[];
}

export interface CatalogFilters {
  location: string;
  form: CamperForm | null;
  engine: Engine | null;
  transmission: Transmission | null;
}

export interface BookingPayload {
  name: string;
  email: string;
}

export interface BookingResponse {
  message: string;
}

export interface ApiErrorBody {
  message: string | string[];
  error?: string;
  statusCode: number;
}
