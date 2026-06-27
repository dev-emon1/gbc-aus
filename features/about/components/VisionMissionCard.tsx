import { Eye, Target } from "lucide-react";

import { MotionHover } from "@/components/shared/animations";

import { VisionMissionCard as VisionMissionCardType } from "../types";

type Props = {
  type: "vision" | "mission";
  data: VisionMissionCardType;
};

export default function VisionMissionCard({ type, data }: Props) {
  const Icon = type === "vision" ? Eye : Target;

  const accent =
    type === "vision"
      ? "from-[#D84D95]/10 to-[#F9E3EF]"
      : "from-[#B7D531]/10 to-[#EEF6D5]";

  return (
    <MotionHover y={-3}>
      <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,.06)]">
        <div className={`bg-gradient-to-r ${accent} p-8`}>
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md">
              <Icon
                size={30}
                className={
                  type === "vision" ? "text-[#D84D95]" : "text-[#7BA81C]"
                }
              />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {type}
              </p>

              <h3 className="mt-2 text-3xl font-bold text-slate-900">
                {data.title}
              </h3>
            </div>
          </div>
        </div>

        <div className="p-8">
          {Array.isArray(data.description) ? (
            <div className="space-y-6">
              {data.description.map((paragraph, index) => (
                <p key={index} className="text-lg leading-8 text-slate-600">
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-lg leading-8 text-slate-600">
              {data.description}
            </p>
          )}
        </div>
      </div>
    </MotionHover>
  );
}
