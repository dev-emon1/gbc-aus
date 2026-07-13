import Image from "next/image";

import { CalendarDays, MapPin } from "lucide-react";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CONTAINER } from "@/constants/layout";

import { EVENTS_WORKSHOPS_CONTENT } from "../data/events-workshops";

export default function UpcomingEvents() {
  const section = EVENTS_WORKSHOPS_CONTENT.upcoming;

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-28">
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[150px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#B7D531]/10 blur-[170px]" />

      <div className={CONTAINER}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
              Upcoming Events
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              {section.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {section.description}
            </p>
          </div>
        </MotionReveal>

        <MotionStagger className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {section.events.map((event, index) => (
            <MotionReveal key={event.title} delay={index * 0.08}>
              <article className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-[#D84D95]/20 hover:shadow-[0_28px_70px_rgba(15,23,42,.08)]">
                {/* Image */}

                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full bg-[#D84D95] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                    {event.category}
                  </div>
                </div>

                {/* Content */}

                <div className="p-7">
                  <h3 className="text-2xl font-bold leading-tight text-slate-900">
                    {event.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-slate-600">
                    {event.description}
                  </p>

                  <div className="mt-7 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <CalendarDays size={18} className="text-[#D84D95]" />

                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <MapPin size={18} className="text-[#B7D531]" />

                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="mt-7 border-t border-slate-100 pt-5">
                    <span className="text-sm font-semibold text-[#D84D95] transition-colors group-hover:text-[#B7D531]">
                      Learn More →
                    </span>
                  </div>
                </div>
              </article>
            </MotionReveal>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
