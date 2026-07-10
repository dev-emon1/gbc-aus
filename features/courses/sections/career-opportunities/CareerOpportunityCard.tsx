type Props = {
  index: number;
  title: string;
  description: string;
};

export default function CareerOpportunityCard({
  index,
  title,
  description,
}: Props) {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/20
        hover:shadow-xl
      "
    >
      {/* Top Accent */}

      <div
        className="
          absolute
          left-0
          top-0
          h-1
          w-0
          bg-primary
          transition-all
          duration-500
          group-hover:w-full
        "
      />

      <span
        className="
          text-5xl
          font-bold
          text-slate-200
          transition-colors
          duration-300
          group-hover:text-primary/20
        "
      >
        {(index + 1).toString().padStart(2, "0")}
      </span>

      <h3
        className="
          mt-8
          text-2xl
          font-bold
          leading-tight
          text-slate-900
          transition-colors
          duration-300
          group-hover:text-primary
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

      <div
        className="
          mt-8
          inline-flex
          rounded-full
          bg-slate-100
          px-4
          py-2
          text-xs
          font-semibold
          uppercase
          tracking-[0.18em]
          text-slate-500
        "
      >
        Employment Outcome
      </div>
    </article>
  );
}
