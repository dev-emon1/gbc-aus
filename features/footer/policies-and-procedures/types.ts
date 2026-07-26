export type PolicyCategory = "general" | "under18" | "elicos" | "cricos";

export interface PolicyItem {
  id: number;

  title: string;

  file: string;

  category: PolicyCategory;

  description?: string;
}

export interface PolicyCategoryProps {
  title: string;

  policies: PolicyItem[];
}
