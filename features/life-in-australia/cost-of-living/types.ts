export type HeroStat = {
  label: string;
  value: string;
};

export type CostItem = {
  title: string;
  description: string;
  icon: string;
};

export type Expense = {
  title: string;
  weekly: string;
  monthly: string;
  icon: string;
};

export type BudgetOption = {
  id: string;
  title: string;

  accommodation: number;
  food: number;
  transport: number;
  utilities: number;
  internet: number;
  entertainment: number;
};

export type SavingTip = {
  title: string;
  description: string;
  icon: string;
};

export type StudentDiscount = {
  title: string;
  description: string;
  icon: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type CostOfLivingContent = {
  hero: {
    title: string;
    subtitle: string;
    image: string;

    stats: HeroStat[];
  };

  overview: {
    title: string;
    subtitle: string;

    items: CostItem[];
  };

  expenses: {
    title: string;
    subtitle: string;

    items: Expense[];
  };

  calculator: {
    title: string;
    subtitle: string;

    options: BudgetOption[];
  };

  tips: {
    title: string;
    subtitle: string;

    items: SavingTip[];
  };

  discounts: {
    title: string;
    subtitle: string;

    items: StudentDiscount[];
  };

  faq: {
    title: string;

    items: FAQ[];
  };
};
