export interface AdvisorBenefit {
  title: string;

  description: string;

  icon: "book" | "file" | "career" | "globe";
}

export interface AdvisorFAQ {
  question: string;
  answer: string;
}

export interface AdvisorData {
  hero: {
    badge: string;
    title: string;
    description: string;
    image: string;
  };

  benefits: AdvisorBenefit[];

  helpItems: string[];

  faqs: AdvisorFAQ[];
}
