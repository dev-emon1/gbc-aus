import { CTAData } from "@/components/shared/sections/cta";
import { PageHeroData } from "@/components/shared/sections/page-hero";

import { OrientationContent } from "../types";

export const ORIENTATION_HERO: PageHeroData = {
  badge: "Student Life",

  title: "Orientation",

  description:
    "Begin your journey at George Brown College with confidence. Our orientation program introduces you to campus life, student services, academic expectations and everything you need for a successful start.",

  backgroundImage: "/images/student-life/orientation/hero.jpg",

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
      label: "Orientation",
    },
  ],

  metadata: [
    {
      label: "New Students",
      color: "#D84D95",
    },
    {
      label: "Campus Tour",
      color: "#B7D531",
    },
    {
      label: "Student Support",
      color: "#38BDF8",
    },
  ],

  height: "md",
};

export const ORIENTATION_CONTENT: OrientationContent = {
  welcome: {
    title: "Welcome to George Brown College",

    description:
      "Starting your studies in a new country is exciting. Our Orientation Program helps you settle into college life, understand campus facilities, meet our staff and prepare for your first day of classes.",

    image: "/images/student-life/orientation/welcome.jpg",
  },

  overview: {
    title: "What to Expect During Orientation",

    description:
      "Orientation provides everything you need to begin your studies with confidence.",

    items: [
      {
        title: "Welcome Session",

        description:
          "Meet our Student Services team and receive important information.",

        icon: "handshake",
      },

      {
        title: "Campus Tour",

        description: "Explore classrooms, student facilities and common areas.",

        icon: "map",
      },

      {
        title: "Student Portal",

        description: "Activate your student account and access online systems.",

        icon: "monitor",
      },

      {
        title: "Meet Your Trainers",

        description: "Get introduced to your trainers and academic staff.",

        icon: "users",
      },

      {
        title: "Student ID",

        description:
          "Collect your student ID card and essential campus information.",

        icon: "badge",
      },

      {
        title: "Course Information",

        description:
          "Understand your timetable, assessments and study requirements.",

        icon: "book-open",
      },
    ],
  },

  checklist: {
    title: "Before You Arrive",

    description:
      "Bring the following documents and information to ensure a smooth orientation process.",

    image: "/images/student-life/orientation/checklist.jpg",

    items: [
      "Passport",

      "Valid Student Visa",

      "Offer Letter",

      "Confirmation of Enrolment (CoE)",

      "OSHC Details",

      "Personal Identification",

      "Required Documents",

      "Completed Enrolment Forms",
    ],
  },

  essentials: {
    title: "Student Essentials",

    description:
      "During orientation we'll help you access the most important student services and systems.",

    items: [
      {
        title: "Student ID Card",

        description: "Collect your official GBC student identification.",
      },

      {
        title: "Student Portal",

        description: "Access your timetable, results and study details.",
      },

      {
        title: "Email Setup",

        description: "Activate your college email account.",
      },

      {
        title: "Learning Platform",

        description: "Access online learning resources and assessments.",
      },

      {
        title: "Campus Tour",

        description: "Become familiar with campus facilities.",
      },

      {
        title: "Support Services",

        description: "Meet Student Services and support staff.",
      },
    ],
  },

  timeline: {
    title: "Your First Week",

    description:
      "A simple guide to help you settle into your first week at George Brown College.",

    items: [
      {
        title: "Orientation Session",
      },

      {
        title: "Campus Tour",
      },

      {
        title: "Meet Your Trainers",
      },

      {
        title: "Portal & Email Setup",
      },

      {
        title: "Start Your Classes",
      },
    ],
  },
};

export const ORIENTATION_CTA: CTAData = {
  badge: "Orientation",

  title: "Ready to Begin Your Journey?",

  description:
    "Join our orientation program and start your studies with confidence. We're here to help you succeed from day one.",

  primaryButton: {
    label: "Contact Student Services",

    href: "/contact",
  },

  secondaryButton: {
    label: "Explore Courses",

    href: "/courses",
  },
};
