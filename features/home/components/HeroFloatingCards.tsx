import { Award, BriefcaseBusiness, GraduationCap } from "lucide-react";

export default function HeroFloatingCards() {
  return (
    <>
      {/* Top Left */}
      <div
        className="
          absolute
          top-10
          -left-8

          hidden
          lg:flex

          items-center
          gap-3

          rounded-3xl
          bg-white

          px-5
          py-4

          shadow-[0_15px_40px_rgba(0,0,0,0.08)]
        "
      >
        <Award className="h-8 w-8 text-[#D84D95]" />

        <div>
          <h4 className="font-semibold text-slate-900">CRICOS Approved</h4>

          <p className="text-xs text-slate-500">Trusted Australian Education</p>
        </div>
      </div>

      {/* Middle Right */}
      <div
        className="
          absolute
          top-1/2
          -right-8

          hidden
          lg:flex

          items-center
          gap-3

          rounded-3xl
          bg-white

          px-5
          py-4

          shadow-[0_15px_40px_rgba(0,0,0,0.08)]
        "
      >
        <BriefcaseBusiness className="h-8 w-8 text-[#B7D531]" />

        <div>
          <h4 className="font-semibold text-slate-900">Job Ready Programs</h4>

          <p className="text-xs text-slate-500">Industry Focused Training</p>
        </div>
      </div>

      {/* Bottom Left */}
      <div
        className="
          absolute
          bottom-10
          left-10

          hidden
          lg:flex

          items-center
          gap-3

          rounded-3xl
          bg-white

          px-5
          py-4

          shadow-[0_15px_40px_rgba(0,0,0,0.08)]
        "
      >
        <GraduationCap className="h-8 w-8 text-[#D84D95]" />

        <div>
          <h4 className="font-semibold text-slate-900">Flexible Learning</h4>

          <p className="text-xs text-slate-500">Online & On-Campus</p>
        </div>
      </div>
    </>
  );
}
