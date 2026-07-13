import {
  Banknote,
  BriefcaseBusiness,
  Clock3,
  GraduationCap,
  Languages,
  SunMedium,
} from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { STUDY_AUSTRALIA_CONTENT } from "../data/study-australia";

const ICONS = {
  languages: Languages,
  banknote: Banknote,
  clock: Clock3,
  sun: SunMedium,
  briefcase: BriefcaseBusiness,
  "graduation-cap": GraduationCap,
};

export default function AustraliaStats() {
  const stats = STUDY_AUSTRALIA_CONTENT.stats;

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className={`${CONTAINER}`}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D84D95]">
              Australia At A Glance
            </span>

            <h2 className="mt-5 text-4xl font-black text-slate-900 lg:text-5xl">
              Essential Information
            </h2>

            <p className="mt-7 text-lg leading-9 text-slate-600">
              Everything you should know before beginning your study journey in
              Australia.
            </p>
          </div>
        </MotionReveal>
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((item, index) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS];

            return (
              <MotionReveal key={item.label} delay={index * 0.05}>
                <div
                  className="
    group
    rounded-[28px]
    border
    border-slate-200
    bg-white
    p-8
    transition-all
    duration-500
    hover:-translate-y-2
    hover:border-[#D84D95]/20
    hover:shadow-[0_30px_70px_rgba(15,23,42,.08)]
  "
                >
                  <div
                    className="
      flex
      h-16
      w-16
      items-center
      justify-center
      rounded-2xl
      bg-[#D84D95]/10
      transition-all
      duration-300
      group-hover:scale-110
    "
                  >
                    <Icon className="text-[#D84D95]" size={30} />
                  </div>

                  <p className="mt-8 text-sm uppercase tracking-[0.25em] text-slate-500">
                    {item.label}
                  </p>

                  <h3 className="mt-3 text-3xl font-black text-slate-900">
                    {item.value}
                  </h3>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
