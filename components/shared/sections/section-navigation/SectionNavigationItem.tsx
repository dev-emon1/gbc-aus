"use client";

type Props = {
  label: string;
  href: string;
  active: boolean;
};

export default function SectionNavigationItem({ label, href, active }: Props) {
  return (
    <a
      href={href}
      className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-sm ${
        active
          ? "bg-[#D84D95] text-white shadow-lg"
          : "text-slate-600 hover:bg-[#D84D95]/10 hover:text-[#D84D95]"
      }`}
    >
      {label}
    </a>
  );
}
