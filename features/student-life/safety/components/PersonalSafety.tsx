import { Briefcase, Eye, Phone, Scale, ShieldCheck, Users } from "lucide-react";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CONTAINER } from "@/constants/layout";

import { SAFETY_CONTENT } from "../data/safety";

const ICONS = {
  briefcase: Briefcase,
  eye: Eye,
  users: Users,
  phone: Phone,
  scale: Scale,
  "clipboard-check": ShieldCheck,
};

export default function PersonalSafety() {
  const section = SAFETY_CONTENT.personalSafety;

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-28">
      <div className={CONTAINER}>
        <div className="grid gap-16 lg:grid-cols-[1fr_340px]">
          {/* Left */}

          <div>
            <MotionReveal>
              <div className="max-w-3xl">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
                  Personal Safety
                </span>

                <h2 className="mt-5 text-4xl font-bold text-slate-900">
                  {section.title}
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  {section.description}
                </p>
              </div>
            </MotionReveal>

            <MotionStagger className="mt-14 grid gap-5 md:grid-cols-2">
              {section.items.map((item, index) => {
                const Icon =
                  ICONS[item.icon as keyof typeof ICONS] ?? ShieldCheck;

                return (
                  <MotionReveal key={item.title} delay={index * 0.08}>
                    <div className="group flex h-full gap-5 rounded-[26px] border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D84D95]/20 hover:shadow-[0_18px_40px_rgba(15,23,42,.08)]">
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
                  </MotionReveal>
                );
              })}
            </MotionStagger>
          </div>

          {/* Right */}

          <MotionReveal delay={0.15}>
            <div className="sticky top-28 rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_25px_60px_rgba(15,23,42,.06)]">
              <span className="inline-flex rounded-full bg-[#B7D531]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#6E8E1D]">
                Quick Reminder
              </span>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                Stay Safe Every Day
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Small daily habits can make a big difference to your safety and
                wellbeing while studying and living in Australia.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Keep your phone charged",
                  "Share your location when travelling late",
                  "Know your emergency contacts",
                  "Report concerns immediately",
                ].map((tip) => (
                  <div key={tip} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#D84D95]" />

                    <span className="text-sm leading-6 text-slate-700">
                      {tip}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-[#D84D95]/8 p-5">
                <p className="text-sm leading-6 text-slate-700">
                  If you ever feel unsafe or need assistance, contact Student
                  Services or emergency services immediately.
                </p>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
