import { CalendarDays, MapPin } from "lucide-react";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CONTAINER } from "@/constants/layout";

import { EVENTS_WORKSHOPS_CONTENT } from "../data/events-workshops";

export default function AnnualCalendar() {
  const section = EVENTS_WORKSHOPS_CONTENT.calendar;

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      {/* Ambient */}

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[150px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#B7D531]/10 blur-[170px]" />

      <div className={CONTAINER}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
              Annual Calendar
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              {section.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {section.description}
            </p>
          </div>
        </MotionReveal>

        <MotionStagger className="relative mx-auto mt-20 max-w-5xl">
          {/* Timeline */}

          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-[#D84D95] via-[#B7D531] to-transparent md:block" />

          <div className="space-y-8">
            {section.months.map((month, index) => (
              <MotionReveal key={month.month} delay={index * 0.05}>
                <div className="relative flex gap-6">
                  {/* Timeline Dot */}

                  <div className="relative z-10 hidden md:flex">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D84D95] text-sm font-bold text-white shadow-[0_10px_30px_rgba(216,77,149,.35)]">
                      {index + 1}
                    </div>
                  </div>

                  {/* Card */}

                  <div className="flex-1 rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#D84D95]/20 hover:shadow-[0_25px_60px_rgba(15,23,42,.08)]">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <span className="inline-flex items-center gap-2 rounded-full bg-[#D84D95]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
                          <CalendarDays size={14} />

                          {month.month}
                        </span>

                        <div className="mt-6 space-y-4">
                          {month.events.map((event) => (
                            <div
                              key={event.title}
                              className="rounded-2xl bg-slate-50 p-5"
                            >
                              <h3 className="text-xl font-bold text-slate-900">
                                {event.title}
                              </h3>

                              <div className="mt-3 flex items-center gap-2 text-slate-600">
                                <MapPin size={16} className="text-[#B7D531]" />

                                <span>{event.location}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="hidden xl:flex">
                        <div className="rounded-full bg-[#B7D531]/15 px-5 py-2 text-sm font-semibold text-[#6E8E1D]">
                          Campus Event
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </MotionStagger>
      </div>
    </section>
  );
}
