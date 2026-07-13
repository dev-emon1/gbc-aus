import { CTAData } from "@/components/shared/sections/cta";
import { PageHeroData } from "@/components/shared/sections/page-hero";

import { StudentServicesContent } from "../types";

export const STUDENT_SERVICES_HERO: PageHeroData = {
  badge: "Student Life",

  title: "Student Services",

  description:
    "George Brown College provides a wide range of student services to help you succeed academically, professionally and personally throughout your study journey in Australia.",

  backgroundImage: "/images/student-life/student-services/hero.jpg",

  breadcrumbs: [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "Student Life",
      href: "/student-life",
    },

    {
      label: "Student Services",
    },
  ],

  metadata: [
    {
      label: "Academic Support",
      color: "#D84D95",
    },

    {
      label: "Career Development",
      color: "#B7D531",
    },

    {
      label: "International Students",
      color: "#38BDF8",
    },
  ],

  height: "md",
};

export const STUDENT_SERVICES_CONTENT: StudentServicesContent = {
  success: {
    title: "Supporting You Every Step of the Way",

    description:
      "From enrolment to graduation, our Student Services team is here to provide guidance, resources and practical support so you can focus on achieving your goals.",

    items: [
      {
        title: "Academic Guidance",

        description:
          "Receive personalised advice to help you stay on track with your studies.",

        icon: "graduation-cap",
      },

      {
        title: "Student Administration",

        description:
          "Access assistance with enrolment, student records, letters and administration.",

        icon: "folder-open",
      },

      {
        title: "Career Development",

        description:
          "Build workplace skills, prepare your resume and explore employment opportunities.",

        icon: "briefcase",
      },
    ],
  },

  services: {
    title: "Our Student Services",

    description:
      "Our dedicated team offers a range of services designed to support every aspect of student life.",

    items: [
      {
        title: "Academic Support",

        description: "Study assistance, learning advice and academic guidance.",

        icon: "book-open",

        highlights: ["Study Skills", "Learning Support", "Academic Advice"],
      },

      {
        title: "Career Development",

        description: "Career planning and employability support.",

        icon: "briefcase",

        highlights: ["Resume Review", "Interview Skills", "Job Search"],
      },

      {
        title: "Student Administration",

        description: "Help with enrolment and student documentation.",

        icon: "clipboard-list",

        highlights: ["Enrolment", "Student ID", "Official Letters"],
      },

      {
        title: "Learning Resources",

        description: "Access learning materials and academic resources.",

        icon: "library",

        highlights: ["Learning Portal", "Library", "Online Resources"],
      },

      {
        title: "Technology Support",

        description: "Assistance with student systems and digital platforms.",

        icon: "monitor",

        highlights: ["Student Portal", "Email", "Wi-Fi Access"],
      },

      {
        title: "International Student Assistance",

        description:
          "Support designed specifically for international students studying in Australia.",

        icon: "globe",

        highlights: ["Student Visa", "Orientation", "Campus Support"],
      },
    ],
  },

  academicSupport: {
    title: "Academic Support",

    description:
      "Whether you need help with study skills, academic progress or course planning, our team is here to support your learning journey.",

    image: "/images/student-life/student-services/academic-support.jpg",

    items: [
      {
        title: "Study Skills",

        description:
          "Improve your learning techniques and academic confidence.",
      },

      {
        title: "Course Advice",

        description: "Receive guidance about your study pathway and subjects.",
      },

      {
        title: "Academic Progress",

        description: "Stay on track and receive support when challenges arise.",
      },

      {
        title: "Learning Assistance",

        description: "Access additional learning resources whenever required.",
      },
    ],
  },

  administration: {
    title: "Student Administration",

    description:
      "Our Student Administration team can assist with essential services throughout your studies.",

    items: [
      {
        title: "Student ID",

        description: "Collect or replace your student identification card.",
      },

      {
        title: "Enrolment",

        description: "Support with enrolment and course administration.",
      },

      {
        title: "Official Letters",

        description: "Request enrolment and study confirmation letters.",
      },

      {
        title: "Certificates",

        description: "Information regarding qualifications and completion.",
      },

      {
        title: "Student Records",

        description: "Access academic records and documentation.",
      },

      {
        title: "Timetable Assistance",

        description: "Receive help with your study timetable.",
      },
    ],
  },

  career: {
    title: "Career Development",

    description:
      "Prepare for your future career with practical advice and professional development opportunities.",

    steps: [
      {
        title: "Resume Preparation",

        description: "Create a professional resume.",
      },

      {
        title: "Interview Skills",

        description: "Build confidence through interview preparation.",
      },

      {
        title: "Job Search",

        description: "Explore employment opportunities in Australia.",
      },

      {
        title: "Career Advice",

        description: "Receive personalised career guidance.",
      },
    ],
  },

  digitalResources: {
    title: "Digital Student Resources",

    description:
      "Access the online tools and systems you need throughout your studies.",

    items: [
      {
        title: "Student Portal",

        description: "Manage your enrolment and study information.",

        icon: "layout-dashboard",
      },

      {
        title: "Student Email",

        description: "Stay connected with important college updates.",

        icon: "mail",
      },

      {
        title: "Learning Platform",

        description: "Access online learning resources and course materials.",

        icon: "laptop",
      },

      {
        title: "Campus Wi-Fi",

        description: "Free wireless internet available on campus.",

        icon: "wifi",
      },

      {
        title: "Library Resources",

        description: "Access digital and physical learning resources.",

        icon: "book-copy",
      },

      {
        title: "Online Support",

        description: "Find help and useful student information online.",

        icon: "life-buoy",
      },
    ],
  },

  help: {
    title: "Need Extra Help?",

    description:
      "Our Student Services team is here to help with enrolment, academic questions and campus life support.",

    buttonLabel: "Meet an Advisor",

    buttonHref: "/contact",
  },
};

export const STUDENT_SERVICES_CTA: CTAData = {
  badge: "Student Services",

  title: "Supporting You Throughout Your Student Journey",

  description:
    "Whether you need academic advice, enrolment assistance or career guidance, our dedicated Student Services team is ready to help.",

  primaryButton: {
    label: "Meet an Advisor",

    href: "/contact",
  },

  secondaryButton: {
    label: "Explore Courses",

    href: "/courses",
  },
};
