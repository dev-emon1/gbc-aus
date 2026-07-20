import Link from "next/link";

import { Mail, ArrowUpRight } from "lucide-react";

import { MotionHover } from "@/components/shared/animations";

import { Agent } from "../types";

type Props = {
  agent: Agent;
};

export default function AgentCard({ agent }: Props) {
  return (
    <MotionHover y={-4}>
      <article className="group relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#D84D95]/30 hover:shadow-xl">
        {/* Top Accent */}

        <div className="absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r from-[#D84D95] to-[#B7D531]" />

        {/* Agency */}

        <h3 className="pr-8 text-xl font-semibold leading-snug text-slate-900">
          {agent.name}
        </h3>

        {/* Email */}

        <div className="mt-5 flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D84D95]/10 text-[#D84D95]">
            <Mail size={18} />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Email
            </p>

            <p className="truncate text-sm font-medium text-slate-700">
              {agent.email}
            </p>
          </div>
        </div>

        {/* CTA */}

        <div className="mt-6 pt-6 border-t border-slate-100">
          <Link
            href={`mailto:${agent.email}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#D84D95] transition-colors duration-300 hover:text-[#B83A7D]"
          >
            Contact Agent
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </article>
    </MotionHover>
  );
}
