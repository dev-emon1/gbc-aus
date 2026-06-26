export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeroData {
  badge: string;
  title: string;
  description: string;

  backgroundImage: string;

  breadcrumbs: BreadcrumbItem[];

  metadata?: HeroMetaItem[];
}

export interface PageHeroProps {
  data: PageHeroData;
}

export interface HeroMetaItem {
  label: string;
  color?: string;
}
