"use client";

import Image from "next/image";
import { useState } from "react";

import {
  ArrowDown,
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CalendarDays,
  ChevronDown,
  ChevronUp,
  Clock3,
  Download,
  GraduationCap,
  School,
} from "lucide-react";

import { ProgramPathway } from "../types";

type Props = {
  pathway: ProgramPathway;
};

export default function ProgramPathwayCard({ pathway }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#D84D95]/20 hover:shadow-[0_35px_90px_rgba(15,23,42,.12)]">
      {/* Image */}

      <div className="relative overflow-hidden">
        <Image
          src={pathway.image}
          alt={pathway.gbcProgram}
          width={900}
          height={600}
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

        <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
            {pathway.university}
          </span>
        </div>

        <div className="absolute bottom-5 left-5 rounded-xl border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl">
          <span className="text-sm font-semibold text-white">
            {pathway.qualification}
          </span>
        </div>
      </div>

      {/* Content */}

      <div className="p-7">
        <h3 className="text-2xl font-bold leading-snug text-slate-900">
          {pathway.gbcProgram}
        </h3>

        {/* Flow */}

        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D84D95]/10 text-[#D84D95]">
                <School size={22} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  George Brown College
                </p>

                <p className="mt-1 font-semibold text-slate-900">
                  {pathway.gbcProgram}
                </p>
              </div>
            </div>
          </div>

          <div className="my-6 flex items-center justify-center">
            <div className="h-px flex-1 bg-slate-200" />

            <ArrowRight className="mx-4 text-[#D84D95]" size={18} />

            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#B7D531]/15 text-[#7A9824]">
              <GraduationCap size={22} />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Southern Cross University
              </p>

              <p className="mt-1 font-semibold text-slate-900">
                {pathway.universityProgram}
              </p>
            </div>
          </div>
        </div>

        {/* Summary */}

        <div className="mt-8 grid grid-cols-2 gap-4">
          <SummaryItem
            icon={<Clock3 size={18} />}
            label="Duration"
            value={pathway.duration}
          />

          <SummaryItem
            icon={<Award size={18} />}
            label="Credit"
            value={pathway.credit}
          />

          <SummaryItem
            icon={<CalendarDays size={18} />}
            label="Intake"
            value={pathway.intake}
          />

          <SummaryItem
            icon={<GraduationCap size={18} />}
            label="University"
            value="SCU"
          />
        </div>

        {/* Expand Button */}

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-8 flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-left transition-all duration-300 hover:border-[#D84D95]/20 hover:bg-[#D84D95]/5"
        >
          <div>
            <p className="text-sm font-semibold text-slate-900">
              View Pathway Details
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Entry requirements, careers & brochure
            </p>
          </div>

          {expanded ? (
            <ChevronUp className="text-[#D84D95]" />
          ) : (
            <ChevronDown className="text-[#D84D95]" />
          )}
        </button>

        {expanded && (
          <div className="mt-6 rounded-[28px] border border-slate-200 bg-slate-50 p-6">
            {/* Overview */}

            <div>
              <h4 className="text-lg font-bold text-slate-900">
                Program Overview
              </h4>

              <p className="mt-4 leading-8 text-slate-600">
                {pathway.overview}
              </p>
            </div>

            {/* Entry Requirements */}

            <div className="mt-10">
              <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <GraduationCap size={20} className="text-[#D84D95]" />
                Entry Requirements
              </h4>

              <div className="mt-5 space-y-3">
                {pathway.entryRequirements.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <ArrowRight size={16} className="mt-1 text-[#D84D95]" />

                    <p className="leading-7 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Credit Transfer */}

            <div className="mt-10">
              <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <Award size={20} className="text-[#D84D95]" />
                Credit Transfer
              </h4>

              <div className="mt-5 space-y-3">
                {pathway.creditDetails.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <ArrowRight size={16} className="mt-1 text-[#B7D531]" />

                    <p className="leading-7 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Outcomes */}

            <div className="mt-10">
              <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <BriefcaseBusiness size={20} className="text-[#D84D95]" />
                Career Opportunities
              </h4>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {pathway.careerOutcomes.map((career) => (
                  <div
                    key={career}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3"
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-[#B7D531]" />

                    <span className="font-medium text-slate-700">{career}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={pathway.brochure}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 transition-all duration-300 hover:border-[#D84D95] hover:text-[#D84D95]"
              >
                <Download size={18} />
                Download Brochure
              </a>

              <a
                href="/meet-an-advisor"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#D84D95] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#C63C84]"
              >
                Apply Now
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

type SummaryItemProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

function SummaryItem({ icon, label, value }: SummaryItemProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex items-center gap-2 text-[#D84D95]">
        {icon}

        <span className="text-xs font-semibold uppercase tracking-[0.16em]">
          {label}
        </span>
      </div>

      <p className="mt-3 text-sm font-semibold leading-6 text-slate-900">
        {value}
      </p>
    </div>
  );
}
