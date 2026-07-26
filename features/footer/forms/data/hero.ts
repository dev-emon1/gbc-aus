import { PageHeroData } from "@/components/shared/sections/page-hero";

export const FORMS_HERO: PageHeroData = {
  badge: "Student Resources",

  title: "Forms & Downloads",

  description:
    "Access official student forms, downloadable documents and essential resources for your studies.",

  backgroundImage: "/images/banners/forms-banner.webp",

  breadcrumbs: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Forms",
    },
  ],

  metadata: [
    {
      label: "Official Documents",
      color: "#D84D95",
    },
    {
      label: "PDF Downloads",
      color: "#B7D531",
    },
  ],

  height: "md",
};
