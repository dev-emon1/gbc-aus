"use client";

import { useEffect, useMemo, useState } from "react";

import { CONTAINER } from "@/constants/layout";
import { Pagination } from "@/components/shared/pagination";

import AgentGrid from "./AgentGrid";
import AgentHeader from "./AgentHeader";
import AgentSearch from "./AgentSearch";
import { AGENTS } from "../data/agents";

const ITEMS_PER_PAGE = 21;

export default function AgentDirectory() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredAgents = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    if (!keyword) return AGENTS;

    return AGENTS.filter(
      (agent) =>
        agent.name.toLowerCase().includes(keyword) ||
        agent.email.toLowerCase().includes(keyword),
    );
  }, [search]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredAgents.length / ITEMS_PER_PAGE),
  );

  const paginatedAgents = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;

    return filteredAgents.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredAgents, currentPage]);

  // Reset page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  // Keep current page valid after filtering
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,77,149,.06),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(183,213,49,.08),transparent_35%)]" />

      {/* Grid */}

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className={`${CONTAINER} relative z-10`}>
        <AgentHeader totalAgents={AGENTS.length} />

        {/* Search */}

        <div className="mx-auto mt-16 max-w-5xl rounded-[28px] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <AgentSearch value={search} onChange={setSearch} />
            </div>

            <div className="shrink-0 rounded-2xl bg-slate-100 px-6 py-4 text-center">
              <p className="text-3xl font-bold text-slate-900">
                {filteredAgents.length}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {filteredAgents.length === 1
                  ? "Representative"
                  : "Representatives"}
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}

        <div className="mt-14">
          <AgentGrid agents={paginatedAgents} />
        </div>

        {/* Pagination */}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
}
