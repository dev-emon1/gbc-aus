"use client";

import { useState } from "react";

import CTASection from "@/components/shared/sections/cta/CTASection";
import PageHero from "@/components/shared/sections/page-hero/PageHero";

import { GALLERY_CTA, GALLERY_HERO } from "@/features/gallery/data/gallery";

import FeaturedAlbum from "@/features/gallery/components/FeaturedAlbum";
import GalleryCategories from "@/features/gallery/components/GalleryCategories";
import GalleryGrid from "@/features/gallery/components/GalleryGrid";
import GalleryStats from "@/features/gallery/components/GalleryStats";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All Albums");

  return (
    <>
      <PageHero data={GALLERY_HERO} />

      <GalleryStats />

      <FeaturedAlbum />

      <GalleryCategories
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />

      <GalleryGrid activeCategory={activeCategory} />

      <CTASection data={GALLERY_CTA} />
    </>
  );
}
