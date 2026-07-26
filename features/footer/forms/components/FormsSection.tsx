"use client";

import { useMemo, useState } from "react";

import { Search } from "lucide-react";

import { CONTAINER } from "@/constants/layout";

import { forms } from "../data/forms";
import FormCategory from "./FormCategory";

export default function FormsSection() {
  const [search, setSearch] = useState("");

  const filteredForms = useMemo(() => {
    return forms.filter((form) =>
      form.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const generalForms = filteredForms.filter(
    (form) => form.category === "general",
  );

  const under18Forms = filteredForms.filter(
    (form) => form.category === "under18",
  );

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-24">
      <div className={CONTAINER}>
        {/* Header */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#D84D95]/10 px-5 py-2 text-sm font-medium text-[#D84D95]">
            Student Resources
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Find the Right Form
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Browse official student forms and open any PDF instantly.
          </p>
        </div>

        {/* Search */}

        <div className="mx-auto mb-16 max-w-2xl">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search forms..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                h-16
                w-full
                rounded-full
                border
                border-slate-200
                bg-white
                pl-14
                pr-6
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

        {/* Categories */}

        <div className="grid gap-16 xl:grid-cols-2">
          <FormCategory title="General Forms" forms={generalForms} />

          <FormCategory title="Under 18 Forms" forms={under18Forms} />
        </div>

        {/* Empty */}

        {filteredForms.length === 0 && (
          <div className="mt-20 rounded-3xl border border-dashed border-slate-300 bg-white py-20 text-center">
            <h3 className="text-2xl font-semibold text-slate-900">
              No forms found
            </h3>

            <p className="mt-3 text-slate-500">Try another keyword.</p>
          </div>
        )}
      </div>
    </section>
  );
}
