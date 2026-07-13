import Link from "next/link";

import { ArrowRight, BookOpen, House, Train, Wallet } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { STUDY_AUSTRALIA_CONTENT } from "../data/study-australia";

const ICONS = {
  house: House,
  wallet: Wallet,
  train: Train,
  "book-open": BookOpen,
};

export default function ExploreGuides() {
  const section = STUDY_AUSTRALIA_CONTENT.explore;

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className={CONTAINER}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D84D95]">
              Explore Australia
            </span>

            <h2 className="mt-5 text-4xl font-black text-slate-900 lg:text-5xl">
              {section.title}
            </h2>

            <p className="mt-7 text-lg leading-9 text-slate-600">
              {section.subtitle}
            </p>
          </div>
        </MotionReveal>
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {section.items.map((item, index) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS];

            return (
              <MotionReveal key={item.title} delay={index * 0.06}>
                <Link
                  href={item.href}
                  className="
          group
          flex
          items-center
          justify-between
          rounded-[28px]
          border
          border-slate-200
          bg-white
          p-8
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-[#D84D95]/20
          hover:shadow-[0_30px_70px_rgba(15,23,42,.08)]
        "
                >
                  <div className="flex items-center gap-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D84D95]/10">
                      <Icon size={30} className="text-[#D84D95]" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-slate-600">{item.description}</p>
                    </div>
                  </div>
                  <div
                    className="
flex
h-14
w-14
items-center
justify-center
rounded-full
bg-slate-100
transition
group-hover:bg-[#D84D95]
group-hover:text-white
"
                  >
                    <ArrowRight />
                  </div>
                </Link>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
