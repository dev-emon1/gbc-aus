import Image from "next/image";

import { ArrowRight, CheckCircle2 } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { SUPPORT_WELFARE_CONTENT } from "../data/support-welfare";

export default function CounsellingSupport() {
  const section = SUPPORT_WELFARE_CONTENT.counselling;

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[150px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#B7D531]/10 blur-[170px]" />

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

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-5 py-4 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D84D95]">
                  Confidential Support
                </p>

                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  You're Never Alone
                </h3>
              </div>
            </div>
          </MotionReveal>

          {/* Content */}

          <MotionReveal delay={0.1}>
            <div>
              <span className="inline-flex rounded-full bg-[#D84D95]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
                Student Welfare
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
                {section.title}
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                {section.description}
              </p>

              <div className="mt-10 space-y-5">
                {section.items.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:border-[#D84D95]/20 hover:bg-white"
                  >
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B7D531]/15">
                      <CheckCircle2 size={20} className="text-[#6E8E1D]" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 inline-flex items-center gap-3 text-sm font-semibold text-[#D84D95]">
                Confidential • Respectful • Professional
                <ArrowRight size={18} />
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
