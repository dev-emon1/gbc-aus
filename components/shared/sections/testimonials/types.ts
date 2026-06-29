export interface TestimonialVideo {
  id: number;

  name: string;

  course: string;

  cover: string;

  avatar?: string;

  videoId: string;

  quote?: string;
}

export interface TestimonialStat {
  value: number;

  suffix?: string;

  label: string;
}

export interface TestimonialsData {
  badge: string;

  title: string;

  description: string;

  videos: TestimonialVideo[];

  stats?: TestimonialStat[];
}

export type TestimonialsVariant = "home" | "page";
