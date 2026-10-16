export function formatLocation(location: string): string {
  const parts = location.split(',').map((part) => part.trim());
  if (parts.length !== 2 || parts.some((part) => !part)) return location;
  const [country, city] = parts;
  return `${city}, ${country}`;
}

export function formatPrice(price: number): string {
  return `€${price}`;
}

export function formatRatingLabel(rating: number, totalReviews: number): string {
  return `${rating}(${totalReviews} Reviews)`;
}

export function formatDimension(value: string): string {
  return value.replace(/^([\d.]+)\s*([a-z])/i, '$1 $2').replace(/\s*\/\s*/, ' / ');
}
