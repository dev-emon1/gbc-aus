import { CONTAINER } from "@/constants/layout";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { TEAM_DATA } from "../data";

import TeamGrid from "./TeamGrid";

export default function TeamSection() {
  const { intro } = TEAM_DATA;

  return (
    <section className="relative overflow-hidden bg-[#FCFCFD] py-28">
      {/* Background Glow */}

      <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#D84D95]/6 blur-[150px]" />

      <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-[#B7D531]/8 blur-[170px]" />

      <div className={CONTAINER}>
        {/* Header */}

        <MotionStagger className="mx-auto max-w-3xl text-center">
          <MotionReveal>
            <span className="inline-flex rounded-full border border-[#D84D95]/15 bg-[#D84D95]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
              {intro.badge}
            </span>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <h2 className="mt-6 text-4xl font-bold leading-[1.08] text-slate-900 md:text-5xl">
              {intro.title}
            </h2>
          </MotionReveal>

          <MotionReveal delay={0.16}>
            <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-[#D84D95]" />
          </MotionReveal>

          <MotionReveal delay={0.24}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              {intro.description}
            </p>
          </MotionReveal>
        </MotionStagger>

        {/* Team Grid */}

        <div className="mt-24">
          <TeamGrid />
        </div>
      </div>
    </section>
  );
}
