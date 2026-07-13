import { Program } from "../../types";

export const DIPLOMA: Program = {
  id: "bsb50820",

  code: "BSB50820",

  title: "Project Management",

  slug: "diploma-project-management",

  level: "Diploma",

  featured: false,

  heroImage: "/images/courses/project-management/diploma.jpg",

  shortDescription:
    "This qualification gives you the necessary skills to advance your skills in project management, whether to find a new job, upskill in your current position or start a new career. It reflects the role of individuals who apply project management skills and knowledge to achieve project objectives.",

  quickFacts: {
    duration: "52 Weeks",

    studyMode: "Face to Face & Online",

    hoursPerWeek: "20 hours",

    studyWeeks: "4 Terms of 10 Weeks",

    breakDuration: "After Each Term, 3 Weeks Break",

    campus: "Sydney",

    intake: "Available",

    aqfLevel: "Diploma",

    cricosCode: "",
  },

  eligibility: {
    title: "Who Can Enrol?",

    description:
      "Although there are no pre-requisites for this qualification, students at George Brown College must meet the following entry requirements to obtain admission in this training product.",

    requirements: [
      "Have completed an Australian School Level Year 12, or equivalent, or mature students.",
      "Minimum one year of working experience at a supervisor level.",
      "Be 18 years of age or over.",
      "Obtain a minimum IELTS 6.0 or equivalent. For exceptions, refer to our English Language Requirements Policy on our website.",
      "Have successfully completed the Pre-Training Review.",
    ],
  },

  studyOutcomes: {
    title: "Key Study Outcomes",

    description: [
      "Learning how to manage projects.",
      "Initiate, plan, execute and evaluate your own work and others.",
      "Project time, quality, cost, human resources, information and communication.",
      "Procure new business projects.",
      "Integration of projects.",
      "Coordinate all elements of the project management lifecycle.",
    ],

    pathways: [],
  },

  careerOutcomes: [
    {
      title: "Ideal For",

      description: [
        "Project Contract Manager",
        "Project Leader/Team Leader",
        "Project Manager (Industry-specific)",
        "Project Vendor Manager",
      ].join("\n"),
    },
  ],

  subjects: [
    {
      code: "BSBPMG530",
      title: "Manage project scope",
    },
    {
      code: "BSBPMG531",
      title: "Manage project time",
    },
    {
      code: "BSBPMG532",
      title: "Manage project quality",
    },
    {
      code: "BSBPMG533",
      title: "Manage project cost",
    },
    {
      code: "BSBPMG534",
      title: "Manage project human resources",
    },
    {
      code: "BSBPMG535",
      title: "Manage project information and communication",
    },
    {
      code: "BSBPMG536",
      title: "Manage project risk",
    },
    {
      code: "BSBPMG540",
      title: "Manage project integration",
    },
    {
      code: "BSBTWK503",
      title: "Manage meetings",
    },
    {
      code: "BSBPEF501",
      title: "Manage personal and professional development",
    },
    {
      code: "BSBTWK502",
      title: "Manage team effectiveness",
    },
    {
      code: "BSBLDR522",
      title: "Manage people performance",
    },
  ],

  assessments: [
    "Interactive classroom activities",
    "Written reports",
    "Portfolio of evidence",
    "Case studies",
    "Project work",
    "Credit Transfer",
  ],

  fee: {
    title: "Fee Details",

    description: "Refer to your Offer Letter for fee details.",
  },
};
