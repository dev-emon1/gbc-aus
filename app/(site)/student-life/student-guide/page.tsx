import { CTASection } from "@/components/shared/sections/cta";
import { PageHero } from "@/components/shared/sections/page-hero";

import DownloadCentre from "@/features/student-life/student-guide/components/DownloadCentre";
import GuideOverview from "@/features/student-life/student-guide/components/GuideOverview";
import HandbookSection from "@/features/student-life/student-guide/components/HandbookSection";
import ImportantPolicies from "@/features/student-life/student-guide/components/ImportantPolicies";
import QuickLinks from "@/features/student-life/student-guide/components/QuickLinks";

import {
  STUDENT_GUIDE_CTA,
  STUDENT_GUIDE_HERO,
} from "@/features/student-life/student-guide/data/student-guide";

export default function StudentGuidePage() {
  return (
    <>
      <PageHero data={STUDENT_GUIDE_HERO} />

      <GuideOverview />

      <HandbookSection />

      <ImportantPolicies />

      <DownloadCentre />

      <QuickLinks />

      <CTASection data={STUDENT_GUIDE_CTA} />
    </>
  );
}
