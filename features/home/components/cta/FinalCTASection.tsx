"use client";

import Link from "next/link";
import { ArrowRight, GraduationCap, Globe, Users } from "lucide-react";

import { CONTAINER } from "@/constants/layout";

import { MotionReveal, MotionHover } from "@/components/shared/animations";

export default function FinalCTASection() {
  return (
    <section className="bg-white py-28">
      <div className={CONTAINER}>
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <MotionReveal>
            <span className="inline-flex rounded-full bg-[#D84D95]/10 px-5 py-2 text-sm font-medium text-[#D84D95]">
              Start Your Journey
            </span>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-6xl">
              Ready To Start
              <br />
              Your Journey?
            </h2>
          </MotionReveal>

          <MotionReveal delay={0.2}>
            <p className="mt-6 text-lg text-slate-600">
              Choose the option that best suits your goals and let us help you
              take the next step.
            </p>
          </MotionReveal>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {/* Apply */}

          <MotionReveal delay={0.3}>
            <MotionHover scale={1.02} y={-8}>
              <Link
                href="/apply-now"
                className="group flex h-full flex-col rounded-[36px] border border-slate-200 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:border-[#D84D95]/30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#D84D95]/10 transition-colors duration-300 group-hover:bg-[#D84D95]">
                  <GraduationCap className="h-8 w-8 text-[#D84D95] transition-colors duration-300 group-hover:text-white" />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-slate-900">
                  Apply Now
                </h3>

                <p className="mt-4 flex-1 leading-relaxed text-slate-600">
                  Ready to begin your education journey? Submit your application
                  and start building your future today.
                </p>

                <div className="mt-8 flex items-center gap-2 font-semibold text-[#D84D95]">
                  Start Application
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </MotionHover>
          </MotionReveal>

          {/* Advisor */}

          <MotionReveal delay={0.45}>
            <MotionHover scale={1.02} y={-8}>
              <Link
                href="/meet-an-advisor"
                className="group flex h-full flex-col rounded-[36px] border border-slate-200 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:border-[#D84D95]/30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#D84D95]/10 transition-colors duration-300 group-hover:bg-[#D84D95]">
                  <Users className="h-8 w-8 text-[#D84D95] transition-colors duration-300 group-hover:text-white" />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-slate-900">
                  Meet Advisor
                </h3>

                <p className="mt-4 flex-1 leading-relaxed text-slate-600">
                  Speak with our experienced advisors and get personalised
                  guidance for choosing the right course and pathway.
                </p>

                <div className="mt-8 flex items-center gap-2 font-semibold text-[#D84D95]">
                  Book Consultation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </MotionHover>
          </MotionReveal>
          {/* Find Local Agent */}

          <MotionReveal delay={0.6}>
            <MotionHover scale={1.02} y={-8}>
              <Link
                href="/find-local-agent"
                className="group flex h-full flex-col rounded-[36px] border border-slate-200 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:border-[#B7D531]/30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#B7D531]/15 transition-colors duration-300 group-hover:bg-[#B7D531]">
                  <Globe className="h-8 w-8 text-[#89a51c] transition-colors duration-300 group-hover:text-white" />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-slate-900">
                  Find Local Agent
                </h3>

                <p className="mt-4 flex-1 leading-relaxed text-slate-600">
                  Connect with an authorised GBC agent in your country and
                  receive local support throughout the admission process.
                </p>

                <div className="mt-8 flex items-center gap-2 font-semibold text-[#89a51c]">
                  Find Agent
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </MotionHover>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
