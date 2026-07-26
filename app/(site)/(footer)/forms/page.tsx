import { CTASection } from "@/components/shared/sections/cta";
import { PageHero } from "@/components/shared/sections/page-hero";
import FormsSection from "@/features/footer/forms/components/FormsSection";

import { FORMS_CTA } from "@/features/footer/forms/data/cta";
import { FORMS_HERO } from "@/features/footer/forms/data/hero";

export default function FormsPage() {
  return (
    <>
      <PageHero data={FORMS_HERO} />

      <FormsSection />

      <CTASection data={FORMS_CTA} />
    </>
  );
}
