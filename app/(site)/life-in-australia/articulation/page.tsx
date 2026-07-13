import { CTASection } from "@/components/shared/sections/cta";
import { PageHero } from "@/components/shared/sections/page-hero";

import {
  ARTICULATION_CTA,
  ARTICULATION_HERO,
} from "@/features/life-in-australia/articulation/data/articulation";

import {
  BenefitsSection,
  BrochureDownload,
  FAQSection,
  IntroductionSection,
  ProgramPathways,
  StudyJourney,
} from "@/features/life-in-australia/articulation/components";

export default function ArticulationPage() {
  return (
    <>
      <PageHero data={ARTICULATION_HERO} />

      <IntroductionSection />

      <BenefitsSection />

      <ProgramPathways />

      <StudyJourney />

      <FAQSection />

      <BrochureDownload />

      <CTASection data={ARTICULATION_CTA} />
    </>
  );
}
