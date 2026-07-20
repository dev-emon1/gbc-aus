import { CTAData } from "@/components/shared/sections/cta";
import { PageHeroData } from "@/components/shared/sections/page-hero";

import { AdvisorData } from "../types";

export const ADVISOR_HERO: PageHeroData = {
  badge: "Student Support",

  title: "Meet An Advisor",

  description:
    "Get personalised guidance from our experienced advisors. Whether you need help choosing a course, understanding entry requirements or planning your study journey, we are here to support you.",

  backgroundImage: "/images/advisor/hero.jpg",

  breadcrumbs: [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "Meet An Advisor",
    },
  ],

  metadata: [
    {
      label: "Course Guidance",
      color: "#D84D95",
    },

    {
      label: "Admission Support",
      color: "#B7D531",
    },

    {
      label: "Student Assistance",
      color: "#38BDF8",
    },
  ],

  height: "lg",
};

export const ADVISOR_CTA: CTAData = {
  badge: "Start Your Journey",

  title: "Need Help Choosing Your Course?",

  description:
    "Our advisors are ready to guide you through your study options and help you choose the right pathway.",

  primaryButton: {
    label: "Contact Advisor",
    href: "/contact",
  },

  secondaryButton: {
    label: "Explore Courses",
    href: "/courses",
  },
};

export const ADVISOR_BENEFITS = [
  {
    title: "Course Guidance",

    description:
      "Find the right course based on your interests, skills and future career goals.",

    icon: "book",
  },

  {
    title: "Admission Support",

    description:
      "Understand entry requirements, application steps and required documents.",

    icon: "file",
  },

  {
    title: "Career Pathways",

    description:
      "Explore study options that connect your education with future opportunities.",

    icon: "career",
  },

  {
    title: "International Support",

    description:
      "Receive guidance before arriving and throughout your student journey.",

    icon: "globe",
  },
] as const;

export const ADVISOR_HELP = {
  badge: "Personalised Guidance",

  title: "We Are Here To Support Your Study Journey",

  description:
    "From selecting the right course to understanding admission requirements, our advisors provide the guidance you need to make confident decisions.",

  image: "/images/advisor/help.jpg",

  items: [
    "Choosing the right course",
    "Understanding admission requirements",
    "Application guidance",
    "Study pathway planning",
    "Student support services",
    "Preparing for life in Australia",
  ],
};

export const ADVISOR_FORM = {
  badge: "Book A Consultation",

  title: "Talk With A George Brown College Advisor",

  description:
    "Complete the form below and our team will contact you with personalised guidance about courses, admission and study pathways.",

  fields: [
    {
      label: "Full Name",
      placeholder: "Enter your full name",
      type: "text",
    },

    {
      label: "Email Address",
      placeholder: "Enter your email address",
      type: "email",
    },

    {
      label: "Phone Number",
      placeholder: "Enter your phone number",
      type: "tel",
    },

    {
      label: "Interested Course",
      placeholder: "Select a course",
      type: "select",
    },
  ],
};

export const ADVISOR_FAQ = [
  {
    question: "What can an advisor help me with?",

    answer:
      "Our advisors can help you choose the right course, understand entry requirements, explore study pathways and answer questions about your application.",
  },

  {
    question: "Is advisor support available for international students?",

    answer:
      "Yes. Our advisors support international students with course selection, admission guidance and preparation before arriving in Australia.",
  },

  {
    question: "How long does it take to receive a response?",

    answer:
      "After submitting your enquiry, our team will review your request and contact you as soon as possible.",
  },

  {
    question: "Can I ask questions before applying?",

    answer:
      "Absolutely. You can speak with our advisors before applying to understand your options and choose the best pathway.",
  },

  {
    question: "Can advisors help me understand course options?",

    answer:
      "Yes. Our advisors can explain course structures, career outcomes and help you select a program aligned with your goals.",
  },
];
