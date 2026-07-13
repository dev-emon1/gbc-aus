import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBox({ value, onChange }: Props) {
  return (
    <div>
      <label className="mb-3 block text-sm font-bold uppercase tracking-[0.18em] text-slate-900">
        Search Study Areas
      </label>

      <div className="relative">
        <Search
          size={18}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type="text"
          placeholder="Search courses..."
          className="
            h-12
            w-full
            rounded-2xl
            border
            border-slate-200
            bg-white
            pl-11
            pr-4
            text-sm
            text-slate-700
            shadow-sm
            outline-none
            transition-all
            duration-300
            placeholder:text-slate-400
            hover:border-[#D84D95]/30
            focus:border-[#D84D95]
            focus:ring-4
            focus:ring-[#D84D95]/10
          "
        />
      </div>
    </div>
  );
}
