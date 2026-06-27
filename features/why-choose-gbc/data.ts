import { WhyChooseData } from "./types";

export const WHY_CHOOSE_DATA: WhyChooseData = {
  hero: {
    badge: "WHY CHOOSE GBC",

    title: "Why Choose George Brown College",

    description:
      "Discover why students choose George Brown College for quality education, practical learning and industry-focused programs.",

    backgroundImage: "/images/about/about-hero.jpg",

    breadcrumbs: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Why Choose GBC",
      },
    ],
    metadata: [
      {
        label: "Industry-Focused Learning",
        color: "#D84D95",
      },
      {
        label: "Student Support",
        color: "#B7D531",
      },
      {
        label: "Career Pathways",
        color: "#38BDF8",
      },
    ],
  },

  intro: {
    badge: "WHY CHOOSE GBC",

    title: "A Learning Experience Designed For Your Success",

    description:
      "George Brown College provides quality education, practical learning experiences and dedicated student support to help students achieve their academic and professional goals.",
  },

  featureGroups: [
    {
      title: "Learning Experience",
      icon: "graduation-cap",
      image: "/images/why-choose/learning-experience.jpg",

      items: [
        {
          title: "Facilities",

          description:
            "At GBC, we deliver lectures and courses in technologically equipped classrooms so that knowledge can be gained in the best possible learning environment.",
        },

        {
          title: "Industry's Best Trainers and Teachers",

          description:
            "GBC's commitment to quality means students learn from highly qualified and experienced trainers and teachers who bring valuable local and international industry experience into every classroom.",
        },
      ],
    },

    {
      title: "Student Life",
      icon: "users",
      image: "/images/why-choose/student-life.jpg",

      items: [
        {
          title: "Location",

          description:
            "Located in the heart of Sydney CBD, our campus is close to Central Station, Darling Harbour and many of Sydney's most popular attractions, providing students with convenience and accessibility.",
        },

        {
          title: "A Multicultural Community",

          description:
            "Study alongside students from around the world while enjoying information sessions, events, excursions and a welcoming multicultural learning environment.",
        },
      ],
    },

    {
      title: "Career Development",
      icon: "briefcase",
      image: "/images/why-choose/career-development.jpg",

      items: [
        {
          title: "Career Pathways",

          description:
            "Our vocational programs provide clear pathways into Bachelor and Master's degree programs, helping students continue their academic journey with confidence.",
        },

        {
          title: "Industry Standard Courses",

          description:
            "Courses are developed with industry consultation and delivered to current industry standards, preparing graduates for successful professional careers.",
        },
      ],
    },
  ],

  cta: {
    badge: "BEGIN YOUR JOURNEY",

    title: "Ready To Join George Brown College?",

    description:
      "Explore your study options and take the next step towards a successful future.",

    primaryButton: {
      label: "Explore Courses",

      href: "/courses",
    },

    secondaryButton: {
      label: "Meet an Advisor",

      href: "/meet-an-advisor",
    },
  },
};
