import { GraduationCap, Handshake, TrendingUp, Users } from "lucide-react";

import { MotionHover, MotionReveal } from "@/components/shared/animations";

import { CareerBenefitItem as CareerBenefitItemType } from "../types";

type Props = {
  item: CareerBenefitItemType;

  reverse?: boolean;
};

const ICONS = {
  users: Users,

  "trending-up": TrendingUp,

  "graduation-cap": GraduationCap,

  "heart-handshake": Handshake,
};

export default function CareerBenefitItem({ item, reverse = false }: Props) {
  const Icon = ICONS[item.icon as keyof typeof ICONS] ?? Users;

  return (
    <MotionReveal>
      <MotionHover y={-4}>
        <div
          className={`
            group
            grid
            items-center
            gap-10
            rounded-[32px]
            border
            border-slate-200
            bg-white
            p-10
            shadow-[0_18px_60px_rgba(15,23,42,.05)]
            transition-all
            duration-500
            hover:border-[#D84D95]/20
            hover:shadow-[0_28px_80px_rgba(15,23,42,.08)]

            lg:grid-cols-[160px_1fr]

            ${
              reverse
                ? "lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1"
                : ""
            }
          `}
        >
          {/* Icon */}

          <div className="flex justify-center">
            <div
              className="
                flex
                h-32
                w-32
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-[#D84D95]/10
                to-[#B7D531]/10
                transition-transform
                duration-500
                group-hover:scale-105
              "
            >
              <Icon size={56} strokeWidth={1.8} className="text-[#D84D95]" />
            </div>
          </div>

          {/* Content */}

          <div>
            <span
              className="
                inline-flex
                rounded-full
                bg-[#D84D95]/10
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#D84D95]
              "
            >
              Career Benefit
            </span>

            <h3 className="mt-6 text-4xl font-bold leading-tight text-slate-900">
              {item.title}
            </h3>

            <div className="mt-6 h-1 w-20 rounded-full bg-[#D84D95]" />

            <p className="mt-8 max-w-2xl text-[17px] leading-9 text-slate-600">
              {item.description}
            </p>
          </div>
        </div>
      </MotionHover>
    </MotionReveal>
  );
}
