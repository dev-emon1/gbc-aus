import { CONTAINER } from "@/constants/layout";

import HistoryContent from "./HistoryContent";
import HistoryStoryCards from "./HistoryStoryCards";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

export default function HistorySection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">
      {/* Background */}

      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(216,77,149,0.05),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(183,213,49,0.05),transparent_30%)]" />

      <div className={`${CONTAINER} relative z-10`}>
        <MotionStagger className="grid gap-20 lg:grid-cols-[460px_1fr]">
          <MotionReveal>
            <HistoryContent />
          </MotionReveal>

          <MotionReveal delay={0.15}>
            <HistoryStoryCards />
          </MotionReveal>
        </MotionStagger>
      </div>
    </section>
  );
}
