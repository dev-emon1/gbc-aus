import { StudyArea } from "../../types";
import { CERTIFICATE_III } from "./certificate-iii";

export const BUSINESS: StudyArea = {
  id: "business",

  title: "Business",

  slug: "business",

  image: "/images/courses/business.jpg",

  featured: true,

  overview: {
    title: "Build a Successful Career in Business",

    description:
      "Business qualifications provide the practical knowledge, workplace communication, customer service, administration, and organisational skills required to succeed across a wide range of industries. Students gain nationally recognised qualifications that prepare them for entry-level business roles and future career progression.",

    highlights: [
      "Nationally recognised qualification",
      "Industry-relevant business skills",
      "Practical workplace learning",
      "Excellent career and study pathways",
    ],
  },

  whyChoose: [
    {
      title: "Industry-Relevant Curriculum",

      description:
        "Develop practical business knowledge aligned with current workplace and industry expectations.",
    },

    {
      title: "Practical Learning Experience",

      description:
        "Build confidence through hands-on activities, case studies, projects, and workplace-focused assessments.",
    },

    {
      title: "Experienced Trainers",

      description:
        "Learn from qualified trainers with extensive experience in business administration and management.",
    },

    {
      title: "Pathway to Higher Qualifications",

      description:
        "Progress into higher-level business qualifications or begin your professional career with confidence.",
    },
  ],

  careerPaths: [
    {
      title: "Administrative Assistant",

      description:
        "Provide administrative support, manage documents, schedules, and daily office operations.",
    },

    {
      title: "Customer Service Representative",

      description:
        "Deliver excellent customer support while resolving enquiries and maintaining client relationships.",
    },

    {
      title: "Records Clerk",

      description:
        "Maintain accurate business records, files, and organisational documentation.",
    },

    {
      title: "Medical Receptionist",

      description:
        "Manage appointments, greet patients, and provide administrative support within healthcare environments.",
    },
  ],

  cta: {
    title: "Ready to Start Your Business Career?",

    description:
      "Speak with our admissions team and discover the right business qualification to achieve your career goals.",
  },

  programs: [CERTIFICATE_III],
};
