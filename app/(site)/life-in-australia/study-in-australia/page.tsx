import { PageHero } from "@/components/shared/sections/page-hero";
import { StudentBenefits } from "@/features/life-in-australia/study-in-australia/components";
import AustraliaStats from "@/features/life-in-australia/study-in-australia/components/AustraliaStats";
import DiscoverSydney from "@/features/life-in-australia/study-in-australia/components/DiscoverSydney";
import ExploreGuides from "@/features/life-in-australia/study-in-australia/components/ExploreGuides";
import WhyStudyAustralia from "@/features/life-in-australia/study-in-australia/components/WhyStudyAustralia";
import {
  STUDY_CTA,
  STUDY_HERO,
} from "@/features/life-in-australia/study-in-australia/data/study-australia";
import { CTASection } from "@/components/shared/sections/cta";

export default function StudyInAustraliaPage() {
  return (
    <>
      <PageHero data={STUDY_HERO} />

      <WhyStudyAustralia />

      <DiscoverSydney />

      <AustraliaStats />

      <StudentBenefits />

      <ExploreGuides />

      <CTASection data={STUDY_CTA} />
    </>
  );
}
