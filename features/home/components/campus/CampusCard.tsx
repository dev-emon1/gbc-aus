import { ArrowUpRight } from "lucide-react";

type CampusCardProps = {
  title: string;
  description: string;
  image: string;
  tag: string;
  className?: string;
};

export default function CampusCard({
  title,
  description,
  image,
  tag,
  className = "",
}: CampusCardProps) {
  return (
    <div
      className={`
        group
        overflow-hidden

        rounded-[32px]

        border
        border-slate-200

        bg-white

        transition-all
        duration-500

        hover:-translate-y-2
        hover:shadow-[0_30px_80px_rgba(15,23,42,0.10)]

        ${className}
      `}
    >
      {/* Image */}
      <div
        className="
          relative

          h-52

          overflow-hidden
        "
      >
        <img
          src={image}
          alt={title}
          className="
            h-full
            w-full

            object-cover

            transition-transform
            duration-700

            group-hover:scale-110
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t
            from-black/70
            via-black/10
            to-transparent
          "
        />

        {/* Tag */}
        <span
          className="
            absolute
            left-5
            top-5

            inline-flex

            rounded-full

            bg-white/90

            px-4
            py-2

            text-xs
            font-semibold

            text-slate-900

            backdrop-blur-md
          "
        >
          {tag}
        </span>
      </div>

      {/* Content */}
      <div className="flex h-[220px] flex-col p-7">
        <h3
          className="
            text-2xl
            font-bold

            leading-tight

            text-slate-900
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-4

            flex-1

            leading-7

            text-slate-600
          "
        >
          {description}
        </p>

        <button
          className="
            group/button

            mt-6

            inline-flex
            w-fit

            items-center

            gap-2

            font-semibold

            text-[#D84D95]
          "
        >
          Explore
          <ArrowUpRight
            size={18}
            className="
              transition-transform
              duration-300

              group-hover/button:translate-x-1
              group-hover/button:-translate-y-1
            "
          />
        </button>
      </div>
    </div>
  );
}
