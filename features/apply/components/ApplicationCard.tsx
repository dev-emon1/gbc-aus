import Link from "next/link";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { MotionHover } from "@/components/shared/animations";

import { ApplicationForm } from "../types";

type Props = {
  application: ApplicationForm;
};

export default function ApplicationCard({ application }: Props) {
  const Icon = application.icon;

  const requirements =
    application.id === "general"
      ? ["Passport Copy", "Academic Documents", "English Language Evidence"]
      : [
          "Parent / Guardian Details",
          "Supporting Documents",
          "Welfare Information",
        ];

  return (
    <MotionHover y={-6}>
      <article
        className="
          group
          h-full
          overflow-hidden
          rounded-3xl
          border
          border-slate-200
          bg-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-[#D84D95]/20
          hover:shadow-xl
        "
      >
        <div className="h-1 bg-gradient-to-r from-[#D84D95] to-[#B7D531]" />

        <div className="p-7">
          {/* Header */}

          <div className="flex items-start justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-[#D84D95] transition-all duration-300 group-hover:border-[#D84D95] group-hover:bg-[#D84D95] group-hover:text-white">
              <Icon size={24} />
            </div>

            <span className="rounded-full bg-[#B7D531]/15 px-3 py-1 text-xs font-semibold text-[#7C9622]">
              {application.pages}
            </span>
          </div>

          {/* Content */}

          <div className="mt-7">
            <h3 className="text-xl font-bold text-slate-900">
              {application.title}
            </h3>

            <p className="mt-2 text-sm font-medium text-[#D84D95]">
              {application.subtitle}
            </p>

            <p className="mt-5 text-[15px] leading-7 text-slate-600">
              {application.description}
            </p>
          </div>

          {/* Requirements */}

          <div className="mt-7">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">
              Required Documents
            </p>

            <ul className="space-y-3">
              {requirements.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#B7D531]" />

                  <span className="text-sm text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}

        <Link
          href={application.file}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            items-center
            justify-between
            border-t
            border-slate-200
            px-7
            py-5
            transition-all
            duration-300
            hover:bg-slate-50
          "
        >
          <div>
            <p className="font-semibold text-slate-900">
              View Application Form
            </p>

            <p className="mt-1 text-sm text-slate-500">Opens in a new tab</p>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D84D95]/10 text-[#D84D95] transition-all duration-300 group-hover:bg-[#D84D95] group-hover:text-white">
            <ArrowUpRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </Link>
      </article>
    </MotionHover>
  );
}
