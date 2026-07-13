export interface StudentSuccessItem {
  title: string;

  description: string;

  icon: string;
}

export interface StudentService {
  title: string;

  description: string;

  icon: string;

  highlights: string[];
}

export interface AcademicSupportItem {
  title: string;

  description: string;
}

export interface AdministrationService {
  title: string;

  description: string;
}

export interface CareerStep {
  title: string;

  description: string;
}

export interface DigitalResource {
  title: string;

  description: string;

  icon: string;
}

export interface HelpBannerContent {
  title: string;

  description: string;

  buttonLabel: string;

  buttonHref: string;
}

export interface StudentServicesContent {
  success: {
    title: string;

    description: string;

    items: StudentSuccessItem[];
  };

  services: {
    title: string;

    description: string;

    items: StudentService[];
  };

  academicSupport: {
    title: string;

    description: string;

    image: string;

    items: AcademicSupportItem[];
  };

  administration: {
    title: string;

    description: string;

    items: AdministrationService[];
  };

  career: {
    title: string;

    description: string;

    steps: CareerStep[];
  };

  digitalResources: {
    title: string;

    description: string;

    items: DigitalResource[];
  };

  help: HelpBannerContent;
}
