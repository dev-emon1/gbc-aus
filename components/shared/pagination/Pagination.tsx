"use client";

import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { usePagination } from "../hooks/usePagination";
import PaginationButton from "./PaginationButton";
import { PaginationProps } from "./types";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = usePagination(currentPage, totalPages, siblingCount);

  return (
    <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
      <PaginationButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        <ChevronLeft size={18} />
      </PaginationButton>

      {pages.map((item, index) => {
        if (typeof item !== "number") {
          return (
            <div
              key={`ellipsis-${index}`}
              className="flex h-11 w-11 items-center justify-center text-slate-400"
            >
              <MoreHorizontal size={18} />
            </div>
          );
        }

        return (
          <PaginationButton
            key={item}
            active={item === currentPage}
            onClick={() => onPageChange(item)}
          >
            {item}
          </PaginationButton>
        );
      })}

      <PaginationButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
      >
        <ChevronRight size={18} />
      </PaginationButton>
    </div>
  );
}
