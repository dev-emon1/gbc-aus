import { Coffee, Globe2, Mountain } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { STUDY_AUSTRALIA_CONTENT } from "../data/study-australia";

const ICONS = {
  globe: Globe2,
  mountain: Mountain,
  coffee: Coffee,
};

export default function WhyStudyAustralia() {
  const section = STUDY_AUSTRALIA_CONTENT.introduction;

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#B7D531]/10 blur-[150px]" />

      <div className={`${CONTAINER} relative`}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D84D95]">
              Why Australia
            </span>

            <h2 className="mt-5 text-4xl font-black text-slate-900 lg:text-5xl">
              {section.heading}
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-9 text-slate-600">
              {section.subtitle}
            </p>
          </div>
        </MotionReveal>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {section.highlights.map((item, index) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS];

            return (
              <MotionReveal key={item.title} delay={index * 0.08}>
                <article
                  className="
                    group
                    relative
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
                    hover:shadow-[0_30px_80px_rgba(15,23,42,.08)]
                  "
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#D84D95] to-[#B7D531] opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-[#D84D95]/10
                      to-[#B7D531]/10
                    "
                  >
                    <Icon className="h-8 w-8 text-[#D84D95]" />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">
                    {item.description}
                  </p>
                </article>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
