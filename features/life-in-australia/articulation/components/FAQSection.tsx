"use client";

import { useState } from "react";

import { ChevronDown } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

const FAQS = [
  {
    question: "What is an articulation pathway?",

    answer:
      "An articulation pathway allows eligible George Brown College graduates to continue their studies at Southern Cross University with advanced standing or credit towards selected Bachelor degrees.",
  },

  {
    question: "Will I receive university credit?",

    answer:
      "Yes. Eligible students may receive credit for completed vocational qualifications. The amount of credit is assessed by Southern Cross University according to the official articulation agreement.",
  },

  {
    question: "Do I need to meet university entry requirements?",

    answer:
      "Yes. Students must successfully complete their GBC qualification and satisfy Southern Cross University's admission and English language requirements.",
  },

  {
    question: "Which university partners with George Brown College?",

    answer:
      "George Brown College currently offers articulation pathways with Southern Cross University, providing opportunities to continue into selected Bachelor programs.",
  },

  {
    question: "Can international students apply?",

    answer:
      "Yes. International students who meet the academic and English language requirements are eligible to apply through the articulation pathway.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#D84D95]/5 blur-[120px]" />

      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#B7D531]/10 blur-[140px]" />

      <div className={CONTAINER}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D84D95]">
              Frequently Asked Questions
            </span>

            <h2 className="mt-5 text-4xl font-black text-slate-900 lg:text-5xl">
              Everything You Need To Know
            </h2>

            <p className="mt-7 text-lg leading-9 text-slate-600">
              Find answers to the most common questions about articulation
              pathways, university credit and admission requirements.
            </p>
          </div>
        </MotionReveal>

        <div className="mx-auto mt-20 max-w-4xl space-y-5">
          {FAQS.map((faq, index) => {
            const active = open === index;

            return (
              <MotionReveal key={faq.question} delay={index * 0.05}>
                <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#D84D95]/20">
                  <button
                    onClick={() => setOpen(active ? null : index)}
                    className="flex w-full items-center justify-between px-8 py-6 text-left"
                  >
                    <h3 className="text-lg font-semibold text-slate-900">
                      {faq.question}
                    </h3>

                    <ChevronDown
                      size={22}
                      className={`transition-transform duration-300 ${
                        active ? "rotate-180 text-[#D84D95]" : "text-slate-400"
                      }`}
                    />
                  </button>

                  <div
                    className={`grid overflow-hidden transition-all duration-500 ${
                      active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-slate-100 px-8 py-6">
                        <p className="leading-8 text-slate-600">{faq.answer}</p>
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
