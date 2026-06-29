import { CheckCircle2 } from "lucide-react";

import { CONTAINER } from "@/constants/layout";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CAREER_DATA } from "../data";

export default function CareerIdealCandidateSection() {
  const { idealCandidate } = CAREER_DATA;

  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className={CONTAINER}>
        <MotionStagger className="grid items-center gap-20 lg:grid-cols-[420px_1fr]">
          {/* Left */}

          <MotionReveal>
            <div>
              <span className="inline-flex rounded-full border border-[#D84D95]/15 bg-[#D84D95]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
                {idealCandidate.badge}
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                {idealCandidate.title}
              </h2>

              <div className="mt-8 h-1 w-20 rounded-full bg-[#D84D95]" />

              <p className="mt-8 text-lg leading-8 text-slate-600">
                {idealCandidate.description}
              </p>
            </div>
          </MotionReveal>

          {/* Right */}

          <MotionReveal delay={0.12}>
            <div className="grid gap-5 md:grid-cols-2">
              {idealCandidate.items.map((item) => (
                <div
                  key={item}
                  className="
                    group
                    flex
                    items-start
                    gap-4
                    rounded-[24px]
                    border
                    border-slate-200
                    bg-[#FCFCFD]
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#D84D95]/20
                    hover:shadow-[0_20px_50px_rgba(15,23,42,.06)]
                  "
                >
                  <div className="mt-1 text-[#D84D95]">
                    <CheckCircle2 size={22} />
                  </div>

                  <p className="font-medium leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </MotionReveal>
        </MotionStagger>
      </div>
    </section>
  );
}
