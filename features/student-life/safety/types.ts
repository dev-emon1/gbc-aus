export interface SafetyFeatureItem {
  title: string;

  description: string;

  icon: string;
}

export interface EmergencyContactItem {
  title: string;

  number: string;

  description: string;

  icon: string;

  color?: string;
}

export interface SafetyTipItem {
  title: string;

  description: string;

  icon: string;
}

export interface TravelSafetyItem {
  title: string;

  description: string;

  icon: string;
}

export interface EmergencyStep {
  title: string;

  description: string;
}

export interface SafetyContent {
  intro: {
    title: string;

    description: string;

    image: string;
  };

  campusSafety: {
    title: string;

    description: string;

    items: SafetyFeatureItem[];
  };

  emergencyContacts: {
    title: string;

    description: string;

    items: EmergencyContactItem[];
  };

  personalSafety: {
    title: string;

    description: string;

    items: SafetyTipItem[];
  };

  travelSafety: {
    title: string;

    description: string;

    image: string;

    items: TravelSafetyItem[];
  };

  emergencyProcedure: {
    title: string;

    description: string;

    steps: EmergencyStep[];
  };
}
