import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { ARTICULATION_CONTENT } from "../data/articulation";

import ProgramPathwayCard from "./ProgramPathwayCard";

export default function ProgramPathways() {
  const section = ARTICULATION_CONTENT.pathways;

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#B7D531]/10 blur-[160px]" />

      <div className={`${CONTAINER} relative`}>
        {/* Header */}

        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D84D95]">
              University Pathways
            </span>

            <h2 className="mt-5 text-4xl font-black text-slate-900 lg:text-5xl">
              {section.title}
            </h2>

            <p className="mt-7 text-lg leading-9 text-slate-600">
              {section.subtitle}
            </p>
          </div>
        </MotionReveal>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {section.programs.map((pathway, index) => (
            <MotionReveal key={pathway.id} delay={index * 0.05}>
              <ProgramPathwayCard pathway={pathway} />
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
