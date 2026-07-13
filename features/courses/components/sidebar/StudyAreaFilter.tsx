import { Checkbox } from "@/components/ui/checkbox";

import { SidebarSection } from ".";
import { STUDY_AREAS } from "../../data/index";

export default function StudyAreaFilter() {
  return (
    <SidebarSection title="Study Areas">
      <div className="space-y-2">
        {STUDY_AREAS.map((area) => (
          <label
            key={area.id}
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

              <span className="text-sm font-medium text-slate-700 transition-colors duration-300 group-hover:text-slate-900">
                {area.title}
              </span>
            </div>

            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500 transition-colors duration-300 group-hover:bg-[#D84D95] group-hover:text-white">
              {area.programs.length}
            </span>
          </label>
        ))}
      </div>
    </SidebarSection>
  );
}
