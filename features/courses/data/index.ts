import { AUTOMOTIVE_MANAGEMENT } from "./automotive";
import { BUSINESS } from "./business";
// পরে
// import { BUSINESS } from "./business";
// import { INFORMATION_TECHNOLOGY } from "./information-technology";

export const STUDY_AREAS = [
  AUTOMOTIVE_MANAGEMENT,
  BUSINESS,
  // INFORMATION_TECHNOLOGY,
];

export const PROGRAMS = STUDY_AREAS.flatMap((area) => area.programs);
