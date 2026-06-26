import { MotionReveal } from "@/components/shared/animations";

export default function ServicesContent() {
  return (
    <div className="max-w-md">
      <MotionReveal>
        <span className="inline-flex rounded-full border border-[#D84D95]/15 bg-[#D84D95]/10 px-5 py-2 text-sm font-semibold text-[#D84D95]">
          What We Offer
        </span>
      </MotionReveal>

      <MotionReveal delay={0.08}>
        <h2 className="mt-6 text-4xl font-bold leading-[1.1] text-slate-900 md:text-5xl">
          Education
          <br />
          Built Around
          <br />
          Student Success.
        </h2>
      </MotionReveal>

      <MotionReveal delay={0.16}>
        <p className="mt-8 text-lg leading-8 text-slate-600">
          At George Brown College, we combine quality education with practical
          learning to help students develop the skills, confidence and knowledge
          required for long-term professional success.
        </p>
      </MotionReveal>

      <MotionReveal delay={0.24}>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Our learning environment encourages academic excellence, industry
          engagement and personal growth, preparing graduates for the challenges
          of today's global workforce.
        </p>
      </MotionReveal>
    </div>
  );
}
