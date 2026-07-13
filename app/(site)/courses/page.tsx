"use client";

import { useMemo, useState } from "react";

import { CourseHero } from "@/features/courses/components";
import { StudyAreaGrid } from "@/features/courses/components/grids";
import { CoursesLayout } from "@/features/courses/components/layouts";
import { CourseSidebar } from "@/features/courses/components/sidebar";
import { CourseTopbar } from "@/features/courses/components/topbar";
import { STUDY_AREAS } from "@/features/courses/data/index";
import { StudyArea } from "@/features/courses/types";
import { StudyAreaList } from "@/features/courses/components/lists";

export default function CoursesPage() {
  const [search, setSearch] = useState("");

  const [sortBy, setSortBy] = useState("featured");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filteredStudyAreas = useMemo(() => {
    let items: StudyArea[] = [...STUDY_AREAS];

    if (search.trim()) {
      const keyword = search.toLowerCase().trim();

      items = items.filter(
        (area) =>
          area.title.toLowerCase().includes(keyword) ||
          area.overview.description.toLowerCase().includes(keyword),
      );
    }

    switch (sortBy) {
      case "a-z":
        items.sort((a, b) => a.title.localeCompare(b.title));
        break;

      case "z-a":
        items.sort((a, b) => b.title.localeCompare(a.title));
        break;

      default:
        items.sort((a, b) => Number(b.featured) - Number(a.featured));
    }

    return items;
  }, [search, sortBy]);

  const handleResetFilters = () => {
    setSearch("");

    setSortBy("featured");
  };

  return (
    <>
      <CourseHero />

      <CoursesLayout
        topbar={
          <CourseTopbar
            total={filteredStudyAreas.length}
            sortBy={sortBy}
            onSortChange={setSortBy}
            view={view}
            onViewChange={setView}
          />
        }
        sidebar={
          <CourseSidebar
            search={search}
            onSearchChange={setSearch}
            onReset={handleResetFilters}
          />
        }
      >
        {view === "grid" ? (
          <StudyAreaGrid studyAreas={filteredStudyAreas} />
        ) : (
          <StudyAreaList studyAreas={filteredStudyAreas} />
        )}
      </CoursesLayout>
    </>
  );
}
