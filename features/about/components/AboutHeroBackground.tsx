import { MotionReveal } from "@/components/shared/animations";

export default function AboutHeroBackground() {
  return (
    <MotionReveal>
      <>
        {/* Pink Glow */}

        <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#D84D95]/12 blur-[120px]" />

        {/* Green Glow */}

        <div className="absolute bottom-[-180px] right-[-120px] h-[420px] w-[420px] rounded-full bg-[#B7D531]/12 blur-[120px]" />

        {/* Soft Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]

            [background-image:linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)]

            [background-size:72px_72px]
          "
        />

        {/* Top Gradient */}

        <div className="absolute left-0 top-0 h-56 w-full bg-gradient-to-b from-[#FFF6FB] to-transparent" />

        {/* Bottom Gradient */}

        <div className="absolute bottom-0 left-0 h-56 w-full bg-gradient-to-t from-slate-50 to-transparent" />

        {/* Decorative Circle */}

        <div className="absolute right-[8%] top-[12%] h-64 w-64 rounded-full border border-[#D84D95]/10" />

        <div className="absolute left-[10%] bottom-[12%] h-44 w-44 rounded-full border border-[#B7D531]/10" />
      </>
    </MotionReveal>
  );
}
