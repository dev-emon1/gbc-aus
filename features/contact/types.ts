export interface QuickContact {
  title: string;

  value: string;

  description: string;

  icon: string;

  href?: string;
}

export interface ContactDetail {
  phone: string;

  email: string;

  address: string;

  officeHours: string;

  facebook: string;

  blog: string;

  mapEmbedUrl: string;
}

export interface DepartmentContact {
  title: string;

  description: string;

  email: string;

  phone: string;
}

export interface ContactFAQItem {
  question: string;

  answer: string;
}

export interface ContactContent {
  quickContacts: {
    title: string;

    description: string;

    items: QuickContact[];
  };

  form: {
    title: string;

    description: string;

    buttonLabel: string;
  };

  details: ContactDetail;

  departments: {
    title: string;

    description: string;

    items: DepartmentContact[];
  };
}
