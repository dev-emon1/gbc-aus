import { Quote, Leaf, HeartHandshake, Landmark, Globe } from "lucide-react";

import { MotionHover, MotionReveal } from "@/components/shared/animations";

const values = [
  {
    icon: HeartHandshake,
    label: "Respect",
  },
  {
    icon: Landmark,
    label: "Country",
  },
  {
    icon: Leaf,
    label: "Culture",
  },
  {
    icon: Globe,
    label: "Community",
  },
];

export default function AcknowledgementQuoteCard() {
  return (
    <MotionReveal delay={0.12}>
      <MotionHover y={-4}>
        <div className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,.08)] transition-all duration-500 hover:shadow-[0_35px_90px_rgba(15,23,42,.12)]">
          {/* Background Glow */}

          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#D84D95]/8 blur-[90px]" />

          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#B7D531]/8 blur-[110px]" />

          {/* Quote */}

          <div className="relative z-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D84D95]/10 text-[#D84D95]">
              <Quote size={30} />
            </div>

            <blockquote className="mt-8 text-2xl font-bold leading-[1.5] text-slate-900">
              We respectfully acknowledge the Traditional Custodians of the land
              and honour their enduring connection to Country.
            </blockquote>

            <div className="mt-8 h-px bg-gradient-to-r from-[#D84D95]/20 via-slate-200 to-transparent" />

            {/* Values */}

            <div className="mt-8 grid grid-cols-2 gap-4">
              {values.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 transition-all duration-300 group-hover:border-[#D84D95]/15 group-hover:bg-[#FBF8FA]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#D84D95] shadow-sm">
                    <Icon size={18} />
                  </div>

                  <span className="font-semibold text-slate-700">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MotionHover>
    </MotionReveal>
  );
}
