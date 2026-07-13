import { CTAData } from "@/components/shared/sections/cta";
import { FAQItem } from "@/components/shared/faq/types";
import { PageHeroData } from "@/components/shared/sections/page-hero";

import { ContactContent } from "../types";

export const CONTACT_HERO: PageHeroData = {
  badge: "Get in Touch",

  title: "Contact George Brown College",

  description:
    "Whether you're looking for course information, admissions support or general assistance, our friendly team is here to help you every step of the way.",

  backgroundImage: "/images/contact/hero.jpg",

  breadcrumbs: [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "Contact",
    },
  ],

  metadata: [
    {
      label: "Admissions",
      color: "#D84D95",
    },

    {
      label: "Student Services",
      color: "#B7D531",
    },

    {
      label: "General Enquiries",
      color: "#38BDF8",
    },
  ],

  height: "md",
};

export const CONTACT_CONTENT: ContactContent = {
  quickContacts: {
    title: "We're Here to Help",

    description:
      "Choose the most convenient way to reach our team. We're happy to answer your questions about courses, enrolment and student life.",

    items: [
      {
        title: "Call Us",

        value: "(02) 9279 4949",

        description: "Speak directly with our friendly admissions team.",

        icon: "phone",

        href: "tel:+61292794949",
      },

      {
        title: "Email Us",

        value: "info@georgebrown.nsw.edu.au",

        description: "Send us your enquiry anytime via email.",

        icon: "mail",

        href: "mailto:info@georgebrown.nsw.edu.au",
      },

      {
        title: "Visit Us",

        value: "Level 5, 191 Thomas Street",

        description: "Haymarket NSW 2000, Sydney, Australia.",

        icon: "map-pin",
      },

      {
        title: "Office Hours",

        value: "Monday – Friday",

        description: "9:00 AM – 5:00 PM",

        icon: "clock",
      },
    ],
  },

  form: {
    title: "Send Us an Enquiry",

    description:
      "Complete the enquiry form below and our team will get back to you as soon as possible. Whether you're interested in admissions, courses or student services, we're here to help.",

    buttonLabel: "Send Message",
  },
  details: {
    phone: "(02) 9279 4949",

    email: "info@georgebrown.nsw.edu.au",

    address: "Level 5, 191 Thomas Street, Haymarket NSW 2000, Australia",

    officeHours: "Monday – Friday · 9:00 AM – 5:00 PM",

    facebook: "https://www.facebook.com/georgebrowncollege",

    blog: "https://www.georgebrown.nsw.edu.au/blog",

    mapEmbedUrl:
      "https://www.google.com/maps?q=191+Thomas+Street+Haymarket+NSW+2000&output=embed",
  },

  departments: {
    title: "Contact the Right Team",

    description:
      "Our dedicated team is available to assist with admissions, student services and general enquiries. Contact the appropriate area below for faster assistance.",

    items: [
      {
        title: "Admissions",

        description:
          "Course information, applications, enrolment guidance and admission requirements.",

        email: "info@georgebrown.nsw.edu.au",

        phone: "(02) 9279 4949",
      },

      {
        title: "Student Services",

        description:
          "Academic support, student welfare, enrolment enquiries and campus services.",

        email: "info@georgebrown.nsw.edu.au",

        phone: "(02) 9279 4949",
      },

      {
        title: "International Students",

        description:
          "Support for international students including orientation, visas and student life.",

        email: "info@georgebrown.nsw.edu.au",

        phone: "(02) 9279 4949",
      },

      {
        title: "General Enquiries",

        description:
          "For all other questions about George Brown College, please contact our friendly team.",

        email: "info@georgebrown.nsw.edu.au",

        phone: "(02) 9279 4949",
      },
    ],
  },
};

export const CONTACT_FAQS: FAQItem[] = [
  {
    question: "How quickly will I receive a response?",

    answer:
      "Our team aims to respond to all enquiries within one to two business days.",
  },

  {
    question: "Can I visit the campus without an appointment?",

    answer:
      "Yes. Walk-in visitors are welcome during office hours, however we recommend contacting us in advance so we can better assist you.",
  },

  {
    question: "How do I apply for a course?",

    answer:
      "You can submit an enquiry using the contact form or speak with our admissions team for guidance on the application process.",
  },

  {
    question:
      "Can international students contact the College before arriving in Australia?",

    answer:
      "Absolutely. Our team is happy to assist international students with admissions, enrolment, accommodation and general enquiries before they arrive in Australia.",
  },

  {
    question: "Where is George Brown College located?",

    answer:
      "George Brown College is located at Level 5, 191 Thomas Street, Haymarket NSW 2000, Sydney, Australia.",
  },
];

export const CONTACT_CTA: CTAData = {
  badge: "Get in Touch",

  title: "Let's Start Your Learning Journey",

  description:
    "Have questions about our courses, admissions or student life? Contact our friendly team today and we'll help you find the right study pathway.",

  primaryButton: {
    label: "Send an Enquiry",

    href: "/contact",
  },

  secondaryButton: {
    label: "Explore Courses",

    href: "/courses",
  },
};
