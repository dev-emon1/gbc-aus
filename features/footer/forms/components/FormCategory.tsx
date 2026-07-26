"use client";

import { FolderOpen } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";

import FormCard from "./FormCard";
import { FormCategoryProps } from "../types";

export default function FormCategory({ title, forms }: FormCategoryProps) {
  return (
    <div>
      {/* Header */}

      <MotionReveal>
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D84D95]/10 text-[#D84D95]">
              <FolderOpen size={22} />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900">{title}</h2>

              <p className="mt-1 text-sm text-slate-500">
                {forms.length} PDF Documents
              </p>
            </div>
          </div>
        </div>
      </MotionReveal>

      {/* Cards */}

      <div className="space-y-4">
        {forms.map((form, index) => (
          <MotionReveal key={form.id} delay={0.05 * index}>
            <FormCard form={form} />
          </MotionReveal>
        ))}
      </div>
    </div>
  );
}
