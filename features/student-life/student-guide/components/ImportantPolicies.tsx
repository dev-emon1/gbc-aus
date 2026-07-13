import Link from "next/link";

import {
  BadgeCheck,
  CalendarCheck,
  ChevronRight,
  Lock,
  MessageSquareWarning,
  Receipt,
  ShieldCheck,
} from "lucide-react";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CONTAINER } from "@/constants/layout";

import { STUDENT_GUIDE_CONTENT } from "../data/student-guide";

const ICONS = {
  "calendar-check": CalendarCheck,
  "shield-check": ShieldCheck,
  "message-square-warning": MessageSquareWarning,
  "badge-check": BadgeCheck,
  lock: Lock,
  receipt: Receipt,
};

export default function ImportantPolicies() {
  const section = STUDENT_GUIDE_CONTENT.policies;

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[150px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#B7D531]/10 blur-[170px]" />

      <div className={CONTAINER}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
              College Policies
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
            const Icon = ICONS[item.icon as keyof typeof ICONS] ?? ShieldCheck;

            return (
              <MotionReveal key={item.title} delay={index * 0.08}>
                <Link
                  href={item.href}
                  target="_blank"
                  className="group flex h-full flex-col rounded-[30px] border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#D84D95]/20 hover:shadow-[0_25px_60px_rgba(15,23,42,.08)]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D84D95]/10 text-[#D84D95] transition-all duration-300 group-hover:bg-[#D84D95] group-hover:text-white">
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-sm font-semibold text-[#D84D95]">
                      View Policy
                    </span>

                    <ChevronRight
                      size={18}
                      className="text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#D84D95]"
                    />
                  </div>
                </Link>
              </MotionReveal>
            );
          })}
        </MotionStagger>
      </div>
    </section>
  );
}
