import { LucideIcon } from "lucide-react";

export interface AgentHero {
  badge: string;
  title: string;
  description: string;
}

export interface PartnerBenefit {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface AgentType {
  id: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export interface AgentDocument {
  title: string;
  subtitle: string;
  pages: string;
  file: string;
}

export interface AgentCTA {
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
