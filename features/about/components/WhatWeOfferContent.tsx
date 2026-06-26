import { MotionReveal } from "@/components/shared/animations";

export default function WhatWeOfferContent() {
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
          Designed For
          <br />
          Real Careers.
        </h2>
      </MotionReveal>

      <MotionReveal delay={0.16}>
        <p className="mt-8 text-lg leading-8 text-slate-600">
          We provide practical education, experienced educators and
          industry-relevant learning that prepares students with the knowledge
          and confidence to achieve long-term career success.
        </p>
      </MotionReveal>
    </div>
  );
}
