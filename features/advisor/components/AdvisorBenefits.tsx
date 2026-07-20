import { BookOpen, BriefcaseBusiness, FileCheck, Globe2 } from "lucide-react";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CONTAINER } from "@/constants/layout";

import { ADVISOR_BENEFITS } from "../data/advisor";

const ICONS = {
  book: BookOpen,
  file: FileCheck,
  career: BriefcaseBusiness,
  globe: Globe2,
};

export default function AdvisorBenefits() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-28">
      {/* Ambient */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#D84D95]/10 blur-[180px]" />

      <div className="absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#B7D531]/10 blur-[200px]" />

      <div className={CONTAINER}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D84D95]">
              Advisor Support
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              Why Talk To An Advisor?
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our advisors provide personalised guidance to help you make
              confident decisions about your study journey.
            </p>
          </div>
        </MotionReveal>

        <MotionStagger className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {ADVISOR_BENEFITS.map((item, index) => {
            const Icon = ICONS[item.icon];

            return (
              <MotionReveal key={item.title} delay={index * 0.08}>
                <article
                  className="
    group
    relative
    flex
    h-[320px]
    flex-col
    overflow-hidden
    rounded-[32px]
    border
    border-slate-200
    bg-white
    p-8
    transition-all
    duration-500
    hover:-translate-y-2
    hover:border-[#D84D95]/20
    hover:shadow-[0_35px_90px_rgba(15,23,42,.12)]
  "
                >
                  {/* Glow */}

                  <div
                    className="
                      absolute
                      -right-10
                      -top-10
                      h-32
                      w-32
                      rounded-full
                      bg-[#D84D95]/10
                      blur-3xl
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  <div className="relative flex h-full flex-col">
                    <div
                      className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        from-[#D84D95]/15
                        to-[#B7D531]/15
                        text-[#D84D95]
                      "
                    >
                      <Icon size={30} />
                    </div>

                    <h3
                      className="
                        mt-8
                        text-2xl
                        font-black
                        text-slate-900
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        text-sm
                        leading-7
                        text-slate-600
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </article>
              </MotionReveal>
            );
          })}
        </MotionStagger>
      </div>
    </section>
  );
}
