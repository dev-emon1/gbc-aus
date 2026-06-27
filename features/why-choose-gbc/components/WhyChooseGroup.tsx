import { BriefcaseBusiness, GraduationCap, Users } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";

import { WhyChooseFeatureGroup } from "../types";

import WhyChooseImage from "./WhyChooseImage";
import WhyChooseItem from "./WhyChooseItem";

type Props = {
  data: WhyChooseFeatureGroup;
  index: number;
};

const ICONS = {
  "graduation-cap": GraduationCap,
  users: Users,
  briefcase: BriefcaseBusiness,
};

export default function WhyChooseGroup({ data, index }: Props) {
  const Icon = ICONS[data.icon as keyof typeof ICONS] ?? GraduationCap;

  const reverse = index % 2 === 1;

  return (
    <section
      className={`grid items-center gap-16 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image */}

      <WhyChooseImage src={data.image} alt={data.title} />

      {/* Content */}

      <MotionReveal>
        <div>
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D84D95]/10 to-[#B7D531]/10 text-[#D84D95]">
              <Icon size={30} />
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
                0{index + 1}
              </span>

              <h2 className="mt-2 text-4xl font-bold text-slate-900">
                {data.title}
              </h2>
            </div>
          </div>

          <div className="mt-10 h-1 w-24 rounded-full bg-gradient-to-r from-[#D84D95] to-[#B7D531]" />

          <div className="mt-10 divide-y divide-slate-200">
            {data.items.map((item) => (
              <WhyChooseItem key={item.title} item={item} />
            ))}
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
