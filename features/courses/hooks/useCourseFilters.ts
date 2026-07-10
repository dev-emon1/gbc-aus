"use client";

import { useSearchParams } from "next/navigation";

export default function useCourseFilters() {
  const searchParams = useSearchParams();

  const search = searchParams.get("search") ?? "";

  const sort = searchParams.get("sort") ?? "featured";

  const level = searchParams.getAll("level");

  const campus = searchParams.getAll("campus");

  return {
    search,

    sort,

    level,

    campus,
  };
}
