import { CTAData } from "@/components/shared/sections/cta";
import { PageHeroData } from "@/components/shared/sections/page-hero";

import { SupportWelfareContent } from "../types";

export const SUPPORT_WELFARE_HERO: PageHeroData = {
  badge: "Student Life",

  title: "Support & Welfare",

  description:
    "Your wellbeing is important to us. George Brown College provides confidential support, practical advice and student welfare services to help you succeed throughout your studies.",

  backgroundImage: "/images/student-life/support-welfare/hero.jpg",

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
      label: "Support & Welfare",
    },
  ],

  metadata: [
    {
      label: "Student Wellbeing",
      color: "#D84D95",
    },

    {
      label: "Confidential Support",
      color: "#B7D531",
    },

    {
      label: "International Students",
      color: "#38BDF8",
    },
  ],

  height: "md",
};

export const SUPPORT_WELFARE_CONTENT: SupportWelfareContent = {
  introduction: {
    title: "Supporting Your Wellbeing Every Step of the Way",

    description:
      "Studying in a new country is an exciting experience, but it can also bring new challenges. George Brown College offers a range of confidential welfare and support services to help students maintain their wellbeing, overcome difficulties and achieve academic success. Our friendly team is here to listen, provide guidance and connect you with the right services whenever you need assistance.",

    image: "/images/student-life/support-welfare/introduction.jpg",

    highlights: [
      "Confidential student support",

      "Friendly and inclusive environment",

      "International student assistance",

      "Professional guidance and referrals",
    ],
  },
  services: {
    title: "Student Support Services",

    description:
      "Our Student Welfare team provides practical support, guidance and referrals to help you overcome personal, academic and everyday challenges while studying in Australia.",

    items: [
      {
        title: "Student Counselling",

        description:
          "Confidential support for personal, emotional and study-related concerns.",

        icon: "messages-square",
      },

      {
        title: "Accommodation Advice",

        description:
          "Guidance on finding suitable accommodation and adjusting to independent living.",

        icon: "house",
      },

      {
        title: "Financial Assistance",

        description:
          "Information about financial support options and budgeting advice for students.",

        icon: "wallet",
      },

      {
        title: "International Student Support",

        description:
          "Specialised assistance to help international students settle into life in Australia.",

        icon: "globe",
      },

      {
        title: "Community Referrals",

        description:
          "Connections to trusted external organisations for specialised support services.",

        icon: "handshake",
      },

      {
        title: "Personal Wellbeing",

        description:
          "Support designed to promote healthy study-life balance and overall wellbeing.",

        icon: "heart-handshake",
      },
    ],
  },

  counselling: {
    title: "Confidential Counselling & Guidance",

    description:
      "If you're feeling overwhelmed, experiencing personal challenges or simply need someone to talk to, our Student Welfare team is available to provide confidential guidance and connect you with the right support services.",

    image: "/images/student-life/support-welfare/counselling.jpg",

    items: [
      {
        title: "Confidential Conversations",

        description:
          "Speak privately with our Student Welfare team in a safe and supportive environment.",
      },

      {
        title: "Stress & Wellbeing Support",

        description:
          "Receive practical advice to help manage stress, study pressure and everyday challenges.",
      },

      {
        title: "Referral Services",

        description:
          "When appropriate, we'll connect you with professional health and community support services.",
      },

      {
        title: "Study-Life Balance",

        description:
          "Develop healthy habits that support your academic success and personal wellbeing.",
      },
    ],
  },
  wellbeing: {
    title: "Supporting Student Wellbeing",

    description:
      "Maintaining good physical, emotional and mental wellbeing is an important part of student success. We encourage students to seek support early and make use of the wellbeing services available throughout their studies.",

    items: [
      {
        title: "Mental Wellbeing",

        description:
          "Access support and guidance to maintain positive mental health while studying.",

        icon: "brain",
      },

      {
        title: "Healthy Lifestyle",

        description:
          "Build healthy habits that promote balance between study, work and personal life.",

        icon: "heart-pulse",
      },

      {
        title: "Safe & Inclusive Environment",

        description:
          "Study in a respectful community where diversity and inclusion are valued.",

        icon: "shield-check",
      },

      {
        title: "Student Success",

        description:
          "Develop resilience, confidence and the skills needed to achieve your goals.",

        icon: "graduation-cap",
      },
    ],
  },

  resources: {
    title: "Helpful Student Resources",

    description:
      "Explore useful resources and services that can support your wellbeing, safety and success during your time at George Brown College.",

    items: [
      {
        title: "Student Handbook",

        description:
          "Important information about college policies, procedures and student responsibilities.",

        icon: "book-open",

        href: "/student-guide",
      },

      {
        title: "Emergency Contacts",

        description:
          "Quick access to important emergency numbers and safety information.",

        icon: "phone-call",

        href: "/student-life/safety",
      },

      {
        title: "Campus Policies",

        description:
          "Learn about student rights, responsibilities and college expectations.",

        icon: "clipboard-list",

        href: "/student-life",
      },

      {
        title: "Community Services",

        description:
          "Access trusted external organisations providing specialised student support.",

        icon: "building-2",

        href: "#",
      },

      {
        title: "Health Information",

        description:
          "Useful health and wellbeing information for international students.",

        icon: "heart-handshake",

        href: "#",
      },

      {
        title: "International Student Guide",

        description:
          "Helpful information to support your transition to studying and living in Australia.",

        icon: "globe",

        href: "/student-life/orientation",
      },
    ],
  },
  help: {
    title: "Need Someone to Talk?",

    description:
      "You don't have to face challenges alone. Whether you're experiencing personal, academic or wellbeing concerns, our Student Welfare team is here to listen, provide guidance and connect you with the right support services.",

    buttonLabel: "Contact Student Services",

    buttonHref: "/contact",
  },
};

export const SUPPORT_WELFARE_CTA: CTAData = {
  badge: "Support & Welfare",

  title: "Helping You Feel Supported Every Step of the Way",

  description:
    "From confidential welfare support to practical advice and student wellbeing services, George Brown College is committed to helping you succeed both academically and personally.",

  primaryButton: {
    label: "Contact Student Services",

    href: "/contact",
  },

  secondaryButton: {
    label: "Explore Student Life",

    href: "/student-life",
  },
};
