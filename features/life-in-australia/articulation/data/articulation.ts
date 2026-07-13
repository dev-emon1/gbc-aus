import { PageHeroData } from "@/components/shared/sections/page-hero";
import { CTAData } from "@/components/shared/sections/cta";

import { ArticulationContent } from "../types";

export const ARTICULATION_HERO: PageHeroData = {
  badge: "Life In Australia",

  title: "Articulation Pathways",

  description:
    "Continue your education through our official university articulation pathways and graduate with internationally recognised qualifications.",

  backgroundImage: "/images/life-in-australia/articulation-hero.jpg",

  height: "lg",

  breadcrumbs: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Life In Australia",
      href: "/life-in-australia",
    },
    {
      label: "Articulation",
    },
  ],

  metadata: [
    {
      label: "George Brown College",
      color: "#D84D95",
    },
    {
      label: "Southern Cross University",
      color: "#B7D531",
    },
  ],

  primaryButton: {
    label: "Explore Courses",
    href: "/courses",
  },

  secondaryButton: {
    label: "Meet an Advisor",
    href: "/meet-an-advisor",
  },
};

export const ARTICULATION_CONTENT: ArticulationContent = {
  hero: {
    title: "Articulation Pathways",

    subtitle:
      "Graduate from George Brown College and continue towards a university qualification through our recognised articulation agreements.",

    image: "/images/life-in-australia/articulation-hero.jpg",

    stats: [
      {
        label: "University Partner",
        value: "Southern Cross University",
      },
      {
        label: "Available Pathways",
        value: "8+",
      },
      {
        label: "Qualification",
        value: "Bachelor & Master",
      },
      {
        label: "Study Destination",
        value: "Australia",
      },
    ],
  },

  introduction: {
    title: "What Is Articulation?",

    subtitle: "A smarter pathway from vocational education to university.",

    description:
      "George Brown College has established articulation agreements with Southern Cross University, allowing eligible graduates to receive credit towards selected Bachelor and Master's degrees. This provides students with an affordable and structured pathway into higher education while reducing both study duration and tuition costs.",
  },

  benefits: {
    title: "Why Choose An Articulation Pathway?",

    subtitle:
      "Study smarter with recognised university pathways designed for international students.",

    items: [
      {
        title: "Receive University Credit",

        description:
          "Reduce the number of subjects required at university through recognised credit transfer.",

        icon: "graduation-cap",
      },

      {
        title: "Save Time",

        description:
          "Complete your university qualification faster through advanced standing.",

        icon: "clock",
      },

      {
        title: "Lower Study Costs",

        description:
          "Reduce tuition expenses by completing part of your qualification at GBC.",

        icon: "wallet",
      },

      {
        title: "Globally Recognised Qualification",

        description:
          "Graduate with qualifications recognised both in Australia and internationally.",

        icon: "award",
      },

      {
        title: "Clear Education Pathway",

        description:
          "Progress confidently from vocational education to higher education.",

        icon: "route",
      },

      {
        title: "Career Opportunities",

        description:
          "Expand your employment opportunities with university-level qualifications.",

        icon: "briefcase",
      },
    ],
  },

  pathways: {
    title: "Available University Pathways",

    subtitle:
      "Choose from a range of articulation agreements across business, IT and management disciplines.",

    programs: [
      {
        id: "advanced-diploma-it",

        gbcProgram: "Advanced Diploma of Information Technology",

        universityProgram: "Bachelor of Information Technology",

        qualification: "Bachelor Degree",

        duration: "Refer to Official Pathway Guide",

        credit: "As Per SCU Articulation Agreement",

        intake: "Refer to Current Intake",

        university: "Southern Cross University",

        image: "/images/pathways/information-technology.jpg",

        pdfPage: 5,

        overview:
          "Continue your studies from the Advanced Diploma of Information Technology into the Bachelor of Information Technology through the official articulation agreement with Southern Cross University.",

        entryRequirements: [
          "Successful completion of the GBC qualification.",
          "Meet Southern Cross University admission requirements.",
          "English language requirements apply.",
        ],

        creditDetails: [
          "Credit assessment is completed by Southern Cross University.",
          "Eligible students may receive advanced standing.",
          "Credit awarded depends on completed units.",
        ],

        careerOutcomes: [
          "Software Developer",
          "Systems Administrator",
          "Network Engineer",
          "IT Support Specialist",
        ],

        brochure: "/documents/articulation-guide.pdf",
      },

      {
        id: "diploma-leadership",

        gbcProgram: "Diploma of Leadership & Management",

        universityProgram: "Bachelor of Business",

        qualification: "Bachelor Degree",

        duration: "Refer to Official Pathway Guide",

        credit: "As Per SCU Articulation Agreement",

        intake: "Refer to Current Intake",

        university: "Southern Cross University",

        image: "/images/pathways/leadership.jpg",

        pdfPage: 7,

        overview:
          "Progress from the Diploma of Leadership & Management into the Bachelor of Business through the official university pathway.",

        entryRequirements: [
          "Successful completion of the Diploma.",
          "Meet university admission requirements.",
          "English requirements apply.",
        ],

        creditDetails: [
          "Advanced standing available for eligible students.",
          "Credit is assessed by Southern Cross University.",
          "Conditions may apply.",
        ],

        careerOutcomes: [
          "Business Manager",
          "Operations Manager",
          "Team Leader",
          "Project Coordinator",
        ],

        brochure: "/documents/articulation-guide.pdf",
      },

      {
        id: "certificate-iv-hr",

        gbcProgram: "Certificate IV in Human Resource Management",

        universityProgram: "Bachelor of Business",

        qualification: "Bachelor Degree",

        duration: "Refer to Official Pathway Guide",

        credit: "As Per SCU Articulation Agreement",

        intake: "Refer to Current Intake",

        university: "Southern Cross University",

        image: "/images/pathways/human-resource.jpg",

        pdfPage: 10,

        overview:
          "Build a strong foundation in Human Resource Management before progressing into a Bachelor of Business.",

        entryRequirements: [
          "Successful completion of the qualification.",
          "Meet SCU admission requirements.",
          "English language requirements apply.",
        ],

        creditDetails: [
          "Credit transfer available where applicable.",
          "Assessment completed by Southern Cross University.",
        ],

        careerOutcomes: [
          "HR Assistant",
          "Recruitment Consultant",
          "Training Coordinator",
          "People & Culture Officer",
        ],

        brochure: "/documents/articulation-guide.pdf",
      },

      {
        id: "certificate-iv-leadership",

        gbcProgram: "Certificate IV in Leadership & Management",

        universityProgram: "Bachelor of Business",

        qualification: "Bachelor Degree",

        duration: "Refer to Official Pathway Guide",

        credit: "As Per SCU Articulation Agreement",

        intake: "Refer to Current Intake",

        university: "Southern Cross University",

        image: "/images/pathways/leadership-management.jpg",

        pdfPage: 11,

        overview:
          "Develop practical leadership skills before transitioning into university-level business studies.",

        entryRequirements: [
          "Successful completion of the qualification.",
          "Meet university admission requirements.",
        ],

        creditDetails: ["Credit is subject to university assessment."],

        careerOutcomes: [
          "Supervisor",
          "Office Manager",
          "Business Coordinator",
          "Operations Officer",
        ],

        brochure: "/documents/articulation-guide.pdf",
      },

      {
        id: "certificate-iv-marketing",

        gbcProgram: "Certificate IV in Marketing & Communication",

        universityProgram: "Bachelor of Business",

        qualification: "Bachelor Degree",

        duration: "Refer to Official Pathway Guide",

        credit: "As Per SCU Articulation Agreement",

        intake: "Refer to Current Intake",

        university: "Southern Cross University",

        image: "/images/pathways/marketing.jpg",

        pdfPage: 12,

        overview:
          "Start your marketing career with vocational education before progressing into university studies.",

        entryRequirements: [
          "Completion of the Certificate IV qualification.",
          "Meet SCU admission requirements.",
        ],

        creditDetails: [
          "Credit assessment completed by Southern Cross University.",
        ],

        careerOutcomes: [
          "Marketing Assistant",
          "Digital Marketing Coordinator",
          "Content Coordinator",
          "Sales Executive",
        ],

        brochure: "/documents/articulation-guide.pdf",
      },

      {
        id: "diploma-hr",

        gbcProgram: "Diploma of Human Resource Management",

        universityProgram: "Bachelor of Business",

        qualification: "Bachelor Degree",

        duration: "Refer to Official Pathway Guide",

        credit: "As Per SCU Articulation Agreement",

        intake: "Refer to Current Intake",

        university: "Southern Cross University",

        image: "/images/pathways/hr-management.jpg",

        pdfPage: 13,

        overview:
          "Advance your HR knowledge and continue towards a Bachelor of Business qualification.",

        entryRequirements: [
          "Successful completion of the Diploma.",
          "Meet university entry requirements.",
        ],

        creditDetails: ["Eligible students may receive advanced standing."],

        careerOutcomes: [
          "HR Officer",
          "Recruitment Consultant",
          "HR Coordinator",
          "Workforce Planner",
        ],

        brochure: "/documents/articulation-guide.pdf",
      },

      {
        id: "project-management",

        gbcProgram: "Diploma of Project Management",

        universityProgram: "Bachelor of Business",

        qualification: "Bachelor Degree",

        duration: "Refer to Official Pathway Guide",

        credit: "As Per SCU Articulation Agreement",

        intake: "Refer to Current Intake",

        university: "Southern Cross University",

        image: "/images/pathways/project-management.jpg",

        pdfPage: 15,

        overview:
          "Develop project management expertise before progressing into a Bachelor of Business degree.",

        entryRequirements: [
          "Successful completion of the Diploma.",
          "Meet SCU admission requirements.",
        ],

        creditDetails: ["Credit assessed by Southern Cross University."],

        careerOutcomes: [
          "Project Coordinator",
          "Project Administrator",
          "Operations Manager",
          "Business Analyst",
        ],

        brochure: "/documents/articulation-guide.pdf",
      },

      {
        id: "community-services",

        gbcProgram: "Diploma of Community Services",

        universityProgram: "Bachelor of Community Welfare",

        qualification: "Bachelor Degree",

        duration: "Refer to Official Pathway Guide",

        credit: "As Per SCU Articulation Agreement",

        intake: "Refer to Current Intake",

        university: "Southern Cross University",

        image: "/images/pathways/community-services.jpg",

        pdfPage: 17,

        overview:
          "Progress into higher education and build a rewarding career in community services and welfare.",

        entryRequirements: [
          "Successful completion of the Diploma.",
          "Meet university admission requirements.",
        ],

        creditDetails: ["Credit is subject to university assessment."],

        careerOutcomes: [
          "Community Support Worker",
          "Case Manager",
          "Community Development Officer",
          "Welfare Coordinator",
        ],

        brochure: "/documents/articulation-guide.pdf",
      },
    ],
  },

  timeline: {
    title: "Your Study Journey",

    steps: [],
  },

  faq: {
    title: "Frequently Asked Questions",

    items: [],
  },

  brochure: {
    title: "Download The Official Articulation Guide",

    description:
      "Need the complete articulation brochure? Download the official PDF for detailed program information.",

    pdf: "/documents/articulation-guide.pdf",
  },
};

export const ARTICULATION_CTA: CTAData = {
  badge: "Start Your Journey",

  title: "Ready To Continue Your Education?",

  description:
    "Explore our articulation pathways and discover how George Brown College can help you achieve your university goals.",

  primaryButton: {
    label: "Find Your Course",
    href: "/courses",
  },

  secondaryButton: {
    label: "Meet an Advisor",
    href: "/meet-an-advisor",
  },
};
