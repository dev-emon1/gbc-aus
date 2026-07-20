"use client";

import { useState } from "react";

import { ChevronDown, HelpCircle } from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CONTAINER } from "@/constants/layout";

import { ADVISOR_FAQ } from "../data/advisor";

export default function AdvisorFAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Ambient */}

      <div
        className="
          absolute
          -left-40
          top-20
          h-[30rem]
          w-[30rem]
          rounded-full
          bg-[#D84D95]/10
          blur-[180px]
        "
      />

      <div
        className="
          absolute
          -right-40
          bottom-0
          h-[30rem]
          w-[30rem]
          rounded-full
          bg-[#B7D531]/10
          blur-[180px]
        "
      />

      <div className={CONTAINER}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span
              className="
                inline-flex
                items-center
                gap-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#D84D95]
              "
            >
              <HelpCircle size={15} />
              Frequently Asked Questions
            </span>

            <h2
              className="
                mt-5
                text-4xl
                font-black
                tracking-tight
                text-slate-900
                md:text-5xl
              "
            >
              Common Questions About Advisors
            </h2>

            <p
              className="
                mt-6
                text-lg
                leading-8
                text-slate-600
              "
            >
              Find answers to common questions about our advisor support and
              student guidance services.
            </p>
          </div>
        </MotionReveal>

        <MotionStagger
          className="
            mx-auto
            mt-16
            max-w-4xl
            space-y-4
          "
        >
          {ADVISOR_FAQ.map((item, index) => {
            const isActive = active === index;

            return (
              <MotionReveal key={item.question} delay={index * 0.05}>
                <div
                  className="
                    overflow-hidden
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    transition-all
                    duration-300
                    hover:border-[#D84D95]/20
                  "
                >
                  <button
                    onClick={() => setActive(isActive ? null : index)}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-6
                      px-6
                      py-6
                      text-left
                      lg:px-8
                    "
                  >
                    <span
                      className="
                        text-lg
                        font-bold
                        text-slate-900
                      "
                    >
                      {item.question}
                    </span>

                    <span
                      className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-slate-100
                        text-slate-700
                        transition-transform
                        duration-300
                        ${
                          isActive
                            ? "rotate-180 bg-[#D84D95]/10 text-[#D84D95]"
                            : ""
                        }
                      `}
                    >
                      <ChevronDown size={20} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="overflow-hidden"
                      >
                        <div
                          className="
                            border-t
                            border-slate-100
                            px-6
                            pb-6
                            pt-5
                            lg:px-8
                          "
                        >
                          <p
                            className="
                              leading-8
                              text-slate-600
                            "
                          >
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </MotionReveal>
            );
          })}
        </MotionStagger>
      </div>
    </section>
  );
}
