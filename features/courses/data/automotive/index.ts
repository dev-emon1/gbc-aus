import { StudyArea } from "../../types";
import { CERTIFICATE_III } from "./certificate-iii";
import { CERTIFICATE_IV } from "./certificate-iv";
import { DIPLOMA } from "./diploma";

export const AUTOMOTIVE_MANAGEMENT: StudyArea = {
  id: "automotive-management",

  title: "Automotive Management",

  slug: "automotive-management",

  image: "/images/courses/automotive-management.jpg",

  featured: true,

  overview: {
    title: "Build a Career in Australia's Automotive Industry",

    description:
      "Automotive Management qualifications combine technical knowledge with hands-on workshop experience, preparing students for employment across Australia's automotive service and repair industry.",

    highlights: [
      "Industry-focused curriculum",
      "Practical workshop training",
      "Nationally recognised qualifications",
      "Strong employment pathways",
    ],
  },

  whyChoose: [
    {
      title: "Industry Experienced Trainers",

      description:
        "Learn from qualified trainers with extensive real-world automotive industry experience.",
    },

    {
      title: "Hands-on Practical Learning",

      description:
        "Develop practical skills through workshop-based training using industry-standard equipment.",
    },

    {
      title: "Nationally Recognised Qualification",

      description:
        "Graduate with AQF recognised qualifications that are valued across Australia.",
    },

    {
      title: "Career & Study Pathways",

      description:
        "Progress into higher qualifications or enter the automotive workforce with confidence.",
    },
  ],

  careerPaths: [
    {
      title: "Motor Mechanic",

      description:
        "Diagnose, repair and maintain passenger and light commercial vehicles.",
    },

    {
      title: "Automotive Diagnostic Technician",

      description:
        "Specialise in advanced fault finding and modern vehicle diagnostic systems.",
    },

    {
      title: "Workshop Supervisor",

      description:
        "Lead workshop operations and supervise technicians in service environments.",
    },

    {
      title: "Fleet Maintenance Coordinator",

      description:
        "Manage maintenance schedules and servicing for commercial vehicle fleets.",
    },
  ],

  cta: {
    title: "Ready to Build Your Automotive Career?",

    description:
      "Speak with our admissions team and choose the automotive qualification that matches your career goals.",
  },

  programs: [CERTIFICATE_III, CERTIFICATE_IV, DIPLOMA],
};
