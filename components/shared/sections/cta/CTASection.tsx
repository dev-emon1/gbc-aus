import { CONTAINER } from "@/constants/layout";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import CTAButtons from "./CTAButtons";

import { CTAData } from "./types";

type Props = {
  data: CTAData;
};

export default function CTASection({ data }: Props) {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}

      <div className="absolute inset-0 bg-slate-950" />

      {/* Gradient */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#D84D95]/20 via-slate-950 to-[#B7D531]/15" />

      {/* Glow */}

      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#D84D95]/20 blur-[140px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#B7D531]/15 blur-[160px]" />

      {/* Grid */}

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className={`${CONTAINER} relative z-10`}>
        <MotionStagger className="mx-auto max-w-4xl text-center">
          <MotionReveal>
            <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-xl">
              {data.badge}
            </span>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <h2 className="mt-7 text-5xl font-bold leading-tight text-white md:text-6xl">
              {data.title}
            </h2>
          </MotionReveal>

          <MotionReveal delay={0.16}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/75">
              {data.description}
            </p>
          </MotionReveal>

          <MotionReveal delay={0.24}>
            <CTAButtons data={data} />
          </MotionReveal>
        </MotionStagger>
      </div>
    </section>
  );
}
