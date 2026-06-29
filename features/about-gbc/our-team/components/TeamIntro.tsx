import { CONTAINER } from "@/constants/layout";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { TEAM_DATA } from "../data";

export default function TeamIntro() {
  const { intro } = TEAM_DATA;

  return (
    <section className="py-24">
      <div className={CONTAINER}>
        <MotionStagger className="mx-auto max-w-3xl text-center">
          <MotionReveal>
            <span className="inline-flex rounded-full bg-[#D84D95]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
              {intro.badge}
            </span>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <h2 className="mt-6 text-5xl font-bold text-slate-900">
              {intro.title}
            </h2>
          </MotionReveal>

          <MotionReveal delay={0.16}>
            <p className="mt-7 text-lg leading-8 text-slate-600">
              {intro.description}
            </p>
          </MotionReveal>
        </MotionStagger>
      </div>
    </section>
  );
}
