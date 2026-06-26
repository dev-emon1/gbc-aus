import AboutHero from "@/features/about/components/AboutHero";
import WelcomeSection from "@/features/about/components/WelcomeSection";
import HistorySection from "@/features/about/components/HistorySection";
import ServicesSection from "@/features/about/components/ServicesSection";
import AdvantagesSection from "@/features/about/components/AdvantagesSection";
import VisionMissionSection from "@/features/about/components/VisionMissionSection";
import AboutCTA from "@/features/about/components/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <WelcomeSection />

      <HistorySection />

      <ServicesSection />

      <AdvantagesSection />

      <VisionMissionSection />

      <AboutCTA />
    </>
  );
}
