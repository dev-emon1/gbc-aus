import { Ambulance, HeartHandshake, Phone, ShieldAlert } from "lucide-react";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CONTAINER } from "@/constants/layout";

import { SAFETY_CONTENT } from "../data/safety";

const ICONS = {
  siren: Ambulance,
  shield: ShieldAlert,
  heart: HeartHandshake,
  users: Phone,
};

export default function EmergencyContacts() {
  const section = SAFETY_CONTENT.emergencyContacts;

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-red-100 blur-[140px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#D84D95]/5 blur-[150px]" />

      <div className={CONTAINER}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
              Emergency Contacts
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              {section.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {section.description}
            </p>
          </div>
        </MotionReveal>

        <MotionStagger className="mt-16 grid gap-6 md:grid-cols-2">
          {section.items.map((item, index) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS] ?? Phone;

            return (
              <MotionReveal key={item.title} delay={index * 0.08}>
                <div
                  className="group h-full rounded-[30px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(15,23,42,.08)]"
                  style={{
                    borderTop: `4px solid ${item.color}`,
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-2xl"
                      style={{
                        backgroundColor: `${item.color}15`,
                        color: item.color,
                      }}
                    >
                      <Icon size={30} />
                    </div>

                    <span
                      className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em]"
                      style={{
                        backgroundColor: `${item.color}15`,
                        color: item.color,
                      }}
                    >
                      Important
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <div
                    className="mt-3 text-5xl font-black tracking-tight"
                    style={{
                      color: item.color,
                    }}
                  >
                    {item.number}
                  </div>

                  <p className="mt-5 leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-8 border-t border-slate-100 pt-5">
                    <span className="text-sm font-medium text-slate-500">
                      Save this contact for future reference.
                    </span>
                  </div>
                </div>
              </MotionReveal>
            );
          })}
        </MotionStagger>

        <MotionReveal delay={0.35}>
          <div className="mt-14 rounded-[28px] border border-red-200 bg-red-50 p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Emergency Reminder
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  If there is an immediate threat to life or property, call{" "}
                  <strong>000</strong> first, then notify George Brown College
                  Student Services when it is safe to do so.
                </p>
              </div>

              <div className="rounded-2xl bg-white px-6 py-4 text-center shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Australia Emergency
                </p>

                <h2 className="mt-2 text-5xl font-black text-red-600">000</h2>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
