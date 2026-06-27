export interface CTAData {
  badge: string;

  title: string;

  description: string;

  primaryButton: {
    label: string;
    href: string;
  };

  secondaryButton?: {
    label: string;
    href: string;
  };
}
