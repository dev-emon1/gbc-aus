"use client";

import Link from "next/link";

import { ArrowUpRight, FileText } from "lucide-react";

import { MotionHover } from "@/components/shared/animations";

import { FormItem } from "../types";

type Props = {
  form: FormItem;
};

export default function FormCard({ form }: Props) {
  return (
    <MotionHover scale={1.01} y={-4}>
      <Link
        href={form.file}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          flex
          items-center
          justify-between
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-5
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-[#D84D95]/30
          hover:shadow-[0_20px_45px_rgba(15,23,42,.08)]
        "
      >
        {/* Left */}

        <div className="flex items-start gap-4">
          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-[#D84D95]/10
              text-[#D84D95]
              transition-all
              duration-300
              group-hover:bg-[#D84D95]
              group-hover:text-white
            "
          >
            <FileText size={22} />
          </div>

          <div>
            <h3
              className="
                text-[17px]
                font-semibold
                leading-7
                text-slate-900
                transition-colors
                duration-300
                group-hover:text-[#D84D95]
              "
            >
              {form.title}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {form.description ?? "PDF Document"}
            </p>
          </div>
        </div>

        {/* Right */}

        <div
          className="
            flex
            h-11
            w-11
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
          <ArrowUpRight size={18} />
        </div>
      </Link>
    </MotionHover>
  );
}
