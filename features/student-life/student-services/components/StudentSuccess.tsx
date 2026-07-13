import Image from "next/image";

import { ArrowRight, Sparkles } from "lucide-react";

import Link from "next/link";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CONTAINER } from "@/constants/layout";

import { STUDENT_SERVICES_CONTENT } from "../data/student-services";

import StudentSuccessCard from "./StudentSuccessCard";

export default function StudentSuccess() {
  const section = STUDENT_SERVICES_CONTENT.success;

  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background */}

      <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[140px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#B7D531]/10 blur-[150px]" />

      <div className={CONTAINER}>
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.2fr]">
          {/* Left */}

          <MotionReveal>
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D84D95]/15 bg-[#D84D95]/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
                <Sparkles size={14} />
                Student Success
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
                {section.title}
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                {section.description}
              </p>

              <Link
                href="#services"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#D84D95] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#C63C84]"
              >
                Explore Services
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </MotionReveal>

          {/* Right */}

          <MotionStagger className="grid gap-6 md:grid-cols-2">
            {section.items.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.08}>
                <StudentSuccessCard item={item} />
              </MotionReveal>
            ))}

            <MotionReveal delay={0.28}>
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src="/images/student-life/student-services/student-support.jpg"
                  alt="Student Support"
                  width={600}
                  height={600}
                  className="h-full min-h-[320px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8">
                  <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-xl">
                    George Brown College
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-white">
                    Helping You Achieve Your Academic & Career Goals
                  </h3>
                </div>
              </div>
            </MotionReveal>
          </MotionStagger>
        </div>
      </div>
    </section>
  );
}
