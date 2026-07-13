import {
  BookOpen,
  BriefcaseBusiness,
  ClipboardList,
  Globe,
  Laptop,
  LibraryBig,
} from "lucide-react";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CONTAINER } from "@/constants/layout";

import { STUDENT_SERVICES_CONTENT } from "../data/student-services";

const ICONS = {
  "book-open": BookOpen,
  briefcase: BriefcaseBusiness,
  "clipboard-list": ClipboardList,
  library: LibraryBig,
  monitor: Laptop,
  globe: Globe,
};

export default function ServicesGrid() {
  const section = STUDENT_SERVICES_CONTENT.services;

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-50 py-24"
    >
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#B7D531]/10 blur-[150px]" />

      <div className={CONTAINER}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
              Student Support
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              {section.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {section.description}
            </p>
          </div>
        </MotionReveal>

        <MotionStagger className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {section.items.map((service, index) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS] ?? BookOpen;

            return (
              <MotionReveal key={service.title} delay={index * 0.08}>
                <div className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#D84D95]/20 hover:shadow-[0_25px_60px_rgba(15,23,42,.08)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D84D95]/10 text-[#D84D95] transition-all duration-300 group-hover:bg-[#D84D95] group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-8 flex-1">
                    <ul className="space-y-3">
                      {service.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-sm text-slate-700"
                        >
                          <span className="h-2 w-2 rounded-full bg-[#B7D531]" />

                          {item}
                        </li>
                      ))}
                    </ul>
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
