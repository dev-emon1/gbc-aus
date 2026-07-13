import { Program } from "../../types";

export const ADVANCED_DIPLOMA: Program = {
  id: "bsb60320",

  code: "BSB60320",

  title: "Human Resource Management",

  slug: "advanced-diploma-human-resource-management",

  level: "Advanced Diploma",

  featured: false,

  heroImage: "/images/courses/human-resources/advanced-diploma.jpg",

  shortDescription:
    "This qualification provides you with some of the most critical business leadership skills in managing, leading and developing people. It considers how human resource specialists and line managers need to understand and actively participate in strategic HR planning that takes account of the industrial and legal environment in which they operate.",

  quickFacts: {
    duration: "78 Weeks",

    studyMode: "Face to Face & Virtual",

    hoursPerWeek: "20 hours",

    studyWeeks: "6 Terms of 10 Weeks",

    breakDuration: "After Each Term, 3 Weeks of Break",

    campus: "Sydney",

    intake: "Available",

    aqfLevel: "Advanced Diploma",

    cricosCode: "",
  },

  eligibility: {
    title: "Who Can Enrol?",

    description:
      "Entry to this qualification is limited to those who meet one of the following requirements:",

    requirements: [
      "Have completed one of the following qualifications: BSB50320 Diploma of Human Resource Management or BSB50618 Diploma of Human Resources Management (or a superseded equivalent version).",
      "OR",
      "Have four years equivalent full-time relevant work experience.",
      "Have completed an Australian School level Year 12, or equivalent, or be a mature student.",
      "Have a minimum three years of working experience at a middle management level.",
      "Be 18 years of age or over.",
      "Obtain a minimum IELTS 6.0 or equivalent. For exceptions, refer to the English Language Requirements Policy.",
      "Successfully completed the Pre-Training Review.",
    ],
  },

  studyOutcomes: {
    title: "Key Study Outcomes",

    description: [
      "Leadership and strategic direction in HR activities of an organisation.",
      "Human resource, strategic and marketing planning.",
      "Analysing, designing and executing HR judgements.",
      "Developing and implementing diversity policy.",
    ],

    pathways: [],
  },

  careerOutcomes: [
    {
      title: "Ideal For",

      description: [
        "Human Resources Manager",
        "Senior Human Resources Officer",
      ].join("\n"),
    },
  ],

  subjects: [
    {
      code: "BSBSTR602",
      title: "Develop organisational strategies",
    },
    {
      code: "BSBFIN601",
      title: "Manage organisational finances",
    },
    {
      code: "BSBLDR601",
      title: "Lead and manage organisational change",
    },
    {
      code: "BSBHRM611",
      title: "Contribute to organisational performance development",
    },
    {
      code: "BSBHRM614",
      title: "Contribute to strategic workforce planning",
    },
    {
      code: "BSBHRM612",
      title:
        "Contribute to the development of employee and industrial relations strategies",
    },
    {
      code: "BSBOPS504",
      title: "Manage business risk",
    },
    {
      code: "BSBCRT611",
      title: "Apply critical thinking for complex problem solving",
    },
    {
      code: "BSBLDR602",
      title: "Provide leadership across the organisation",
    },
    {
      code: "BSBSTR601",
      title: "Manage innovation and continuous improvement",
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
