import { CONTAINER } from "@/constants/layout";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CAREER_DATA } from "../data";

import CareerBenefitItem from "./CareerBenefitItem";

export default function CareerBenefitsSection() {
  const { benefits } = CAREER_DATA;

  return (
    <section className="relative overflow-hidden bg-[#FCFCFD] py-28">
      {/* Glow */}

      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#D84D95]/6 blur-[150px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#B7D531]/8 blur-[170px]" />

      <div className={CONTAINER}>
        <MotionStagger className="mx-auto max-w-3xl text-center">
          <MotionReveal>
            <span className="inline-flex rounded-full border border-[#D84D95]/15 bg-[#D84D95]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
              {benefits.badge}
            </span>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              {benefits.title}
            </h2>
          </MotionReveal>

          <MotionReveal delay={0.16}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              {benefits.description}
            </p>
          </MotionReveal>
        </MotionStagger>

        <div className="mt-24 grid gap-8 lg:grid-cols-2">
          {benefits.items.map((item) => (
            <CareerBenefitItem key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
