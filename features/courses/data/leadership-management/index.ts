import { StudyArea } from "../../types";

import { CERTIFICATE_IV } from "./certificate-iv";
import { DIPLOMA } from "./diploma";
import { ADVANCED_DIPLOMA } from "./advanced-diploma";

export const LEADERSHIP_AND_MANAGEMENT: StudyArea = {
  id: "leadership-and-management",

  title: "Leadership and Management",

  slug: "leadership-and-management",

  image: "/images/courses/leadership-and-management.jpg",

  featured: true,

  overview: {
    title: "Develop Leadership Skills for Modern Organisations",

    description:
      "Leadership and Management qualifications equip students with practical management, communication, strategic planning and decision-making skills required to lead teams and organisations across a wide range of industries.",

    highlights: [
      "Industry-recognised AQF qualifications",
      "Practical leadership and management training",
      "Strategic planning and business management skills",
      "Strong pathways to senior management careers",
    ],
  },

  whyChoose: [
    {
      title: "Industry-Relevant Curriculum",

      description:
        "Develop practical leadership, business operations and management skills aligned with current industry expectations.",
    },

    {
      title: "Experienced Trainers",

      description:
        "Learn from qualified professionals with extensive management and leadership experience across multiple industries.",
    },

    {
      title: "Career Progression",

      description:
        "Gain qualifications that prepare you for supervisory, management and executive leadership positions.",
    },

    {
      title: "Nationally Recognised Qualification",

      description:
        "Graduate with an AQF-recognised qualification respected by employers throughout Australia.",
    },
  ],

  careerPaths: [
    {
      title: "Team Leader",

      description:
        "Lead teams, coordinate daily operations and improve workplace performance.",
    },

    {
      title: "Operations Manager",

      description:
        "Manage business operations, resources and organisational performance.",
    },

    {
      title: "Business Manager",

      description:
        "Oversee departments, projects and strategic business initiatives.",
    },

    {
      title: "Executive Leader",

      description:
        "Progress into senior management, executive or director-level leadership roles.",
    },
  ],

  cta: {
    title: "Take the Next Step in Your Leadership Career",

    description:
      "Speak with our admissions team to find the leadership and management qualification that best matches your career goals.",
  },

  programs: [CERTIFICATE_IV, DIPLOMA, ADVANCED_DIPLOMA],
};
