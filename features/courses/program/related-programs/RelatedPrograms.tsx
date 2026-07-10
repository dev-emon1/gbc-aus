import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import ProgramCard from "@/features/courses/components/cards/ProgramCard";

import { Program, StudyArea } from "../../types";
import { SectionHeader } from "@/components/shared/sections/section-header";

type Props = {
  studyArea: StudyArea;

  currentProgram: Program;
};

export default function RelatedPrograms({ studyArea, currentProgram }: Props) {
  const relatedPrograms = studyArea.programs.filter(
    (program) => program.id !== currentProgram.id,
  );

  if (!relatedPrograms.length) {
    return null;
  }

  return (
    <section
      id="related-programs"
      className="relative overflow-hidden bg-[#FCFCFC] py-24"
    >
      <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[140px]" />

      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#B7D531]/10 blur-[140px]" />

      <div className={CONTAINER}>
        <SectionHeader
          badge="Related Programs"
          title="Continue Your Learning Journey"
          description={`Explore other qualifications available within the ${studyArea.title} study area.`}
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {relatedPrograms.map((program, index) => (
            <MotionReveal key={program.id} delay={index * 0.08}>
              <ProgramCard studyArea={studyArea} program={program} />
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
