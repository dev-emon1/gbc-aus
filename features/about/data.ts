import { AboutData } from "./types";

export const ABOUT_DATA: AboutData = {
  hero: {
    badge: "ABOUT GEORGE BROWN COLLEGE",

    title: "About Us",

    description:
      "Discover George Brown College, our history, values and commitment to delivering quality education for local and international students.",

    backgroundImage: "/images/about/about-hero.jpg",

    breadcrumbs: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "About Us",
      },
    ],

    metadata: [
      {
        label: "CRICOS 03208D",
        color: "#D84D95",
      },
      {
        label: "RTO 91707",
        color: "#B7D531",
      },
      {
        label: "Sydney CBD",
        color: "#38BDF8",
      },
    ],
  },

  overview: {
    badge: "WELCOME TO GBC",

    title: "Hello There!",

    paragraphs: [
      "George Brown College (GBC) is a Registered Training Organisation (RTO) located in the heart of Sydney CBD, delivering nationally recognised education for both domestic and international students.",

      "Our industry-focused programs combine academic excellence with practical learning experiences, helping students develop the confidence, skills and real-world knowledge required for successful careers.",

      "We are committed to creating a supportive learning environment where every student can achieve academic success, professional growth and long-term career opportunities.",
    ],

    stats: [
      {
        label: "CRICOS",
        value: "03208D",
      },

      {
        label: "Provider RTO",
        value: "91707",
      },

      {
        label: "Campus",
        value: "Sydney CBD",
      },

      {
        label: "Established",
        value: "2010",
      },
    ],
  },

  acknowledgement: {
    badge: "ACKNOWLEDGEMENT",

    title: "Acknowledgement of Country",

    paragraphs: [
      "GBC acknowledges the Gadigal people of the Eora Nation, the Boorooberongal people of the Dharug Nation, the Bidiagal people and the Gamaygal people, upon whose ancestral lands our College stands. We would also like to pay respect to the Elders both past and present, acknowledging them as the traditional custodians of knowledge for these lands.",

      "GBC campus is located at the heart of Sydney CBD with many local attractions at its doorstep, including, Chinatown, Darling Harbour and the Ultimo cultural and education precinct (which includes the ABC and Powerhouse Museum). We are close to Central Station and within a five-minute walk from Light Rails and buses.",

      "GBC has a culturally diverse campus life, offering nationally recognised training qualifications and accredited courses supported by a quality assured curriculum, meeting Standards for Registered Training Organisations, National standards for ELICOS providers and courses requirements and ESOS Act.",
    ],
  },

  history: {
    badge: "OUR HISTORY",

    title: "Building a Legacy of Quality Education",

    image: "/images/about/history.jpg",

    paragraphs: [
      "George Brown College (GBC) was established in 2010 by a passionate educationalist with a vision to provide quality education to every student. Inspired by a lifelong commitment to teaching and learning, she believed that education should empower individuals to achieve their personal and professional aspirations.",

      "Drawing upon her own teaching experience and the success of her former students, she set out to build an institution founded on academic excellence, integrity and strong moral values. Her goal has always been to create a team of dedicated professionals who inspire students while supporting both personal and professional growth.",

      "Today, George Brown College continues to uphold that vision by delivering nationally recognised education in a supportive learning environment. The College remains guided by Nelson Mandela's inspiring words: “Education is the most powerful weapon which you can use to change the world.”",
    ],

    quote: {
      text: "Education is the most powerful weapon which you can use to change the world.",
      author: "Nelson Mandela",
      role: "Former President of South Africa",
    },
  },

  whatWeDo: {
    badge: "WHAT WE DO",

    title: "Delivering Practical Learning for Real Career Success",

    description:
      "George Brown College offers nationally recognised ELICOS and Vocational Education and Training (VET) courses across a wide range of disciplines.",

    items: [
      {
        title: "ELICOS Programs",

        description:
          "Our ELICOS courses are delivered by experienced teachers in Sydney, helping students develop strong English language skills for further study, work and everyday communication.",

        image: "/images/about/elicos.jpg",

        href: "/courses",
      },

      {
        title: "Vocational Education",

        description:
          "Our qualified VET academic staff combine professional knowledge with practical classroom experience, using real-life examples to prepare students for their future careers.",

        image: "/images/about/vet.jpg",

        href: "/courses",
      },

      {
        title: "Student Support",

        description:
          "Our dedicated support team helps students achieve their academic goals while supporting their health, wellbeing and overall learning experience.",

        image: "/images/about/student-support.jpg",

        href: "/student-support",
      },

      {
        title: "Career Ready",

        description:
          "Industry-focused education designed to equip students with practical skills, confidence and workplace readiness.",

        image: "/images/about/career-ready.jpg",

        href: "/courses",
      },
    ],
  },

  visionMission: {
    badge: "Vision & Mission",

    title: "Our Purpose. Our Commitment.",

    description:
      "Everything we do is guided by quality education, student success and lifelong learning.",

    vision: {
      title: "Vision",

      description:
        "To be recognised as a trusted provider of high-quality education, empowering students to achieve their personal and professional goals.",
    },

    mission: {
      title: "Mission",

      description:
        "To deliver practical, industry-focused education through academic excellence, experienced educators and dedicated student support.",
    },
  },

  cta: {
    badge: "Begin Your Journey",

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
