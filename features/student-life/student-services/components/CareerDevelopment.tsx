import {
  ArrowRight,
  BriefcaseBusiness,
  FileText,
  Search,
  Users,
} from "lucide-react";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CONTAINER } from "@/constants/layout";

import { STUDENT_SERVICES_CONTENT } from "../data/student-services";

const ICONS = [FileText, Users, Search, BriefcaseBusiness];

export default function CareerDevelopment() {
  const section = STUDENT_SERVICES_CONTENT.career;

  return (
    <section className="bg-white py-24 lg:py-28">
      <div className={CONTAINER}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
              Career Development
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              {section.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {section.description}
            </p>
          </div>
        </MotionReveal>

        <MotionStagger className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {section.steps.map((step, index) => {
            const Icon = ICONS[index];

            return (
              <MotionReveal key={step.title} delay={index * 0.08}>
                <div className="relative h-full">
                  <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#D84D95]/20 hover:shadow-[0_25px_60px_rgba(15,23,42,.08)]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D84D95]/10 text-[#D84D95] transition-all duration-300 group-hover:bg-[#D84D95] group-hover:text-white">
                      <Icon size={28} />
                    </div>

                    <div className="mt-8 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B7D531]/15 text-sm font-bold text-[#7A9824]">
                        {index + 1}
                      </span>

                      <h3 className="text-xl font-bold text-slate-900">
                        {step.title}
                      </h3>
                    </div>

                    <p className="mt-5 text-[15px] leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>

                  {index !== section.steps.length - 1 && (
                    <div className="absolute -right-5 top-1/2 hidden -translate-y-1/2 xl:flex">
                      <ArrowRight size={22} className="text-[#D84D95]" />
                    </div>
                  )}
                </div>
              </MotionReveal>
            );
          })}
        </MotionStagger>

        <MotionReveal delay={0.35}>
          <div className="mt-16 rounded-[32px] border border-slate-200 bg-gradient-to-r from-[#D84D95]/5 via-white to-[#B7D531]/10 p-8 lg:p-10">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
                  Graduate Outcomes
                </span>

                <h3 className="mt-3 text-2xl font-bold text-slate-900">
                  Building Confidence for Your Future Career
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Our Student Services team helps you prepare for employment
                  through practical career guidance, professional development
                  and workplace readiness support.
                </p>
              </div>

              <div className="grid w-full gap-4 sm:grid-cols-2 lg:w-auto">
                {[
                  "Resume Assistance",
                  "Interview Preparation",
                  "Career Guidance",
                  "Employment Readiness",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B7D531]/15">
                      <BriefcaseBusiness size={18} className="text-[#7A9824]" />
                    </div>

                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
