import { StudyArea } from "../../types";
import { CERTIFICATE_IV } from "./certificate-iv";
import { DIPLOMA } from "./diploma";

export const HEALTH_AND_CARE: StudyArea = {
  id: "health-and-care",

  title: "Health and Care",

  slug: "health-and-care",

  image: "/images/courses/health-and-care.jpg",

  featured: true,

  overview: {
    title: "Build a Rewarding Career in Health & Community Care",

    description:
      "Health and Care qualifications prepare students with the practical knowledge, professional skills, and hands-on experience required to support individuals, families, and communities. Through nationally recognised training, students develop the confidence to work in aged care, disability support, community services, and person-centred care environments across Australia.",

    highlights: [
      "Nationally recognised qualifications",
      "Industry-focused practical training",
      "Work placement opportunities",
      "Excellent career progression pathways",
    ],
  },

  whyChoose: [
    {
      title: "Industry Experienced Trainers",

      description:
        "Learn from qualified trainers with extensive experience in aged care, disability support, and community services.",
    },

    {
      title: "Practical Learning Experience",

      description:
        "Develop real-world skills through simulated learning environments, workplace training, and supervised work placement.",
    },

    {
      title: "Person-Centred Care Skills",

      description:
        "Gain the knowledge and practical skills needed to deliver compassionate, ethical, and high-quality care in diverse community settings.",
    },

    {
      title: "Career & Higher Study Pathways",

      description:
        "Graduate with nationally recognised qualifications that provide opportunities for employment or progression into higher-level community services programs.",
    },
  ],

  careerPaths: [
    {
      title: "Aged Care Worker",

      description:
        "Support older Australians in residential aged care, home care, and community care environments.",
    },

    {
      title: "Community Services Worker",

      description:
        "Provide case management, advocacy, and support services for individuals, families, and communities.",
    },

    {
      title: "Disability Support Worker",

      description:
        "Empower people living with disability by promoting independence, wellbeing, and community participation.",
    },

    {
      title: "Care Team Leader",

      description:
        "Coordinate care teams, supervise support staff, and help deliver high-quality person-centred services.",
    },
  ],

  cta: {
    title: "Ready to Start Your Career in Health & Care?",

    description:
      "Speak with our admissions team and choose the Health and Care qualification that best matches your career aspirations.",
  },

  programs: [CERTIFICATE_IV, DIPLOMA],
};
