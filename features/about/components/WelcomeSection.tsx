import { CONTAINER } from "@/constants/layout";

import WelcomeContent from "./WelcomeContent";
import WelcomeHighlights from "./WelcomeHighlights";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

export default function WelcomeSection() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background Glow */}

      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#D84D95]/6 blur-[120px]" />

      <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-[#B7D531]/8 blur-[120px]" />

      <div className={CONTAINER}>
        <MotionStagger className="grid items-center gap-20 lg:grid-cols-[1fr_420px]">
          <MotionReveal>
            <WelcomeContent />
          </MotionReveal>

          <MotionReveal delay={0.15}>
            <WelcomeHighlights />
          </MotionReveal>
        </MotionStagger>
      </div>
    </section>
  );
}
