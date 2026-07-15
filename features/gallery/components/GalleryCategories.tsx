"use client";

import { useState } from "react";

import { MotionReveal } from "@/components/shared/animations";

import { CONTAINER } from "@/constants/layout";

const categories = [
  "All Albums",
  "Culture",
  "Graduation",
  "Community",
  "Sports",
];

interface GalleryCategoriesProps {
  activeCategory: string;

  onChange: (category: string) => void;
}
export default function GalleryCategories({
  activeCategory,
  onChange,
}: GalleryCategoriesProps) {
  return (
    <section className="py-14">
      <div className={CONTAINER}>
        <MotionReveal>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onChange(category)}
                className={`rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-[#D84D95] to-[#C23D85] text-white shadow-lg"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-[#D84D95]/20 hover:bg-[#D84D95]/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
