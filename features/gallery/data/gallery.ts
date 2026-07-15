import { CTAData } from "@/components/shared/sections/cta";
import { PageHeroData } from "@/components/shared/sections/page-hero";

import { GalleryContent, GalleryFilter } from "../types";

import { CULTURE_DAY_2015 } from "./albums/culture-day-2015";
import { GRADUATION_2015 } from "./albums/graduation-2015";
import { CULTURE_DAY_2016 } from "./albums/culture-day-2016";
import { MELBOURNE_CUP_2016 } from "./albums/melbourne-cup-2016";
import { GRADUATION_2016 } from "./albums/graduation-2016";
import { CULTURE_DAY_2017 } from "./albums/culture-day-2017";
import { MELBOURNE_CUP_2017 } from "./albums/melbourne-cup-2017";
import { SOCCER_DAY_2017 } from "./albums/soccer-day-2017";

export const GALLERY_HERO: PageHeroData = {
  badge: "Student Life",
  title: "Gallery",
  description:
    "Relive unforgettable moments from George Brown College through our collection of cultural celebrations, graduations, sporting events and student activities.",
  backgroundImage: "/images/gallery/hero.jpg",
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
      label: "Gallery",
    },
  ],
  metadata: [
    {
      label: "100+ Photos",
      color: "#D84D95",
    },
    {
      label: "8 Albums",
      color: "#B7D531",
    },
    {
      label: "Student Memories",
      color: "#38BDF8",
    },
  ],
  height: "lg",
};

export const GALLERY_CONTENT: GalleryContent = {
  featuredAlbum: {
    id: "culture-day-2017",
    title: "Culture Day 2017",
    slug: "culture-day-2017",
    year: 2017,
    category: "Culture",
    description:
      "One of George Brown College's most vibrant annual celebrations showcasing cultures from around the world.",
    coverImage: CULTURE_DAY_2017[0].image,
    coverAlt: CULTURE_DAY_2017[0].alt,
    photosCount: CULTURE_DAY_2017.length,
    featured: true,
    eventDate: "2017",
    location: "George Brown College",
    photos: CULTURE_DAY_2017,
  },

  stats: [
    {
      value: "8",
      label: "Albums",
    },
    {
      value: "100+",
      label: "Photos",
    },
    {
      value: "2015",
      label: "Gallery Started",
    },
    {
      value: "Thousands",
      label: "Student Memories",
    },
  ],

  albums: [
    {
      id: "culture-day-2015",
      title: "Culture Day 2015",
      slug: "culture-day-2015",
      year: 2015,
      category: "Culture",
      description:
        "Celebrating multicultural diversity through food, performances and exhibitions.",
      coverImage: CULTURE_DAY_2015[0].image,
      coverAlt: CULTURE_DAY_2015[0].alt,
      photosCount: CULTURE_DAY_2015.length,
      eventDate: "2015",
      location: "George Brown College",
      photos: CULTURE_DAY_2015,
    },

    {
      id: "graduation-2015",
      title: "Graduation 2015",
      slug: "graduation-2015",
      year: 2015,
      category: "Graduation",
      description:
        "Recognising the achievements of students as they celebrated graduation.",
      coverImage: GRADUATION_2015[0].image,
      coverAlt: GRADUATION_2015[0].alt,
      photosCount: GRADUATION_2015.length,
      eventDate: "2015",
      location: "George Brown College",
      photos: GRADUATION_2015,
    },

    {
      id: "culture-day-2016",
      title: "Culture Day 2016",
      slug: "culture-day-2016",
      year: 2016,
      category: "Culture",
      description:
        "Students shared traditions, food and performances from around the world.",
      coverImage: CULTURE_DAY_2016[0].image,
      coverAlt: CULTURE_DAY_2016[0].alt,
      photosCount: CULTURE_DAY_2016.length,
      eventDate: "2016",
      location: "George Brown College",
      photos: CULTURE_DAY_2016,
    },

    {
      id: "melbourne-cup-2016",
      title: "Melbourne Cup 2016",
      slug: "melbourne-cup-2016",
      year: 2016,
      category: "Community",
      description:
        "Students enjoyed one of Australia's iconic annual celebrations together.",
      coverImage: MELBOURNE_CUP_2016[0].image,
      coverAlt: MELBOURNE_CUP_2016[0].alt,
      photosCount: MELBOURNE_CUP_2016.length,
      eventDate: "2016",
      location: "George Brown College",
      photos: MELBOURNE_CUP_2016,
    },

    {
      id: "graduation-2016",
      title: "Graduation 2016",
      slug: "graduation-2016",
      year: 2016,
      category: "Graduation",
      description:
        "Honouring another successful graduating class at George Brown College.",
      coverImage: GRADUATION_2016[0].image,
      coverAlt: GRADUATION_2016[0].alt,
      photosCount: GRADUATION_2016.length,
      eventDate: "2016",
      location: "George Brown College",
      photos: GRADUATION_2016,
    },

    {
      id: "culture-day-2017",
      title: "Culture Day 2017",
      slug: "culture-day-2017",
      year: 2017,
      category: "Culture",
      description:
        "The biggest Culture Day celebration featuring international cuisine, performances and student participation.",
      coverImage: CULTURE_DAY_2017[0].image,
      coverAlt: CULTURE_DAY_2017[0].alt,
      photosCount: CULTURE_DAY_2017.length,
      featured: true,
      eventDate: "2017",
      location: "George Brown College",
      photos: CULTURE_DAY_2017,
    },

    {
      id: "melbourne-cup-2017",
      title: "Melbourne Cup 2017",
      slug: "melbourne-cup-2017",
      year: 2017,
      category: "Community",
      description:
        "Students and staff enjoyed a memorable Melbourne Cup celebration together.",
      coverImage: MELBOURNE_CUP_2017[0].image,
      coverAlt: MELBOURNE_CUP_2017[0].alt,
      photosCount: MELBOURNE_CUP_2017.length,
      eventDate: "2017",
      location: "George Brown College",
      photos: MELBOURNE_CUP_2017,
    },

    {
      id: "soccer-day-2017",
      title: "Soccer Day 2017",
      slug: "soccer-day-2017",
      year: 2017,
      category: "Sports",
      description:
        "Friendly football matches, teamwork and unforgettable moments on the field.",
      coverImage: SOCCER_DAY_2017[0].image,
      coverAlt: SOCCER_DAY_2017[0].alt,
      photosCount: SOCCER_DAY_2017.length,
      eventDate: "2017",
      location: "George Brown College",
      photos: SOCCER_DAY_2017,
    },
  ],
};

export const GALLERY_FILTERS: GalleryFilter[] = [
  {
    label: "All Albums",
    value: "All Albums",
  },
  {
    label: "Culture",
    value: "Culture",
  },
  {
    label: "Graduation",
    value: "Graduation",
  },
  {
    label: "Community",
    value: "Community",
  },
  {
    label: "Sports",
    value: "Sports",
  },
];

export const GALLERY_CTA: CTAData = {
  badge: "Student Memories",
  title: "Create Your Own George Brown Story",
  description:
    "Every semester brings new friendships, celebrations and unforgettable experiences. Join our vibrant student community and become part of the next gallery.",
  primaryButton: {
    label: "Explore Student Life",
    href: "/student-life",
  },
  secondaryButton: {
    label: "Contact Us",
    href: "/contact",
  },
};
