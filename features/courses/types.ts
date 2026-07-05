import { PageHeroData } from "@/components/shared/sections/page-hero/types";

export interface ProgramSubject {
  code: string;
  title: string;
}

export interface ProgramSection {
  title: string;
  content: string[];
}

export interface ProgramSidebar {
  brochure?: string;
  pathway?: string;

  courseCode: string;
  cricosCode: string;

  tuition: string;

  duration: string;

  studyMode: string;

  intake: string[];

  location: string;
}

export interface StudyProgram {
  id: string;

  title: string;

  slug: string;

  qualification:
    | "Certificate II"
    | "Certificate III"
    | "Certificate IV"
    | "Diploma"
    | "Advanced Diploma"
    | "General English";

  courseCode: string;

  cricosCode: string;

  featured?: boolean;

  overview: string;

  sidebar: ProgramSidebar;

  entryRequirements: ProgramSection;

  learningOutcomes: ProgramSection;

  careerOutcomes: ProgramSection;

  assessment: ProgramSection;

  fees: ProgramSection;

  subjects: ProgramSubject[];
}

export interface StudyArea {
  id: string;

  title: string;

  slug: string;

  image: string;

  description: string;

  featured?: boolean;

  programs: StudyProgram[];
}

export interface WhyChooseItem {
  title: string;

  description: string;
}

export interface CoursesData {
  hero: PageHeroData;

  studyAreas: {
    badge: string;

    title: string;

    description: string;

    items: StudyArea[];
  };

  whyChoose: {
    badge: string;

    title: string;

    description: string;

    items: WhyChooseItem[];
  };

  cta: {
    badge: string;

    title: string;

    description: string;

    primaryButton: {
      label: string;

      href: string;
    };

    secondaryButton: {
      label: string;

      href: string;
    };
  };
}
