import Link from "next/link";

import { CreditCard, MessageCircleMore } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { Program } from "../../types";
import { SectionHeader } from "@/components/shared/sections/section-header";

type Props = {
  program: Program;
};

export default function FeeInformation({ program }: Props) {
  return (
    <section
      id="fee-information"
      className="relative overflow-hidden bg-white py-24"
    >
      <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[140px]" />

      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#B7D531]/10 blur-[140px]" />

      <div className={CONTAINER}>
        <SectionHeader
          badge="Fee Information"
          title="Tuition & Payment Information"
          description="Tuition fees may vary depending on your enrolment, course package and payment schedule."
        />

        <MotionReveal delay={0.08}>
          <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-gray-200 bg-white p-10 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D84D95]/10">
                <CreditCard size={28} className="text-[#D84D95]" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {program.fee.title}
              </h3>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                {program.fee.description}
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/meet-an-advisor"
                  className="rounded-xl bg-[#D84D95] px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  Meet an Advisor
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#B7D531] px-7 py-3 font-semibold text-slate-900 transition-all duration-300 hover:bg-[#B7D531] hover:text-white"
                >
                  <MessageCircleMore size={18} />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
