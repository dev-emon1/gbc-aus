"use client";

import Link from "next/link";

import { MotionHover, MotionReveal } from "@/components/shared/animations";

type Props = {
  title: string;
  description: string;
  buttonText: string;
  file: string;
  coverTitle: string;
  coverYear?: string;
};

export default function ResourceCard({
  title,
  description,
  buttonText,
  file,
  coverTitle,
  coverYear = "2026",
}: Props) {
  return (
    <MotionReveal>
      <MotionHover scale={1.015} y={-8}>
        <div className="group relative overflow-hidden rounded-[40px] border border-slate-200 bg-gradient-to-br from-white via-pink-50/30 to-lime-50/20 p-8 transition-all duration-500 hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)] lg:p-10">
          {/* Glow */}

          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#D84D95]/10 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            {/* Left */}

            <div className="max-w-md">
              <MotionReveal delay={0.05}>
                <span className="inline-flex rounded-full bg-[#D84D95]/10 px-4 py-2 text-xs font-semibold text-[#D84D95]">
                  PDF Resource
                </span>
              </MotionReveal>

              <MotionReveal delay={0.1}>
                <h3 className="mt-5 text-3xl font-bold text-slate-900">
                  {title}
                </h3>
              </MotionReveal>

              <MotionReveal delay={0.15}>
                <p className="mt-4 leading-relaxed text-slate-600">
                  {description}
                </p>
              </MotionReveal>

              <MotionReveal delay={0.2}>
                <Link
                  href={file}
                  className="mt-8 inline-flex rounded-full bg-[#D84D95] px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(216,77,149,0.35)]"
                >
                  {buttonText}
                </Link>
              </MotionReveal>
            </div>

            {/* Book */}

            <div className="relative mx-auto h-[320px] w-[220px] shrink-0">
              {/* Pages */}

              <div className="absolute right-[-14px] top-[16px] h-[90%] w-[16px] rounded-r-md bg-slate-300" />

              <div className="absolute right-[-8px] top-[10px] h-[94%] w-[14px] rounded-r-md bg-slate-200" />
              {/* Book */}
              <div className="relative h-full w-full rounded-r-md shadow-[0_40px_80px_rgba(0,0,0,0.18)] transition-all duration-700 group-hover:-translate-y-3 group-hover:-rotate-3 group-hover:shadow-[0_60px_120px_rgba(0,0,0,0.22)]">
                {/* Spine */}
                <div className="absolute left-[-12px] top-0 h-full w-[12px] rounded-l-md bg-[#b53a7d]" />

                {/* Cover */}
                <div className="absolute inset-0 overflow-hidden rounded-r-md bg-gradient-to-br from-[#D84D95] via-[#e561a9] to-[#B7D531]">
                  {/* Decorative Circle */}
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/20" />

                  <div className="absolute bottom-[-50px] left-[-50px] h-40 w-40 rounded-full bg-white/10 blur-2xl" />

                  <div className="flex h-full flex-col justify-between p-8 text-white">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                        George Brown College
                      </p>

                      <h3 className="mt-8 text-3xl font-bold leading-tight">
                        {coverTitle}
                      </h3>
                    </div>

                    <div>
                      <div className="mb-4 h-px bg-white/30" />

                      <p className="text-sm text-white/80">Build Your Future</p>

                      <p className="mt-2 text-xl font-bold">{coverYear}</p>
                    </div>
                  </div>

                  {/* Shine */}
                  <div className="absolute -left-32 top-0 h-full w-20 rotate-12 bg-white/20 blur-xl transition-all duration-1000 group-hover:left-[140%]" />
                </div>
              </div>
            </div>

            {/* End Book */}
          </div>
        </div>
      </MotionHover>
    </MotionReveal>
  );
}
