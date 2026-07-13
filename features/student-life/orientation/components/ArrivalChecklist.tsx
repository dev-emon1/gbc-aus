import Image from "next/image";

import { CheckCircle2, FileCheck } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { ORIENTATION_CONTENT } from "../data/orientation";

export default function ArrivalChecklist() {
  const section = ORIENTATION_CONTENT.checklist;

  return (
    <section className="bg-white py-24 lg:py-28">
      <div className={CONTAINER}>
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
          {/* Left */}

          <MotionReveal>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
                Before You Arrive
              </span>

              <h2 className="mt-5 text-4xl font-bold text-slate-900">
                {section.title}
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                {section.description}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {section.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 transition-all duration-300 hover:border-[#D84D95]/20 hover:bg-white"
                  >
                    <CheckCircle2
                      size={20}
                      className="shrink-0 text-[#B7D531]"
                    />

                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-3xl border border-[#B7D531]/20 bg-[#B7D531]/10 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B7D531]/20 text-[#6E8E1D]">
                    <FileCheck size={24} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Helpful Tip
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      Bringing both printed and digital copies of your important
                      documents can help make your orientation and enrolment
                      process faster and more convenient.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>

          {/* Right */}

          <MotionReveal delay={0.1}>
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
        </div>
      </div>
    </section>
  );
}
