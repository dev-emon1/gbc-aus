"use client";

import { CalendarCheck, Mail, Send } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";

import { CONTAINER } from "@/constants/layout";

import { ADVISOR_FORM } from "../data/advisor";

export default function AdvisorForm() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      {/* Glow */}

      <div
        className="
          absolute
          -left-32
          top-20
          h-96
          w-96
          rounded-full
          bg-[#D84D95]/10
          blur-[170px]
        "
      />

      <div
        className="
          absolute
          -right-32
          bottom-0
          h-[30rem]
          w-[30rem]
          rounded-full
          bg-[#B7D531]/10
          blur-[180px]
        "
      />

      <div className={CONTAINER}>
        <div
          className="
            grid
            gap-12
            lg:grid-cols-[0.8fr_1.2fr]
          "
        >
          {/* Left Content */}

          <MotionReveal>
            <div>
              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#D84D95]
                "
              >
                {ADVISOR_FORM.badge}
              </span>

              <h2
                className="
                  mt-6
                  text-4xl
                  font-black
                  tracking-tight
                  text-slate-900
                  md:text-5xl
                "
              >
                {ADVISOR_FORM.title}
              </h2>

              <p
                className="
                  mt-6
                  text-lg
                  leading-8
                  text-slate-600
                "
              >
                {ADVISOR_FORM.description}
              </p>

              <div className="mt-10 space-y-5">
                <div
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#D84D95]/10
                      text-[#D84D95]
                    "
                  >
                    <CalendarCheck size={24} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Quick Response</p>

                    <p className="font-bold text-slate-900">
                      Advisor will contact you soon
                    </p>
                  </div>
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#B7D531]/20
                      text-slate-900
                    "
                  >
                    <Mail size={24} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Personalised Advice
                    </p>

                    <p className="font-bold text-slate-900">
                      Guidance based on your goals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>

          {/* Form */}

          <MotionReveal delay={0.15}>
            <form
              className="
                rounded-[36px]
                border
                border-slate-200
                bg-white
                p-8
                shadow-[0_35px_100px_rgba(15,23,42,.08)]
                lg:p-10
              "
            >
              <div className="grid gap-6 md:grid-cols-2">
                {ADVISOR_FORM.fields.map((field) => (
                  <div key={field.label} className="space-y-2">
                    <label
                      className="
                        text-sm
                        font-semibold
                        text-slate-700
                      "
                    >
                      {field.label}
                    </label>

                    {field.type === "select" ? (
                      <select
                        className="
                          h-12
                          w-full
                          rounded-xl
                          border
                          border-slate-200
                          bg-white
                          px-4
                          text-sm
                          text-slate-600
                          outline-none
                          transition
                          focus:border-[#D84D95]
                        "
                      >
                        <option>{field.placeholder}</option>

                        <option>Business</option>

                        <option>Information Technology</option>

                        <option>Automotive</option>
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="
                          h-12
                          w-full
                          rounded-xl
                          border
                          border-slate-200
                          px-4
                          text-sm
                          outline-none
                          transition
                          focus:border-[#D84D95]
                        "
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <label
                  className="
                    text-sm
                    font-semibold
                    text-slate-700
                  "
                >
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us how we can help you..."
                  className="
                    mt-2
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    p-4
                    text-sm
                    outline-none
                    transition
                    focus:border-[#D84D95]
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  mt-8
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#D84D95]
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#c63e86]
                  hover:shadow-[0_20px_45px_rgba(216,77,149,.35)]
                "
              >
                Send Request
                <Send size={18} />
              </button>
            </form>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
