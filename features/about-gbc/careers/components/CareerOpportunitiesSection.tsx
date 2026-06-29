import Link from "next/link";

import { ArrowRight, BriefcaseBusiness } from "lucide-react";

import { CONTAINER } from "@/constants/layout";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CAREER_DATA } from "../data";

export default function CareerOpportunitiesSection() {
  const { opportunities } = CAREER_DATA;

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-28">
      {/* Glow */}

      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#D84D95]/6 blur-[170px]" />

      <div className={CONTAINER}>
        <MotionStagger className="mx-auto max-w-5xl">
          <MotionReveal>
            <div className="text-center">
              <span className="inline-flex rounded-full border border-[#D84D95]/15 bg-[#D84D95]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
                {opportunities.badge}
              </span>

              <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
                {opportunities.title}
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600">
                {opportunities.description}
              </p>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.2}>
            <div
              className="
                relative
                mt-16
                overflow-hidden
                rounded-[36px]
                border
                border-slate-200
                bg-white
                p-14
                text-center
                shadow-[0_25px_80px_rgba(15,23,42,.06)]
              "
            >
              {/* Decorative */}

              <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#D84D95]/6 blur-[110px]" />

              <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#B7D531]/8 blur-[130px]" />

              {/* Icon */}

              <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#D84D95] to-[#C63C84] text-white shadow-xl">
                <BriefcaseBusiness size={42} />
              </div>

              <h3 className="relative mt-10 text-3xl font-bold text-slate-900">
                No Current Vacancies
              </h3>

              <p className="relative mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Thank you for your interest in joining George Brown College. We
                currently do not have any open positions, but we are always
                interested in connecting with passionate educators and
                professionals for future opportunities.
              </p>

              <Link
                href={opportunities.primaryButton.href}
                className="
                  relative
                  mt-10
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#D84D95]
                  px-8
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#C63C84]
                "
              >
                {opportunities.primaryButton.label}

                <ArrowRight size={18} />
              </Link>
            </div>
          </MotionReveal>
        </MotionStagger>
      </div>
    </section>
  );
}
