import { CTAData } from "@/components/shared/sections/cta";
import { PageHeroData } from "@/components/shared/sections/page-hero";

import { CostOfLivingContent } from "../types";

export const COST_OF_LIVING_HERO: PageHeroData = {
  badge: "Life In Australia",

  title: "Cost of Living",

  description:
    "Plan your student budget with confidence. Understand the typical living expenses in Australia, from accommodation and transport to food and entertainment.",

  backgroundImage: "/images/life-in-australia/cost-of-living-hero.jpg",

  height: "lg",

  breadcrumbs: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Life In Australia",
      href: "/life-in-australia",
    },
    {
      label: "Cost of Living",
    },
  ],

  metadata: [
    {
      label: "Student Budget Guide",
      color: "#D84D95",
    },
    {
      label: "Sydney, Australia",
      color: "#B7D531",
    },
  ],

  primaryButton: {
    label: "Explore Courses",
    href: "/courses",
  },

  secondaryButton: {
    label: "Meet an Advisor",
    href: "/meet-an-advisor",
  },
};

export const COST_OF_LIVING_CTA: CTAData = {
  badge: "Ready To Study?",

  title: "Start Your Australian Study Journey",

  description:
    "Explore our nationally recognised programs and take the next step toward studying and living in Australia.",

  primaryButton: {
    label: "Find Your Course",
    href: "/courses",
  },

  secondaryButton: {
    label: "Meet an Advisor",
    href: "/meet-an-advisor",
  },
};

export const COST_OF_LIVING_CONTENT: CostOfLivingContent = {
  hero: {
    title: "Cost of Living",

    subtitle:
      "Understanding your living expenses helps you prepare financially and enjoy a comfortable student life in Australia.",

    image: "/images/life-in-australia/cost-of-living-hero.jpg",

    stats: [
      {
        label: "Estimated Weekly Budget",
        value: "$450–750",
      },
      {
        label: "Student Friendly",
        value: "Sydney",
      },
      {
        label: "Currency",
        value: "AUD",
      },
      {
        label: "Work Rights",
        value: "48 hrs/FN",
      },
    ],
  },

  overview: {
    title: "Understanding Living Costs",

    subtitle:
      "Every student's lifestyle is different. Your actual expenses depend on accommodation, transportation, personal habits and entertainment choices.",

    items: [
      {
        title: "Accommodation",

        description:
          "Usually the largest weekly expense for international students.",

        icon: "house",
      },

      {
        title: "Food & Groceries",

        description: "Cooking at home is generally the most affordable option.",

        icon: "utensils",
      },

      {
        title: "Transport",

        description:
          "Sydney offers reliable public transport with student concessions where eligible.",

        icon: "bus",
      },

      {
        title: "Utilities",

        description:
          "Electricity, gas and water may be included depending on your accommodation.",

        icon: "bolt",
      },

      {
        title: "Internet & Mobile",

        description:
          "Affordable mobile and internet plans are widely available.",

        icon: "wifi",
      },

      {
        title: "Entertainment",

        description:
          "Budget for dining out, fitness, travel and weekend activities.",

        icon: "ticket",
      },
    ],
  },

  expenses: {
    title: "Estimated Student Living Expenses",

    subtitle:
      "The following figures are approximate weekly and monthly costs. Actual expenses depend on your lifestyle and accommodation choices.",

    items: [
      {
        title: "Accommodation",

        weekly: "$220 - $450",

        monthly: "$950 - $1,950",

        icon: "house",
      },

      {
        title: "Food & Groceries",

        weekly: "$80 - $150",

        monthly: "$350 - $650",

        icon: "utensils",
      },

      {
        title: "Transport",

        weekly: "$30 - $60",

        monthly: "$130 - $260",

        icon: "bus",
      },

      {
        title: "Utilities",

        weekly: "$25 - $60",

        monthly: "$110 - $260",

        icon: "bolt",
      },

      {
        title: "Internet & Mobile",

        weekly: "$15 - $35",

        monthly: "$65 - $150",

        icon: "wifi",
      },

      {
        title: "Entertainment",

        weekly: "$40 - $100",

        monthly: "$170 - $430",

        icon: "ticket",
      },
    ],
  },

  calculator: {
    title: "Monthly Budget Estimator",

    subtitle:
      "Choose your accommodation style to estimate your average weekly and monthly student budget.",

    options: [
      {
        id: "shared",

        title: "Shared Accommodation",

        accommodation: 260,
        food: 100,
        transport: 40,
        utilities: 35,
        internet: 20,
        entertainment: 60,
      },

      {
        id: "homestay",

        title: "Homestay",

        accommodation: 350,
        food: 40,
        transport: 40,
        utilities: 0,
        internet: 15,
        entertainment: 60,
      },

      {
        id: "studio",

        title: "Private Studio",

        accommodation: 470,
        food: 110,
        transport: 40,
        utilities: 55,
        internet: 25,
        entertainment: 80,
      },
    ],
  },

  tips: {
    title: "Money Saving Tips",

    subtitle:
      "Simple habits can significantly reduce your living expenses while studying in Australia.",

    items: [
      {
        title: "Cook Meals at Home",

        description:
          "Preparing your own meals is one of the easiest ways to reduce weekly expenses.",

        icon: "chef-hat",
      },

      {
        title: "Use Public Transport",

        description:
          "Take advantage of buses, trains and light rail instead of driving.",

        icon: "bus",
      },

      {
        title: "Student Discounts",

        description: "Many businesses offer exclusive discounts for students.",

        icon: "badge-percent",
      },

      {
        title: "Buy Second-hand",

        description:
          "Purchase furniture, books and household items through local marketplaces.",

        icon: "shopping-bag",
      },

      {
        title: "Free Community Events",

        description:
          "Explore free festivals, museums and local events around Sydney.",

        icon: "calendar",
      },

      {
        title: "Track Your Budget",

        description:
          "Use budgeting apps to monitor spending and stay on track financially.",

        icon: "wallet",
      },
    ],
  },

  discounts: {
    title: "Student Discounts",

    subtitle:
      "International students can enjoy a wide range of discounts across transport, shopping, entertainment and technology.",

    items: [
      {
        title: "Public Transport",

        description: "Save on buses, trains and light rail where eligible.",

        icon: "bus",
      },

      {
        title: "Restaurants & Cafes",

        description: "Many venues offer student meal specials and discounts.",

        icon: "utensils",
      },

      {
        title: "Entertainment",

        description: "Discounts for cinemas, museums and attractions.",

        icon: "ticket",
      },

      {
        title: "Shopping",

        description: "Special offers at retail stores throughout the year.",

        icon: "shopping-bag",
      },

      {
        title: "Software",

        description:
          "Access discounted or free educational software and cloud services.",

        icon: "laptop",
      },

      {
        title: "Fitness",

        description:
          "Student memberships are available at many gyms and sports centres.",

        icon: "dumbbell",
      },
    ],
  },

  faq: {
    title: "Frequently Asked Questions",

    items: [
      {
        question: "How much does it cost to live in Sydney as a student?",

        answer:
          "Living expenses vary depending on accommodation and lifestyle, but students should budget approximately AUD $450–750 per week.",
      },

      {
        question: "What is the biggest living expense?",

        answer:
          "Accommodation is usually the largest weekly expense for most international students.",
      },

      {
        question: "Can I work while studying?",

        answer:
          "Eligible student visa holders can work according to current Australian Government work rights and visa conditions.",
      },

      {
        question: "Can I reduce my living costs?",

        answer:
          "Yes. Sharing accommodation, cooking at home and using public transport are excellent ways to reduce expenses.",
      },

      {
        question: "Are these costs guaranteed?",

        answer:
          "No. These are estimated averages only and actual expenses depend on your personal lifestyle and accommodation choices.",
      },
    ],
  },
};
