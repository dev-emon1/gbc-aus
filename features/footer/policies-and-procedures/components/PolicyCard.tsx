"use client";

import Link from "next/link";

import { ArrowUpRight, FileText } from "lucide-react";

import { MotionHover } from "@/components/shared/animations";

import { PolicyItem } from "../types";

type Props = {
  policy: PolicyItem;
};

export default function PolicyCard({ policy }: Props) {
  return (
    <MotionHover scale={1.01} y={-3}>
      <Link
        href={policy.file}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          relative
          flex
          items-start
          gap-4
          overflow-hidden
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-4
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-[#D84D95]/30
          hover:shadow-[0_18px_40px_rgba(15,23,42,.08)]
        "
      >
        {/* Left Accent */}

        <div className="absolute left-0 top-0 h-full w-1 bg-transparent transition-all duration-300 group-hover:bg-[#D84D95]" />

        {/* Icon */}

        <div
          className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-[#D84D95]/10
            text-[#D84D95]
            transition-all
            duration-300
            group-hover:bg-[#D84D95]
            group-hover:text-white
          "
        >
          <FileText size={20} />
        </div>

        {/* Content */}

        <div className="min-w-0 flex-1">
          <h3
            className="
              text-[15px]
              font-semibold
              leading-6
              text-slate-900
              transition-colors
              duration-300
              group-hover:text-[#D84D95]
            "
          >
            {policy.title}
          </h3>

          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600">
              {policy.description ?? "Policy"}
            </span>

            <span className="text-[11px] text-slate-400">PDF Document</span>
          </div>
        </div>

        {/* Action */}

        <div
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-slate-100
            text-slate-500
            transition-all
            duration-300
            group-hover:translate-x-1
            group-hover:bg-[#B7D531]
            group-hover:text-slate-900
          "
        >
          <ArrowUpRight size={16} />
        </div>
      </Link>
    </MotionHover>
  );
}
