import { CTASection } from "@/components/shared/sections/cta";
import { PageHero } from "@/components/shared/sections/page-hero";

import CampusSafety from "@/features/student-life/safety/components/CampusSafety";
import EmergencyContacts from "@/features/student-life/safety/components/EmergencyContacts";
import EmergencyProcedure from "@/features/student-life/safety/components/EmergencyProcedure";
import PersonalSafety from "@/features/student-life/safety/components/PersonalSafety";
import SafetyIntro from "@/features/student-life/safety/components/SafetyIntro";
import TravelSafety from "@/features/student-life/safety/components/TravelSafety";

import {
  SAFETY_CTA,
  SAFETY_HERO,
} from "@/features/student-life/safety/data/safety";

export default function SafetyPage() {
  return (
    <>
      <PageHero data={SAFETY_HERO} />

      <SafetyIntro />

      <CampusSafety />

      <EmergencyContacts />

      <PersonalSafety />

      <TravelSafety />

      <EmergencyProcedure />

      <CTASection data={SAFETY_CTA} />
    </>
  );
}
