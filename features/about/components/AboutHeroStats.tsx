import { Award, Building2, MapPin } from "lucide-react";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

const stats = [
  {
    icon: Award,
    title: "CRICOS",
    value: "03208D",
  },

  {
    icon: Building2,
    title: "RTO",
    value: "91707",
  },

  {
    icon: MapPin,
    title: "Campus",
    value: "Sydney",
  },
];

export default function AboutHeroStats() {
  return (
    <MotionStagger>
      {/* Left Card */}

      <MotionReveal delay={0.3}>
        <div className="absolute -left-10 top-10 w-44 rounded-[24px] border border-white/50 bg-white/90 p-5 shadow-[0_25px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl">
          <Award className="h-7 w-7 text-[#D84D95]" />

          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
            CRICOS
          </p>

          <h3 className="mt-2 text-2xl font-bold text-slate-900">03208D</h3>
        </div>
      </MotionReveal>

      {/* Right Card */}

      <MotionReveal delay={0.4}>
        <div className="absolute -right-10 top-1/2 w-48 -translate-y-1/2 rounded-[24px] border border-white/50 bg-white/90 p-5 shadow-[0_25px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl">
          <Building2 className="h-7 w-7 text-[#B7D531]" />

          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
            Registered RTO
          </p>

          <h3 className="mt-2 text-2xl font-bold text-slate-900">91707</h3>
        </div>
      </MotionReveal>

      {/* Bottom Card */}

      <MotionReveal delay={0.5}>
        <div className="absolute bottom-8 left-8 rounded-[22px] border border-white/50 bg-white/90 px-6 py-5 shadow-[0_20px_50px_rgba(15,23,42,0.10)] backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <MapPin className="h-6 w-6 text-[#D84D95]" />

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                Campus
              </p>

              <h4 className="mt-1 text-xl font-bold text-slate-900">
                Sydney, Australia
              </h4>
            </div>
          </div>
        </div>
      </MotionReveal>
    </MotionStagger>
  );
}
