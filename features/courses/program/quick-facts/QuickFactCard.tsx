import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;

  label: string;

  value: string;
};

export default function QuickFactCard({ icon: Icon, label, value }: Props) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#D84D95]/30
        hover:shadow-xl
      "
    >
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-[#D84D95]/10
          transition-colors
          duration-300
          group-hover:bg-[#D84D95]
        "
      >
        <Icon
          size={22}
          className="
            text-[#D84D95]
            transition-colors
            duration-300
            group-hover:text-white
          "
        />
      </div>

      <p
        className="
          mt-6
          text-sm
          font-medium
          text-slate-500
        "
      >
        {label}
      </p>

      <h3
        className="
          mt-2
          text-xl
          font-bold
          text-slate-900
        "
      >
        {value}
      </h3>
    </div>
  );
}
