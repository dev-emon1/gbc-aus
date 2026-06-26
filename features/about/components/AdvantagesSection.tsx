import { CONTAINER } from "@/constants/layout";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import AdvantagesChecklist from "./AdvantagesChecklist";
import AdvantagesContent from "./AdvantagesContent";

export default function AdvantagesSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">
      {/* Background */}

      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#D84D95]/6 blur-[140px]" />

      <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#B7D531]/8 blur-[140px]" />

      <div className={CONTAINER}>
        <MotionStagger className="grid items-center gap-20 lg:grid-cols-[1fr_520px]">
          <MotionReveal>
            <AdvantagesContent />
          </MotionReveal>

          <MotionReveal delay={0.15}>
            <AdvantagesChecklist />
          </MotionReveal>
        </MotionStagger>
      </div>
    </section>
  );
}
