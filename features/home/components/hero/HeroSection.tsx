import Image from "next/image";
import Link from "next/link";

import HeroStats from "./HeroStats";
import { CONTAINER } from "@/constants/layout";

import MotionReveal from "@/components/shared/animations/MotionReveal";
import { heroImage, MotionHover } from "@/components/shared/animations";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
      "
    >
      {/* Background Effects */}
      <div
        className="
          absolute
          -top-20
          -right-20

          h-[700px]
          w-[700px]

          rounded-full

          bg-[#D84D95]/6

          blur-[180px]
        "
      />

      <div
        className="
          absolute
          -bottom-20
          -left-20

          h-[500px]
          w-[500px]

          rounded-full

          bg-[#B7D531]/6

          blur-[160px]
        "
      />

      <div
        className={`
          ${CONTAINER}
          pt-12
          md:pt-16
          lg:pt-0
        `}
      >
        <div
          className="
            grid
            lg:grid-cols-2

            items-center

            gap-10
            xl:gap-16

            min-h-[640px]
            lg:min-h-[820px]
          "
        >
          {/* Left Content */}
          <div className="max-w-[640px]">
            <MotionReveal animateOnMount>
              <span className="inline-flex rounded-full bg-[#D84D95]/10 px-5 py-2 text-sm font-medium text-[#D84D95]">
                Trusted Australian Education
              </span>
            </MotionReveal>

            <MotionReveal animateOnMount delay={0.15}>
              <h1 className="mt-6 text-[52px] font-bold leading-[0.95] tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
                Build Your Future
                <br />
                <span className="text-[#D84D95]">With Confidence</span>
              </h1>
            </MotionReveal>

            <MotionReveal animateOnMount delay={0.3}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-600">
                Industry focused training, flexible learning and career pathways
                designed for modern students.
              </p>
            </MotionReveal>

            <MotionReveal animateOnMount delay={0.45}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/courses"
                  className="rounded-full bg-[#D84D95] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(216,77,149,0.35)]"
                >
                  Explore Courses
                </Link>

                <Link
                  href="/meet-an-advisor"
                  className="rounded-full border-2 border-slate-300 px-8 py-4 font-semibold text-slate-900 transition-all duration-300 hover:border-[#D84D95] hover:text-[#D84D95]"
                >
                  Book Consultation
                </Link>
              </div>
            </MotionReveal>

            <MotionReveal animateOnMount delay={0.6}>
              <HeroStats />
            </MotionReveal>
          </div>

          {/* Right Side */}
          {/* Right Side */}
          <MotionReveal animateOnMount delay={0.75} variant={heroImage}>
            <div className="relative hidden lg:block">
              <div className="relative h-[650px] overflow-hidden rounded-[48px] shadow-[0_40px_120px_rgba(0,0,0,0.12)]">
                <MotionHover scale={1.01} y={-4}>
                  <Image
                    src="/images/hero/hero1.jpg"
                    alt="George Brown College Students"
                    fill
                    priority
                    className="object-cover"
                  />
                </MotionHover>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                {/* Glass Stats */}
                <MotionReveal animateOnMount delay={1.05}>
                  <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/20 bg-white/10 px-8 py-6 backdrop-blur-xl">
                    <div className="grid grid-cols-3 gap-6 text-white">
                      <div>
                        <h4 className="text-xl font-bold">CRICOS</h4>

                        <p className="text-sm text-white/80">
                          Approved Provider
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold">AQF</h4>

                        <p className="text-sm text-white/80">
                          National Standards
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold">Career</h4>

                        <p className="text-sm text-white/80">
                          Industry Focused
                        </p>
                      </div>
                    </div>
                  </div>
                </MotionReveal>

                {/* Floating Badge */}
                <MotionReveal animateOnMount delay={1.15}>
                  <div className="absolute top-8 right-8 rounded-full bg-white px-5 py-3 shadow-xl">
                    <span
                      className="
                    text-sm
                    font-semibold

                    text-[#D84D95]
                  "
                    >
                      Sydney Campus
                    </span>
                  </div>
                </MotionReveal>
                {/* Floating Students */}
                <MotionReveal animateOnMount delay={1.25}>
                  <div className="absolute top-8 left-8 rounded-full bg-white/95 px-5 py-3 shadow-xl">
                    <span className=" text-sm font-semibold text-slate-900">
                      CRICOS Registered
                    </span>
                  </div>
                </MotionReveal>
              </div>
            </div>
          </MotionReveal>

          {/* Mobile Image */}
          <div className="relative lg:hidden mt-8">
            <div className="w-[500px]">
              <img
                src="/images/hero/hero1.jpg"
                alt="hero"
                className="w-full border border-red-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
