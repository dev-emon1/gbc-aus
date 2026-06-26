import { Eye, Target } from "lucide-react";

import { CONTAINER } from "@/constants/layout";

import {
  MotionHover,
  MotionReveal,
  MotionStagger,
} from "@/components/shared/animations";

export default function VisionMissionSection() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background */}

      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#D84D95]/6 blur-[140px]" />

      <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#B7D531]/8 blur-[140px]" />

      <div className={CONTAINER}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-[#D84D95]/15 bg-[#D84D95]/10 px-5 py-2 text-sm font-semibold text-[#D84D95]">
              Vision & Mission
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
              Our Purpose
              <br />
              Our Commitment
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Everything we do is guided by a commitment to quality education,
              student success and lifelong learning.
            </p>
          </div>
        </MotionReveal>

        <MotionStagger className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Vision */}

          <MotionReveal>
            <MotionHover scale={1.015} y={-5}>
              <div className="group relative overflow-hidden rounded-[36px] border border-slate-200 bg-white p-10 shadow-[0_20px_60px_rgba(15,23,42,0.05)] transition-all duration-500 hover:border-[#D84D95]/20 hover:shadow-[0_35px_90px_rgba(15,23,42,0.08)]">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D84D95]/8 blur-3xl transition-all duration-500 group-hover:bg-[#D84D95]/12" />

                <div className="relative z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#D84D95]/10">
                    <Eye className="h-8 w-8 text-[#D84D95]" />
                  </div>

                  <h3 className="mt-8 text-3xl font-bold text-slate-900">
                    Vision
                  </h3>

                  <p className="mt-6 leading-8 text-slate-600">
                    To inspire lifelong learning by providing accessible,
                    industry-focused education that empowers students to achieve
                    their personal and professional goals.
                  </p>
                </div>
              </div>
            </MotionHover>
          </MotionReveal>

          {/* Mission */}

          <MotionReveal delay={0.12}>
            <MotionHover scale={1.015} y={-5}>
              <div className="group relative overflow-hidden rounded-[36px] border border-slate-200 bg-white p-10 shadow-[0_20px_60px_rgba(15,23,42,0.05)] transition-all duration-500 hover:border-[#B7D531]/20 hover:shadow-[0_35px_90px_rgba(15,23,42,0.08)]">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#B7D531]/8 blur-3xl transition-all duration-500 group-hover:bg-[#B7D531]/12" />

                <div className="relative z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#B7D531]/15">
                    <Target className="h-8 w-8 text-[#89A51C]" />
                  </div>

                  <h3 className="mt-8 text-3xl font-bold text-slate-900">
                    Mission
                  </h3>

                  <p className="mt-6 leading-8 text-slate-600">
                    To deliver quality education through practical learning,
                    academic excellence and student support while preparing
                    graduates for successful careers in a global environment.
                  </p>
                </div>
              </div>
            </MotionHover>
          </MotionReveal>
        </MotionStagger>
      </div>
    </section>
  );
}
