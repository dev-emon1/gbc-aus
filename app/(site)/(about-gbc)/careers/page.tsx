import { CTASection } from "@/components/shared/sections/cta";
import { PageHero } from "@/components/shared/sections/page-hero";

import { CAREER_DATA } from "@/features/about-gbc/careers/data";

import CareerBenefitsSection from "@/features/about-gbc/careers/components/CareerBenefitsSection";
import CareerCultureSection from "@/features/about-gbc/careers/components/CareerCultureSection";
import CareerHiringRoadmap from "@/features/about-gbc/careers/components/CareerHiringRoadmap";
import CareerIdealCandidateSection from "@/features/about-gbc/careers/components/CareerIdealCandidateSection";
import CareerIntroSection from "@/features/about-gbc/careers/components/CareerIntroSection";
import CareerOpportunitiesSection from "@/features/about-gbc/careers/components/CareerOpportunitiesSection";

export default function CareersPage() {
  return (
    <>
      <PageHero data={CAREER_DATA.hero} />

      <CareerIntroSection />

      <CareerBenefitsSection />

      <CareerHiringRoadmap />

      <CareerCultureSection />

      <CareerIdealCandidateSection />

      <CareerOpportunitiesSection />

      <CTASection data={CAREER_DATA.cta} />
    </>
  );
}
