import CTASection from "@/components/shared/sections/cta/CTASection";
import PageHero from "@/components/shared/sections/page-hero/PageHero";

import { ADVISOR_CTA, ADVISOR_HERO } from "@/features/advisor/data/advisor";

import AdvisorBenefits from "@/features/advisor/components/AdvisorBenefits";
import AdvisorFAQ from "@/features/advisor/components/AdvisorFAQ";
import AdvisorForm from "@/features/advisor/components/AdvisorForm";
import AdvisorHelp from "@/features/advisor/components/AdvisorHelp";

export default function MeetAdvisorPage() {
  return (
    <>
      <PageHero data={ADVISOR_HERO} />

      <AdvisorBenefits />

      <AdvisorHelp />

      <AdvisorForm />

      <AdvisorFAQ />

      <CTASection data={ADVISOR_CTA} />
    </>
  );
}
