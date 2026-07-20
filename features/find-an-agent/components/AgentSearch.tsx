import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function AgentSearch({ value, onChange }: Props) {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="relative">
        <Search
          size={20}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search by agency name or email..."
          className="
            h-14
            rounded-2xl
            border-slate-200
            bg-white
            pl-14
            pr-5
            text-base
            shadow-sm
            transition-all
            duration-300
            placeholder:text-slate-400
            focus-visible:border-[#D84D95]
            focus-visible:ring-[#D84D95]/20
          "
        />
      </div>
    </div>
  );
}
