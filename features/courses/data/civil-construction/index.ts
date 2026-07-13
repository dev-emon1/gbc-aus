import { StudyArea } from "../../types";
import { ADVANCED_DIPLOMA } from "./advanced-diploma";
import { DIPLOMA } from "./diploma";

export const CIVIL_CONSTRUCTION: StudyArea = {
  id: "civil-construction",

  title: "Civil Construction",

  slug: "civil-construction",

  image: "/images/courses/civil-construction.jpg",

  featured: true,

  overview: {
    title: "Build a Career in Civil Construction Design",

    description:
      "Civil Construction qualifications provide the technical knowledge and practical design skills required to work on infrastructure and construction projects. Students develop expertise in drafting, engineering design, project planning, geotechnical analysis, and civil construction management while gaining nationally recognised Australian qualifications.",

    highlights: [
      "Industry-recognised qualifications",
      "Practical engineering and design skills",
      "Project planning and construction management",
      "Strong career pathways in civil infrastructure",
    ],
  },

  whyChoose: [
    {
      title: "Industry-Focused Curriculum",

      description:
        "Develop practical skills in civil construction design, drafting, surveying, and project management aligned with industry standards.",
    },

    {
      title: "Experienced Trainers",

      description:
        "Learn from qualified industry professionals with extensive experience in civil engineering and construction projects.",
    },

    {
      title: "Hands-on Learning",

      description:
        "Build practical knowledge through technical projects, CAD applications, case studies, and workplace-based assessments.",
    },

    {
      title: "Career & Higher Study Pathways",

      description:
        "Graduate with nationally recognised qualifications that prepare you for employment or progression into higher-level engineering and construction studies.",
    },
  ],

  careerPaths: [
    {
      title: "Civil Construction Designer",

      description:
        "Design infrastructure projects including roads, drainage systems, foundations, and structural works.",
    },

    {
      title: "Civil Engineering Draftsperson",

      description:
        "Prepare technical drawings and detailed construction documentation using modern CAD software.",
    },

    {
      title: "Senior Civil Works Designer",

      description:
        "Lead the design of complex civil infrastructure projects and support professional engineering teams.",
    },

    {
      title: "Civil Construction Supervisor",

      description:
        "Coordinate construction activities, manage teams, and ensure projects meet technical and safety requirements.",
    },
  ],

  cta: {
    title: "Ready to Start Your Civil Construction Career?",

    description:
      "Speak with our admissions team to find the right Civil Construction qualification for your future career in engineering and infrastructure.",
  },

  programs: [DIPLOMA, ADVANCED_DIPLOMA],
};
