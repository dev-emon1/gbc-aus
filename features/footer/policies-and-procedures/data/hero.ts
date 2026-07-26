import { PageHeroData } from "@/components/shared/sections/page-hero";

export const POLICIES_HERO: PageHeroData = {
  badge: "Student Resources",

  title: "Policies & Procedures",

  description:
    "Browse official college policies, procedures and important student regulations to stay informed throughout your academic journey.",

  backgroundImage: "/images/banners/policies-banner.webp",

  breadcrumbs: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Policies & Procedures",
    },
  ],

  metadata: [
    {
      label: "Official Policies",
      color: "#D84D95",
    },
    {
      label: "Student Guidelines",
      color: "#B7D531",
    },
  ],

  height: "md",
};
