import { PROGRAMS, STUDY_AREAS } from ".";

export function getStudyAreaBySlug(slug: string) {
  return STUDY_AREAS.find((studyArea) => studyArea.slug === slug);
}

export function getProgramBySlug(slug: string) {
  return PROGRAMS.find((program) => program.slug === slug);
}
