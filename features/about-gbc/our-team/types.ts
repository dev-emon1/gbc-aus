import { CTAData } from "@/components/shared/sections/cta/types";
import { PageHeroData } from "@/components/shared/sections/page-hero/types";

export interface TeamMember {
  id: string;

  name: string;

  designation: string;

  image: string;

  shortBio: string;

  fullBio?: string;

  featuredQuote?: string;

  department?: string;

  experience?: string;

  specialization?: string;

  featured?: boolean;
}

export interface TeamIntro {
  badge: string;

  title: string;

  description: string;
}

export interface TeamData {
  hero: PageHeroData;

  intro: TeamIntro;

  members: TeamMember[];

  cta: CTAData;
}
