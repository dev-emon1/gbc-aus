import { Building2 } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";

type Props = {
  totalAgents: number;
};

export default function AgentHeader({ totalAgents }: Props) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <MotionReveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-[#D84D95]/15 bg-[#D84D95]/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
          <Building2 size={14} />
          Authorized Representatives
        </span>
      </MotionReveal>

      <MotionReveal delay={0.08}>
        <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Find Your GBC Education Representative
        </h2>
      </MotionReveal>

      <MotionReveal delay={0.16}>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Search our network of authorised education representatives to connect
          with a trusted partner who can assist you with course selection,
          admissions, visa guidance, and your study journey.
        </p>
      </MotionReveal>

      <MotionReveal delay={0.24}>
        <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D84D95]/10">
            <Building2 size={20} className="text-[#D84D95]" />
          </div>

          <div className="text-left">
            <p className="text-2xl font-bold text-slate-900">{totalAgents}</p>

            <p className="text-sm text-slate-500">
              Authorized Education Representatives
            </p>
          </div>
        </div>
      </MotionReveal>
    </div>
  );
}
