import { PageHeroData } from "@/components/shared/sections/page-hero/types";

export type CourseLevel =
  | "Certificate I"
  | "Certificate II"
  | "Certificate III"
  | "Certificate IV"
  | "Diploma"
  | "Advanced Diploma"
  | "General English"
  | "Graduate Diploma";

export type StudyMode =
  | "Face to Face"
  | "Virtual"
  | "Face to Face & Virtual"
  | "Face to Face & Online"
  | "Face to Face Classroom & Workshop Delivery";

export type StudyAreaOverview = {
  title: string;

  description: string;

  highlights: string[];
};

export type StudyArea = {
  id: string;

  title: string;

  slug: string;

  image: string;

  overview: StudyAreaOverview;

  featured?: boolean;

  programs: Program[];

  careerPaths?: CareerPath[];

  whyChoose?: StudyAreaFeature[];

  cta?: {
    title: string;
    description: string;
  };
};

export type Program = {
  id: string;

  title: string;

  slug: string;

  code: string;

  level: CourseLevel;

  shortDescription: string;

  heroImage: string;

  featured?: boolean;

  quickFacts: QuickFacts;

  eligibility: Eligibility;

  studyOutcomes: StudyOutcomes;

  careerOutcomes: CareerOutcome[];

  subjects: Subject[];

  assessments: string[];

  fee: FeeInformation;
};

export type QuickFacts = {
  duration: string;

  studyMode: StudyMode;

  hoursPerWeek: string;

  studyWeeks: string;

  breakDuration: string;

  campus: string;

  intake: string;

  aqfLevel: string;

  cricosCode?: string;
};

export type Eligibility = {
  title: string;

  description?: string;

  requirements: string[];
};

export type StudyOutcomes = {
  title: string;

  description: string[];

  pathways?: string[];
};

export type CareerOutcome = {
  title: string;

  description: string;
};

export type Subject = {
  code: string;

  title: string;
};

export type FeeInformation = {
  title: string;

  description: string;
};

export type FeaturedProgram = {
  id: string;

  title: string;

  slug: string;

  image: string;

  badge: string;

  code: string;

  level: string;

  duration: string;

  featured?: boolean;
};

export type WhyChooseItem = {
  title: string;

  description: string;
};

export type LearningPathItem = {
  title: string;

  description: string;
};

export type CoursesData = {
  hero: PageHeroData;

  featuredPrograms: {
    badge: string;

    title: string;

    description: string;

    button: {
      label: string;

      href: string;
    };

    items: FeaturedProgram[];
  };

  studyAreas: {
    badge: string;

    title: string;

    description: string;
  };

  whyChoose: {
    badge: string;

    title: string;

    description: string;

    items: WhyChooseItem[];
  };

  learningPathway: {
    badge: string;

    title: string;

    description: string;

    items: LearningPathItem[];
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
};

export type StudyAreaFeature = {
  title: string;

  description: string;
};

export type CareerPath = {
  title: string;

  description: string;
};
