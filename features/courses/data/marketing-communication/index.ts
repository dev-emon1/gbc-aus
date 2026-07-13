import { StudyArea } from "../../types";

import { CERTIFICATE_IV } from "./certificate-iv";
import { DIPLOMA } from "./diploma";
import { ADVANCED_DIPLOMA } from "./advanced-diploma";

export const MARKETING_AND_COMMUNICATIONS: StudyArea = {
  id: "marketing-and-communications",

  title: "Marketing and Communications",

  slug: "marketing-and-communications",

  image: "/images/courses/marketing-and-communications.jpg",

  featured: true,

  overview: {
    title: "Build a Successful Career in Marketing & Communications",

    description:
      "Marketing and Communications qualifications develop practical skills in marketing strategy, branding, digital marketing, advertising, public relations and leadership, preparing graduates for a wide range of marketing careers across Australia.",

    highlights: [
      "Industry-recognised AQF qualifications",
      "Marketing, branding & digital communication skills",
      "Practical project-based learning",
      "Excellent career progression pathways",
    ],
  },

  whyChoose: [
    {
      title: "Industry-Focused Curriculum",

      description:
        "Develop practical marketing, communication and business skills aligned with current industry standards.",
    },

    {
      title: "Experienced Trainers",

      description:
        "Learn from qualified professionals with real-world experience in marketing, branding and communications.",
    },

    {
      title: "Career Progression",

      description:
        "Progress from entry-level marketing roles to management and strategic leadership positions.",
    },

    {
      title: "Nationally Recognised Qualification",

      description:
        "Graduate with an AQF recognised qualification respected by employers throughout Australia.",
    },
  ],

  careerPaths: [
    {
      title: "Marketing Coordinator",

      description:
        "Support and coordinate marketing campaigns, branding and promotional activities.",
    },

    {
      title: "Marketing Manager",

      description:
        "Lead marketing strategy, campaign execution and business growth initiatives.",
    },

    {
      title: "Public Relations Manager",

      description:
        "Manage corporate communications, media relations and brand reputation.",
    },

    {
      title: "Marketing Director",

      description:
        "Provide strategic leadership for marketing, communications and organisational growth.",
    },
  ],

  cta: {
    title: "Launch Your Marketing Career Today",

    description:
      "Speak with our admissions team to choose the marketing and communications qualification that matches your career ambitions.",
  },

  programs: [CERTIFICATE_IV, DIPLOMA, ADVANCED_DIPLOMA],
};
