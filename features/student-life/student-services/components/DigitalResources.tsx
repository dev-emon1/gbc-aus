import {
  BookCopy,
  Laptop,
  LayoutDashboard,
  LifeBuoy,
  Mail,
  Wifi,
} from "lucide-react";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CONTAINER } from "@/constants/layout";

import { STUDENT_SERVICES_CONTENT } from "../data/student-services";

const ICONS = {
  "layout-dashboard": LayoutDashboard,
  mail: Mail,
  laptop: Laptop,
  wifi: Wifi,
  "book-copy": BookCopy,
  "life-buoy": LifeBuoy,
};

const BADGES = [
  "24/7 Access",
  "Official",
  "Online Learning",
  "On Campus",
  "Digital Library",
  "Student Support",
];

export default function DigitalResources() {
  const section = STUDENT_SERVICES_CONTENT.digitalResources;

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-28">
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[130px]" />

      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#B7D531]/10 blur-[150px]" />

      <div className={CONTAINER}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
              Digital Experience
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
            const Icon = ICONS[item.icon as keyof typeof ICONS] ?? Laptop;

            return (
              <MotionReveal key={item.title} delay={index * 0.08}>
                <div className="group h-full rounded-[28px] border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#D84D95]/20 hover:shadow-[0_25px_60px_rgba(15,23,42,.08)]">
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D84D95]/10 text-[#D84D95] transition-all duration-300 group-hover:bg-[#D84D95] group-hover:text-white">
                      <Icon size={28} />
                    </div>

                    <span className="rounded-full bg-[#B7D531]/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6E8E1D]">
                      {BADGES[index]}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-slate-600">
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
