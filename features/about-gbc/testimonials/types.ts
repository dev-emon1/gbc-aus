import { CTAData } from "@/components/shared/sections/cta/types";
import { PageHeroData } from "@/components/shared/sections/page-hero/types";
import { TestimonialsData } from "@/components/shared/sections/testimonials";

export interface TestimonialsPageData {
  hero: PageHeroData;

  section: TestimonialsData;

  cta: CTAData;
}
