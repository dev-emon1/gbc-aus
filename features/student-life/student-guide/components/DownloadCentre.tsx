import Link from "next/link";

import {
  BookOpen,
  CalendarCheck,
  Download,
  FileText,
  Map,
  Receipt,
} from "lucide-react";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CONTAINER } from "@/constants/layout";

import { STUDENT_GUIDE_CONTENT } from "../data/student-guide";

const ICONS = {
  "book-open": BookOpen,
  "calendar-check": CalendarCheck,
  receipt: Receipt,
  "file-text": FileText,
  map: Map,
};

export default function DownloadCentre() {
  const section = STUDENT_GUIDE_CONTENT.downloads;

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-28">
      {/* Ambient */}

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[150px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#B7D531]/10 blur-[170px]" />

      <div className={CONTAINER}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
              Downloads
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              {section.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {section.description}
            </p>
          </div>
        </MotionReveal>

        <MotionStagger className="mt-16 grid gap-6 md:grid-cols-2">
          {section.items.map((item, index) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS] ?? FileText;

            return (
              <MotionReveal key={item.title} delay={index * 0.08}>
                <Link
                  href={item.file}
                  target="_blank"
                  className="group flex items-center gap-6 rounded-[28px] border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D84D95]/20 hover:shadow-[0_20px_55px_rgba(15,23,42,.08)]"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#D84D95]/10 text-[#D84D95] transition-all duration-300 group-hover:bg-[#D84D95] group-hover:text-white">
                    <Icon size={30} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover:bg-[#B7D531]/15">
                    <Download
                      size={20}
                      className="text-slate-600 group-hover:text-[#6E8E1D]"
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
