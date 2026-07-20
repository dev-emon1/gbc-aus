import {
  ClipboardCheck,
  Download,
  FileCheck2,
  Mail,
  ShieldCheck,
} from "lucide-react";

export const AGENT_PROCESS = {
  badge: "Application Process",

  title: "Become an Approved Education Agent in Five Simple Steps",

  description:
    "Follow our straightforward application process to join George Brown College's authorised education agent network.",

  steps: [
    {
      number: "01",
      title: "Download Form",
      description: "Download the official agent application form.",
      icon: Download,
    },
    {
      number: "02",
      title: "Complete the Form",
      description: "Provide your agency information and required details.",
      icon: ClipboardCheck,
    },
    {
      number: "03",
      title: "Submit Your Application",
      description: "Send the completed form with any supporting documents.",
      icon: Mail,
    },
    {
      number: "04",
      title: "Application Review",
      description: "Our admissions team will carefully review your submission.",
      icon: FileCheck2,
    },
    {
      number: "05",
      title: "Partnership Approval",
      description:
        "Successful applicants will be contacted to begin the partnership.",
      icon: ShieldCheck,
    },
  ],
};
