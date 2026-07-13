import {
  ArrowRight,
  Bus,
  House,
  Ticket,
  Utensils,
  Wallet,
  Wifi,
} from "lucide-react";

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

const PRIORITY = {
  Accommodation: {
    label: "Highest Expense",
    progress: 100,
    color: "bg-red-500",
  },

  "Food & Groceries": {
    label: "Essential",
    progress: 70,
    color: "bg-[#D84D95]",
  },

  Transport: {
    label: "Medium",
    progress: 45,
    color: "bg-[#B7D531]",
  },

  Utilities: {
    label: "Medium",
    progress: 35,
    color: "bg-[#B7D531]",
  },

  "Internet & Mobile": {
    label: "Low",
    progress: 25,
    color: "bg-[#B7D531]",
  },

  Entertainment: {
    label: "Flexible",
    progress: 50,
    color: "bg-[#D84D95]",
  },
};

export default function ExpenseBreakdown() {
  const section = COST_OF_LIVING_CONTENT.expenses;

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      {/* Glow */}

      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-[#D84D95]/5 blur-[150px]" />

      <div className="absolute -right-24 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#B7D531]/10 blur-[170px]" />

      <div className={CONTAINER}>
        {/* Header */}

        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D84D95]">
              Weekly Budget Guide
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

        <div className="mt-20 grid gap-8 xl:grid-cols-2">
          {section.items.map((item, index) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS];

            const priority = PRIORITY[item.title as keyof typeof PRIORITY];

            return (
              <MotionReveal key={item.title} delay={index * 0.05}>
                <article className="group overflow-hidden rounded-[34px] border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#D84D95]/20 hover:shadow-[0_40px_100px_rgba(15,23,42,.10)]">
                  {/* Top Accent */}

                  <div className="h-1 w-full bg-gradient-to-r from-[#D84D95] to-[#B7D531]" />

                  <div className="p-8">
                    {/* Header */}

                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-5">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D84D95]/10 to-[#B7D531]/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                          <Icon size={30} className="text-[#D84D95]" />
                        </div>

                        <div>
                          <h3 className="text-2xl font-black text-slate-900">
                            {item.title}
                          </h3>

                          <span className="mt-2 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                            {priority.label}
                          </span>
                        </div>
                      </div>

                      <ArrowRight className="text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#D84D95]" />
                    </div>

                    {/* Weekly & Monthly */}

                    <div className="mt-10 grid gap-5 sm:grid-cols-2">
                      <div className="rounded-2xl bg-slate-50 p-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                          Weekly Estimate
                        </p>

                        <h4 className="mt-3 text-4xl font-black text-slate-900">
                          {item.weekly}
                        </h4>
                      </div>

                      <div className="rounded-2xl bg-slate-50 p-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                          Monthly Estimate
                        </p>

                        <h4 className="mt-3 text-4xl font-black text-[#D84D95]">
                          {item.monthly}
                        </h4>
                      </div>
                    </div>

                    {/* Progress */}

                    <div className="mt-8">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-500">
                          Typical Student Spending
                        </span>

                        <span className="text-sm font-bold text-slate-900">
                          {priority.progress}%
                        </span>
                      </div>

                      <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">
                        <div
                          className={`${priority.color} h-full rounded-full transition-all duration-700 group-hover:brightness-110`}
                          style={{
                            width: `${priority.progress}%`,
                          }}
                        />
                      </div>

                      <p className="mt-5 leading-7 text-slate-600">
                        These figures are estimates only and may vary depending
                        on your personal lifestyle, accommodation type and
                        spending habits while living in Australia.
                      </p>
                    </div>

                    {/* Footer */}

                    <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                          Budget Category
                        </p>

                        <p className="mt-2 font-bold text-slate-900">
                          Essential Living Expense
                        </p>
                      </div>

                      <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-[#D84D95] hover:text-[#D84D95]">
                        Learn More
                        <ArrowRight size={16} />
                      </button>
                    </div>
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
