import { CONTAINER } from "@/constants/layout";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CAREER_DATA } from "../data";

import CareerRoadmapStep from "./CareerRoadmapStep";

export default function CareerHiringRoadmap() {
  const { hiringProcess } = CAREER_DATA;

  return (
    <section className="relative overflow-hidden bg-[#FAFAFB] py-28">
      {/* Glow */}

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#D84D95]/5 blur-[180px]" />

      <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[#B7D531]/8 blur-[180px]" />

      <div className={CONTAINER}>
        <MotionStagger className="mx-auto max-w-3xl text-center">
          <MotionReveal>
            <span className="inline-flex rounded-full border border-[#D84D95]/15 bg-[#D84D95]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
              {hiringProcess.badge}
            </span>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
              {hiringProcess.title}
            </h2>
          </MotionReveal>

          <MotionReveal delay={0.16}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              {hiringProcess.description}
            </p>
          </MotionReveal>
        </MotionStagger>

        {/* Roadmap */}

        <div className="relative mx-auto mt-24 max-w-6xl">
          {/* Center Line */}

          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#D84D95] via-slate-300 to-[#B7D531] lg:block" />

          <div className="space-y-16">
            {hiringProcess.steps.map((step, index) => (
              <CareerRoadmapStep
                key={step.title}
                step={step}
                index={index}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
