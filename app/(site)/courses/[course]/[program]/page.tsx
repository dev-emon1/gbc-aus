import { notFound } from "next/navigation";

import { PageHero } from "@/components/shared/sections/page-hero";

import { QuickFacts } from "@/features/courses/program/quick-facts";

import { getStudyAreaBySlug } from "@/features/courses/data/utils";
import { Eligibility } from "@/features/courses/program/eligibility";
import { StudyOutcomes } from "@/features/courses/program/study-outcomes";
import { CareerOpportunities } from "@/features/courses/program/career-opportunities";
import { Subjects } from "@/features/courses/program/subjects";
import { Assessments } from "@/features/courses/program/assessments";
import { FeeInformation } from "@/features/courses/program/fee-information";
import { RelatedPrograms } from "@/features/courses/program/related-programs";
import { SectionNavigation } from "@/components/shared/sections/section-navigation";

type Props = {
  params: Promise<{
    course: string;
    program: string;
  }>;
};

export default async function ProgramPage({ params }: Props) {
  const { course, program } = await params;

  const studyArea = getStudyAreaBySlug(course);

  if (!studyArea) {
    notFound();
  }

  const selectedProgram = studyArea.programs.find(
    (item) => item.slug === program,
  );

  if (!selectedProgram) {
    notFound();
  }

  const heroData = {
    badge: selectedProgram.level,

    title: selectedProgram.title,

    description: selectedProgram.shortDescription,

    backgroundImage: selectedProgram.heroImage,

    breadcrumbs: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Courses",
        href: "/courses",
      },
      {
        label: studyArea.title,
        href: `/courses/${studyArea.slug}`,
      },
      {
        label: selectedProgram.title,
      },
    ],

    metadata: [
      {
        label: selectedProgram.code,
        color: "#D84D95",
      },
      {
        label: selectedProgram.quickFacts.duration,
        color: "#38BDF8",
      },
      {
        label: selectedProgram.quickFacts.campus,
        color: "#B7D531",
      },
      {
        label: selectedProgram.quickFacts.studyMode,
        color: "#F97316",
      },
    ],

    height: "md" as const,
  };

  return (
    <>
      <PageHero data={heroData} />

      <SectionNavigation />

      <QuickFacts program={selectedProgram} />

      <Eligibility program={selectedProgram} />

      <StudyOutcomes program={selectedProgram} />

      <CareerOpportunities program={selectedProgram} />

      <Subjects program={selectedProgram} />

      <Assessments program={selectedProgram} />

      <FeeInformation program={selectedProgram} />

      <RelatedPrograms studyArea={studyArea} currentProgram={selectedProgram} />

      {/* <AdmissionCTA /> */}
    </>
  );
}
