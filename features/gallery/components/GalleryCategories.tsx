"use client";

import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { GALLERY_FILTERS } from "../data/gallery";

interface GalleryCategoriesProps {
  activeCategory: string;
  onChange: (category: string) => void;
}

export default function GalleryCategories({
  activeCategory,
  onChange,
}: GalleryCategoriesProps) {
  return (
    <section className="py-10 lg:py-14">
      <div className={CONTAINER}>
        <MotionReveal>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {GALLERY_FILTERS.map((filter) => {
              const active = activeCategory === filter.value;

              return (
                <button
                  key={filter.value}
                  onClick={() => onChange(filter.value)}
                  className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                    active
                      ? "bg-gradient-to-r from-[#D84D95] to-[#C23D85] text-white shadow-[0_12px_30px_rgba(216,77,149,.28)]"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-[#D84D95]/30 hover:bg-[#D84D95]/5"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
