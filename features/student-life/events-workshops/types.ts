export interface FeaturedEvent {
  title: string;

  description: string;

  date: string;

  time: string;

  location: string;

  image: string;

  buttonLabel: string;

  buttonHref: string;
}

export interface UpcomingEvent {
  title: string;

  description: string;

  date: string;

  category: string;

  location: string;

  image: string;
}

export interface WorkshopCategory {
  title: string;

  description: string;

  icon: string;
}

export interface StudentActivity {
  title: string;

  description: string;

  icon: string;
}

export interface CalendarEvent {
  title: string;

  location: string;
}

export interface CalendarMonth {
  month: string;

  events: CalendarEvent[];
}

export interface EventsWorkshopsContent {
  featured: FeaturedEvent;

  upcoming: {
    title: string;

    description: string;

    events: UpcomingEvent[];
  };

  categories: {
    title: string;

    description: string;

    items: WorkshopCategory[];
  };

  activities: {
    title: string;

    description: string;

    image: string;

    items: StudentActivity[];
  };

  calendar: {
    title: string;

    description: string;

    months: CalendarMonth[];
  };
}
