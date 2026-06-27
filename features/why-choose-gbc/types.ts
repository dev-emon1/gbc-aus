import { PageHeroData } from "@/components/shared/sections/page-hero";

export interface WhyChooseFeatureItem {
  title: string;
  description: string;
}

export interface WhyChooseFeatureGroup {
  title: string;
  icon: string;
  image: string;
  items: WhyChooseFeatureItem[];
}

export interface WhyChooseIntroData {
  badge: string;
  title: string;
  description: string;
}

export interface WhyChooseCTAData {
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
}

export interface WhyChooseData {
  hero: PageHeroData;

  intro: WhyChooseIntroData;

  featureGroups: WhyChooseFeatureGroup[];

  cta: WhyChooseCTAData;
}
