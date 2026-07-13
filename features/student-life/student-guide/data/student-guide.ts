import { CTAData } from "@/components/shared/sections/cta";
import { PageHeroData } from "@/components/shared/sections/page-hero";

import { StudentGuideContent } from "../types";

export const STUDENT_GUIDE_HERO: PageHeroData = {
  badge: "Student Life",

  title: "Student Guide",

  description:
    "Access essential student information, policies, important documents and helpful resources to support your studies and everyday life at George Brown College.",

  backgroundImage: "/images/student-life/student-guide/hero.jpg",

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
      label: "Student Guide",
    },
  ],

  metadata: [
    {
      label: "Student Handbook",
      color: "#D84D95",
    },

    {
      label: "Policies & Forms",
      color: "#B7D531",
    },

    {
      label: "Downloads",
      color: "#38BDF8",
    },
  ],

  height: "md",
};

export const STUDENT_GUIDE_CONTENT: StudentGuideContent = {
  overview: {
    title: "Everything You Need in One Place",

    description:
      "The Student Guide has been developed to help you understand college policies, academic expectations, student responsibilities and the support services available throughout your studies. We encourage every student to become familiar with these important resources before commencing their course.",

    image: "/images/student-life/student-guide/overview.jpg",

    highlights: [
      "Student handbook",

      "Important college policies",

      "Official forms & documents",

      "Quick access to student resources",
    ],
  },
  handbook: {
    title: "Student Handbook",

    description:
      "The Student Handbook provides important information about studying at George Brown College, including academic expectations, student responsibilities, campus services and policies that support a safe and successful learning environment.",

    image: "/images/student-life/student-guide/student-handbook.jpg",

    buttonLabel: "Download Student Handbook",

    buttonHref: "/documents/student-handbook.pdf",

    features: [
      {
        title: "Academic Expectations",

        description:
          "Understand your study responsibilities, assessment requirements and academic standards.",
      },

      {
        title: "Student Rights & Responsibilities",

        description:
          "Learn about your rights as a student and the responsibilities expected throughout your studies.",
      },

      {
        title: "Campus Services",

        description:
          "Find information about student support, facilities and services available on campus.",
      },

      {
        title: "Important College Policies",

        description:
          "Access key policies relating to attendance, student conduct, complaints and academic integrity.",
      },
    ],
  },
  policies: {
    title: "Important Student Policies",

    description:
      "Familiarise yourself with the key college policies that help maintain a safe, respectful and productive learning environment for all students.",

    items: [
      {
        title: "Attendance Policy",

        description:
          "Understand the attendance requirements and your responsibilities throughout your course.",

        icon: "calendar-check",

        href: "/documents/attendance-policy.pdf",
      },

      {
        title: "Student Code of Conduct",

        description:
          "Learn about the standards of behaviour and professional conduct expected from all students.",

        icon: "shield-check",

        href: "/documents/student-code-of-conduct.pdf",
      },

      {
        title: "Complaints & Appeals",

        description:
          "Information about resolving concerns, complaints and formal appeal procedures.",

        icon: "message-square-warning",

        href: "/documents/complaints-and-appeals.pdf",
      },

      {
        title: "Academic Integrity",

        description:
          "Understand plagiarism, academic honesty and responsible learning practices.",

        icon: "badge-check",

        href: "/documents/academic-integrity.pdf",
      },

      {
        title: "Privacy Policy",

        description:
          "Learn how your personal information is collected, used and protected by the College.",

        icon: "lock",

        href: "/documents/privacy-policy.pdf",
      },

      {
        title: "Refund Policy",

        description:
          "Review the College's refund policy and important conditions relating to course fees.",

        icon: "receipt",

        href: "/documents/refund-policy.pdf",
      },
    ],
  },

  downloads: {
    title: "Downloads & Student Forms",

    description:
      "Access important documents, forms and resources that you may need during your studies at George Brown College.",

    items: [
      {
        title: "Student Handbook",

        description:
          "Complete student handbook containing policies, services and useful information.",

        file: "/documents/student-handbook.pdf",

        icon: "book-open",
      },

      {
        title: "Attendance Policy",

        description: "Attendance requirements for all students.",

        file: "/documents/attendance-policy.pdf",

        icon: "calendar-check",
      },

      {
        title: "Refund Policy",

        description: "Important refund information and procedures.",

        file: "/documents/refund-policy.pdf",

        icon: "receipt",
      },

      {
        title: "Complaints & Appeals",

        description: "Complaint resolution and appeal process.",

        file: "/documents/complaints-and-appeals.pdf",

        icon: "message-square-warning",
      },

      {
        title: "Student Request Form",

        description: "General student request and administration form.",

        file: "/documents/student-request-form.pdf",

        icon: "file-text",
      },

      {
        title: "Campus Map",

        description: "Campus locations and student facilities guide.",

        file: "/documents/campus-map.pdf",

        icon: "map",
      },
    ],
  },
  quickLinks: {
    title: "Quick Access",

    description:
      "Quickly navigate to the most commonly used student resources and support services at George Brown College.",

    items: [
      {
        title: "Student Services",

        description:
          "Academic advice, enrolment assistance and student administration.",

        href: "/student-life/student-services",

        icon: "life-buoy",
      },

      {
        title: "Orientation",

        description:
          "Everything you need to know before starting your studies.",

        href: "/student-life/orientation",

        icon: "compass",
      },

      {
        title: "Safety",

        description:
          "Emergency procedures, campus safety and emergency contacts.",

        href: "/student-life/safety",

        icon: "shield-check",
      },

      {
        title: "Support & Welfare",

        description:
          "Confidential student welfare, counselling and wellbeing support.",

        href: "/student-life/support-welfare",

        icon: "heart-handshake",
      },

      {
        title: "Events & Workshops",

        description: "Upcoming events, workshops and student activities.",

        href: "/student-life/events-workshops",

        icon: "calendar-days",
      },

      {
        title: "Contact Us",

        description:
          "Get in touch with the George Brown College team for assistance.",

        href: "/contact",

        icon: "phone-call",
      },
    ],
  },
};

export const STUDENT_GUIDE_CTA: CTAData = {
  badge: "Student Guide",

  title: "Everything You Need for Student Success",

  description:
    "Explore essential policies, download important documents and access the resources you need to enjoy a successful study experience at George Brown College.",

  primaryButton: {
    label: "Download Student Handbook",

    href: "/documents/student-handbook.pdf",
  },

  secondaryButton: {
    label: "Contact Student Services",

    href: "/contact",
  },
};
