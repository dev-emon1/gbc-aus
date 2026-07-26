export type FormCategory = "general" | "under18";

export interface FormItem {
  id: number;

  title: string;

  file: string;

  category: FormCategory;

  description?: string;
}

export interface FormCategoryProps {
  title: string;

  forms: FormItem[];
}
