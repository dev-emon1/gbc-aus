import { Images, Camera, CalendarDays, Sparkles } from "lucide-react";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CONTAINER } from "@/constants/layout";

import { GALLERY_CONTENT } from "../data/gallery";

const ICONS = [Images, Camera, CalendarDays, Sparkles];

export default function GalleryStats() {
  const stats = GALLERY_CONTENT.stats;

  return (
    <section className="relative -mt-16 z-20 pb-20">
      <div className={CONTAINER}>
        <MotionStagger className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = ICONS[index] ?? Images;

            return (
              <MotionReveal key={item.label} delay={index * 0.08}>
                <div className="group relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-white/95 p-8 shadow-[0_25px_80px_rgba(15,23,42,.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#D84D95]/20 hover:shadow-[0_35px_100px_rgba(15,23,42,.12)]">
                  {/* Glow */}

                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#D84D95]/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D84D95]/15 to-[#B7D531]/15 text-[#D84D95]">
                      <Icon size={30} />
                    </div>

                    <h3 className="mt-8 text-5xl font-black tracking-tight text-slate-900">
                      {item.value}
                    </h3>

                    <p className="mt-3 text-base font-medium text-slate-600">
                      {item.label}
                    </p>
                  </div>
                </div>
              </MotionReveal>
            );
          })}
        </MotionStagger>
      </div>
    </section>
  );
}
