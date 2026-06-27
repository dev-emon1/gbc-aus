import { PageHeroData } from "@/components/shared/page-hero/types";

export interface OverviewStat {
  label: string;
  value: string;
}

export interface CollegeOverviewData {
  badge: string;
  title: string;
  paragraphs: string[];
  stats: OverviewStat[];
}

export interface AcknowledgementData {
  badge: string;
  title: string;
  paragraphs: string[];
}

export interface HistoryQuote {
  text: string;
  author: string;
  role?: string;
}

export interface HistoryData {
  badge: string;
  title: string;
  image: string;
  paragraphs: string[];
  quote: HistoryQuote;
}

export interface WhatWeDoItem {
  title: string;
  description: string;
  image: string;
  href?: string;
}

export interface WhatWeDoData {
  badge: string;
  title: string;
  description: string;
  items: WhatWeDoItem[];
}

export interface VisionMissionCard {
  title: string;
  description: string | string[];
}

export interface VisionMissionData {
  badge: string;
  title: string;
  description: string;
  vision: VisionMissionCard;
  mission: VisionMissionCard;
}

export interface AboutCTAData {
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

export interface AboutData {
  hero: PageHeroData;
  overview: CollegeOverviewData;
  acknowledgement: AcknowledgementData;
  history: HistoryData;
  whatWeDo: WhatWeDoData;
  visionMission: VisionMissionData;
  cta: AboutCTAData;
}
