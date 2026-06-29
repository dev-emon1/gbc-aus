import { Check } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";

import { WhyChooseFeatureItem } from "../types";

type Props = {
  item: WhyChooseFeatureItem;
};

export default function WhyChooseItem({ item }: Props) {
  return (
    <MotionReveal>
      <div className="relative">
        <div className="flex items-start gap-5 my-3">
          {/* Icon */}

          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D84D95]/10 text-[#D84D95]">
            <Check size={18} strokeWidth={2.5} />
          </div>

          {/* Content */}

          <div className="flex-1">
            <h3 className="text-[28px] font-bold leading-tight text-slate-900">
              {item.title}
            </h3>

            {/* Divider */}

            <div className="mt-5 h-px w-20 bg-gradient-to-r from-[#D84D95] to-transparent" />

            {/* Description */}

            <p className="mt-6 text-[17px] leading-8 text-slate-600">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </MotionReveal>
  );
}
