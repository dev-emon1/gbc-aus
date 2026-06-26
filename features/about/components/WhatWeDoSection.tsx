import { CONTAINER } from "@/constants/layout";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { ABOUT_DATA } from "../data";

import WhatWeDoContent from "./WhatWeDoContent";
import WhatWeDoGrid from "./WhatWeDoGrid";

export default function WhatWeDoSection() {
  return (
    <section className="relative overflow-hidden bg-[#FCFCFD] py-28">
      {/* Background Glow */}

      <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#D84D95]/6 blur-[150px]" />

      <div className="absolute -right-24 bottom-20 h-96 w-96 rounded-full bg-[#B7D531]/8 blur-[160px]" />

      <div className={CONTAINER}>
        <MotionStagger className="grid items-start gap-20 lg:grid-cols-[420px_1fr]">
          <MotionReveal>
            <WhatWeDoContent data={ABOUT_DATA.whatWeDo} />
          </MotionReveal>

          <MotionReveal delay={0.12}>
            <WhatWeDoGrid data={ABOUT_DATA.whatWeDo.items} />
          </MotionReveal>
        </MotionStagger>
      </div>
    </section>
  );
}
