import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { CONTAINER } from "@/constants/layout";

import { MotionHover, MotionReveal } from "@/components/shared/animations";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-28">
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,77,149,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(183,213,49,0.18),transparent_35%)]" />

      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className={`${CONTAINER} relative z-10`}>
        <MotionReveal>
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-xl">
              Begin Your Journey
            </span>

            <h2 className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl">
              Ready To Join
              <br />
              George Brown College?
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/75">
              Discover industry-focused programs, explore your study options and
              take the next step towards a successful future.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <MotionHover scale={1.03}>
                <Link
                  href="/courses"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#D84D95] transition-all duration-300 hover:-translate-y-1 hover:gap-3 hover:shadow-[0_25px_60px_rgba(255,255,255,0.18)]"
                >
                  Explore Courses
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </MotionHover>

              <MotionHover scale={1.03}>
                <Link
                  href="/meet-an-advisor"
                  className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-[#D84D95]"
                >
                  Meet an Advisor
                </Link>
              </MotionHover>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
