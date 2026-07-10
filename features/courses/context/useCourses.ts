"use client";

import { useContext } from "react";

import { CoursesContext } from "./CoursesProvider";

export default function useCourses() {
  const context = useContext(CoursesContext);

  if (!context) {
    throw new Error("useCourses must be used inside CoursesProvider.");
  }

  return context;
}
