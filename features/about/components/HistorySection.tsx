import { CONTAINER } from "@/constants/layout";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { ABOUT_DATA } from "../data";

import HistoryContent from "./HistoryContent";
import HistoryImage from "./HistoryImage";

export default function HistorySection() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-40">
      {/* Background */}

      <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-[#D84D95]/6 blur-[140px]" />

      <div className="absolute -right-24 bottom-24 h-96 w-96 rounded-full bg-[#B7D531]/8 blur-[150px]" />

      <div className={CONTAINER}>
        <MotionStagger className="grid items-center gap-20 lg:grid-cols-[1fr_520px]">
          <MotionReveal>
            <HistoryContent data={ABOUT_DATA.history} />
          </MotionReveal>

          <MotionReveal delay={0.12}>
            <HistoryImage data={ABOUT_DATA.history} />
          </MotionReveal>
        </MotionStagger>
      </div>
    </section>
  );
}
