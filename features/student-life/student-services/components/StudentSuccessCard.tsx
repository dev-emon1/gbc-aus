import { BriefcaseBusiness, FolderCheck, GraduationCap } from "lucide-react";

import { MotionHover } from "@/components/shared/animations";

import { StudentSuccessItem } from "../types";

type Props = {
  item: StudentSuccessItem;
};

const ICONS = {
  "graduation-cap": GraduationCap,
  "folder-open": FolderCheck,
  briefcase: BriefcaseBusiness,
};

export default function StudentSuccessCard({ item }: Props) {
  const Icon = ICONS[item.icon as keyof typeof ICONS] ?? GraduationCap;

  return (
    <MotionHover y={-6}>
      <div className="group rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-[#D84D95]/25 hover:shadow-[0_25px_60px_rgba(15,23,42,.08)]">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D84D95]/10 text-[#D84D95] transition-colors duration-300 group-hover:bg-[#D84D95] group-hover:text-white">
          <Icon size={28} />
        </div>

        <h3 className="mt-6 text-xl font-bold text-slate-900">{item.title}</h3>

        <p className="mt-3 text-[15px] leading-7 text-slate-600">
          {item.description}
        </p>
      </div>
    </MotionHover>
  );
}
