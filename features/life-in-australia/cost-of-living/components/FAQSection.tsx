"use client";

import { useState } from "react";

import { ChevronDown } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { COST_OF_LIVING_CONTENT } from "../data/cost-of-living";

export default function FAQSection() {
  const section = COST_OF_LIVING_CONTENT.faq;

  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[140px]" />

      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#B7D531]/10 blur-[160px]" />

      <div className={CONTAINER}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D84D95]">
              Frequently Asked Questions
            </span>

            <h2 className="mt-5 text-4xl font-black text-slate-900 lg:text-5xl">
              {section.title}
            </h2>

            <p className="mt-7 text-lg leading-9 text-slate-600">
              Find answers to common questions about student living expenses,
              budgeting and managing your finances while studying in Australia.
            </p>
          </div>
        </MotionReveal>

        <div className="mx-auto mt-20 max-w-4xl space-y-5">
          {section.items.map((item, index) => {
            const opened = active === index;

            return (
              <MotionReveal key={item.question} delay={index * 0.05}>
                <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#D84D95]/20">
                  <button
                    onClick={() => setActive(opened ? -1 : index)}
                    className="flex w-full items-center justify-between px-8 py-7 text-left"
                  >
                    <h3 className="pr-6 text-xl font-bold text-slate-900">
                      {item.question}
                    </h3>

                    <ChevronDown
                      size={22}
                      className={`transition-all duration-300 ${
                        opened ? "rotate-180 text-[#D84D95]" : "text-slate-400"
                      }`}
                    />
                  </button>

                  <div
                    className={`grid overflow-hidden transition-all duration-500 ${
                      opened ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-slate-100 px-8 py-7">
                        <p className="leading-8 text-slate-600">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
