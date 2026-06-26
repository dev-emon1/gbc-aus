import { MotionReveal } from "@/components/shared/animations";

export default function AdvantagesContent() {
  return (
    <div className="max-w-xl">
      <MotionReveal>
        <span className="inline-flex rounded-full border border-[#D84D95]/15 bg-[#D84D95]/10 px-5 py-2 text-sm font-semibold text-[#D84D95]">
          Why Students Choose GBC
        </span>
      </MotionReveal>

      <MotionReveal delay={0.08}>
        <h2 className="mt-6 text-4xl font-bold leading-[1.1] text-slate-900 md:text-5xl">
          Learn With
          <br />
          Confidence.
          <br />
          Graduate With Purpose.
        </h2>
      </MotionReveal>

      <MotionReveal delay={0.16}>
        <p className="mt-8 text-lg leading-8 text-slate-600">
          George Brown College provides an engaging learning environment where
          students benefit from practical education, experienced educators and
          personalised support throughout their academic journey.
        </p>
      </MotionReveal>

      <MotionReveal delay={0.24}>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Our commitment to quality education, industry relevance and student
          success helps graduates develop the confidence and skills needed for
          future career opportunities.
        </p>
      </MotionReveal>
    </div>
  );
}
