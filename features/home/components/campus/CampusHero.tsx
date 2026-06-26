import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  description: string;
  image: string;
  tag: string;
};

export default function CampusHero({ title, description, image, tag }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-[36px] min-h-[620px] border border-slate-200 shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/25 to-transparent" />

      {/* Decorative Glow */}
      <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-[#D84D95]/20 blur-[90px]" />
      <div className="absolute -right-16 bottom-0 h-52 w-52 rounded-full bg-[#B7D531]/20 blur-[90px]" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end p-10 lg:p-12">
        <span className="inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur-md">
          {tag}
        </span>

        <h2 className="mt-6 max-w-xl text-4xl font-bold leading-tight text-white lg:text-5xl">
          {title}
        </h2>

        <p className="mt-5 max-w-xl text-lg leading-8 text-white/80">
          {description}
        </p>

        <Link
          href="/campus"
          className="group/link mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition-all duration-300 hover:shadow-xl"
        >
          Explore Campus
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}
