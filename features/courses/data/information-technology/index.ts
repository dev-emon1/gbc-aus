import { StudyArea } from "../../types";
import { ADVANCED_DIPLOMA } from "./advanced-diploma";

export const INFORMATION_TECHNOLOGY: StudyArea = {
  id: "information-technology",

  title: "Information Technology",

  slug: "information-technology",

  image: "/images/courses/information-technology.jpg",

  featured: true,

  overview: {
    title: "Build a Future in Information Technology",

    description:
      "Our Information Technology qualification prepares students with advanced technical knowledge and practical skills in telecommunications, network engineering, cyber security, business analysis, and ICT project management. Students graduate ready to work in a rapidly evolving digital industry across Australia and internationally.",

    highlights: [
      "Nationally recognised qualification",
      "Advanced cyber security & networking skills",
      "Industry-focused practical learning",
      "Strong career opportunities in ICT",
    ],
  },

  whyChoose: [
    {
      title: "Industry-Relevant Curriculum",

      description:
        "Develop advanced ICT skills aligned with current industry standards in networking, cyber security, cloud technologies, and telecommunications.",
    },

    {
      title: "Experienced Trainers",

      description:
        "Learn from qualified ICT professionals with extensive industry experience across networking, cyber security, and enterprise systems.",
    },

    {
      title: "Advanced Technical Skills",

      description:
        "Build expertise in cyber security, network engineering, project management, risk assessment, and enterprise ICT solutions.",
    },

    {
      title: "Career-Ready Qualification",

      description:
        "Graduate with an AQF recognised qualification that prepares you for leadership and specialist roles across the ICT industry.",
    },
  ],

  careerPaths: [
    {
      title: "Cyber Security Specialist",

      description:
        "Protect enterprise systems, assess cyber risks, and implement modern security solutions.",
    },

    {
      title: "Network Engineer",

      description:
        "Design, implement, and manage enterprise telecommunications and network infrastructure.",
    },

    {
      title: "ICT Project Manager",

      description:
        "Lead ICT projects, manage teams, and deliver business technology solutions successfully.",
    },

    {
      title: "Enterprise Solutions Consultant",

      description:
        "Develop enterprise ICT strategies, business solutions, and digital transformation initiatives.",
    },
  ],

  cta: {
    title: "Ready to Build Your ICT Career?",

    description:
      "Speak with our admissions team and choose the Information Technology qualification that matches your career goals.",
  },

  programs: [ADVANCED_DIPLOMA],
};
