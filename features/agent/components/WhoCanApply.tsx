import { CheckCircle2 } from "lucide-react";

import { CONTAINER } from "@/constants/layout";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { WHO_CAN_APPLY } from "../data/who-can-apply";

export default function WhoCanApply() {
  return (
    <section className="pb-28">
      <div className={CONTAINER}>
        <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left */}

            <div className="bg-slate-950 p-10 lg:p-14">
              <MotionStagger>
                <MotionReveal>
                  <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    {WHO_CAN_APPLY.badge}
                  </span>
                </MotionReveal>

                <MotionReveal delay={0.08}>
                  <h2 className="mt-6 text-4xl font-bold leading-tight text-white">
                    {WHO_CAN_APPLY.title}
                  </h2>
                </MotionReveal>

                <MotionReveal delay={0.16}>
                  <p className="mt-6 text-lg leading-8 text-white/70">
                    {WHO_CAN_APPLY.description}
                  </p>
                </MotionReveal>
              </MotionStagger>
            </div>

            {/* Right */}

            <MotionStagger className="grid gap-8 p-10 lg:p-14">
              {WHO_CAN_APPLY.items.map((item) => {
                const Icon = item.icon;

                return (
                  <MotionReveal key={item.title}>
                    <div className="flex gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D84D95]/10 text-[#D84D95]">
                        <Icon size={22} />
                      </div>

                      <div>
                        <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                          {item.title}

                          <CheckCircle2 size={16} className="text-[#B7D531]" />
                        </h3>

                        <p className="mt-2 leading-7 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </MotionReveal>
                );
              })}
            </MotionStagger>
          </div>
        </div>
      </div>
    </section>
  );
}
