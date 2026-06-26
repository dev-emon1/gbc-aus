import { MotionReveal } from "@/components/shared/animations";

import { WhatWeDoData } from "../types";

type Props = {
  data: WhatWeDoData;
};

export default function WhatWeDoContent({ data }: Props) {
  return (
    <div className="max-w-xl">
      <MotionReveal>
        <span className="inline-flex rounded-full border border-[#D84D95]/15 bg-[#D84D95]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
          {data.badge}
        </span>
      </MotionReveal>

      <MotionReveal delay={0.08}>
        <h2 className="mt-6 text-4xl font-bold leading-[1.08] text-slate-900 md:text-5xl">
          {data.title}
        </h2>
      </MotionReveal>

      <MotionReveal delay={0.16}>
        <div className="mt-8 h-1 w-20 rounded-full bg-[#D84D95]" />
      </MotionReveal>

      <MotionReveal delay={0.24}>
        <p className="mt-8 text-[17px] leading-8 text-slate-600">
          {data.description}
        </p>
      </MotionReveal>
    </div>
  );
}
