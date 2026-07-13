import { CTAData } from "@/components/shared/sections/cta";
import { PageHeroData } from "@/components/shared/sections/page-hero";

import { EventsWorkshopsContent } from "../types";

export const EVENTS_WORKSHOPS_HERO: PageHeroData = {
  badge: "Student Life",

  title: "Events & Workshops",

  description:
    "Experience student life beyond the classroom through cultural celebrations, professional workshops, networking events and community activities at George Brown College.",

  backgroundImage: "/images/student-life/events-workshops/hero.jpg",

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
      label: "Events & Workshops",
    },
  ],

  metadata: [
    {
      label: "Campus Events",
      color: "#D84D95",
    },

    {
      label: "Career Workshops",
      color: "#B7D531",
    },

    {
      label: "Student Community",
      color: "#38BDF8",
    },
  ],

  height: "md",
};

export const EVENTS_WORKSHOPS_CONTENT: EventsWorkshopsContent = {
  featured: {
    title: "New Student Orientation Day",

    description:
      "Begin your journey at George Brown College by meeting fellow students, exploring the campus, learning about student services and participating in interactive orientation activities designed to help you settle into college life.",

    date: "Monday, 9 February 2026",

    time: "9:00 AM – 3:00 PM",

    location: "George Brown College Campus",

    image: "/images/student-life/events-workshops/featured-event.jpg",

    buttonLabel: "Register Now",

    buttonHref: "/contact",
  },
  upcoming: {
    title: "Upcoming Events & Workshops",

    description:
      "Join exciting cultural, educational and social activities throughout the year. Our events are designed to help students experience Australian culture, build friendships and create unforgettable memories during their studies.",

    events: [
      {
        title: "Excursion to Australian Museum",

        description:
          "Discover Australia's history and culture through a guided museum excursion.",

        date: "Tuesday 23 January",

        category: "Excursion",

        location: "Australian Museum",

        image: "/images/student-life/events-workshops/australian-museum.jpg",
      },

      {
        title: "Aboriginal Tour",

        description:
          "Learn about Aboriginal history, traditions and heritage in Sydney.",

        date: "February",

        category: "Cultural",

        location: "Botanical Gardens",

        image: "/images/student-life/events-workshops/aboriginal-tour.jpg",
      },

      {
        title: "Bondi to Coogee Walk + BBQ",

        description:
          "Enjoy one of Sydney's most iconic coastal walks followed by a student BBQ.",

        date: "February",

        category: "Outdoor",

        location: "Bondi & Coogee",

        image: "/images/student-life/events-workshops/bondi-coogee.jpg",
      },

      {
        title: "Soccer Tournament & BBQ",

        description:
          "Meet new friends while enjoying a friendly football tournament and BBQ.",

        date: "Saturday 24 March",

        category: "Sports",

        location: "Wentworth Park",

        image: "/images/student-life/events-workshops/soccer-bbq.jpg",
      },

      {
        title: "Vivid Walk",

        description:
          "Experience Sydney's famous Vivid Light Festival together with fellow students.",

        date: "June",

        category: "Excursion",

        location: "Vivid Sydney",

        image: "/images/student-life/events-workshops/vivid-walk.jpg",
      },

      {
        title: "GBC Culture Day",

        description:
          "Celebrate multicultural diversity through performances, food and community activities.",

        date: "August",

        category: "Campus Event",

        location: "GBC Campus",

        image: "/images/student-life/events-workshops/culture-day.jpg",
      },
    ],
  },
  categories: {
    title: "Explore Event Categories",

    description:
      "Throughout the year, George Brown College organises a diverse range of activities that encourage students to explore Australia, celebrate different cultures, build friendships and enjoy campus life.",

    items: [
      {
        title: "Cultural Experiences",

        description:
          "Celebrate multicultural traditions, international festivals and cultural exchange events throughout the year.",

        icon: "globe",
      },

      {
        title: "Campus Excursions",

        description:
          "Visit iconic Sydney attractions, museums and local destinations with fellow students.",

        icon: "map",
      },

      {
        title: "Sports & Recreation",

        description:
          "Participate in friendly sporting competitions, outdoor activities and social recreation events.",

        icon: "trophy",
      },

      {
        title: "Student Networking",

        description:
          "Meet new classmates, build friendships and connect with the George Brown student community.",

        icon: "users",
      },

      {
        title: "Community Events",

        description:
          "Enjoy BBQs, student gatherings and community activities designed to bring everyone together.",

        icon: "handshake",
      },

      {
        title: "Festivals & Celebrations",

        description:
          "Experience annual celebrations including Culture Day, Dragon Boat Festival, Halloween and Christmas events.",

        icon: "party-popper",
      },
    ],
  },

  activities: {
    title: "Experience Student Life Beyond the Classroom",

    description:
      "Student life at George Brown College is filled with opportunities to discover Sydney, celebrate cultural diversity and create unforgettable memories through exciting campus activities and community events.",

    image: "/images/student-life/events-workshops/student-activities.jpg",

    items: [
      {
        title: "Cultural Festivals",

        description:
          "Celebrate traditions from around the world through multicultural festivals and community celebrations.",

        icon: "globe",
      },

      {
        title: "Sydney Excursions",

        description:
          "Explore Sydney's famous museums, beaches, landmarks and attractions with organised student trips.",

        icon: "map",
      },

      {
        title: "Sports & Outdoor Activities",

        description:
          "Join friendly sporting events, BBQ gatherings and outdoor activities while making new friends.",

        icon: "trophy",
      },

      {
        title: "Student Community",

        description:
          "Connect with students from different countries, participate in campus events and build lifelong friendships.",

        icon: "users",
      },
    ],
  },
  calendar: {
    title: "Annual Events Calendar",

    description:
      "Throughout the year, George Brown College organises social, cultural and educational activities that help students connect, experience Australian culture and celebrate diversity.",

    months: [
      {
        month: "January",

        events: [
          {
            title: "Excursion to Australian Museum",

            location: "Tuesday 23 January @ Australian Museum",
          },
        ],
      },

      {
        month: "February",

        events: [
          {
            title: "Aboriginal Tour",

            location: "@ Botanical Gardens",
          },

          {
            title: "Bondi to Coogee Walk + BBQ",

            location: "@ Bondi and Coogee",
          },

          {
            title: "Carnival (Brazil/Colombia)",

            location: "",
          },
        ],
      },

      {
        month: "March",

        events: [
          {
            title: "Soccer Tournament & BBQ in the Park",

            location: "Saturday 24 March @ Wentworth Park",
          },
        ],
      },

      {
        month: "April",

        events: [
          {
            title: "Light Show",

            location: "@ Museum Of Contemporary Art at the Rocks",
          },

          {
            title: "Easter Songkran (Thailand)",

            location: "",
          },
        ],
      },

      {
        month: "May",

        events: [
          {
            title: "Excursion to Museum of Contemporary Art",

            location: "@ GBC Campus",
          },
        ],
      },

      {
        month: "June",

        events: [
          {
            title: "Vivid Walk",

            location: "@ Vivid Sydney Light Festival",
          },

          {
            title: "Dragon Boat Festival (Taiwan)",

            location: "",
          },
        ],
      },

      {
        month: "July",

        events: [
          {
            title: "Sydney Aquarium",

            location: "@ GBC Campus",
          },
        ],
      },

      {
        month: "August",

        events: [
          {
            title: "GBC Culture Day 2017",

            location: "@ GBC Campus in Sydney CBD",
          },
        ],
      },

      {
        month: "September",

        events: [
          {
            title: "Harvest Moon Festival (Korea, China, Vietnam, Taiwan)",

            location: "",
          },
        ],
      },

      {
        month: "October",

        events: [
          {
            title: "Halloween Party",

            location: "31/10 @ GBC",
          },
        ],
      },

      {
        month: "November",

        events: [
          {
            title: "Melbourne Cup Celebration",

            location: "@ GBC Campus",
          },
        ],
      },

      {
        month: "December",

        events: [
          {
            title: "Christmas Party",

            location: "@ GBC Campus",
          },
        ],
      },
    ],
  },
};

export const EVENTS_WORKSHOPS_CTA: CTAData = {
  badge: "Campus Events",

  title: "Be Part of the George Brown Community",

  description:
    "Take part in excursions, cultural celebrations, sporting events and student activities designed to help you make friends, experience Australia and enjoy campus life.",

  primaryButton: {
    label: "Contact Events Team",

    href: "/contact",
  },

  secondaryButton: {
    label: "View Student Gallery",

    href: "/gallery",
  },
};
