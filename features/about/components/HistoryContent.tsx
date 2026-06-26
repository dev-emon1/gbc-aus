import { MotionReveal } from "@/components/shared/animations";

import { HistoryData } from "../types";

type Props = {
  data: HistoryData;
};

export default function HistoryContent({ data }: Props) {
  return (
    <div className="max-w-2xl">
      <MotionReveal>
        <span className="inline-flex rounded-full border border-[#D84D95]/15 bg-[#D84D95]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
          {data.badge}
        </span>
      </MotionReveal>

      <MotionReveal delay={0.08}>
        <h2 className="mt-6 text-4xl font-bold leading-[1.1] text-slate-900 md:text-5xl">
          {data.title}
        </h2>
      </MotionReveal>

      <MotionReveal delay={0.16}>
        <div className="mt-8 h-1 w-20 rounded-full bg-[#D84D95]" />
      </MotionReveal>

      <div className="mt-10 space-y-7">
        {data.paragraphs.map((paragraph, index) => (
          <MotionReveal key={index} delay={0.24 + index * 0.08}>
            <p className="text-[17px] leading-8 text-slate-600">{paragraph}</p>
          </MotionReveal>
        ))}
      </div>
    </div>
  );
}
