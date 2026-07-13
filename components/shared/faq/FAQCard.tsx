"use client";

import { useState } from "react";

import { ChevronDown } from "lucide-react";

import { FAQItem } from "./types";

interface FAQCardProps {
  item: FAQItem;
}

export default function FAQCard({ item }: FAQCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white transition-all duration-300">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-6 p-6 text-left"
      >
        <h3 className="text-lg font-semibold text-slate-900">
          {item.question}
        </h3>

        <ChevronDown
          size={20}
          className={`shrink-0 transition-transform duration-300 ${
            open ? "rotate-180 text-[#D84D95]" : "text-slate-500"
          }`}
        />
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 leading-7 text-slate-600">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}
