import { Quote } from "lucide-react";

import { MotionHover, MotionReveal } from "@/components/shared/animations";

import { HistoryQuote as HistoryQuoteType } from "../types";

type Props = {
  data: HistoryQuoteType;
};

export default function HistoryQuote({ data }: Props) {
  return (
    <MotionReveal delay={0.24}>
      <MotionHover y={-4}>
        <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_30px_80px_rgba(15,23,42,.12)]">
          {/* Background Glow */}

          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#D84D95]/8 blur-[80px]" />

          <div className="absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-[#B7D531]/8 blur-[90px]" />

          <div className="relative z-10">
            {/* Quote Icon */}

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D84D95]/10 text-[#D84D95]">
              <Quote size={26} />
            </div>

            {/* Quote */}

            <blockquote className="mt-6 text-lg font-semibold leading-8 text-slate-900">
              “{data.text}”
            </blockquote>

            {/* Footer */}

            <div className="mt-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-[#D84D95]/30 to-slate-200" />

              <div className="text-right">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-700">
                  {data.author}
                </p>

                {data.role && (
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-400">
                    {data.role}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </MotionHover>
    </MotionReveal>
  );
}
