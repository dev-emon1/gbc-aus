import { CTAData } from "@/components/shared/sections/cta/types";
import { PageHeroData } from "@/components/shared/sections/page-hero/types";

export type CareerBenefitIcon =
  | "users"
  | "trending-up"
  | "graduation-cap"
  | "heart-handshake";

export interface CareerCommitment {
  title: string;

  description: string;
}

export interface CareerIntro {
  badge: string;

  title: string;

  description: string;

  commitment: CareerCommitment;
}

export interface CareerBenefitItem {
  title: string;

  description: string;

  icon: CareerBenefitIcon;

  highlights: string[];
}

export interface CareerBenefits {
  badge: string;

  title: string;

  description: string;

  items: CareerBenefitItem[];
}

export interface CareerCulture {
  badge: string;

  title: string;

  description: string;

  image: string;
}

export interface CareerProcessStep {
  title: string;

  description: string;

  icon: "file" | "search" | "interview" | "offer" | "welcome";
}

export interface CareerHiringProcess {
  badge: string;

  title: string;

  description: string;

  steps: CareerProcessStep[];
}

export interface CareerOpportunityButton {
  label: string;

  href: string;
}

export interface CareerOpportunities {
  badge: string;

  title: string;

  description: string;

  primaryButton: CareerOpportunityButton;
}

export interface CareerData {
  hero: PageHeroData;

  intro: CareerIntro;

  benefits: CareerBenefits;

  culture: CareerCulture;

  hiringProcess: CareerHiringProcess;

  opportunities: CareerOpportunities;

  cta: CTAData;

  idealCandidate: CareerIdealCandidate;
}

export interface CareerIdealCandidate {
  badge: string;

  title: string;

  description: string;

  items: string[];
}
