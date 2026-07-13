import { StudyArea } from "../../types";
import { CERTIFICATE_III } from "./certificate-iii";
import { CERTIFICATE_IV } from "./certificate-iv";
import { DIPLOMA } from "./diploma";

export const COMMERCIAL_COOKERY_HOSPITALITY_MANAGEMENT: StudyArea = {
  id: "commercial-cookery-hospitality-management",

  title: "Commercial Cookery & Hospitality Management",

  slug: "commercial-cookery",

  image: "/images/courses/commercial-cookery-hospitality-management.jpg",

  featured: true,

  overview: {
    title: "Build a Career in Hospitality & Commercial Cookery",

    description:
      "Commercial Cookery and Hospitality qualifications combine practical kitchen operations with hospitality management skills. Students gain hands-on industry experience, leadership capabilities, and nationally recognised qualifications that prepare them for careers in restaurants, hotels, cafés, resorts, and hospitality businesses across Australia.",

    highlights: [
      "Nationally recognised qualifications",
      "Hands-on commercial kitchen training",
      "Hospitality leadership & management skills",
      "Excellent employment and career pathways",
    ],
  },

  whyChoose: [
    {
      title: "Industry Experienced Trainers",

      description:
        "Learn from experienced chefs and hospitality professionals with extensive real-world industry knowledge.",
    },

    {
      title: "Practical Kitchen Training",

      description:
        "Develop your skills through hands-on commercial kitchen practice using industry-standard equipment and real hospitality scenarios.",
    },

    {
      title: "Leadership & Management Skills",

      description:
        "Build the confidence to supervise teams, manage hospitality operations, and deliver exceptional customer service.",
    },

    {
      title: "Career & Study Pathways",

      description:
        "Progress from cookery qualifications into hospitality management or pursue rewarding careers across Australia's hospitality industry.",
    },
  ],

  careerPaths: [
    {
      title: "Chef",

      description:
        "Prepare high-quality meals while working in restaurants, hotels, cafés, resorts, and catering businesses.",
    },

    {
      title: "Sous Chef / Head Chef",

      description:
        "Lead kitchen teams, oversee food preparation, and maintain quality and safety standards.",
    },

    {
      title: "Restaurant or Café Manager",

      description:
        "Manage hospitality operations, staff, customer service, and daily business performance.",
    },

    {
      title: "Hospitality Manager",

      description:
        "Coordinate hospitality services across hotels, clubs, resorts, events, and commercial venues.",
    },
  ],

  cta: {
    title: "Ready to Start Your Hospitality Career?",

    description:
      "Speak with our admissions team to choose the Commercial Cookery or Hospitality qualification that best matches your career goals.",
  },

  programs: [CERTIFICATE_III, CERTIFICATE_IV, DIPLOMA],
};
