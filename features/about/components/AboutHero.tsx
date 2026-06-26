import { CONTAINER } from "@/constants/layout";

import AboutHeroBackground from "./AboutHeroBackground";
import AboutHeroContent from "./AboutHeroContent";
import AboutHeroImage from "./AboutHeroImage";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FFF9FC] to-slate-50 pt-24 pb-24">
      <AboutHeroBackground />

      <div className={`${CONTAINER} relative z-10`}>
        <div className="grid items-center gap-20 lg:grid-cols-[1fr_620px]">
          <AboutHeroContent />

          <AboutHeroImage />
        </div>
      </div>
    </section>
  );
}
