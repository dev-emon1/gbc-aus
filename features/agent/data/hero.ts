import { PageHeroData } from "@/components/shared/sections/page-hero";

export const AGENT_HERO: PageHeroData = {
  badge: "Global Partnership",

  title: "Become an Authorised Education Agent",

  description:
    "Partner with George Brown College to support international students in achieving their education goals in Australia. Join our trusted network of education partners worldwide.",

  backgroundImage: "/images/hero/become-agent.jpg",

  breadcrumbs: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Become an Agent",
    },
  ],

  metadata: [
    {
      label: "Global Partnership",
      color: "#D84D95",
    },
    {
      label: "International Recruitment",
      color: "#B7D531",
    },
    {
      label: "Official Agent Network",
      color: "#D84D95",
    },
  ],

  primaryButton: {
    label: "Download Application Form",
    href: "/pdf/application-to-become-an-agent.pdf",
  },

  secondaryButton: {
    label: "Contact Us",
    href: "/contact",
  },

  height: "md",
};
