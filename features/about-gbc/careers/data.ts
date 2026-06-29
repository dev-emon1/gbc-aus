import { CareerData } from "./types";

export const CAREER_DATA: CareerData = {
  hero: {
    badge: "CAREERS",

    title: "Build Your Career With George Brown College",

    description:
      "Join a passionate team committed to delivering quality education and creating meaningful learning experiences for students from around the world.",

    backgroundImage: "/images/career/hero.jpg",

    breadcrumbs: [
      {
        label: "Home",

        href: "/",
      },

      {
        label: "Careers",
      },
    ],
  },

  intro: {
    badge: "CAREERS AT GBC",

    title: "Help Shape The Future Of Education",

    description:
      "George Brown College believes that great education begins with great people. We are always interested in connecting with passionate educators and professionals who share our commitment to student success, academic excellence and continuous improvement.",

    commitment: {
      title: "Our Commitment",

      description:
        "We are committed to fostering an inclusive workplace where passionate educators and professionals can grow, collaborate and make a meaningful impact on students' lives.",
    },
  },

  benefits: {
    badge: "WHY JOIN GBC",

    title: "Why Work With Us",

    description:
      "Our workplace is built around collaboration, professionalism and a genuine commitment to helping students achieve their goals.",

    items: [
      {
        title: "Collaborative Culture",

        description:
          "Work alongside experienced educators and dedicated professionals in a supportive environment.",

        icon: "users",

        highlights: ["Supportive Team", "Knowledge Sharing", "Mentorship"],
      },

      {
        title: "Professional Growth",

        description:
          "Develop your skills through continuous learning and meaningful professional experiences.",

        icon: "trending-up",

        highlights: [
          "Career Growth",

          "Continuous Learning",

          "Professional Development",
        ],
      },

      {
        title: "Student Impact",

        description:
          "Contribute to the academic and personal success of students from diverse backgrounds.",

        icon: "graduation-cap",

        highlights: ["Student Success", "Real Impact", "Purpose Driven"],
      },

      {
        title: "Inclusive Workplace",

        description:
          "Be part of a respectful and multicultural community that values diversity and collaboration.",

        icon: "heart-handshake",

        highlights: ["Diversity", "Equal Opportunity", "Respectful Culture"],
      },
    ],
  },

  culture: {
    badge: "LIFE AT GBC",

    title: "A Workplace Built Around People",

    description:
      "Every member of our team contributes to creating a welcoming, inclusive and inspiring learning environment where students and staff can grow together.",

    image: "/images/career/culture.jpg",
  },

  hiringProcess: {
    badge: "OUR PROCESS",

    title: "Our Hiring Journey",

    description:
      "We aim to make every recruitment experience transparent, respectful and straightforward.",

    steps: [
      {
        title: "Application",

        description: "Submit your application for a suitable opportunity.",

        icon: "file",
      },

      {
        title: "Application Review",

        description:
          "Our recruitment team carefully reviews every application.",

        icon: "search",
      },

      {
        title: "Interview",

        description:
          "Shortlisted candidates are invited to discuss their experience and aspirations.",

        icon: "interview",
      },

      {
        title: "Offer",

        description: "Successful candidates receive an employment offer.",

        icon: "offer",
      },

      {
        title: "Welcome",

        description:
          "Begin your journey as part of the George Brown College team.",

        icon: "welcome",
      },
    ],
  },

  opportunities: {
    badge: "CURRENT OPPORTUNITIES",

    title: "No Current Vacancies",

    description:
      "We do not have any open positions at the moment. However, we welcome expressions of interest from talented educators and professionals who would like to be considered for future opportunities.",

    primaryButton: {
      label: "Contact Us",

      href: "/contact",
    },
  },

  idealCandidate: {
    badge: "WHO WE'RE LOOKING FOR",

    title: "People Who Thrive At GBC",

    description:
      "We're always interested in meeting passionate professionals who are committed to making a positive impact through education.",

    items: [
      "Passionate about education and student success",

      "Strong communication and interpersonal skills",

      "Collaborative team player",

      "Committed to continuous learning",

      "Professional and ethical mindset",

      "Inclusive and respectful attitude",
    ],
  },

  cta: {
    badge: "JOIN OUR COMMUNITY",

    title: "Interested In Working With George Brown College?",

    description:
      "Stay connected with us and explore future opportunities to become part of our growing educational community.",

    primaryButton: {
      label: "Contact Us",

      href: "/contact",
    },

    secondaryButton: {
      label: "Explore Courses",

      href: "/courses",
    },
  },
};
