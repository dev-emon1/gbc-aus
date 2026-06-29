import { TestimonialsPageData } from "./types";

export const TESTIMONIALS_DATA: TestimonialsPageData = {
  hero: {
    badge: "TESTIMONIALS",

    title: "Hear From Our Students",

    description:
      "Discover real experiences from students who have transformed their future through quality education at George Brown College.",

    backgroundImage: "/images/testimonials/hero.jpg",

    breadcrumbs: [
      {
        label: "Home",

        href: "/",
      },

      {
        label: "Testimonials",
      },
    ],
  },

  section: {
    badge: "SUCCESS STORIES",

    title: "Real Stories. Real Outcomes.",

    description:
      "Watch inspiring stories from our students and graduates as they share their learning journey and career success at George Brown College.",

    videos: [
      {
        id: 1,

        name: "Sarah Williams",

        course: "Business Management",

        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",

        cover:
          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80",

        videoId: "jNQXAC9IVRw",

        quote:
          "Studying at GBC gave me the confidence and practical skills to begin my professional career.",
      },

      {
        id: 2,

        name: "John Smith",

        course: "Information Technology",

        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",

        cover:
          "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80",

        videoId: "aqz-KE-bpKQ",

        quote:
          "The supportive teachers and practical learning environment helped me grow every day.",
      },

      {
        id: 3,

        name: "Emily Johnson",

        course: "Human Resources",

        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",

        cover:
          "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80",

        videoId: "ScMzIvxBSi4",

        quote:
          "Choosing GBC was one of the best decisions I've made for my education and future career.",
      },
      {
        id: 4,

        name: "Emily Johnson",

        course: "Human Resources",

        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",

        cover:
          "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80",

        videoId: "ScMzIvxBSi4",

        quote:
          "Choosing GBC was one of the best decisions I've made for my education and future career.",
      },
    ],

    stats: [
      {
        value: 8000,

        suffix: "+",

        label: "Students",
      },

      {
        value: 95,

        suffix: "%",

        label: "Satisfaction",
      },

      {
        value: 50,

        suffix: "+",

        label: "Programs",
      },
    ],
  },

  cta: {
    badge: "START YOUR JOURNEY",

    title: "Ready To Create Your Own Success Story?",

    description:
      "Join thousands of students building successful careers through practical education at George Brown College.",

    primaryButton: {
      label: "Explore Courses",

      href: "/courses",
    },

    secondaryButton: {
      label: "Contact Us",

      href: "/contact",
    },
  },
};
