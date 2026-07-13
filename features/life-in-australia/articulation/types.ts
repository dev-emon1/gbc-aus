export type HeroStat = {
  label: string;
  value: string;
};

export type Benefit = {
  title: string;
  description: string;
  icon: string;
};

export type ProgramPathway = {
  id: string;

  gbcProgram: string;

  universityProgram: string;

  qualification: string;

  duration: string;

  credit: string;

  intake: string;

  university: string;

  image: string;

  pdfPage: number;

  overview: string;

  entryRequirements: string[];

  creditDetails: string[];

  careerOutcomes: string[];

  brochure?: string;
};

export type ProgramDetails = {
  pathwayId: string;

  overview: string;

  entryRequirements: string[];

  creditDetails: string[];

  careerOutcomes: string[];
};

export type TimelineStep = {
  title: string;
  description: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type ArticulationContent = {
  hero: {
    title: string;
    subtitle: string;
    image: string;

    stats: HeroStat[];
  };

  introduction: {
    title: string;
    subtitle: string;
    description: string;
  };

  benefits: {
    title: string;
    subtitle: string;

    items: Benefit[];
  };

  pathways: {
    title: string;
    subtitle: string;

    programs: ProgramPathway[];
  };

  timeline: {
    title: string;

    steps: TimelineStep[];
  };

  faq: {
    title: string;

    items: FAQ[];
  };

  brochure: {
    title: string;

    description: string;

    pdf: string;
  };
};
