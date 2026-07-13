import Link from "next/link";

import {
  ArrowRight,
  CalendarDays,
  Compass,
  HeartHandshake,
  LifeBuoy,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CONTAINER } from "@/constants/layout";

import { STUDENT_GUIDE_CONTENT } from "../data/student-guide";

const ICONS = {
  "life-buoy": LifeBuoy,
  compass: Compass,
  "shield-check": ShieldCheck,
  "heart-handshake": HeartHandshake,
  "calendar-days": CalendarDays,
  "phone-call": PhoneCall,
};

export default function QuickLinks() {
  const section = STUDENT_GUIDE_CONTENT.quickLinks;

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      {/* Ambient */}

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[150px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#B7D531]/10 blur-[170px]" />

      <div className={CONTAINER}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
              Quick Links
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
            const Icon = ICONS[item.icon as keyof typeof ICONS] ?? LifeBuoy;

            return (
              <MotionReveal key={item.title} delay={index * 0.08}>
                <Link
                  href={item.href}
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
                      Visit Page
                    </span>

                    <ArrowRight
                      size={18}
                      className="text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#D84D95]"
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
