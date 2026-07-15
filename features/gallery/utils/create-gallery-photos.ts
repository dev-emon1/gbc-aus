import { GalleryPhoto } from "../types";

export function createGalleryPhotos(
  album: string,
  count: number,
  caption?: string,
): GalleryPhoto[] {
  return Array.from({ length: count }, (_, index) => ({
    id: `${album}-${index + 1}`,
    image: `/images/gallery/${album}/${index + 1}.jpg`,
    alt: `${album.replace(/-/g, " ")} photo ${index + 1}`,
    caption: caption ?? `Memorable moments from ${album.replace(/-/g, " ")}.`,
  }));
}
