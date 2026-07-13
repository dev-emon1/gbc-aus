import { Checkbox } from "@/components/ui/checkbox";
import { MapPin } from "lucide-react";

import { SidebarSection } from ".";

const CAMPUSES = [
  {
    label: "Sydney",
    count: 14,
  },
];

export default function CampusFilter() {
  return (
    <SidebarSection title="Campus">
      <div className="space-y-2">
        {CAMPUSES.map((campus) => (
          <label
            key={campus.label}
            className="
              group
              flex
              cursor-pointer
              items-center
              justify-between
              rounded-2xl
              border
              border-transparent
              px-3
              py-3
              transition-all
              duration-300
              hover:border-[#D84D95]/15
              hover:bg-[#D84D95]/5
            "
          >
            <div className="flex items-center gap-3">
              <Checkbox />

              <MapPin size={16} className="text-[#D84D95]" />

              <span className="text-sm font-medium text-slate-700 transition-colors duration-300 group-hover:text-slate-900">
                {campus.label}
              </span>
            </div>

            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500 transition-colors duration-300 group-hover:bg-[#D84D95] group-hover:text-white">
              {campus.count}
            </span>
          </label>
        ))}
      </div>
    </SidebarSection>
  );
}
