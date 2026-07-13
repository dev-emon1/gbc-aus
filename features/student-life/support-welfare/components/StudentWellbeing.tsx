import { Brain, GraduationCap, HeartPulse, ShieldCheck } from "lucide-react";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CONTAINER } from "@/constants/layout";

import { SUPPORT_WELFARE_CONTENT } from "../data/support-welfare";

const ICONS = {
  brain: Brain,
  "heart-pulse": HeartPulse,
  "shield-check": ShieldCheck,
  "graduation-cap": GraduationCap,
};

export default function StudentWellbeing() {
  const section = SUPPORT_WELFARE_CONTENT.wellbeing;

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-28">
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[150px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#B7D531]/10 blur-[170px]" />

      <div className={CONTAINER}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
              Student Wellbeing
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              {section.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {section.description}
            </p>
          </div>
        </MotionReveal>

        <MotionStagger className="mt-16 space-y-6">
          {section.items.map((item, index) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS] ?? Brain;

            return (
              <MotionReveal key={item.title} delay={index * 0.08}>
                <div className="group flex flex-col gap-6 rounded-[30px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#D84D95]/20 hover:shadow-[0_22px_55px_rgba(15,23,42,.08)] md:flex-row md:items-center">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#D84D95]/10 text-[#D84D95] transition-all duration-300 group-hover:bg-[#D84D95] group-hover:text-white">
                    <Icon size={30} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-3xl leading-8 text-slate-600">
                      {item.description}
                    </p>
                  </div>

                  <div className="shrink-0 rounded-full bg-[#B7D531]/15 px-5 py-2 text-sm font-semibold text-[#6E8E1D]">
                    Student Wellbeing
                  </div>
                </div>
              </MotionReveal>
            );
          })}
        </MotionStagger>
      </div>
    </section>
  );
}
