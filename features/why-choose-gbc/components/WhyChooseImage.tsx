import Image from "next/image";

import { MotionReveal } from "@/components/shared/animations";

type Props = {
  src: string;
  alt: string;
};

export default function WhyChooseImage({ src, alt }: Props) {
  return (
    <MotionReveal>
      <div className="group relative overflow-hidden rounded-[32px]">
        <Image
          src={src}
          alt={alt}
          width={700}
          height={700}
          className="
            h-full
            min-h-[520px]
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-900/15 to-transparent" />

        {/* Border */}

        <div className="absolute inset-0 rounded-[32px] border border-white/10" />

        <div className="absolute left-8 top-8 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            George Brown College
          </p>

          <h4 className="mt-2 text-xl font-bold text-white">{alt}</h4>
        </div>
      </div>
    </MotionReveal>
  );
}
