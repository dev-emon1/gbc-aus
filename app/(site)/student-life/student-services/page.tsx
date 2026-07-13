import { CTASection } from "@/components/shared/sections/cta";
import { PageHero } from "@/components/shared/sections/page-hero";

import StudentSuccess from "@/features/student-life/student-services/components/StudentSuccess";
import ServicesGrid from "@/features/student-life/student-services/components/ServicesGrid";
import AcademicSupport from "@/features/student-life/student-services/components/AcademicSupport";
import AdministrationServices from "@/features/student-life/student-services/components/AdministrationServices";
import CareerDevelopment from "@/features/student-life/student-services/components/CareerDevelopment";
import DigitalResources from "@/features/student-life/student-services/components/DigitalResources";

import {
  STUDENT_SERVICES_CTA,
  STUDENT_SERVICES_HERO,
} from "@/features/student-life/student-services/data/student-services";

export default function StudentServicesPage() {
  return (
    <>
      <PageHero data={STUDENT_SERVICES_HERO} />

      <StudentSuccess />

      <ServicesGrid />

      <AcademicSupport />

      <AdministrationServices />

      <CareerDevelopment />

      <DigitalResources />

      <CTASection data={STUDENT_SERVICES_CTA} />
    </>
  );
}
