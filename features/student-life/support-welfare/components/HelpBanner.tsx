import Link from "next/link";

import { ArrowRight, HeartHandshake, PhoneCall } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { SUPPORT_WELFARE_CONTENT } from "../data/support-welfare";

export default function HelpBanner() {
  const section = SUPPORT_WELFARE_CONTENT.help;

  return (
    <section className="relative overflow-hidden bg-white py-10 lg:py-14">
      <div className={CONTAINER}>
        <MotionReveal>
          <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-gradient-to-r from-[#D84D95]/8 via-white to-[#B7D531]/12 p-8 lg:p-12">
            {/* Ambient */}

            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#D84D95]/10 blur-[120px]" />

            <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-[#B7D531]/15 blur-[130px]" />

            <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              {/* Left */}

              <div className="max-w-2xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D84D95]/10 text-[#D84D95]">
                  <HeartHandshake size={30} />
                </div>

                <h2 className="mt-7 text-4xl font-bold leading-tight text-slate-900">
                  {section.title}
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  {section.description}
                </p>
              </div>

              {/* Right */}

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <Link
                  href={section.buttonHref}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#D84D95] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#C73D86] hover:shadow-[0_20px_45px_rgba(216,77,149,.28)]"
                >
                  <PhoneCall size={18} />

                  {section.buttonLabel}

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/student-life/safety"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-[#D84D95] hover:text-[#D84D95]"
                >
                  Emergency Information
                </Link>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
