"use client";

import { useMemo, useState } from "react";
import {
  Building2,
  Calculator,
  CheckCircle2,
  Home,
  House,
  Wallet,
} from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";
import { COST_OF_LIVING_CONTENT } from "../data/cost-of-living";

const ICONS = {
  shared: House,
  homestay: Home,
  studio: Building2,
};

export default function BudgetCalculator() {
  const section = COST_OF_LIVING_CONTENT.calculator;

  const [selected, setSelected] = useState(section.options[0].id);

  const budget = useMemo(
    () =>
      section.options.find((item) => item.id === selected) ??
      section.options[0],
    [selected, section.options],
  );

  const weekly =
    budget.accommodation +
    budget.food +
    budget.transport +
    budget.utilities +
    budget.internet +
    budget.entertainment;

  const monthly = Math.round(weekly * 4.33);
  const yearly = weekly * 52;

  const status =
    weekly < 550
      ? {
          title: "Budget Friendly",
          description:
            "Shared accommodation is generally the most affordable option for international students.",
          color: "#16A34A",
        }
      : weekly < 650
        ? {
            title: "Moderate Budget",
            description:
              "A balanced option offering additional comfort while maintaining manageable expenses.",
            color: "#D84D95",
          }
        : {
            title: "Premium Budget",
            description:
              "Private accommodation offers greater independence with higher weekly living costs.",
            color: "#B45309",
          };

  const breakdown = [
    {
      label: "Accommodation",
      value: budget.accommodation,
    },
    {
      label: "Food",
      value: budget.food,
    },
    {
      label: "Transport",
      value: budget.transport,
    },
    {
      label: "Utilities",
      value: budget.utilities,
    },
    {
      label: "Internet",
      value: budget.internet,
    },
    {
      label: "Entertainment",
      value: budget.entertainment,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#D84D95]/5 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#B7D531]/10 blur-[140px]" />
      </div>

      <div className={`${CONTAINER} relative`}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-[#D84D95]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#D84D95]">
              Budget Calculator
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900 md:text-4xl lg:text-5xl">
              {section.title}
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
              {section.subtitle}
            </p>
          </div>
        </MotionReveal>

        <div className="mt-12 grid gap-8 xl:grid-cols-[320px_1fr]">
          {/* LEFT PANEL */}

          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-2xl font-black text-slate-900">
              Choose Accommodation
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Select the accommodation option that best suits your lifestyle.
            </p>

            <div className="mt-6 space-y-3">
              {section.options.map((option) => {
                const Icon = ICONS[option.id as keyof typeof ICONS];
                const active = option.id === selected;

                return (
                  <button
                    key={option.id}
                    onClick={() => setSelected(option.id)}
                    className={`group flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${
                      active
                        ? "border-[#D84D95] bg-white shadow-lg shadow-[#D84D95]/10"
                        : "border-slate-200 bg-white hover:border-[#D84D95]/30"
                    }`}
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all ${
                        active
                          ? "bg-[#D84D95] text-white"
                          : "bg-[#D84D95]/10 text-[#D84D95]"
                      }`}
                    >
                      <Icon size={22} />
                    </div>

                    <div className="min-w-0">
                      <h4 className="truncate font-bold text-slate-900">
                        {option.title}
                      </h4>

                      <p className="mt-1 text-sm text-slate-500">
                        From AUD ${option.accommodation}/week
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* RIGHT PANEL */}

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40 lg:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D84D95]/10 to-[#B7D531]/10 text-[#D84D95]">
                <Calculator size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-900 md:text-3xl">
                  Estimated Student Budget
                </h3>

                <p className="mt-2 text-sm text-slate-500 md:text-base">
                  Live calculation based on your selected accommodation.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <TotalCard title="Weekly" value={`$${weekly}`} />
              <TotalCard title="Monthly" value={`$${monthly}`} />
              <TotalCard title="Yearly" value={`$${yearly}`} />
            </div>

            <div className="mt-8 rounded-3xl bg-slate-50 p-5 md:p-6">
              <h4 className="text-xl font-bold text-slate-900">
                Expense Distribution
              </h4>

              <div className="mt-6 space-y-5">
                {breakdown.map((item) => {
                  const percent = Math.round((item.value / weekly) * 100);

                  return (
                    <div key={item.label}>
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <span className="font-medium text-slate-700">
                          {item.label}
                        </span>

                        <span className="font-bold text-slate-900">
                          AUD ${item.value}
                        </span>
                      </div>

                      <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#D84D95] to-[#B7D531] transition-all duration-700"
                          style={{ width: `${percent}%` }}
                        />
                      </div>

                      <p className="mt-2 text-right text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                        {percent}% of Weekly Budget
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* STATUS */}

              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 md:p-6">
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: `${status.color}15`,
                      color: status.color,
                    }}
                  >
                    <CheckCircle2 size={24} />
                  </div>

                  <div>
                    <h4
                      className="text-lg font-black md:text-xl"
                      style={{ color: status.color }}
                    >
                      {status.title}
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                      {status.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* BREAKDOWN TABLE */}

              <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <div className="border-b border-slate-200 px-5 py-5 md:px-6">
                  <h4 className="text-xl font-black text-slate-900">
                    Weekly Budget Breakdown
                  </h4>

                  <p className="mt-2 text-sm text-slate-500">
                    Estimated average weekly expenses.
                  </p>
                </div>

                <div className="divide-y divide-slate-100">
                  {breakdown.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between gap-4 px-5 py-4 md:px-6"
                    >
                      <span className="text-sm font-medium text-slate-600 md:text-base">
                        {item.label}
                      </span>

                      <span className="text-base font-black text-slate-900 md:text-lg">
                        AUD ${item.value}
                      </span>
                    </div>
                  ))}

                  <div className="flex items-center justify-between bg-slate-50 px-5 py-5 md:px-6">
                    <span className="text-base font-black text-slate-900 md:text-lg">
                      Total Weekly Budget
                    </span>

                    <span className="text-2xl font-black text-[#D84D95]">
                      AUD ${weekly}
                    </span>
                  </div>
                </div>
              </div>

              {/* NOTE */}

              <div className="mt-8 rounded-3xl border border-[#B7D531]/20 bg-[#B7D531]/10 p-5 md:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#B7D531]/20 text-[#6E8E1D]">
                    <Wallet size={24} />
                  </div>

                  <div>
                    <h4 className="text-lg font-black text-slate-900">
                      Planning Guide
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                      These figures are estimates based on typical student
                      spending in Sydney. Actual living costs will vary
                      depending on accommodation, lifestyle, transport and
                      personal spending habits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type TotalCardProps = {
  title: string;
  value: string;
};

function TotalCard({ title, value }: TotalCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center transition-all duration-300 hover:border-[#D84D95]/20 hover:bg-white">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
        {title}
      </p>

      <h3 className="mt-3 text-3xl font-black tracking-tight text-[#D84D95] md:text-4xl">
        {value}
      </h3>
    </div>
  );
}
