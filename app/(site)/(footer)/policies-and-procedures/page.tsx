import { CTASection } from "@/components/shared/sections/cta";
import { PageHero } from "@/components/shared/sections/page-hero";
import PoliciesSection from "@/features/footer/policies-and-procedures/components/PoliciesSection";

import { POLICIES_CTA } from "@/features/footer/policies-and-procedures/data/cta";
import { POLICIES_HERO } from "@/features/footer/policies-and-procedures/data/hero";

export default function PoliciesAndProceduresPage() {
  return (
    <>
      <PageHero data={POLICIES_HERO} />

      <PoliciesSection />

      <CTASection data={POLICIES_CTA} />
    </>
  );
}
