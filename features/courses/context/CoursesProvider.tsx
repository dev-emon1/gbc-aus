"use client";

import { createContext, useMemo } from "react";

import { PROGRAMS, STUDY_AREAS } from "../data/index";

type CoursesContextType = {
  studyAreas: typeof STUDY_AREAS;

  programs: typeof PROGRAMS;
};

export const CoursesContext = createContext<CoursesContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export default function CoursesProvider({ children }: Props) {
  const value = useMemo(
    () => ({
      studyAreas: STUDY_AREAS,

      programs: PROGRAMS,
    }),
    [],
  );

  return (
    <CoursesContext.Provider value={value}>{children}</CoursesContext.Provider>
  );
}
