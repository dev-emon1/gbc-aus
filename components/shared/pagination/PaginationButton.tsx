import { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
};

export default function PaginationButton({
  active = false,
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={cn(
        `
          flex
          h-11
          min-w-11
          items-center
          justify-center
          rounded-xl
          border
          text-sm
          font-semibold
          transition-all
          duration-300
          disabled:pointer-events-none
          disabled:opacity-40
        `,
        active
          ? `
            border-[#D84D95]
            bg-[#D84D95]
            text-white
            shadow-lg
            shadow-[#D84D95]/25
          `
          : `
            border-slate-200
            bg-white
            text-slate-700
            hover:border-[#D84D95]/30
            hover:bg-[#D84D95]/5
            hover:text-[#D84D95]
          `,
        className,
      )}
    >
      {children}
    </button>
  );
}
