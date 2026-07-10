import { Check } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";
import { OverviewResources } from "@/components/shared/sections/overview-resources";
import { CONTAINER } from "@/constants/layout";

import { StudyArea } from "../../types";

type Props = {
  studyArea: StudyArea;
};

export default function Overview({ studyArea }: Props) {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-24">
      {/* Ambient Background */}

      <div className="absolute -left-48 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[140px]" />

      <div className="absolute -right-48 bottom-0 h-80 w-80 rounded-full bg-[#B7D531]/10 blur-[140px]" />

      <div className={CONTAINER}>
        <div className="mx-auto max-w-4xl">
          <MotionReveal>
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.32em] text-[#D84D95]">
                Study Area
              </span>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 lg:text-4xl">
                About This Study Area
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
                Everything you need to know before selecting your qualification,
                including industry strengths, learning outcomes and official
                study resources.
              </p>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <div className="mx-auto mt-10 grid max-w-4xl gap-x-10 gap-y-5 md:grid-cols-2">
              {studyArea.overview.highlights.map((item) => (
                <div
                  key={item}
                  className="group flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 transition-all duration-300 hover:border-[#D84D95]/20"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B7D531]/15 transition-transform duration-300 group-hover:scale-110">
                    <Check size={16} className="text-[#B7D531]" />
                  </div>

                  <p className="text-sm font-medium leading-7 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </MotionReveal>

          <MotionReveal delay={0.16}>
            <div className="mt-6 flex justify-center">
              <OverviewResources />
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
