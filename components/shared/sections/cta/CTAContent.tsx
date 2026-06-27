import { MotionReveal } from "@/components/shared/animations";

import { CTAData } from "./types";

type Props = {
  data: CTAData;
};

export default function CTAContent({ data }: Props) {
  return (
    <>
      <MotionReveal>
        <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
          {data.badge}
        </span>
      </MotionReveal>

      <MotionReveal delay={0.08}>
        <h2 className="mt-7 text-4xl font-bold leading-tight text-white md:text-5xl">
          {data.title}
        </h2>
      </MotionReveal>

      <MotionReveal delay={0.16}>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/75">
          {data.description}
        </p>
      </MotionReveal>
    </>
  );
}
