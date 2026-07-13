export interface SupportService {
  title: string;

  description: string;

  icon: string;
}

export interface CounsellingItem {
  title: string;

  description: string;
}

export interface WellbeingItem {
  title: string;

  description: string;

  icon: string;
}

export interface ResourceItem {
  title: string;

  description: string;

  icon: string;

  href: string;
}

export interface SupportWelfareContent {
  introduction: {
    title: string;

    description: string;

    image: string;

    highlights: string[];
  };

  services: {
    title: string;

    description: string;

    items: SupportService[];
  };

  counselling: {
    title: string;

    description: string;

    image: string;

    items: CounsellingItem[];
  };

  wellbeing: {
    title: string;

    description: string;

    items: WellbeingItem[];
  };

  resources: {
    title: string;

    description: string;

    items: ResourceItem[];
  };

  help: {
    title: string;

    description: string;

    buttonLabel: string;

    buttonHref: string;
  };
}
