import { MotionHover, MotionReveal } from "@/components/shared/animations";

export default function HistoryContent() {
  return (
    <div className="max-w-md">
      <MotionReveal>
        <span className="inline-flex rounded-full border border-[#D84D95]/15 bg-[#D84D95]/10 px-5 py-2 text-sm font-semibold text-[#D84D95]">
          Our Story
        </span>
      </MotionReveal>

      <MotionReveal delay={0.08}>
        <h2 className="mt-6 text-4xl font-bold leading-[1.1] text-slate-900 md:text-5xl">
          Building Futures
          <br />
          Through Quality
          <br />
          Education.
        </h2>
      </MotionReveal>

      <MotionReveal delay={0.16}>
        <p className="mt-8 text-lg leading-8 text-slate-600">
          George Brown College was established to provide students with an
          engaging learning experience that combines academic excellence,
          practical training and strong industry connections.
        </p>
      </MotionReveal>

      <MotionReveal delay={0.24}>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Our commitment is to develop confident graduates equipped with the
          knowledge, professional skills and real-world experience needed to
          succeed in today's global workforce.
        </p>
      </MotionReveal>

      <MotionReveal delay={0.32}>
        <MotionHover scale={1.02}>
          <div className="mt-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_15px_40px_rgba(15,23,42,0.05)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
              Acknowledgement
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              George Brown College respectfully acknowledges the Traditional
              Custodians of the land and pays respect to Elders past, present
              and emerging.
            </p>
          </div>
        </MotionHover>
      </MotionReveal>
    </div>
  );
}
