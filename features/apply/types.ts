import { LucideIcon } from "lucide-react";

export interface ApplicationForm {
  id: string;

  title: string;

  subtitle: string;

  description: string;

  file: string;

  icon: LucideIcon;
  pages: string;
}
