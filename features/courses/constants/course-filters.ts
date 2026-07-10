import { PROGRAMS, STUDY_AREAS } from "../data/index";

export const STUDY_AREA_OPTIONS = STUDY_AREAS;

export const LEVEL_OPTIONS = [
  ...new Set(PROGRAMS.map((program) => program.level)),
];

export const CAMPUS_OPTIONS = [
  ...new Set(PROGRAMS.map((program) => program.quickFacts.campus)),
];
