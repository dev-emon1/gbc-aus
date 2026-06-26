import Link from "next/link";

import Image from "next/image";

import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  HeartHandshake,
} from "lucide-react";

import { MotionHover, MotionReveal } from "@/components/shared/animations";

import { WhatWeDoItem } from "../types";

type Props = {
  item: WhatWeDoItem;
  featured?: boolean;
};

const ICONS = {
  "ELICOS Programs": GraduationCap,

  "Vocational Education": BriefcaseBusiness,

  "Student Support": HeartHandshake,
};

export default function WhatWeDoCard({ item, featured = false }: Props) {
  const Icon = ICONS[item.title as keyof typeof ICONS] ?? GraduationCap;

  if (featured) {
    return (
      <MotionReveal>
        <MotionHover y={-4}>
          <div className="group relative h-[360px] overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_30px_90px_rgba(15,23,42,.10)] transition-all duration-500 hover:shadow-[0_40px_110px_rgba(15,23,42,.14)]">
            {/* Image */}

            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />

            {/* Content */}

            <div className="absolute inset-x-0 bottom-0 z-10 p-8">
              <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-xl">
                George Brown College
              </span>

              <h3 className="mt-5 text-4xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 max-w-xl text-lg leading-8 text-white/85">
                {item.description}
              </p>

              <Link
                href={item.href ?? "#"}
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-slate-900"
              >
                Explore Programs
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </MotionHover>
      </MotionReveal>
    );
  }

  return (
    <MotionReveal>
      <MotionHover y={-4}>
        <div className="group flex min-h-[480px] flex-col rounded-[30px] border border-slate-200/80 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,.10)]">
          {/* Icon */}

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D84D95]/12 to-[#B7D531]/12 text-[#D84D95]">
            <Icon size={28} strokeWidth={2.2} />
          </div>

          {/* Title */}

          <h3 className="mt-8 text-[20px] font-bold leading-tight text-slate-900">
            {item.title}
          </h3>

          {/* Divider */}

          <div className="mt-3 h-px w-full bg-gradient-to-r from-[#D84D95]/20 via-slate-200 to-transparent" />

          {/* Description */}

          <p className="mt-6 flex-1 text-[14px] leading-8 text-slate-600">
            {item.description}
          </p>

          {/* Bottom Accent */}

          <div className="mt-8 flex items-center justify-between gap-x-8">
            <div className="h-1.5 w-16 rounded-full bg-gradient-to-r from-[#D84D95] to-[#B7D531]" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              George Brown College
            </span>
          </div>
        </div>
      </MotionHover>
    </MotionReveal>
  );
}
