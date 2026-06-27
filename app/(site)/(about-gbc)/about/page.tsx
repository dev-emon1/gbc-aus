import AboutCTA from "@/features/about/components/AboutCTA";
import AboutHero from "@/features/about/components/AboutHero";
import AcknowledgementSection from "@/features/about/components/AcknowledgementSection";
import CollegeOverviewSection from "@/features/about/components/CollegeOverviewSection";
import HistorySection from "@/features/about/components/HistorySection";
import VisionMissionSection from "@/features/about/components/VisionMissionSection";
import WhatWeDoSection from "@/features/about/components/WhatWeDoSection";

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <CollegeOverviewSection />

      <AcknowledgementSection />

      <HistorySection />

      <WhatWeDoSection />

      <VisionMissionSection />

      <AboutCTA />
    </>
  );
}
