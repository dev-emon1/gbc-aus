"use client";

import { CONTAINER } from "@/constants/layout";

import { PROGRAM_SECTIONS } from "./constants";
import SectionNavigationItem from "./SectionNavigationItem";
import useActiveSection from "../../hooks/useActiveSection";

export default function SectionNavigation() {
  const active = useActiveSection(
    PROGRAM_SECTIONS.map((section) => section.id),
  );

  return (
    <section className="sticky top-20 z-40 border-y border-gray-200 bg-white/95 backdrop-blur-xl">
      <div className={CONTAINER}>
        <div className="overflow-x-auto py-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max min-w-full items-center justify-start gap-3 lg:w-full lg:justify-center">
            {PROGRAM_SECTIONS.map((section) => (
              <SectionNavigationItem
                key={section.id}
                label={section.label}
                href={`#${section.id}`}
                active={active === section.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
