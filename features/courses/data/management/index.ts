import { StudyArea } from "../../types";

import { GRADUATE_DIPLOMA } from "./graduate-diploma";

export const MANAGEMENT: StudyArea = {
  id: "management",

  title: "Management",

  slug: "management",

  image: "/images/courses/management.jpg",

  featured: true,

  overview: {
    title: "Advance Your Career in Management",

    description:
      "Management qualifications prepare students with strategic leadership, organisational development, business planning and decision-making skills required to lead teams, manage change and drive organisational success across a wide range of industries.",

    highlights: [
      "AQF recognised graduate qualification",
      "Strategic leadership and management skills",
      "Organisational learning and capability development",
      "Career-focused industry outcomes",
    ],
  },

  whyChoose: [
    {
      title: "Leadership Development",

      description:
        "Build advanced leadership, strategic planning and organisational management skills required by modern businesses.",
    },

    {
      title: "Industry Experienced Trainers",

      description:
        "Learn from qualified professionals with practical leadership and management experience across multiple industries.",
    },

    {
      title: "Career Advancement",

      description:
        "Prepare for senior management, organisational development and leadership positions in Australia and internationally.",
    },

    {
      title: "Nationally Recognised Qualification",

      description:
        "Graduate with an AQF recognised qualification that supports professional growth and lifelong learning.",
    },
  ],

  careerPaths: [
    {
      title: "Career Development Manager",

      description:
        "Lead organisational learning and workforce capability development initiatives.",
    },

    {
      title: "RTO Manager",

      description:
        "Manage Registered Training Organisations and vocational education operations.",
    },

    {
      title: "RTO Education Advisor",

      description:
        "Provide educational leadership, compliance and strategic training advice.",
    },

    {
      title: "Learning & Development Manager",

      description:
        "Design and implement organisational learning strategies to improve workforce performance.",
    },
  ],

  cta: {
    title: "Take the Next Step in Your Management Career",

    description:
      "Speak with our admissions team to find the management qualification that best supports your leadership and career goals.",
  },

  programs: [GRADUATE_DIPLOMA],
};
