import { AUTOMOTIVE_MANAGEMENT } from "./automotive";
import { BUSINESS } from "./business";
import { CIVIL_CONSTRUCTION } from "./civil-construction";
import { COMMERCIAL_COOKERY_HOSPITALITY_MANAGEMENT } from "./commercial-cookery";
import { GENERAL_ENGLISH } from "./general-english";
import { GLAMOUR_BEAUTY_ACADEMY } from "./glamour-beauty";
import { HEALTH_AND_CARE } from "./health-care";
import { HUMAN_RESOURCES } from "./human-resource";
import { INFORMATION_TECHNOLOGY } from "./information-technology";
import { LEADERSHIP_AND_MANAGEMENT } from "./leadership-management";
import { MANAGEMENT } from "./management";
import { MARKETING_AND_COMMUNICATIONS } from "./marketing-communications";
import { PROJECT_MANAGEMENT } from "./project-management/index.";
import { TRADE_COURSES } from "./trade-courses";

export const STUDY_AREAS = [
  AUTOMOTIVE_MANAGEMENT,
  BUSINESS,
  CIVIL_CONSTRUCTION,
  COMMERCIAL_COOKERY_HOSPITALITY_MANAGEMENT,
  GENERAL_ENGLISH,
  GLAMOUR_BEAUTY_ACADEMY,
  HEALTH_AND_CARE,
  HUMAN_RESOURCES,
  INFORMATION_TECHNOLOGY,
  LEADERSHIP_AND_MANAGEMENT,
  MANAGEMENT,
  MARKETING_AND_COMMUNICATIONS,
  PROJECT_MANAGEMENT,
  TRADE_COURSES,
];

export const PROGRAMS = STUDY_AREAS.flatMap((area) => area.programs);
