import CampusExperience from "@/features/home/components/campus/CampusExperience";
import FeaturedCourses from "@/features/home/components/FeaturedCourses";
import HeroSection from "@/features/home/components/hero/HeroSection";
import TrustStrip from "@/features/home/components/TrustStrip";
import WhyChooseGBC from "@/features/home/components/why-gbc/WhyChooseGBC";
import FinalCTASection from "@/features/home/components/cta/FinalCTASection";
import ResourcesSection from "@/features/home/components/resources/ResourcesSection";
import { HOME_TESTIMONIALS } from "@/features/home/components/student-success/home-testimonials";
import { TestimonialsSection } from "@/components/shared/sections/testimonials";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <TrustStrip />

      <FeaturedCourses />

      <WhyChooseGBC />

      <CampusExperience />

      {/* <StudentSuccessSection /> */}

      <TestimonialsSection variant="home" data={HOME_TESTIMONIALS} />

      <ResourcesSection />

      <FinalCTASection />
    </>
  );
}
