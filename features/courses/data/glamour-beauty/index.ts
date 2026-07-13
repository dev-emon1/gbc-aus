import { StudyArea } from "../../types";
import { CERTIFICATE_III } from "./certificate-iii";
import { DIPLOMA } from "./diploma";

export const GLAMOUR_BEAUTY_ACADEMY: StudyArea = {
  id: "glamour-beauty-academy",

  title: "Glamour Beauty Academy",

  slug: "glamour-beauty-academy",

  image: "/images/courses/glamour-beauty-academy.jpg",

  featured: true,

  overview: {
    title: "Build Your Career in Beauty Therapy & Nail Technology",

    description:
      "Our Beauty Therapy and Nail Technology qualifications combine practical salon experience with professional beauty techniques, preparing students for rewarding careers in beauty salons, spas, wellness centres, and self-employment. Students develop industry-ready skills through hands-on training using modern equipment and nationally recognised qualifications.",

    highlights: [
      "Nationally recognised qualifications",
      "Hands-on practical salon training",
      "Experienced beauty industry trainers",
      "Excellent career and self-employment opportunities",
    ],
  },

  whyChoose: [
    {
      title: "Industry Experienced Trainers",

      description:
        "Learn from qualified beauty professionals with extensive experience in beauty therapy, nail technology, and salon management.",
    },

    {
      title: "Hands-on Practical Training",

      description:
        "Develop confidence through practical training in real salon environments using professional products and equipment.",
    },

    {
      title: "Comprehensive Beauty Skills",

      description:
        "Master beauty therapy, nail technology, skincare, massage, makeup, and client consultation techniques required by today's beauty industry.",
    },

    {
      title: "Career & Business Opportunities",

      description:
        "Prepare for employment in beauty salons, spas, wellness centres, or start your own successful beauty business.",
    },
  ],

  careerPaths: [
    {
      title: "Beauty Therapist",

      description:
        "Provide professional beauty treatments including facials, massage, skincare, waxing, and client consultations.",
    },

    {
      title: "Nail Technician",

      description:
        "Specialise in manicure, pedicure, nail art, acrylic, and gel nail enhancement services.",
    },

    {
      title: "Spa Therapist",

      description:
        "Deliver professional spa treatments including body therapies, relaxation services, and wellness treatments.",
    },

    {
      title: "Salon Owner",

      description:
        "Establish and manage your own beauty salon or nail studio with industry-recognised qualifications and business skills.",
    },
  ],

  cta: {
    title: "Ready to Start Your Beauty Career?",

    description:
      "Speak with our admissions team to choose the Beauty Therapy or Nail Technology qualification that best suits your career goals.",
  },

  programs: [CERTIFICATE_III, DIPLOMA],
};
