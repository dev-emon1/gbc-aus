import Image from "next/image";

import { MotionHover, MotionReveal } from "@/components/shared/animations";

import AboutHeroStats from "./AboutHeroStats";

export default function AboutHeroImage() {
  return (
    <MotionReveal delay={0.25}>
      <MotionHover scale={1.015}>
        <div className="relative">
          {/* Background Layer */}

          <div className="absolute left-6 top-6 h-full w-full rounded-[40px] bg-gradient-to-br from-[#D84D95]/12 via-[#FCE8F3] to-[#B7D531]/12" />

          {/* Main Image */}

          <div className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-[0_40px_100px_rgba(15,23,42,0.12)]">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/about/about-hero.jpg"
                alt="George Brown College"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
          </div>

          {/* Floating Cards */}

          <AboutHeroStats />
        </div>
      </MotionHover>
    </MotionReveal>
  );
}
