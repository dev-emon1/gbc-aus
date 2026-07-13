import Link from "next/link";

import { Clock3, Mail, MapPin, Phone } from "lucide-react";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CONTAINER } from "@/constants/layout";

import { CONTACT_CONTENT } from "../data/contact";

const ICONS = {
  phone: Phone,
  mail: Mail,
  "map-pin": MapPin,
  clock: Clock3,
};

export default function ContactCards() {
  const section = CONTACT_CONTENT.quickContacts;

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-24">
      {/* Ambient */}

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[150px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#B7D531]/10 blur-[170px]" />

      <div className={CONTAINER}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
              Quick Contact
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              {section.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {section.description}
            </p>
          </div>
        </MotionReveal>

        <MotionStagger className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {section.items.map((item, index) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS] ?? Phone;

            const Card = (
              <div className="group flex h-full flex-col rounded-[30px] border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D84D95]/20 hover:shadow-[0_25px_60px_rgba(15,23,42,.08)]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D84D95]/10 text-[#D84D95] transition-all duration-300 group-hover:bg-[#D84D95] group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-7 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 font-semibold text-[#D84D95]">
                  {item.value}
                </p>

                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );

            return (
              <MotionReveal key={item.title} delay={index * 0.08}>
                {item.href ? (
                  <Link href={item.href} className="block h-full">
                    {Card}
                  </Link>
                ) : (
                  Card
                )}
              </MotionReveal>
            );
          })}
        </MotionStagger>
      </div>
    </section>
  );
}
