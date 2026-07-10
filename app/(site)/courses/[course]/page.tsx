import { notFound } from "next/navigation";

import { PageHero } from "@/components/shared/sections/page-hero";

import { getStudyAreaBySlug } from "@/features/courses/data/utils";
import { AvailablePrograms } from "@/features/courses/sections/available-programs";
import { CareerOpportunities } from "@/features/courses/sections/career-opportunities";
import { StudyAreaOverview } from "@/features/courses/sections/overview";
import { WhyChoose } from "@/features/courses/sections/why-choose";
// import { AdmissionCTA } from "@/features/courses/sections/admission-cta";

type Props = {
  params: Promise<{
    course: string;
  }>;
};

export default async function StudyAreaPage({ params }: Props) {
  const { course } = await params;

  const studyArea = getStudyAreaBySlug(course);

  if (!studyArea) {
    notFound();
  }

  const heroData = {
    badge: "Study Area",

    title: studyArea.title,

    description: studyArea.overview.description,

    backgroundImage: studyArea.image,

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
      },
    ],

    metadata: [
      {
        label: `${studyArea.programs.length} Programs`,
        color: "#D84D95",
      },
      {
        label: "Industry Focused",
        color: "#38BDF8",
      },
      {
        label: "Sydney Campus",
        color: "#B7D531",
      },
    ],
  };

  return (
    <>
      <PageHero data={heroData} />

      <StudyAreaOverview studyArea={studyArea} />

      <AvailablePrograms studyArea={studyArea} />

      <WhyChoose studyArea={studyArea} />

      <CareerOpportunities studyArea={studyArea} />

      {/* <AdmissionCTA studyArea={studyArea} /> */}
    </>
  );
}
