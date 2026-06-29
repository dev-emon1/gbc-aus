import { TestimonialsSection } from "@/components/shared/sections/testimonials";

import { TESTIMONIALS_DATA } from "../data";

export default function TestimonialsPageSection() {
  return (
    <TestimonialsSection variant="page" data={TESTIMONIALS_DATA.section} />
  );
}
