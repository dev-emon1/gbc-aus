import { CoursesData } from "./types";

export const COURSES_DATA: CoursesData = {
  hero: {
    badge: "NATIONALLY RECOGNISED COURSES",

    title: "Find Your Course",

    description:
      "Explore nationally recognised ELICOS and Vocational Education & Training (VET) programs designed to prepare you for employment, higher education and long-term career success.",

    backgroundImage: "/images/courses/course-hero.jpg",

    breadcrumbs: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Courses",
      },
    ],

    metadata: [
      {
        label: "30+ Programs",
        color: "#D84D95",
      },
      {
        label: "CRICOS Approved",
        color: "#38BDF8",
      },
      {
        label: "Sydney Campus",
        color: "#B7D531",
      },
    ],
  },

  studyAreas: {
    badge: "STUDY AREAS",

    title: "Choose Your Study Area",

    description:
      "Browse our nationally recognised study areas and discover qualifications designed for your future career.",

    items: [
      {
        id: "automotive",

        title: "Automotive Management",

        slug: "automotive-management",

        image: "/images/courses/automotive.jpg",

        description:
          "Industry focused automotive mechanical technology qualifications.",

        featured: true,

        programs: [
          {
            id: "aur30620",

            title: "Certificate III in Light Vehicle Mechanical Technology",

            slug: "certificate-iii-light-vehicle-mechanical-technology",

            qualification: "Certificate III",

            courseCode: "AUR30620",

            cricosCode: "XXXXXX",

            overview:
              "This qualification reflects the role of individuals who perform a broad range of tasks on a variety of light vehicles in the automotive retail, service and repair industry.",

            sidebar: {
              brochure: "/brochure/aur30620.pdf",

              pathway: "/pathway/automotive.pdf",

              courseCode: "AUR30620",

              cricosCode: "XXXXXX",

              tuition: "$20,000",

              duration: "104 Weeks",

              studyMode: "Face to Face",

              intake: ["January", "April", "July", "October"],

              location: "Sydney",
            },

            entryRequirements: {
              title: "Who Can Enrol?",

              content: [
                "Must be at least 18 years old.",

                "Successful completion of Year 12 or equivalent.",

                "IELTS 6.0 overall or equivalent English proficiency.",
              ],
            },

            learningOutcomes: {
              title: "Key Study Outcomes",

              content: [
                "Diagnose mechanical faults.",

                "Repair light vehicle systems.",

                "Perform servicing and maintenance.",

                "Develop workplace communication skills.",
              ],
            },

            careerOutcomes: {
              title: "Ideal For",

              content: [
                "Automotive Technician",

                "Workshop Mechanic",

                "Light Vehicle Technician",

                "Mechanical Service Advisor",
              ],
            },

            assessment: {
              title: "Assessment",

              content: [
                "Written Assessments",

                "Practical Demonstrations",

                "Projects",

                "Portfolio",

                "Workplace Observation",
              ],
            },

            fees: {
              title: "Fees",

              content: [
                "Refer to the official Offer Letter for complete fee information.",
              ],
            },

            subjects: [
              {
                code: "AURASA002",

                title:
                  "Follow safe working practices in an automotive workplace",
              },

              {
                code: "AURETR012",

                title: "Test and repair basic electrical circuits",
              },

              {
                code: "AURETR123",

                title:
                  "Diagnose and repair spark ignition engine management systems",
              },

              {
                code: "AURTTK001",

                title: "Use and maintain measuring equipment",
              },
            ],
          },

          {
            id: "aur40216",

            title: "Certificate IV in Automotive Mechanical Diagnosis",

            slug: "certificate-iv-automotive-mechanical-diagnosis",

            qualification: "Certificate IV",

            courseCode: "AUR40216",

            cricosCode: "",

            overview: "",

            sidebar: {
              brochure: "",

              pathway: "",

              courseCode: "",

              cricosCode: "",

              tuition: "",

              duration: "",

              studyMode: "",

              intake: [],

              location: "",
            },

            entryRequirements: {
              title: "",

              content: [],
            },

            learningOutcomes: {
              title: "",

              content: [],
            },

            careerOutcomes: {
              title: "",

              content: [],
            },

            assessment: {
              title: "",

              content: [],
            },

            fees: {
              title: "",

              content: [],
            },

            subjects: [],
          },

          {
            id: "aur50216",

            title: "Diploma of Automotive Technology",

            slug: "diploma-of-automotive-technology",

            qualification: "Diploma",

            courseCode: "AUR50216",

            cricosCode: "",

            overview: "",

            sidebar: {
              brochure: "",

              pathway: "",

              courseCode: "",

              cricosCode: "",

              tuition: "",

              duration: "",

              studyMode: "",

              intake: [],

              location: "",
            },

            entryRequirements: {
              title: "",

              content: [],
            },

            learningOutcomes: {
              title: "",

              content: [],
            },

            careerOutcomes: {
              title: "",

              content: [],
            },

            assessment: {
              title: "",

              content: [],
            },

            fees: {
              title: "",

              content: [],
            },

            subjects: [],
          },
        ],
      },
    ],
  },

  whyChoose: {
    badge: "WHY STUDY AT GBC",

    title: "Industry Focused Learning",

    description:
      "Gain practical knowledge through nationally recognised qualifications taught by experienced trainers.",

    items: [
      {
        title: "Nationally Recognised",

        description: "Australian Qualifications Framework aligned programs.",
      },

      {
        title: "Experienced Trainers",

        description:
          "Learn from industry professionals with real workplace experience.",
      },

      {
        title: "Career Ready",

        description: "Develop practical skills employers are looking for.",
      },

      {
        title: "Student Support",

        description: "Academic and personal support throughout your studies.",
      },
    ],
  },

  cta: {
    badge: "START YOUR JOURNEY",

    title: "Need Help Choosing The Right Course?",

    description:
      "Our experienced advisors can help you select the right qualification for your future.",

    primaryButton: {
      label: "Meet an Advisor",

      href: "/meet-an-advisor",
    },

    secondaryButton: {
      label: "Apply Now",

      href: "/apply-now",
    },
  },
};
