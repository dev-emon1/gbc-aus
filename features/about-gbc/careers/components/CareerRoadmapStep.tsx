import {
  BadgeCheck,
  FileText,
  GraduationCap,
  MessageCircle,
  Search,
} from "lucide-react";

import { MotionHover, MotionReveal } from "@/components/shared/animations";

import { CareerProcessStep } from "../types";

type Props = {
  step: CareerProcessStep;

  index: number;

  reverse?: boolean;
};

const ICONS = {
  file: FileText,

  search: Search,

  interview: MessageCircle,

  offer: BadgeCheck,

  welcome: GraduationCap,
};

export default function CareerRoadmapStep({
  step,
  index,
  reverse = false,
}: Props) {
  const Icon = ICONS[step.icon as keyof typeof ICONS] ?? FileText;

  return (
    <MotionReveal>
      <MotionHover y={-4}>
        <div
          className={`
            relative
            grid
            items-center
            gap-10

            lg:grid-cols-2

            ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
          `}
        >
          {/* Card */}

          <div
            className={`
              relative

              ${reverse ? "lg:pl-20" : "lg:pr-20"}
            `}
          >
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/60
                bg-white/90
                p-10
                backdrop-blur-xl
                shadow-[0_30px_80px_rgba(15,23,42,.08)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#D84D95]/30
              "
            >
              {/* Number */}

              <span
                className="
                  absolute
                  right-8
                  top-6
                  text-7xl
                  font-black
                  leading-none
                  text-slate-100
                "
              >
                {(index + 1).toString().padStart(2, "0")}
              </span>

              {/* Icon */}

              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-[#D84D95]
                  to-[#B64E91]
                  text-white
                  shadow-lg
                "
              >
                <Icon size={30} />
              </div>

              <h3 className="mt-8 text-3xl font-bold text-slate-900">
                {step.title}
              </h3>

              <div className="mt-5 h-1 w-16 rounded-full bg-[#D84D95]" />

              <p className="mt-6 text-lg leading-8 text-slate-600">
                {step.description}
              </p>

              {/* Hover Glow */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              >
                <div
                  className="
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-[#D84D95]/10
                    blur-3xl
                  "
                />
              </div>
            </div>
          </div>

          {/* Connector */}

          <div className="relative hidden h-full lg:block">
            {/* Dot */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                z-20
                h-6
                w-6
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border-4
                border-white
                bg-[#D84D95]
                shadow-lg
              "
            />

            {/* Horizontal Line */}

            <div
              className={`
                absolute
                top-1/2
                h-[2px]
                bg-[#D84D95]/40

                ${reverse ? "left-0 right-1/2" : "left-1/2 right-0"}
              `}
            />
          </div>
        </div>
      </MotionHover>
    </MotionReveal>
  );
}
