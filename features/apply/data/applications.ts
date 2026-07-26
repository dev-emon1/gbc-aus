import { FileText, GraduationCap } from "lucide-react";

import { ApplicationForm } from "../types";

export const APPLICATION_FORMS: ApplicationForm[] = [
  {
    id: "general",

    title: "General Application",

    subtitle: "18 Years & Above",

    description:
      "For domestic and international applicants aged 18 years or above applying for George Brown College programs.",

    file: "/pdf/Application-for-Enrolment-V.27-16.02.2026_2.pdf",

    icon: GraduationCap,
    pages: "2",
  },

  {
    id: "under-18",

    title: "Under 18 Application",

    subtitle: "Applicants Under 18",

    description:
      "For applicants under the age of 18 who require the Under 18 enrolment application form.",

    file: "/pdf/U18-Application-for-Enrolment-v1-2023.pdf",

    icon: FileText,
    pages: "2",
  },
];
