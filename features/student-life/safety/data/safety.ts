import { CTAData } from "@/components/shared/sections/cta";
import { PageHeroData } from "@/components/shared/sections/page-hero";

import { SafetyContent } from "../types";

export const SAFETY_HERO: PageHeroData = {
  badge: "Student Life",

  title: "Safety",

  description:
    "Your safety and wellbeing are our priority. Learn how George Brown College helps create a safe learning environment and how you can stay safe throughout your studies in Australia.",

  backgroundImage: "/images/student-life/safety/hero.jpg",

  breadcrumbs: [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "Student Life",
      href: "/student-life",
    },

    {
      label: "Safety",
    },
  ],

  metadata: [
    {
      label: "Campus Safety",
      color: "#D84D95",
    },

    {
      label: "Emergency Support",
      color: "#B7D531",
    },

    {
      label: "Student Wellbeing",
      color: "#38BDF8",
    },
  ],

  height: "md",
};

export const SAFETY_CONTENT: SafetyContent = {
  intro: {
    title: "Creating a Safe Learning Environment",

    description:
      "George Brown College is committed to providing a welcoming, respectful and secure environment where every student feels safe, supported and valued throughout their learning journey.",

    image: "/images/student-life/safety/intro.jpg",
  },

  campusSafety: {
    title: "Campus Safety",

    description:
      "We work together to create a safe, inclusive and respectful learning environment for everyone.",

    items: [
      {
        title: "Campus Security",

        description:
          "Safe campus facilities and emergency support when required.",

        icon: "shield",
      },

      {
        title: "Student Identification",

        description: "Always carry your student ID while attending campus.",

        icon: "badge",
      },

      {
        title: "Incident Reporting",

        description: "Report unsafe situations or incidents immediately.",

        icon: "triangle-alert",
      },

      {
        title: "Emergency Assistance",

        description: "Know who to contact during emergencies.",

        icon: "phone-call",
      },

      {
        title: "Respectful Environment",

        description: "Treat everyone with respect and follow college policies.",

        icon: "handshake",
      },

      {
        title: "Safe Learning Spaces",

        description: "Help us maintain a secure and welcoming campus.",

        icon: "school",
      },
    ],
  },

  emergencyContacts: {
    title: "Emergency Contacts",

    description:
      "Keep these important numbers available while studying in Australia.",

    items: [
      {
        title: "Emergency",

        number: "000",

        description: "Police, Fire or Ambulance",

        icon: "siren",

        color: "#DC2626",
      },

      {
        title: "Police Assistance",

        number: "131 444",

        description: "Non-emergency police assistance",

        icon: "shield",

        color: "#2563EB",
      },

      {
        title: "Lifeline Australia",

        number: "13 11 14",

        description: "24-hour crisis support",

        icon: "heart",

        color: "#16A34A",
      },

      {
        title: "Student Services",

        number: "Campus Contact",

        description: "Support during study hours",

        icon: "users",

        color: "#D84D95",
      },
    ],
  },

  personalSafety: {
    title: "Personal Safety Tips",

    description: "Simple habits can help keep you safe both on and off campus.",

    items: [
      {
        title: "Protect Your Belongings",

        description: "Keep your valuables secure at all times.",

        icon: "briefcase",
      },

      {
        title: "Stay Alert",

        description: "Be aware of your surroundings when travelling.",

        icon: "eye",
      },

      {
        title: "Travel With Friends",

        description: "Whenever possible, avoid travelling alone at night.",

        icon: "users",
      },

      {
        title: "Save Emergency Numbers",

        description: "Store important contact numbers on your phone.",

        icon: "phone",
      },

      {
        title: "Follow Local Laws",

        description: "Understand and respect Australian laws and regulations.",

        icon: "scale",
      },

      {
        title: "Respect College Policies",

        description: "Follow campus rules to help create a safe environment.",

        icon: "clipboard-check",
      },
    ],
  },

  travelSafety: {
    title: "Travel Safely",

    description:
      "Whether travelling by train, bus or walking, following a few simple precautions can make your journey safer.",

    image: "/images/student-life/safety/travel.jpg",

    items: [
      {
        title: "Public Transport",

        description:
          "Plan your route and travel during busy hours where possible.",

        icon: "train",
      },

      {
        title: "Late Night Travel",

        description:
          "Stay in well-lit areas and use trusted transport services.",

        icon: "moon",
      },

      {
        title: "Ride Share",

        description: "Use licensed and reputable ride-share providers.",

        icon: "car",
      },

      {
        title: "Walking",

        description:
          "Remain aware of your surroundings and avoid distractions.",

        icon: "footprints",
      },
    ],
  },

  emergencyProcedure: {
    title: "Emergency Procedure",

    description:
      "Knowing what to do during an emergency helps keep everyone safe.",

    steps: [
      {
        title: "Stay Calm",

        description: "Assess the situation and remain calm.",
      },

      {
        title: "Call 000",

        description:
          "Contact emergency services if immediate assistance is required.",
      },

      {
        title: "Move to Safety",

        description: "Leave the area safely if there is immediate danger.",
      },

      {
        title: "Inform Student Services",

        description: "Notify the college as soon as it is safe to do so.",
      },

      {
        title: "Follow Instructions",

        description:
          "Listen carefully to emergency responders and college staff.",
      },
    ],
  },
};

export const SAFETY_CTA: CTAData = {
  badge: "Student Safety",

  title: "Your Safety Matters",

  description:
    "If you have questions about campus safety or need assistance, our Student Services team is here to help.",

  primaryButton: {
    label: "Contact Student Services",

    href: "/contact",
  },

  secondaryButton: {
    label: "Explore Student Life",

    href: "/student-life",
  },
};
