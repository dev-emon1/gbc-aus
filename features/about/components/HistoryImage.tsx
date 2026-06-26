import Image from "next/image";
import { Quote } from "lucide-react";

import { MotionHover, MotionReveal } from "@/components/shared/animations";

import { HistoryData } from "../types";

import HistoryQuote from "./HistoryQuote";

type Props = {
  data: HistoryData;
};

export default function HistoryImage({ data }: Props) {
  return (
    <MotionHover y={-4}>
      <div className="relative">
        {/* Main Image */}

        <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_35px_90px_rgba(15,23,42,.10)]">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Image Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
          </div>
        </div>

        {/* Established Badge */}

        <MotionReveal delay={0.12}>
          <div className="absolute left-8 top-8 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
              Established
            </p>

            <h4 className="mt-2 text-3xl font-bold text-white">2010</h4>
          </div>
        </MotionReveal>

        {/* Floating Quote Card */}

        <MotionReveal delay={0.24}>
          <div className="absolute -bottom-10 left-8 right-8 rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_30px_80px_rgba(15,23,42,.12)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D84D95]/10 text-[#D84D95]">
              <Quote size={26} />
            </div>

            <blockquote className="mt-6 text-lg font-semibold leading-8 text-slate-900">
              “{data.quote.text}”
            </blockquote>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-200" />

              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                {data.quote.author}
              </span>
            </div>
          </div>
        </MotionReveal>

        {/* Decorative Glow */}

        <div className="absolute -right-10 -top-10 -z-10 h-52 w-52 rounded-full bg-[#D84D95]/10 blur-[120px]" />

        <div className="absolute -bottom-10 -left-10 -z-10 h-60 w-60 rounded-full bg-[#B7D531]/10 blur-[130px]" />
      </div>
    </MotionHover>
  );
}
