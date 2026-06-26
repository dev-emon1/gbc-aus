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
        href: "/why-gbc",
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

    description: "Everything you need before starting your study journey.",

    ctaButton: "Student Guide",

    ctaHref: "/student-guide",

    ctaTitle: "Prepare Before You Arrive",

    ctaDescription: "Helpful resources for international students.",

    children: [
      {
        label: "Study In Australia",

        href: "/study-in-australia",
      },

      {
        label: "Accommodation",

        href: "/accommodation",
      },

      {
        label: "Cost Of Living",

        href: "/cost-of-living",
      },

      {
        label: "Student Guide",

        href: "/student-guide",
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
      "Support services, events and everything beyond the classroom.",

    ctaButton: "Student Services",

    ctaHref: "/student-services",

    ctaTitle: "Student Support",

    ctaDescription:
      "From wellbeing to career advice, we're here throughout your journey.",

    children: [
      {
        label: "Student Services",

        href: "/student-services",
      },

      {
        label: "Events & Workshops",

        href: "/events",
      },

      {
        label: "Meet an Advisor",

        href: "/meet-an-advisor",
      },

      {
        label: "Support & Welfare",

        href: "/support",
      },
    ],
  },

  {
    label: "Contact",

    href: "/contact",
  },
];
