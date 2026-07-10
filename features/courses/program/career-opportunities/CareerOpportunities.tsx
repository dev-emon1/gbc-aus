import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { Program } from "../../types";

import CareerCard from "./CareerCard";
import { SectionHeader } from "@/components/shared/sections/section-header";

type Props = {
  program: Program;
};

export default function CareerOpportunities({ program }: Props) {
  return (
    <section
      id="career-opportunities"
      className="relative overflow-hidden bg-[#FCFCFC] py-24"
    >
      <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[140px]" />

      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#B7D531]/10 blur-[140px]" />

      <div className={CONTAINER}>
        <SectionHeader
          badge="Career Opportunities"
          title="Where This Qualification Can Take You"
          description="Graduate with practical skills that prepare you for rewarding careers across Australia's automotive industry."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {program.careerOutcomes.map((career, index) => (
            <MotionReveal key={career.title} delay={index * 0.05}>
              <CareerCard career={career} />
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
