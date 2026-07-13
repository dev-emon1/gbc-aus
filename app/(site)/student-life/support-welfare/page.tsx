import { CTASection } from "@/components/shared/sections/cta";
import { PageHero } from "@/components/shared/sections/page-hero";

import CounsellingSupport from "@/features/student-life/support-welfare/components/CounsellingSupport";
import HelpBanner from "@/features/student-life/support-welfare/components/HelpBanner";
import StudentWellbeing from "@/features/student-life/support-welfare/components/StudentWellbeing";
import SupportResources from "@/features/student-life/support-welfare/components/SupportResources";
import SupportServices from "@/features/student-life/support-welfare/components/SupportServices";
import WellbeingIntroduction from "@/features/student-life/support-welfare/components/WellbeingIntroduction";

import {
  SUPPORT_WELFARE_CTA,
  SUPPORT_WELFARE_HERO,
} from "@/features/student-life/support-welfare/data/support-welfare";

export default function SupportWelfarePage() {
  return (
    <>
      <PageHero data={SUPPORT_WELFARE_HERO} />

      <WellbeingIntroduction />

      <SupportServices />

      <CounsellingSupport />

      <StudentWellbeing />

      <SupportResources />

      <HelpBanner />

      <CTASection data={SUPPORT_WELFARE_CTA} />
    </>
  );
}