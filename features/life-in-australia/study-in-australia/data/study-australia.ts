import { PageHeroData } from "@/components/shared/sections/page-hero";
import { CTAData } from "@/components/shared/sections/cta";
import { StudyAustraliaContent } from "../types";

export const STUDY_HERO: PageHeroData = {
  badge: "Life In Australia",

  title: "Study In Australia",

  description:
    "Experience world-class vocational education, multicultural communities and exciting career opportunities in one of the world's most liveable countries.",

  backgroundImage: "/images/life-in-australia/study-hero.jpg",

  height: "lg",

  breadcrumbs: [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "Study In Australia",
    },
  ],

  metadata: [
    {
      label: "International Education",
      color: "#D84D95",
    },

    {
      label: "Sydney, Australia",
      color: "#B7D531",
    },

    {
      label: "Vocational Training",
      color: "#FFFFFF",
    },
  ],

  primaryButton: {
    label: "Find Your Course",
    href: "/courses",
  },

  secondaryButton: {
    label: "Meet an Advisor",
    href: "/meet-an-advisor",
  },
};

export const STUDY_AUSTRALIA_CONTENT: StudyAustraliaContent = {
  introduction: {
    heading: "Study In The Lucky Country",

    subtitle:
      "Australia combines internationally recognised education with an outstanding lifestyle, making it one of the world's favourite destinations for international students.",

    highlights: [
      {
        title: "Multicultural Community",

        description:
          "Study alongside students from around the world while enjoying a welcoming, diverse and inclusive society.",

        icon: "globe",
      },

      {
        title: "Natural Wonders",

        description:
          "From world-famous beaches and national parks to iconic landmarks, Australia offers unforgettable experiences beyond the classroom.",

        icon: "mountain",
      },

      {
        title: "Lifestyle & Experiences",

        description:
          "Enjoy a relaxed lifestyle, vibrant cities, exciting events, quality healthcare and endless opportunities to explore.",

        icon: "coffee",
      },
    ],
  },

  sydney: {
    title: "Discover Sydney",

    description:
      "Sydney is Australia's largest and most iconic city, offering world-class education, multicultural communities, career opportunities, stunning beaches and an exceptional quality of life.",

    image: "/images/life-in-australia/sydney.jpg",
  },

  stats: [
    {
      label: "Language",

      value: "English",

      icon: "languages",
    },

    {
      label: "Currency",

      value: "AUD",

      icon: "banknote",
    },

    {
      label: "Time Zone",

      value: "AEST",

      icon: "clock",
    },

    {
      label: "Climate",

      value: "Mild",

      icon: "sun",
    },

    {
      label: "Work Rights",

      value: "48 hrs/Fortnight",

      icon: "briefcase",
    },

    {
      label: "Education",

      value: "AQF",

      icon: "graduation-cap",
    },
  ],

  benefits: {
    title: "Life In Australia",

    image: "/images/life-in-australia/students.jpg",

    items: [
      {
        title: "World-class vocational education",
      },

      {
        title: "Multicultural and welcoming communities",
      },

      {
        title: "Safe and student-friendly cities",
      },

      {
        title: "Excellent public transport",
      },

      {
        title: "Beautiful beaches and outdoor lifestyle",
      },

      {
        title: "Internationally recognised qualifications",
      },

      {
        title: "Career opportunities while studying",
      },

      {
        title: "Outstanding quality of life",
      },
    ],
  },

  explore: {
    title: "Explore Australia",

    subtitle:
      "Everything you need to know before starting your journey in Australia.",

    items: [
      {
        title: "Articulation",

        description: "Find the right student articulation before arriving.",

        href: "/life-in-australia/articulation",

        icon: "house",
      },

      {
        title: "Cost Of Living",

        description: "Understand living expenses and budget planning.",

        href: "/life-in-australia/cost-of-living",

        icon: "wallet",
      },

      {
        title: "Getting Around Sydney",

        description: "Learn about public transport and commuting.",

        href: "/life-in-australia/getting-around-sydney",

        icon: "train",
      },

      {
        title: "Student Guide",

        description: "Policies, support services and useful information.",

        href: "/student-life/student-guide",

        icon: "book-open",
      },
    ],
  },
};

export const STUDY_CTA: CTAData = {
  badge: "Start Your Journey",

  title: "Ready to Study in Australia?",

  description:
    "Take the next step towards your future. Explore our nationally recognised courses or speak with one of our friendly student advisors today.",

  primaryButton: {
    label: "Find Your Course",
    href: "/courses",
  },

  secondaryButton: {
    label: "Meet an Advisor",
    href: "/meet-an-advisor",
  },
};
