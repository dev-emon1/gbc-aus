import { Program } from "../../types";

export const DIPLOMA: Program = {
  id: "bsb50320",

  code: "BSB50320",

  title: "Human Resource Management",

  slug: "diploma-human-resource-management",

  level: "Diploma",

  featured: false,

  heroImage: "/images/courses/human-resources/diploma.jpg",

  shortDescription:
    "This qualification is ideal if you are actively seeking a career in human resources management or require a formal qualification to advance. It provides a theoretical knowledge base in human resources management and is complemented by practical assessments relevant to the field.",

  quickFacts: {
    duration: "52 Weeks",

    studyMode: "Face to Face & Virtual",

    hoursPerWeek: "20 hours",

    studyWeeks: "4 Terms of 10 Weeks",

    breakDuration: "After Each Term, 3 Weeks of Break",

    campus: "Sydney",

    intake: "Available",

    aqfLevel: "Diploma",

    cricosCode: "",
  },

  eligibility: {
    title: "Who Can Enrol?",

    description:
      "Entry to this qualification is limited to those who meet one of the following requirements:",

    requirements: [
      "Have completed the following units (or equivalent competencies): BSBHRM411 Administer performance development processes, BSBHRM412 Support employee and industrial relations, BSBHRM415 Coordinate recruitment and onboarding, and BSBHRM417 Support human resource functions and processes (or equivalent superseded units).",
      "OR",
      "Have two years equivalent full-time relevant work experience.",
      "Have completed an Australian School level Year 12, or equivalent, or be a mature student.",
      "Have a minimum one year of working experience at a supervisor level.",
      "Be 18 years of age or over.",
      "Obtain a minimum IELTS 6.0 or equivalent. For exceptions, refer to the English Language Requirements Policy.",
      "Successfully completed the Pre-Training Review.",
    ],
  },

  studyOutcomes: {
    title: "Key Study Outcomes",

    description: [
      "Managing workforce planning.",
      "Human resources management information systems.",
      "Employee relations.",
      "Remuneration and employee benefits.",
      "Managing separation and termination.",
    ],

    pathways: [],
  },

  careerOutcomes: [
    {
      title: "Ideal For",

      description: [
        "Human Resources Consultant",
        "Human Resources Advisor",
      ].join("\n"),
    },
  ],

  subjects: [
    {
      code: "BSBHRM524",
      title: "Coordinate workforce plan implementation",
    },
    {
      code: "BSBPMG430",
      title: "Undertake project work",
    },
    {
      code: "BSBOPS504",
      title: "Manage business risk",
    },
    {
      code: "BSBHRM522",
      title: "Manage employee and industrial relations",
    },
    {
      code: "BSBWHS411",
      title: "Implement and monitor WHS policies, procedures and programs",
    },
    {
      code: "BSBPEF501",
      title: "Manage personal and professional development",
    },
    {
      code: "BSBHRM525",
      title: "Manage recruitment and onboarding",
    },
    {
      code: "BSBHRM527",
      title: "Coordinate human resource functions and processes",
    },
    {
      code: "BSBHRM521",
      title: "Facilitate performance development processes",
    },
    {
      code: "BSBHRM523",
      title: "Coordinate the learning and development of teams and individuals",
    },
    {
      code: "BSBHRM530",
      title: "Coordinate rehabilitation and return to work programs",
    },
    {
      code: "BSBLDR523",
      title: "Lead and manage effective workplace relationships",
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
