import { CTASection } from "@/components/shared/sections/cta";
import { PageHero } from "@/components/shared/sections/page-hero";

import ArrivalChecklist from "@/features/student-life/orientation/components/ArrivalChecklist";
import FirstWeekTimeline from "@/features/student-life/orientation/components/FirstWeekTimeline";
import OrientationOverview from "@/features/student-life/orientation/components/OrientationOverview";
import StudentEssentials from "@/features/student-life/orientation/components/StudentEssentials";
import WelcomeSection from "@/features/student-life/orientation/components/WelcomeSection";

import {
  ORIENTATION_CTA,
  ORIENTATION_HERO,
} from "@/features/student-life/orientation/data/orientation";

export default function OrientationPage() {
  return (
    <>
      <PageHero data={ORIENTATION_HERO} />

      <WelcomeSection />

      <OrientationOverview />

      <ArrivalChecklist />

      <StudentEssentials />

      <FirstWeekTimeline />

      <CTASection data={ORIENTATION_CTA} />
    </>
  );
}
