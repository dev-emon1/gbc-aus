import { StudyArea } from "../../types";
import { ADVANCED_DIPLOMA } from "./advanced-diploma";
import { CERTIFICATE_IV } from "./certificate-iv";
import { DIPLOMA } from "./diploma";

export const HUMAN_RESOURCES: StudyArea = {
  id: "human-resources",

  title: "Human Resources",

  slug: "human-resources",

  image: "/images/courses/human-resources.jpg",

  featured: true,

  overview: {
    title: "Build a Successful Career in Human Resources",

    description:
      "Our Human Resources qualifications provide students with the knowledge, practical skills, and leadership capabilities required to manage people, workplace relationships, recruitment, employee development, and strategic HR functions. Graduates are prepared for rewarding careers across a wide range of industries in Australia.",

    highlights: [
      "Nationally recognised qualifications",
      "Industry-focused HR curriculum",
      "Leadership and management development",
      "Strong career progression opportunities",
    ],
  },

  whyChoose: [
    {
      title: "Industry-Relevant Curriculum",

      description:
        "Develop practical human resource management skills aligned with current Australian workplace practices and legislation.",
    },

    {
      title: "Experienced Trainers",

      description:
        "Learn from qualified professionals with extensive experience in human resources, leadership, and organisational development.",
    },

    {
      title: "Leadership & Strategic Skills",

      description:
        "Build the confidence to lead teams, manage recruitment, employee relations, workforce planning, and organisational performance.",
    },

    {
      title: "Career & Study Pathways",

      description:
        "Progress from Certificate IV through Diploma and Advanced Diploma while expanding your career opportunities in HR and management.",
    },
  ],

  careerPaths: [
    {
      title: "Human Resources Officer",

      description:
        "Support recruitment, onboarding, employee relations, payroll, and day-to-day HR operations.",
    },

    {
      title: "Human Resources Advisor",

      description:
        "Provide strategic HR advice, manage workplace policies, and support organisational development initiatives.",
    },

    {
      title: "Human Resources Manager",

      description:
        "Lead HR teams, develop workforce strategies, and oversee employee performance and organisational culture.",
    },

    {
      title: "Recruitment & Talent Specialist",

      description:
        "Manage talent acquisition, workforce planning, recruitment, and employee development programs.",
    },
  ],

  cta: {
    title: "Ready to Build Your Career in Human Resources?",

    description:
      "Speak with our admissions team and choose the Human Resources qualification that best matches your career goals.",
  },

  programs: [CERTIFICATE_IV, DIPLOMA, ADVANCED_DIPLOMA],
};
