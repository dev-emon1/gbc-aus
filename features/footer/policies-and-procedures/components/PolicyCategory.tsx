"use client";

import { ShieldCheck } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";

import PolicyCard from "./PolicyCard";

import { PolicyCategoryProps } from "../types";

export default function PolicyCategory({
  title,
  policies,
}: PolicyCategoryProps) {
  return (
    <div>
      {/* Header */}

      <MotionReveal>
        <div
          className="
            mb-8
            rounded-3xl
            border
            border-slate-200
            bg-gradient-to-r
            from-white
            to-slate-50
            p-6
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-[#D84D95]/15
                to-[#B7D531]/15
                text-[#D84D95]
              "
            >
              <ShieldCheck size={24} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">{title}</h2>

              <p className="mt-1 text-sm text-slate-500">
                {policies.length} Documents Available
              </p>
            </div>
          </div>
        </div>
      </MotionReveal>

      {/* Cards */}

      <div className="space-y-3">
        {policies.map((policy, index) => (
          <MotionReveal key={policy.id} delay={index * 0.03}>
            <PolicyCard policy={policy} />
          </MotionReveal>
        ))}
      </div>
    </div>
  );
}
