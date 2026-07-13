import Image from "next/image";
import Link from "next/link";

import { ArrowRight, BookOpen, Download } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { STUDENT_GUIDE_CONTENT } from "../data/student-guide";

export default function HandbookSection() {
  const section = STUDENT_GUIDE_CONTENT.handbook;

  return (
    <section
      id="student-handbook"
      className="relative overflow-hidden bg-slate-50 py-24 lg:py-28"
    >
      {/* Ambient */}

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[150px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#B7D531]/10 blur-[170px]" />

      <div className={CONTAINER}>
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Content */}

          <MotionReveal>
            <div>
              <span className="inline-flex rounded-full bg-[#D84D95]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
                Student Handbook
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
                {section.title}
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                {section.description}
              </p>

              <div className="mt-10 space-y-5">
                {section.features.map((item) => (
                  <div
                    key={item.title}
                    className="group flex gap-5 rounded-[26px] border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-[#D84D95]/20 hover:shadow-[0_20px_55px_rgba(15,23,42,.08)]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#B7D531]/15 text-[#6E8E1D]">
                      <BookOpen size={22} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href={section.buttonHref}
                target="_blank"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#D84D95] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#C73D86] hover:shadow-[0_20px_45px_rgba(216,77,149,.28)]"
              >
                <Download size={18} />

                {section.buttonLabel}

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </MotionReveal>

          {/* Image */}

          <MotionReveal delay={0.08}>
            <div className="relative overflow-hidden rounded-[34px]">
              <Image
                src={section.image}
                alt={section.title}
                width={720}
                height={820}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-5 py-4 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D84D95]">
                  Official Resource
                </p>

                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  Download & Keep It Handy
                </h3>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
