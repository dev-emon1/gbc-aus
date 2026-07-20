import { PageHeroData } from "@/components/shared/sections/page-hero/types";

export const APPLY_HERO: PageHeroData = {
  badge: "Admissions",

  title: "Apply to George Brown College",

  description:
    "Start your admission journey by selecting the appropriate application form. Complete the form carefully and submit it to our admissions team for assessment.",

  backgroundImage: "/images/heroes/apply-hero.jpg",

  breadcrumbs: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Apply Now",
    },
  ],

  metadata: [
    {
      label: "Nationally Recognised Qualifications",
      color: "#D84D95",
    },
    {
      label: "International Students Welcome",
      color: "#B7D531",
    },
    {
      label: "Simple Application Process",
      color: "#38BDF8",
    },
  ],

  primaryButton: {
    label: "Find Your Course",
    href: "/courses",
  },

  secondaryButton: {
    label: "Contact Admissions",
    href: "/contact",
  },

  height: "md",

  contentAlign: "left",

  showButtons: true,
};
