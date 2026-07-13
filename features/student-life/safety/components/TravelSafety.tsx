import Image from "next/image";

import { Car, Footprints, TrainFront, MoonStar } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { SAFETY_CONTENT } from "../data/safety";

const ICONS = {
  train: TrainFront,
  moon: MoonStar,
  car: Car,
  footprints: Footprints,
};

export default function TravelSafety() {
  const section = SAFETY_CONTENT.travelSafety;

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#B7D531]/10 blur-[150px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#D84D95]/5 blur-[150px]" />

      <div className={CONTAINER}>
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
          {/* Image */}

          <MotionReveal>
            <div className="relative overflow-hidden rounded-[34px]">
              <Image
                src={section.image}
                alt={section.title}
                width={720}
                height={760}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-5 py-4 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D84D95]">
                  Travel Smart
                </p>

                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  Safe Travel Starts With Good Planning
                </h3>
              </div>
            </div>
          </MotionReveal>

          {/* Content */}

          <MotionReveal delay={0.1}>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
                Travel Safety
              </span>

              <h2 className="mt-5 text-4xl font-bold text-slate-900">
                {section.title}
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                {section.description}
              </p>

              <div className="mt-10 space-y-5">
                {section.items.map((item) => {
                  const Icon =
                    ICONS[item.icon as keyof typeof ICONS] ?? TrainFront;

                  return (
                    <div
                      key={item.title}
                      className="group flex gap-5 rounded-[24px] border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D84D95]/20 hover:bg-white hover:shadow-[0_20px_45px_rgba(15,23,42,.08)]"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D84D95]/10 text-[#D84D95] transition-all duration-300 group-hover:bg-[#D84D95] group-hover:text-white">
                        <Icon size={22} />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-[15px] leading-7 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
