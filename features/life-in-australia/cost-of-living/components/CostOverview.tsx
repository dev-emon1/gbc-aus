import { Bus, House, Ticket, Utensils, Wallet, Wifi } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { COST_OF_LIVING_CONTENT } from "../data/cost-of-living";

const ICONS = {
  house: House,
  utensils: Utensils,
  bus: Bus,
  bolt: Wallet,
  wifi: Wifi,
  ticket: Ticket,
};

export default function CostOverview() {
  const section = COST_OF_LIVING_CONTENT.overview;

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Glow */}

      <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[140px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#B7D531]/10 blur-[160px]" />

      <div className={CONTAINER}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D84D95]">
              Living Expenses
            </span>

            <h2 className="mt-5 text-4xl font-black text-slate-900 lg:text-5xl">
              {section.title}
            </h2>

            <p className="mt-7 text-lg leading-9 text-slate-600">
              {section.subtitle}
            </p>
          </div>
        </MotionReveal>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {section.items.map((item, index) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS];

            return (
              <MotionReveal key={item.title} delay={index * 0.05}>
                <article className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#D84D95]/20 hover:shadow-[0_30px_80px_rgba(15,23,42,.08)]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D84D95]/10 to-[#B7D531]/10 transition-transform duration-500 group-hover:scale-110">
                    <Icon size={30} className="text-[#D84D95]" />
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
