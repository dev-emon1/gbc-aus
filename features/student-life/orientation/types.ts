export interface OrientationOverviewItem {
  title: string;

  description: string;

  icon: string;
}

export interface ArrivalChecklist {
  title: string;

  description: string;

  image: string;

  items: string[];
}

export interface StudentEssential {
  title: string;

  description: string;
}

export interface TimelineItem {
  title: string;
}

export interface OrientationContent {
  welcome: {
    title: string;

    description: string;

    image: string;
  };

  overview: {
    title: string;

    description: string;

    items: OrientationOverviewItem[];
  };

  checklist: ArrivalChecklist;

  essentials: {
    title: string;

    description: string;

    items: StudentEssential[];
  };

  timeline: {
    title: string;

    description: string;

    items: TimelineItem[];
  };
}
