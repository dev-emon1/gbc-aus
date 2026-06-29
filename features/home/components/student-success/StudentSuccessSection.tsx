"use client";

import { TestimonialsSection } from "@/components/shared/sections/testimonials";

import { HOME_TESTIMONIALS } from "./home-testimonials";

export default function StudentSuccessSection() {
  return <TestimonialsSection variant="home" data={HOME_TESTIMONIALS} />;
}
