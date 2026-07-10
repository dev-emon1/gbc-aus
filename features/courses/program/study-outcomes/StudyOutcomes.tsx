import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { Program } from "../../types";

import OutcomeCard from "./OutcomeCard";
import PathwayTimeline from "./PathwayTimeline";
import { SectionHeader } from "@/components/shared/sections/section-header";

type Props = {
  program: Program;
};

export default function StudyOutcomes({ program }: Props) {
  return (
    <section
      id="study-outcomes"
      className="relative overflow-hidden bg-white py-24"
    >
      <div className="absolute -left-44 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[140px]" />

      <div className="absolute -right-44 bottom-0 h-80 w-80 rounded-full bg-[#B7D531]/10 blur-[140px]" />

      <div className={CONTAINER}>
        <SectionHeader
          badge="Study Outcomes"
          title={program.studyOutcomes.title}
          description="Discover the practical knowledge, technical skills and career-ready capabilities you will develop throughout this qualification."
        />

        <div className="mt-16 grid gap-10 xl:grid-cols-[1.5fr_.9fr]">
          <MotionReveal>
            <div>
              <h3 className="mb-6 text-2xl font-bold text-slate-900">
                What You'll Learn
              </h3>

              <div className="grid gap-5">
                {program.studyOutcomes.description.map((item, index) => (
                  <MotionReveal key={item} delay={index * 0.05}>
                    <OutcomeCard text={item} />
                  </MotionReveal>
                ))}
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.15}>
            <PathwayTimeline pathways={program.studyOutcomes.pathways} />
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
