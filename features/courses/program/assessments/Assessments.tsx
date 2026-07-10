import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { Program } from "../../types";

import AssessmentCard from "./AssessmentCard";
import { SectionHeader } from "@/components/shared/sections/section-header";

type Props = {
  program: Program;
};

export default function Assessments({ program }: Props) {
  return (
    <section
      id="assessments"
      className="relative overflow-hidden bg-[#FCFCFC] py-24"
    >
      <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[140px]" />

      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#B7D531]/10 blur-[140px]" />

      <div className={CONTAINER}>
        <SectionHeader
          badge="Assessment"
          title="How You'll Be Assessed"
          description="Throughout your studies you'll complete a variety of competency-based assessments that reflect real workplace expectations."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {program.assessments.map((assessment, index) => (
            <MotionReveal key={assessment} delay={index * 0.05}>
              <AssessmentCard title={assessment} />
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
