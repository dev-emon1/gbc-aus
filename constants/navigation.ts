export type NavigationChild = {
  label: string;
  href: string;
  badge?: string;
};

export type NavigationItem = {
  label: string;
  href?: string;

  dropdown?: boolean;
  megaMenu?: boolean;

  image?: string;

  title?: string;
  description?: string;

  ctaButton?: string;
  ctaHref?: string;

  ctaTitle?: string;
  ctaDescription?: string;

  children?: NavigationChild[];
};

export const navigation: NavigationItem[] = [
  {
    label: "About GBC",
    dropdown: true,

    image: "/images/navigation/about-gbc.jpg",

    title: "About George Brown College",

    description:
      "Learn about our history, leadership and student opportunities.",

    ctaButton: "Meet an Advisor",

    ctaHref: "/meet-an-advisor",

    ctaTitle: "Need Help Choosing a Course?",

    ctaDescription:
      "Our advisors are here to help you choose the right pathway.",

    children: [
      {
        label: "About Us",
        href: "/about",
      },

      {
        label: "Why Choose GBC",
        href: "/why-choose-gbc",
        badge: "Popular",
      },

      {
        label: "Our Team",
        href: "/team",
      },

      {
        label: "Careers",
        href: "/careers",
      },

      {
        label: "Testimonials",
        href: "/testimonials",
      },
    ],
  },

  {
    label: "Find Your Courses",

    megaMenu: true,
  },

  {
    label: "Life In Australia",

    dropdown: true,

    image: "/images/navigation/life-australia.jpg",

    title: "Life In Australia",

    description:
      "Everything you need to know before and after arriving in Australia.",

    ctaButton: "Articulation Guide",

    ctaHref: "/life-in-australia/articulation",

    ctaTitle: "Prepare Before You Arrive",

    ctaDescription:
      "Discover articulation, living costs and essential information for international students.",

    children: [
      {
        label: "Study In Australia",
        href: "/life-in-australia/study-in-australia",
      },

      {
        label: "Articulation",
        href: "/life-in-australia/articulation",
        badge: "Guide",
      },

      {
        label: "Cost Of Living",
        href: "/life-in-australia/cost-of-living",
      },
    ],
  },
  {
    label: "Campus",

    dropdown: true,

    image: "/images/navigation/campus.jpg",

    title: "Campus Experience",

    description:
      "Explore our facilities, classrooms and vibrant learning environment.",

    ctaButton: "Campus Tour",

    ctaHref: "/campus",

    ctaTitle: "Visit Our Campus",

    ctaDescription: "Book a campus visit and experience GBC before you apply.",

    children: [
      {
        label: "Campus Overview",

        href: "/campus",
      },

      {
        label: "Facilities",

        href: "/campus/facilities",
      },

      {
        label: "Campus Gallery",

        href: "/gallery",
      },
    ],
  },

  {
    label: "Student Life",

    dropdown: true,

    image: "/images/navigation/student-life.jpg",

    title: "Student Life",

    description:
      "Everything beyond the classroom to help you succeed and enjoy your student journey.",

    ctaButton: "Student Services",

    ctaHref: "/student-life/student-services",

    ctaTitle: "Support Throughout Your Journey",

    ctaDescription:
      "Academic support, wellbeing services, orientation and student resources all in one place.",

    children: [
      {
        label: "Student Services",
        href: "/student-life/student-services",
      },

      {
        label: "Orientation",
        href: "/student-life/orientation",
        badge: "New",
      },

      {
        label: "Support & Welfare",
        href: "/student-life/support-welfare",
      },

      {
        label: "Safety",
        href: "/student-life/safety",
      },

      {
        label: "Events & Workshops",
        href: "/student-life/event-workshops",
      },

      {
        label: "Student Guide",
        href: "/student-life/student-guide",
        badge: "Popular",
      },
    ],
  },

  {
    label: "Contact",

    href: "/contact",
  },
];
