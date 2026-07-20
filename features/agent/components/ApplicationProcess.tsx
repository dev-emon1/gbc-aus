import { ArrowRight } from "lucide-react";

import { CONTAINER } from "@/constants/layout";

import {
  MotionHover,
  MotionReveal,
  MotionStagger,
} from "@/components/shared/animations";

import { AGENT_PROCESS } from "../data/process";

export default function ApplicationProcess() {
  return (
    <section className="section-padding bg-slate-50">
      <div className={CONTAINER}>
        <MotionStagger className="mx-auto max-w-3xl text-center">
          <MotionReveal>
            <span className="inline-flex rounded-full bg-[#D84D95]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
              {AGENT_PROCESS.badge}
            </span>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
              {AGENT_PROCESS.title}
            </h2>
          </MotionReveal>

          <MotionReveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {AGENT_PROCESS.description}
            </p>
          </MotionReveal>
        </MotionStagger>

        <MotionStagger className="mt-20 grid gap-6 lg:grid-cols-5">
          {AGENT_PROCESS.steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <MotionReveal key={step.number}>
                <MotionHover y={-6}>
                  <div className="relative h-full">
                    <article className="rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-[#D84D95]/20 hover:shadow-xl">
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D84D95]/10 text-[#D84D95]">
                          <Icon size={22} />
                        </div>

                        <span className="text-2xl font-bold text-slate-200">
                          {step.number}
                        </span>
                      </div>

                      <h3 className="mt-6 text-lg font-semibold text-slate-900">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {step.description}
                      </p>
                    </article>

                    {index !== AGENT_PROCESS.steps.length - 1 && (
                      <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 lg:flex">
                        <ArrowRight size={20} className="text-[#D84D95]" />
                      </div>
                    )}
                  </div>
                </MotionHover>
              </MotionReveal>
            );
          })}
        </MotionStagger>
      </div>
    </section>
  );
}
