import { CONTAINER } from "@/constants/layout";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CAREER_DATA } from "../data";

export default function CareerIntroSection() {
  const { intro } = CAREER_DATA;

  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background Glow */}

      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[150px]" />

      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#B7D531]/8 blur-[170px]" />

      <div className={CONTAINER}>
        <MotionStagger className="mx-auto max-w-5xl">
          <MotionReveal>
            <span className="inline-flex rounded-full border border-[#D84D95]/15 bg-[#D84D95]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
              {intro.badge}
            </span>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <h2 className="mt-7 max-w-4xl text-4xl font-bold leading-[1.08] text-slate-900 md:text-5xl xl:text-6xl">
              {intro.title}
            </h2>
          </MotionReveal>

          <MotionReveal delay={0.16}>
            <div className="mt-8 h-1 w-24 rounded-full bg-[#D84D95]" />
          </MotionReveal>

          <MotionReveal delay={0.24}>
            <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_.8fr]">
              <p className="text-[18px] leading-9 text-slate-600">
                {intro.description}
              </p>

              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
                  {intro.commitment.title}
                </p>

                <p className="mt-5 text-[16px] leading-8 text-slate-600">
                  {intro.commitment.description}
                </p>
              </div>
            </div>
          </MotionReveal>
        </MotionStagger>
      </div>
    </section>
  );
}
