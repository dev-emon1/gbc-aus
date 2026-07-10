import { CoursesData } from "./types";

export const COURSES_DATA: CoursesData = {
  hero: {
    badge: "NATIONALLY RECOGNISED COURSES",

    title: "Find Your Course",

    description:
      "Explore nationally recognised ELICOS and Vocational Education & Training (VET) programs designed to prepare you for employment, higher education and long-term career success.",

    backgroundImage: "/images/courses/course-hero.jpg",

    breadcrumbs: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Courses",
      },
    ],

    metadata: [
      {
        label: "30+ Programs",
        color: "#D84D95",
      },
      {
        label: "CRICOS Approved",
        color: "#38BDF8",
      },
      {
        label: "Sydney Campus",
        color: "#B7D531",
      },
    ],
  },

  featuredPrograms: {
    badge: "FEATURED PROGRAMS",

    title: "Popular Programs",

    description:
      "Discover some of our most in-demand qualifications designed for international students.",

    button: {
      label: "View All Courses",

      href: "/courses",
    },

    items: [
      {
        id: "aur30620",

        title: "Light Vehicle Mechanical Technology",

        slug: "/courses/automotive-management/certificate-iii-light-vehicle-mechanical-technology",

        image: "/images/courses/featured/automotive.jpg",

        badge: "Automotive",

        code: "AUR30620",

        level: "Certificate III",

        duration: "78 Weeks",
      },

      {
        id: "bsb50120",

        title: "Diploma of Business",

        slug: "/courses/business/diploma-business",

        image: "/images/courses/featured/business.jpg",

        badge: "Business",

        code: "BSB50120",

        level: "Diploma",

        duration: "52 Weeks",
      },

      {
        id: "ict50220",

        title: "Diploma of Information Technology",

        slug: "/courses/information-technology/diploma-information-technology",

        image: "/images/courses/featured/it.jpg",

        badge: "Information Technology",

        code: "ICT50220",

        level: "Diploma",

        duration: "104 Weeks",
      },
    ],
  },

  studyAreas: {
    badge: "STUDY AREAS",

    title: "Choose Your Study Area",

    description:
      "Browse our nationally recognised study areas and discover qualifications designed for your future career.",
  },

  whyChoose: {
    badge: "WHY STUDY AT GBC",

    title: "Industry Focused Learning",

    description:
      "Gain practical knowledge through nationally recognised qualifications taught by experienced trainers.",

    items: [
      {
        title: "Nationally Recognised",

        description: "Australian Qualifications Framework aligned programs.",
      },

      {
        title: "Experienced Trainers",

        description:
          "Learn from industry professionals with real workplace experience.",
      },

      {
        title: "Career Ready",

        description: "Develop practical skills employers are looking for.",
      },

      {
        title: "Student Support",

        description: "Academic and personal support throughout your studies.",
      },
    ],
  },

  learningPathway: {
    badge: "LEARNING PATHWAY",

    title: "Your Journey Starts Here",

    description:
      "Progress from entry-level qualifications to advanced programs and build a successful career in Australia.",

    items: [
      {
        title: "Choose Your Study Area",

        description: "Select the industry that matches your career goals.",
      },

      {
        title: "Complete Your Qualification",

        description:
          "Develop practical skills through nationally recognised training.",
      },

      {
        title: "Build Industry Experience",

        description: "Gain job-ready knowledge through practical learning.",
      },

      {
        title: "Launch Your Career",

        description:
          "Graduate with qualifications recognised across Australia.",
      },
    ],
  },

  cta: {
    badge: "START YOUR JOURNEY",

    title: "Need Help Choosing The Right Course?",

    description:
      "Our experienced advisors can help you select the right qualification for your future.",

    primaryButton: {
      label: "Meet an Advisor",

      href: "/meet-an-advisor",
    },

    secondaryButton: {
      label: "Apply Now",

      href: "/apply-now",
    },
  },
};
