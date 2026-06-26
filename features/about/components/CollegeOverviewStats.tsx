import {
  MotionHover,
  MotionReveal,
  MotionStagger,
} from "@/components/shared/animations";

import { OverviewStat } from "../types";

type Props = {
  data: OverviewStat[];
};

export default function CollegeOverviewStats({ data }: Props) {
  return (
    <MotionStagger>
      <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.06)]">
        <div className="border-b border-slate-200 px-8 py-7">
          <span className="inline-flex rounded-full border border-[#D84D95]/15 bg-[#D84D95]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
            Institution Profile
          </span>

          <h3 className="mt-5 text-2xl font-bold text-slate-900">
            College Snapshot
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            Essential information about George Brown College presented at a
            glance.
          </p>
        </div>

        <div className="divide-y divide-slate-100">
          {data.map((item, index) => (
            <MotionReveal key={item.label} delay={index * 0.08}>
              <MotionHover y={-2}>
                <div className="group flex items-center justify-between px-8 py-6 transition-all duration-300 hover:bg-[#FBF8FA]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      {item.label}
                    </p>

                    <h4 className="mt-2 text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#D84D95]">
                      {item.value}
                    </h4>
                  </div>

                  <div className="h-12 w-1 rounded-full bg-slate-100 transition-all duration-300 group-hover:bg-[#D84D95]" />
                </div>
              </MotionHover>
            </MotionReveal>
          ))}
        </div>
      </div>
    </MotionStagger>
  );
}
