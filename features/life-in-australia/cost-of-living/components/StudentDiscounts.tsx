import {
  BadgePercent,
  Bus,
  Laptop,
  ShoppingBag,
  Ticket,
  Utensils,
} from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { COST_OF_LIVING_CONTENT } from "../data/cost-of-living";

const ICONS = {
  bus: Bus,
  utensils: Utensils,
  ticket: Ticket,
  "shopping-bag": ShoppingBag,
  laptop: Laptop,
  dumbbell: BadgePercent,
};

export default function StudentDiscounts() {
  const section = COST_OF_LIVING_CONTENT.discounts;

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[140px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#B7D531]/10 blur-[170px]" />

      <div className={CONTAINER}>
        {/* Heading */}

        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D84D95]">
              Student Benefits
            </span>

            <h2 className="mt-5 text-4xl font-black text-slate-900 lg:text-5xl">
              {section.title}
            </h2>

            <p className="mt-7 text-lg leading-9 text-slate-600">
              {section.subtitle}
            </p>
          </div>
        </MotionReveal>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {section.items.map((item, index) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS];

            return (
              <MotionReveal key={item.title} delay={index * 0.05}>
                <article className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#D84D95]/20 hover:shadow-[0_35px_90px_rgba(15,23,42,.08)]">
                  {/* Hover Border */}

                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#D84D95] to-[#B7D531] opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Icon */}

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D84D95]/10 to-[#B7D531]/10 transition-transform duration-500 group-hover:scale-110">
                    <Icon size={30} className="text-[#D84D95]" />
                  </div>

                  {/* Content */}

                  <h3 className="mt-8 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">
                    {item.description}
                  </p>

                  {/* Badge */}

                  <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#B7D531]/10 px-4 py-2 text-sm font-semibold text-[#6E8E1D]">
                    <BadgePercent size={16} />
                    Student Savings
                  </div>
                </article>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
