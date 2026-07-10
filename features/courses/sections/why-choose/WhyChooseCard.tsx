import { LucideIcon, ArrowRight } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function WhyChooseCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-slate-200
        bg-white
        p-8
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#D84D95]/30
        hover:shadow-[0_30px_80px_rgba(15,23,42,.12)]
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          -right-20
          -top-20
          h-44
          w-44
          rounded-full
          bg-[#D84D95]/10
          blur-[90px]
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Icon */}

      <div
        className="
          relative
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-[#D84D95]
          to-[#B7D531]
          text-white
          shadow-lg
          transition-transform
          duration-500
          group-hover:rotate-6
          group-hover:scale-110
        "
      >
        <Icon size={30} />
      </div>

      {/* Content */}

      <h3
        className="
          mt-8
          text-2xl
          font-bold
          leading-snug
          text-slate-900
          transition-colors
          duration-300
          group-hover:text-[#D84D95]
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-5
          leading-8
          text-slate-600
        "
      >
        {description}
      </p>

      {/* Footer */}

      <div
        className="
          mt-10
          flex
          items-center
          gap-3
          font-semibold
          text-[#D84D95]
        "
      >
        Learn More
        <ArrowRight
          size={18}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </div>

      {/* Bottom Accent */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-1
          w-0
          rounded-full
          bg-gradient-to-r
          from-[#D84D95]
          to-[#B7D531]
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </article>
  );
}
