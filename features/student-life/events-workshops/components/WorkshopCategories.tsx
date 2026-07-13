import {
  Globe,
  Handshake,
  Map,
  PartyPopper,
  Trophy,
  Users,
} from "lucide-react";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CONTAINER } from "@/constants/layout";

import { EVENTS_WORKSHOPS_CONTENT } from "../data/events-workshops";

const ICONS = {
  globe: Globe,
  map: Map,
  trophy: Trophy,
  users: Users,
  handshake: Handshake,
  "party-popper": PartyPopper,
};

export default function WorkshopCategories() {
  const section = EVENTS_WORKSHOPS_CONTENT.categories;

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      {/* Ambient */}

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[140px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#B7D531]/10 blur-[160px]" />

      <div className={CONTAINER}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
              Workshop Categories
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
            const Icon = ICONS[item.icon as keyof typeof ICONS] ?? Globe;

            return (
              <MotionReveal key={item.title} delay={index * 0.08}>
                <div className="group h-full rounded-[30px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#D84D95]/20 hover:shadow-[0_25px_60px_rgba(15,23,42,.08)]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D84D95]/10 text-[#D84D95] transition-all duration-300 group-hover:bg-[#D84D95] group-hover:text-white">
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-8 border-t border-slate-100 pt-5">
                    <span className="rounded-full bg-[#B7D531]/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#6E8E1D]">
                      Workshop
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
