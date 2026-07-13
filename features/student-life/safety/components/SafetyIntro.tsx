import Image from "next/image";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { SAFETY_CONTENT } from "../data/safety";

const HIGHLIGHTS = [
  "A safe and inclusive learning environment",
  "24/7 emergency support information",
  "Respect, wellbeing and student protection",
];

export default function SafetyIntro() {
  const section = SAFETY_CONTENT.intro;

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[140px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#B7D531]/10 blur-[150px]" />

      <div className={CONTAINER}>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <MotionReveal>
            <div className="relative overflow-hidden rounded-[32px]">
              <Image
                src={section.image}
                alt={section.title}
                width={700}
                height={700}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <div className="max-w-xl">
              <span className="inline-flex rounded-full bg-[#D84D95]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
                Your Safety Matters
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
                {section.title}
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                {section.description}
              </p>

              <div className="mt-8 space-y-4">
                {HIGHLIGHTS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={22}
                      className="mt-0.5 shrink-0 text-[#B7D531]"
                    />

                    <span className="leading-7 text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="#campus-safety"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#D84D95] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#C73D86]"
              >
                Learn About Campus Safety
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
