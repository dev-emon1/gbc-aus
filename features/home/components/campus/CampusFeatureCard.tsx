import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type CampusFeatureCardProps = {
  title: string;
  image: string;
};

export default function CampusFeatureCard({
  title,
  image,
}: CampusFeatureCardProps) {
  return (
    <Link
      href="/campus"
      className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_15px_40px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(15,23,42,0.10)]"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/15 to-transparent" />

        {/* Badge */}
        <span className="absolute left-5 top-5 inline-flex rounded-full bg-white/90 px-4 py-2 text-xs font-semibold tracking-wide text-slate-900 backdrop-blur-md">
          Campus
        </span>

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="flex items-end justify-between gap-5">
            <div>
              <h3 className="text-2xl font-bold text-white">{title}</h3>

              <p className="mt-2 text-sm text-white/80">
                Discover modern facilities and student spaces.
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#D84D95] group-hover:text-white">
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
