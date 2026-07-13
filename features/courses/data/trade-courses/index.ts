import { StudyArea } from "../../types";

import { CERTIFICATE_III_WALL_AND_FLOOR_TILING } from "./certificate-iii-wall";
import { CERTIFICATE_III_CARPENTRY } from "./certificate-iii-carpentry";
import { CERTIFICATE_III_PAINTING_AND_DECORATING } from "./certificate-iii-painting";
import { CERTIFICATE_III_BRICKLAYING_AND_BLOCKLAYING } from "./certificate-iii-bricklaying";
import { DIPLOMA } from "./diploma";

export const TRADE_COURSES: StudyArea = {
  id: "trade-courses",

  title: "Trade Courses",

  slug: "trade-courses",

  image: "/images/courses/trade-courses.jpg",

  featured: true,

  overview: {
    title: "Build Practical Skills for a Successful Trade Career",

    description:
      "George Brown College Trade Courses provide nationally recognised qualifications designed to prepare students for rewarding careers in the Australian construction industry. Gain practical, hands-on experience through industry-focused training delivered by experienced professionals.",

    highlights: [
      "Nationally recognised trade qualifications",
      "Hands-on practical workshop training",
      "Industry-experienced trainers",
      "Excellent apprenticeship and employment pathways",
    ],
  },

  whyChoose: [
    {
      title: "Practical Training",

      description:
        "Develop real-world trade skills through practical workshop sessions and hands-on construction projects.",
    },

    {
      title: "Industry-Relevant Qualifications",

      description:
        "Study nationally recognised qualifications aligned with current Australian construction industry standards.",
    },

    {
      title: "Career Opportunities",

      description:
        "Prepare for employment across residential, commercial and industrial construction sectors.",
    },

    {
      title: "Pathway to Apprenticeships",

      description:
        "Build the knowledge and practical experience required for apprenticeships and long-term trade careers.",
    },
  ],

  careerPaths: [
    {
      title: "Qualified Tradesperson",

      description:
        "Work as a skilled tradesperson across residential and commercial construction projects.",
    },

    {
      title: "Construction Supervisor",

      description:
        "Progress into supervisory roles with experience and further qualifications.",
    },

    {
      title: "Building Contractor",

      description:
        "Develop the skills required to manage construction projects and operate your own business.",
    },

    {
      title: "Construction Manager",

      description:
        "Advance into leadership roles overseeing building projects and construction teams.",
    },
  ],

  cta: {
    title: "Start Your Trade Career Today",

    description:
      "Speak with our admissions team to choose the trade qualification that matches your career goals and begin your journey in Australia's construction industry.",
  },

  programs: [
    CERTIFICATE_III_WALL_AND_FLOOR_TILING,
    CERTIFICATE_III_CARPENTRY,
    CERTIFICATE_III_PAINTING_AND_DECORATING,
    CERTIFICATE_III_BRICKLAYING_AND_BLOCKLAYING,
    DIPLOMA,
  ],
};
