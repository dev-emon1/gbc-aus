import { CONTAINER } from "@/constants/layout";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { WHY_CHOOSE_DATA } from "../data";

import WhyChooseGroup from "./WhyChooseGroup";
import WhyChooseIntro from "./WhyChooseIntro";

export default function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-[#FCFCFD] py-28">
      {/* Background Glow */}

      <div className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-[#D84D95]/6 blur-[140px]" />

      <div className="absolute -right-28 bottom-20 h-96 w-96 rounded-full bg-[#B7D531]/8 blur-[150px]" />

      <div className={CONTAINER}>
        <WhyChooseIntro data={WHY_CHOOSE_DATA.intro} />

        <MotionStagger className="mt-24 space-y-12">
          <div className="mt-24 space-y-32">
            {WHY_CHOOSE_DATA.featureGroups.map((group, index) => (
              <WhyChooseGroup key={group.title} data={group} index={index} />
            ))}
          </div>
        </MotionStagger>
      </div>
    </section>
  );
}
