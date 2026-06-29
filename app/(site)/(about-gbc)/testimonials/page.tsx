import { CTASection } from "@/components/shared/sections/cta";
import TestimonialsHero from "@/features/about-gbc/testimonials/components/TestimonialsHero";
import TestimonialsPageSection from "@/features/about-gbc/testimonials/components/TestimonialsSection";
import { TESTIMONIALS_DATA } from "@/features/about-gbc/testimonials/data";

const TestimonialsPage = () => {
  return (
    <>
      <TestimonialsHero />

      <TestimonialsPageSection />

      <CTASection data={TESTIMONIALS_DATA.cta} />
    </>
  );
};

export default TestimonialsPage;
