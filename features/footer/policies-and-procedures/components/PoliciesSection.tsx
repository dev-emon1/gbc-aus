"use client";

import { useMemo, useState } from "react";

import { Search } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { policies } from "../data/policies";

import PolicyCategory from "./PolicyCategory";

export default function PoliciesSection() {
  const [search, setSearch] = useState("");

  const filteredPolicies = useMemo(() => {
    return policies.filter((policy) =>
      policy.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const groupedPolicies = {
    general: filteredPolicies.filter((item) => item.category === "general"),
    under18: filteredPolicies.filter((item) => item.category === "under18"),
    elicos: filteredPolicies.filter((item) => item.category === "elicos"),
    cricos: filteredPolicies.filter((item) => item.category === "cricos"),
  };

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-24">
      <div className={CONTAINER}>
        {/* Heading */}

        <MotionReveal>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-[#D84D95]/10 px-5 py-2 text-sm font-medium text-[#D84D95]">
              Official Documents
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
              Policies & Procedures
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Browse official policies, student guidelines and institutional
              procedures.
            </p>
          </div>
        </MotionReveal>

        {/* Search */}

        <MotionReveal delay={0.1}>
          <div className="mx-auto mb-16 max-w-2xl">
            <div className="relative">
              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                size={20}
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search policies..."
                className="
                  h-14
                  w-full
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  pl-14
                  pr-5
                  text-slate-900
                  shadow-sm
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-slate-400
                  focus:border-[#D84D95]
                  focus:ring-4
                  focus:ring-[#D84D95]/10
                "
              />
            </div>
          </div>
        </MotionReveal>

        {/* Categories */}

        <div className="grid gap-10 xl:grid-cols-2">
          <PolicyCategory title="General" policies={groupedPolicies.general} />

          <PolicyCategory title="Under 18" policies={groupedPolicies.under18} />

          <PolicyCategory title="ELICOS" policies={groupedPolicies.elicos} />

          <PolicyCategory title="CRICOS" policies={groupedPolicies.cricos} />
        </div>

        {/* Empty */}

        {filteredPolicies.length === 0 && (
          <div className="mt-16 rounded-3xl border border-dashed border-slate-300 bg-white py-16 text-center">
            <h3 className="text-2xl font-bold text-slate-900">
              No policies found
            </h3>

            <p className="mt-3 text-slate-500">Try another keyword.</p>
          </div>
        )}
      </div>
    </section>
  );
}
