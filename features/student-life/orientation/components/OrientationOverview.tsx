import {
  BookOpen,
  IdCard,
  Laptop,
  Map,
  Presentation,
  Users,
} from "lucide-react";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CONTAINER } from "@/constants/layout";

import { ORIENTATION_CONTENT } from "../data/orientation";

const ICONS = {
  handshake: Presentation,
  map: Map,
  monitor: Laptop,
  users: Users,
  badge: IdCard,
  "book-open": BookOpen,
};

export default function OrientationOverview() {
  const section = ORIENTATION_CONTENT.overview;

  return (
    <section
      id="orientation-overview"
      className="relative overflow-hidden bg-slate-50 py-24 lg:py-28"
    >
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[140px]" />

      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#B7D531]/10 blur-[150px]" />

      <div className={CONTAINER}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
              Orientation Program
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              {section.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {section.description}
            </p>
          </div>
        </MotionReveal>

        <MotionStagger className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {section.items.map((item, index) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS] ?? Presentation;

            return (
              <MotionReveal key={item.title} delay={index * 0.08}>
                <div className="group flex h-full flex-col rounded-[28px] border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#D84D95]/20 hover:shadow-[0_25px_60px_rgba(15,23,42,.08)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D84D95]/10 text-[#D84D95] transition-all duration-300 group-hover:bg-[#D84D95] group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 flex-1 text-[15px] leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <span className="inline-flex rounded-full bg-[#B7D531]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#6E8E1D]">
                      Included
                    </span>
                  </div>
                </div>
              </MotionReveal>
            );
          })}
        </MotionStagger>
      </div>
    </section>
  );
}
