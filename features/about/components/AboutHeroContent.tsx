import Link from "next/link";

import { ArrowRight, GraduationCap } from "lucide-react";

import {
  MotionHover,
  MotionReveal,
  MotionStagger,
} from "@/components/shared/animations";

const highlights = [
  {
    value: "CRICOS",
    label: "03208D",
  },
  {
    value: "RTO",
    label: "91707",
  },
  {
    value: "Sydney",
    label: "Australia",
  },
];

export default function AboutHeroContent() {
  return (
    <div>
      <MotionReveal>
        <span className="inline-flex rounded-full border border-[#D84D95]/15 bg-[#D84D95]/10 px-5 py-2 text-sm font-semibold text-[#D84D95]">
          About George Brown College
        </span>
      </MotionReveal>

      <MotionReveal delay={0.08}>
        <h1 className="mt-6 text-5xl font-bold leading-[1.05] text-slate-900 xl:text-6xl">
          Preparing Students
          <br />
          For Successful
          <br />
          Global Careers.
        </h1>
      </MotionReveal>

      <MotionReveal delay={0.16}>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
          George Brown College is committed to delivering quality education,
          practical learning and industry-focused training that prepares
          students with the knowledge, confidence and real-world skills needed
          for long-term career success.
        </p>
      </MotionReveal>

      <MotionReveal delay={0.24}>
        <div className="mt-10 flex flex-wrap gap-4">
          <MotionHover scale={1.03}>
            <Link
              href="/apply-now"
              className="group inline-flex items-center gap-2 rounded-full bg-[#D84D95] px-7 py-3.5 font-semibold text-white shadow-[0_18px_45px_rgba(216,77,149,0.28)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Apply Now
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </MotionHover>

          <MotionHover scale={1.03}>
            <Link
              href="/meet-an-advisor"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-800 transition-all duration-300 hover:border-[#D84D95] hover:text-[#D84D95] hover:shadow-lg"
            >
              Meet an Advisor
            </Link>
          </MotionHover>
        </div>
      </MotionReveal>

      <MotionStagger className="mt-14 grid max-w-xl grid-cols-3 gap-4">
        {highlights.map((item, index) => (
          <MotionReveal key={item.value} delay={0.32 + index * 0.08}>
            <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_12px_35px_rgba(15,23,42,0.05)]">
              <div className="flex items-center gap-2">
                <GraduationCap size={18} className="text-[#D84D95]" />

                <span className="text-sm font-semibold text-slate-500">
                  {item.value}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-bold text-slate-900">
                {item.label}
              </h3>
            </div>
          </MotionReveal>
        ))}
      </MotionStagger>
    </div>
  );
}
