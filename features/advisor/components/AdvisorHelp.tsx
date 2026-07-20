import Image from "next/image";

import { Check, Sparkles } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";

import { CONTAINER } from "@/constants/layout";

import { ADVISOR_HELP } from "../data/advisor";

export default function AdvisorHelp() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Ambient */}

      <div
        className="
        absolute
        -left-40
        top-20
        h-[30rem]
        w-[30rem]
        rounded-full
        bg-[#D84D95]/10
        blur-[180px]
      "
      />

      <div
        className="
        absolute
        -right-40
        bottom-0
        h-[32rem]
        w-[32rem]
        rounded-full
        bg-[#B7D531]/10
        blur-[200px]
      "
      />

      <div className={CONTAINER}>
        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[0.9fr_1.1fr]
          "
        >
          {/* Image */}

          <MotionReveal>
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[40px]
                border
                border-slate-200
                shadow-[0_35px_100px_rgba(15,23,42,.10)]
              "
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={ADVISOR_HELP.image}
                  alt="George Brown College advisor support"
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-slate-950/60
                    via-transparent
                    to-transparent
                  "
                />
              </div>

              {/* Floating Badge */}

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  rounded-2xl
                  border
                  border-white/20
                  bg-white/15
                  px-5
                  py-4
                  backdrop-blur-xl
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-white
                      text-[#D84D95]
                    "
                  >
                    <Sparkles size={20} />
                  </div>

                  <div>
                    <p className="text-xs text-white/70">Student Support</p>

                    <p className="font-bold text-white">Always Here To Help</p>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>

          {/* Content */}

          <MotionReveal delay={0.15}>
            <div>
              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#D84D95]
                "
              >
                {ADVISOR_HELP.badge}
              </span>

              <h2
                className="
                  mt-5
                  text-4xl
                  font-black
                  tracking-tight
                  text-slate-900
                  md:text-5xl
                "
              >
                {ADVISOR_HELP.title}
              </h2>

              <p
                className="
                  mt-6
                  text-lg
                  leading-8
                  text-slate-600
                "
              >
                {ADVISOR_HELP.description}
              </p>

              <div className="mt-10 space-y-5">
                {ADVISOR_HELP.items.map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-4
                    "
                  >
                    <div
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#D84D95]/10
                        text-[#D84D95]
                      "
                    >
                      <Check size={16} />
                    </div>

                    <span
                      className="
                        text-base
                        font-medium
                        text-slate-700
                      "
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
