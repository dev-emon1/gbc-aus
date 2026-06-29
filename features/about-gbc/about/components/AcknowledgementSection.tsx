import { CONTAINER } from "@/constants/layout";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import AcknowledgementContent from "./AcknowledgementContent";
import AcknowledgementQuoteCard from "./AcknowledgementQuoteCard";

import { ABOUT_DATA } from "../data";

export default function AcknowledgementSection() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#FCFCFD]">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[140px]" />

      <div className={CONTAINER}>
        <MotionStagger className="grid gap-20 items-center lg:grid-cols-[1fr_420px]">
          <MotionReveal>
            <AcknowledgementContent data={ABOUT_DATA.acknowledgement} />
          </MotionReveal>

          <MotionReveal delay={0.12}>
            <AcknowledgementQuoteCard />
          </MotionReveal>
        </MotionStagger>
      </div>
    </section>
  );
}
