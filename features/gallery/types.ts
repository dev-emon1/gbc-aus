export interface GalleryPhoto {
  id: string;
  image: string;
  alt: string;
  caption?: string;
}

export type GalleryCategory = "Culture" | "Graduation" | "Sports" | "Community";

export interface GalleryFilter {
  label: string;
  value: GalleryCategory | "All Albums";
}

export interface GalleryAlbum {
  id: string;
  title: string;
  slug: string;
  year: number;
  category: GalleryCategory;
  description: string;
  coverImage: string;
  coverAlt: string;
  photosCount: number;
  featured?: boolean;
  location?: string;
  eventDate?: string;
  photos: GalleryPhoto[];
}

export interface GalleryStat {
  label: string;
  value: string;
}

export interface GalleryContent {
  stats: GalleryStat[];
  albums: GalleryAlbum[];
}
