import { notFound } from "next/navigation";

import { CTASection } from "@/components/shared/sections/cta";

import { GALLERY_CONTENT, GALLERY_CTA } from "@/features/gallery/data/gallery";

import AlbumHero from "@/features/gallery/album/AlbumHero";
import AlbumInfo from "@/features/gallery/album/AlbumInfo";
import AlbumGallery from "@/features/gallery/album/AlbumGallery";
import AlbumNavigation from "@/features/gallery/album/AlbumNavigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function GalleryAlbumPage({ params }: Props) {
  const { slug } = await params;

  const album = GALLERY_CONTENT.albums.find((item) => item.slug === slug);

  if (!album) {
    notFound();
  }

  return (
    <>
      <AlbumHero album={album} />

      <AlbumInfo album={album} />

      <AlbumGallery album={album} />

      <AlbumNavigation currentSlug={slug} />

      <CTASection data={GALLERY_CTA} />
    </>
  );
}
