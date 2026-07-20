import { CONTAINER } from "@/constants/layout";

import {
  MotionHover,
  MotionReveal,
  MotionStagger,
} from "@/components/shared/animations";

import { AGENT_HIGHLIGHTS } from "../data/highlights";

export default function AgentHighlights() {
  return (
    <section className="relative -mt-14 pb-10">
      <div className={CONTAINER}>
        <MotionStagger className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {AGENT_HIGHLIGHTS.map((item) => {
            const Icon = item.icon;

            return (
              <MotionReveal key={item.title}>
                <MotionHover y={-6}>
                  <article
                    className="
                      h-full
                      rounded-3xl
                      border
                      border-slate-200
                      bg-white
                      p-6
                      shadow-sm
                      transition-all
                      duration-300
                      hover:border-[#D84D95]/20
                      hover:shadow-xl
                    "
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D84D95]/10 text-[#D84D95]">
                      <Icon size={24} />
                    </div>

                    <h3 className="mt-6 text-lg font-semibold text-slate-900">
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
    </section>
  );
}
