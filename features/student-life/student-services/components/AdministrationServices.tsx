import {
  BadgeCheck,
  CalendarDays,
  FileText,
  GraduationCap,
  IdCard,
  Users,
} from "lucide-react";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { STUDENT_SERVICES_CONTENT } from "../data/student-services";

const ICONS = {
  "Student ID": IdCard,
  Enrolment: Users,
  "Official Letters": FileText,
  Certificates: BadgeCheck,
  "Student Records": GraduationCap,
  "Timetable Assistance": CalendarDays,
};

export default function AdministrationServices() {
  const section = STUDENT_SERVICES_CONTENT.administration;

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-28">
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#D84D95]/5 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#B7D531]/10 blur-[140px]" />

      <div className={CONTAINER}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
              Student Administration
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              {section.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {section.description}
            </p>
          </div>
        </MotionReveal>

        <MotionStagger className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {section.items.map((item, index) => {
            const Icon = ICONS[item.title as keyof typeof ICONS] ?? FileText;

            return (
              <MotionReveal key={item.title} delay={index * 0.08}>
                <div className="group h-full rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#D84D95]/20 hover:shadow-[0_20px_60px_rgba(15,23,42,.08)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B7D531]/10 text-[#7A9824] transition-all duration-300 group-hover:bg-[#B7D531] group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </MotionReveal>
            );
          })}
        </MotionStagger>
      </div>
    </section>
  );
}
