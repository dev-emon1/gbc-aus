import Link from "next/link";

import {
  ArrowRight,
  GraduationCap,
  Globe2,
  Headphones,
  Phone,
} from "lucide-react";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CONTAINER } from "@/constants/layout";

import { CONTACT_CONTENT } from "../data/contact";

const ICONS = [GraduationCap, Headphones, Globe2, Phone];

export default function ContactDepartments() {
  const section = CONTACT_CONTENT.departments;

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      {/* Ambient */}

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[150px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#B7D531]/10 blur-[170px]" />

      <div className={CONTAINER}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
              Departments
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              {section.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {section.description}
            </p>
          </div>
        </MotionReveal>

        <MotionStagger className="mt-16 grid gap-7 md:grid-cols-2">
          {section.items.map((item, index) => {
            const Icon = ICONS[index] ?? Phone;

            return (
              <MotionReveal key={item.title} delay={index * 0.08}>
                <div className="group flex h-full flex-col rounded-[30px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#D84D95]/20 hover:shadow-[0_25px_60px_rgba(15,23,42,.08)]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D84D95]/10 text-[#D84D95] transition-all duration-300 group-hover:bg-[#D84D95] group-hover:text-white">
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-7 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-8 space-y-4 rounded-2xl bg-slate-50 p-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                        Email
                      </p>

                      <a
                        href={`mailto:${item.email}`}
                        className="mt-1 block break-all font-medium text-[#D84D95] hover:underline"
                      >
                        {item.email}
                      </a>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                        Phone
                      </p>

                      <a
                        href={`tel:${item.phone}`}
                        className="mt-1 block font-medium text-slate-700 hover:text-[#D84D95]"
                      >
                        {item.phone}
                      </a>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="group/button mt-8 inline-flex items-center gap-3 font-semibold text-[#D84D95]"
                  >
                    Contact This Department
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover/button:translate-x-1"
                    />
                  </Link>
                </div>
              </MotionReveal>
            );
          })}
        </MotionStagger>
      </div>
    </section>
  );
}
