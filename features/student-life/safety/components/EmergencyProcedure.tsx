import {
  ArrowDown,
  BellRing,
  PhoneCall,
  ShieldCheck,
  Siren,
  TriangleAlert,
} from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { SAFETY_CONTENT } from "../data/safety";

const ICONS = [TriangleAlert, PhoneCall, ShieldCheck, BellRing, Siren];

export default function EmergencyProcedure() {
  const section = SAFETY_CONTENT.emergencyProcedure;

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      {/* Ambient */}

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[150px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#B7D531]/10 blur-[170px]" />

      <div className={CONTAINER}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
              Emergency Procedure
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              {section.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {section.description}
            </p>
          </div>
        </MotionReveal>

        <div className="mx-auto mt-20 max-w-3xl">
          {section.steps.map((step, index) => {
            const Icon = ICONS[index] ?? ShieldCheck;

            return (
              <MotionReveal key={step.title} delay={index * 0.08}>
                <div className="flex flex-col items-center">
                  <div className="group flex w-full items-center gap-6 rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D84D95]/20 hover:shadow-[0_22px_55px_rgba(15,23,42,.08)]">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#D84D95]/10 text-[#D84D95] transition-all duration-300 group-hover:bg-[#D84D95] group-hover:text-white">
                      <Icon size={30} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B7D531]/15 text-sm font-bold text-[#6E8E1D]">
                          {index + 1}
                        </span>

                        <h3 className="text-2xl font-bold text-slate-900">
                          {step.title}
                        </h3>
                      </div>

                      <p className="mt-3 leading-7 text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {index !== section.steps.length - 1 && (
                    <div className="my-5 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
                      <ArrowDown size={20} className="text-[#D84D95]" />
                    </div>
                  )}
                </div>
              </MotionReveal>
            );
          })}
        </div>

        {/* Emergency Alert */}

        <MotionReveal delay={0.45}>
          <div className="mx-auto mt-20 max-w-4xl overflow-hidden rounded-[32px] border border-red-200 bg-gradient-to-r from-red-50 via-white to-red-50">
            <div className="grid items-center gap-8 p-8 lg:grid-cols-[1fr_220px] lg:p-10">
              <div>
                <span className="inline-flex rounded-full bg-red-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
                  Emergency Alert
                </span>

                <h3 className="mt-5 text-3xl font-bold text-slate-900">
                  Call 000 Immediately
                </h3>

                <p className="mt-4 max-w-2xl leading-8 text-slate-600">
                  If there is an immediate danger to life, health or property,
                  contact Australia's emergency services first. Once everyone is
                  safe, notify George Brown College Student Services for further
                  assistance.
                </p>
              </div>

              <div className="rounded-[28px] bg-red-600 p-8 text-center shadow-[0_25px_60px_rgba(220,38,38,.25)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-100">
                  Emergency
                </p>

                <h2 className="mt-3 text-6xl font-black tracking-tight text-white">
                  000
                </h2>

                <p className="mt-3 text-sm text-red-100">
                  Police • Fire • Ambulance
                </p>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
