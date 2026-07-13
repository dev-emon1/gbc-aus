import { StudyArea } from "../../types";

import { DIPLOMA } from "./diploma";

export const PROJECT_MANAGEMENT: StudyArea = {
  id: "project-management",

  title: "Project Management",

  slug: "project-management",

  image: "/images/courses/project-management.jpg",

  featured: true,

  overview: {
    title: "Build Your Career in Project Management",

    description:
      "Project Management qualifications provide practical skills in planning, scheduling, budgeting, risk management and team leadership, preparing graduates to successfully manage projects across a wide range of industries.",

    highlights: [
      "Industry-recognised AQF qualification",
      "Practical project management skills",
      "Leadership & communication development",
      "Excellent career progression opportunities",
    ],
  },

  whyChoose: [
    {
      title: "Industry-Relevant Training",

      description:
        "Develop practical project management skills aligned with current industry standards and employer expectations.",
    },

    {
      title: "Experienced Trainers",

      description:
        "Learn from experienced professionals with extensive knowledge in project planning, delivery and leadership.",
    },

    {
      title: "Career Advancement",

      description:
        "Prepare for supervisory and management roles across construction, IT, business and many other industries.",
    },

    {
      title: "Nationally Recognised Qualification",

      description:
        "Graduate with an AQF recognised qualification valued by employers throughout Australia.",
    },
  ],

  careerPaths: [
    {
      title: "Project Manager",

      description:
        "Plan, execute and successfully deliver projects across various industries.",
    },

    {
      title: "Project Coordinator",

      description:
        "Support project planning, scheduling, communication and resource management.",
    },

    {
      title: "Project Team Leader",

      description:
        "Lead project teams while ensuring timelines, quality and budgets are achieved.",
    },

    {
      title: "Project Contract Manager",

      description:
        "Manage project contracts, stakeholders and project delivery outcomes.",
    },
  ],

  cta: {
    title: "Start Your Project Management Career",

    description:
      "Speak with our admissions team to choose the right Project Management qualification for your career goals.",
  },

  programs: [DIPLOMA],
};
