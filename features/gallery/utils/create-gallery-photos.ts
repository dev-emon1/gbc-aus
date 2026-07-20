import { GalleryPhoto } from "../types";

function formatAlbumName(value: string) {
  return value
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function createGalleryPhotos(
  album: string,
  count: number,
  caption?: string,
): GalleryPhoto[] {
  const title = formatAlbumName(album);

  return Array.from({ length: count }, (_, index) => ({
    id: `${album}-${index + 1}`,
    image: `/images/gallery/${album}/${index + 1}.jpg`,
    alt: `${title} photo ${index + 1}`,
    caption:
      caption ?? `Memorable moments from ${title} at George Brown College.`,
  }));
}
