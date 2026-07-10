import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { Program } from "../../types";

import RequirementItem from "./RequirementItem";
import { SectionHeader } from "@/components/shared/sections/section-header";

type Props = {
  program: Program;
};

export default function Eligibility({ program }: Props) {
  return (
    <section
      id="eligibility"
      className="relative overflow-hidden bg-[#FCFCFC] py-24"
    >
      <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[140px]" />

      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#B7D531]/10 blur-[140px]" />

      <div className={CONTAINER}>
        <SectionHeader
          badge="Eligibility"
          title={program.eligibility.title}
          description={program.eligibility.description}
        />

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
          {program.eligibility.requirements.map((requirement, index) => (
            <MotionReveal key={requirement} delay={index * 0.05}>
              <RequirementItem text={requirement} />
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
