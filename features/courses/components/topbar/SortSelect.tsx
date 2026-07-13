import { ArrowUpDown } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SortSelect({ value, onChange }: Props) {
  return (
    <div className="relative">
      <ArrowUpDown
        size={16}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#D84D95]"
      />

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          h-12
          appearance-none
          rounded-2xl
          border
          border-slate-200
          bg-white
          pl-11
          pr-10
          text-sm
          font-medium
          text-slate-700
          shadow-sm
          outline-none
          transition-all
          duration-300
          hover:border-[#D84D95]/40
          focus:border-[#D84D95]
          focus:ring-4
          focus:ring-[#D84D95]/10
        "
      >
        <option value="featured">Featured</option>
        <option value="a-z">A - Z</option>
        <option value="z-a">Z - A</option>
      </select>

      <svg
        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 011.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
