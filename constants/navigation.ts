export type NavigationChild = {
  label: string;
  href: string;
  description?: string;
  badge?: "New" | "Popular" | "Guide";
};

export type NavigationItem = {
  label: string;
  href?: string;

  dropdown?: boolean;
  megaMenu?: boolean;

  title: string;
  description: string;

  children?: NavigationChild[];
};

export const navigation: NavigationItem[] = [
  {
    label: "About GBC",
    dropdown: true,

    title: "About George Brown College",

    description: "Learn about our history, leadership and opportunities.",

    children: [
      {
        label: "About Us",
        href: "/about",
        description: "Who we are and what we stand for.",
      },
      {
        label: "Why Choose GBC",
        href: "/why-choose-gbc",
        description: "What makes George Brown College different.",
        badge: "Popular",
      },
      {
        label: "Our Team",
        href: "/team",
        description: "Meet our academic and leadership team.",
      },
      {
        label: "Careers",
        href: "/careers",
        description: "Join our growing team.",
      },
      {
        label: "Testimonials",
        href: "/testimonials",
        description: "Student success stories.",
      },
    ],
  },

  {
    label: "Find Your Courses",
    megaMenu: true,

    title: "",
    description: "",
  },

  {
    label: "Life In Australia",
    dropdown: true,

    title: "Life in Australia",

    description: "Everything you need before and after arriving in Australia.",

    children: [
      {
        label: "Study In Australia",
        href: "/life-in-australia/study-in-australia",
        description: "Your study journey starts here.",
      },
      {
        label: "Articulation",
        href: "/life-in-australia/articulation",
        description: "Explore academic pathway opportunities.",
        badge: "Guide",
      },
      {
        label: "Cost Of Living",
        href: "/life-in-australia/cost-of-living",
        description: "Plan your everyday expenses.",
      },
    ],
  },

  {
    label: "Student Life",
    dropdown: true,

    title: "Student Life",

    description: "Support, wellbeing and experiences beyond the classroom.",

    children: [
      {
        label: "Student Services",
        href: "/student-life/student-services",
        description: "Support throughout your studies.",
      },
      {
        label: "Orientation",
        href: "/student-life/orientation",
        description: "Begin your journey with confidence.",
        badge: "New",
      },
      {
        label: "Support & Welfare",
        href: "/student-life/support-welfare",
        description: "Dedicated support for every student.",
      },
      {
        label: "Safety",
        href: "/student-life/safety",
        description: "Stay informed and protected.",
      },
      {
        label: "Events & Workshops",
        href: "/student-life/event-workshops",
        description: "Learn, connect and grow.",
      },
      {
        label: "Student Guide",
        href: "/student-life/student-guide",
        description: "Everything in one place.",
        badge: "Popular",
      },
    ],
  },

  {
    label: "Gallery",
    href: "/gallery",

    title: "",
    description: "",
  },

  {
    label: "Contact",
    href: "/contact",

    title: "",
    description: "",
  },
];
