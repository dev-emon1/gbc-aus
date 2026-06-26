import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { MotionHover, MotionReveal } from "@/components/shared/animations";

export default function WelcomeContent() {
  return (
    <div className="max-w-3xl">
      <MotionReveal>
        <span className="inline-flex rounded-full border border-[#D84D95]/15 bg-[#D84D95]/10 px-5 py-2 text-sm font-semibold text-[#D84D95]">
          Welcome to GBC
        </span>
      </MotionReveal>

      <MotionReveal delay={0.08}>
        <h2 className="mt-6 text-4xl font-bold leading-[1.1] text-slate-900 md:text-5xl">
          An Education That
          <br />
          Inspires Confidence
          <br />
          And Creates Opportunity.
        </h2>
      </MotionReveal>

      <MotionReveal delay={0.16}>
        <p className="mt-8 text-lg leading-8 text-slate-600">
          George Brown College is dedicated to delivering quality education
          through practical learning, academic excellence and industry
          engagement. Our programs are designed to equip students with the
          knowledge, professional skills and confidence needed to succeed in an
          evolving global workforce.
        </p>
      </MotionReveal>

      <MotionReveal delay={0.24}>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          From the moment you join our community, you'll experience a supportive
          learning environment, experienced educators and strong industry
          connections that help transform ambition into real career outcomes.
        </p>
      </MotionReveal>

      <MotionReveal delay={0.32}>
        <MotionHover scale={1.03}>
          <Link
            href="/why-gbc"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-[#D84D95] px-7 py-3.5 font-semibold text-white shadow-[0_18px_45px_rgba(216,77,149,0.28)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Discover Why GBC
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </MotionHover>
      </MotionReveal>
    </div>
  );
}
