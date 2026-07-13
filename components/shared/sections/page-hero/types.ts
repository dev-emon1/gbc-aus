export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeroData {
  badge?: string;

  title: string;

  description: string;

  backgroundImage: string;

  breadcrumbs: BreadcrumbItem[];

  metadata?: HeroMetaItem[];

  member?: number;

  primaryButton?: {
    label: string;
    href: string;
  };

  secondaryButton?: {
    label: string;
    href: string;
  };

  height?: "sm" | "md" | "lg";

  contentAlign?: "left" | "center";

  showButtons?: boolean;
}

export interface PageHeroProps {
  data: PageHeroData;
}

export interface HeroMetaItem {
  label: string;
  color?: string;
}
