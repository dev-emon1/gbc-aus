export type HighlightCard = {
  title: string;
  description: string;
  icon: string;
};

export type StatCard = {
  label: string;
  value: string;
  icon: string;
};

export type Benefit = {
  title: string;
};

export type StudyAustraliaContent = {
  introduction: {
    heading: string;
    subtitle: string;
    highlights: HighlightCard[];
  };

  sydney: {
    title: string;
    description: string;
    image: string;
  };

  stats: StatCard[];

  benefits: {
    title: string;
    items: Benefit[];
    image: string;
  };

  explore: {
    title: string;

    subtitle: string;

    items: ExploreCard[];
  };
};

export type ExploreCard = {
  title: string;
  description: string;
  href: string;
  icon: string;
};
