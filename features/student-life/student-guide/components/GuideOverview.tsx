import Image from "next/image";
import Link from "next/link";

import { ArrowRight, CheckCircle2 } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { STUDENT_GUIDE_CONTENT } from "../data/student-guide";

export default function GuideOverview() {
  const section = STUDENT_GUIDE_CONTENT.overview;

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      {/* Ambient */}

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[150px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#B7D531]/10 blur-[170px]" />

      <div className={CONTAINER}>
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
          {/* Image */}

          <MotionReveal>
            <div className="relative overflow-hidden rounded-[34px]">
              <Image
                src={section.image}
                alt={section.title}
                width={720}
                height={760}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-5 py-4 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D84D95]">
                  Student Guide
                </p>

                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  Your Essential Study Companion
                </h3>
              </div>
            </div>
          </MotionReveal>

          {/* Content */}

          <MotionReveal delay={0.08}>
            <div>
              <span className="inline-flex rounded-full bg-[#D84D95]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
                Student Resources
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
                {section.title}
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                {section.description}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {section.highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-[#B7D531]"
                    />

                    <span className="leading-7 text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="#student-handbook"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#D84D95] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#C73D86] hover:shadow-[0_18px_45px_rgba(216,77,149,.28)]"
              >
                Explore Student Guide
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
