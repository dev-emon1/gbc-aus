import { CONTAINER } from "@/constants/layout";

import {
  MotionHover,
  MotionReveal,
  MotionStagger,
} from "@/components/shared/animations";

import { WHY_PARTNER } from "../data/why-partner";

export default function WhyPartner() {
  return (
    <section className="section-padding">
      <div className={CONTAINER}>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          {/* Left */}

          <MotionStagger>
            <MotionReveal>
              <span className="inline-flex rounded-full bg-[#D84D95]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
                {WHY_PARTNER.badge}
              </span>
            </MotionReveal>

            <MotionReveal delay={0.08}>
              <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
                {WHY_PARTNER.title}
              </h2>
            </MotionReveal>

            <MotionReveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                {WHY_PARTNER.description}
              </p>
            </MotionReveal>
          </MotionStagger>

          {/* Right */}

          <MotionStagger className="grid gap-5 sm:grid-cols-2">
            {WHY_PARTNER.items.map((item) => {
              const Icon = item.icon;

              return (
                <MotionReveal key={item.title}>
                  <MotionHover y={-6}>
                    <article
                      className="
                        rounded-3xl
                        border
                        border-slate-200
                        bg-white
                        p-6
                        transition-all
                        duration-300
                        hover:border-[#D84D95]/20
                        hover:shadow-xl
                      "
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D84D95]/10 text-[#D84D95]">
                        <Icon size={22} />
                      </div>

                      <h3 className="mt-5 text-lg font-semibold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </article>
                  </MotionHover>
                </MotionReveal>
              );
            })}
          </MotionStagger>
        </div>
      </div>
    </section>
  );
}
