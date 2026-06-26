import { LucideIcon } from "lucide-react";

type WhyCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function WhyCard({
  icon: Icon,
  title,
  description,
}: WhyCardProps) {
  return (
    <div
      className="
        rounded-[28px]
        border
        border-slate-100
        bg-white

        p-7

        transition-all
        duration-300

        hover:-translate-y-2
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
      "
    >
      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center

          rounded-2xl

          bg-[#D84D95]/10
        "
      >
        <Icon className="h-7 w-7 text-[#D84D95]" />
      </div>

      <h3
        className="
          mt-5

          text-xl
          font-bold

          text-slate-900
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-3

          text-sm
          leading-relaxed

          text-slate-600
        "
      >
        {description}
      </p>
    </div>
  );
}
