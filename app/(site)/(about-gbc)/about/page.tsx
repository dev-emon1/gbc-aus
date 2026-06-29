import AboutCTA from "@/features/about-gbc/about/components/AboutCTA";
import AboutHero from "@/features/about-gbc/about/components/AboutHero";
import AcknowledgementSection from "@/features/about-gbc/about/components/AcknowledgementSection";
import CollegeOverviewSection from "@/features/about-gbc/about/components/CollegeOverviewSection";
import HistorySection from "@/features/about-gbc/about/components/HistorySection";
import VisionMissionSection from "@/features/about-gbc/about/components/VisionMissionSection";
import WhatWeDoSection from "@/features/about-gbc/about/components/WhatWeDoSection";

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
