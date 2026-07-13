export interface HandbookFeature {
  title: string;

  description: string;
}

export interface PolicyItem {
  title: string;

  description: string;

  icon: string;

  href: string;
}

export interface DownloadItem {
  title: string;

  description: string;

  file: string;

  icon: string;
}

export interface QuickLinkItem {
  title: string;

  description: string;

  href: string;

  icon: string;
}

export interface StudentGuideContent {
  overview: {
    title: string;

    description: string;

    image: string;

    highlights: string[];
  };

  handbook: {
    title: string;

    description: string;

    image: string;

    buttonLabel: string;

    buttonHref: string;

    features: HandbookFeature[];
  };

  policies: {
    title: string;

    description: string;

    items: PolicyItem[];
  };

  downloads: {
    title: string;

    description: string;

    items: DownloadItem[];
  };

  quickLinks: {
    title: string;

    description: string;

    items: QuickLinkItem[];
  };
}
