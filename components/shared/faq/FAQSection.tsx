import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CONTAINER } from "@/constants/layout";

import FAQCard from "./FAQCard";
import { FAQItem } from "./types";

interface FAQSectionProps {
  title: string;

  description: string;

  items: FAQItem[];
}

export default function FAQSection({
  title,
  description,
  items,
}: FAQSectionProps) {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-28">
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[150px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#B7D531]/10 blur-[170px]" />

      <div className={CONTAINER}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
              Frequently Asked Questions
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">{title}</h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {description}
            </p>
          </div>
        </MotionReveal>

        <MotionStagger className="mx-auto mt-16 max-w-4xl space-y-5">
          {items.map((item, index) => (
            <MotionReveal key={item.question} delay={index * 0.06}>
              <FAQCard item={item} />
            </MotionReveal>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
