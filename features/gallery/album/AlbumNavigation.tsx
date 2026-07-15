import Link from "next/link";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";

import { CONTAINER } from "@/constants/layout";

import { GALLERY_CONTENT } from "../data/gallery";

interface AlbumNavigationProps {
  currentSlug: string;
}

export default function AlbumNavigation({ currentSlug }: AlbumNavigationProps) {
  const albums = GALLERY_CONTENT.albums;

  const currentIndex = albums.findIndex((album) => album.slug === currentSlug);

  const previous = currentIndex > 0 ? albums[currentIndex - 1] : null;

  const next =
    currentIndex < albums.length - 1 ? albums[currentIndex + 1] : null;

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className={CONTAINER}>
        <MotionReveal>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Previous */}

            {previous ? (
              <Link
                href={`/student-life/gallery/${previous.slug}`}
                className="group overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#D84D95]/20 hover:bg-white hover:shadow-[0_25px_70px_rgba(15,23,42,.08)]"
              >
                <span className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#D84D95]">
                  <ArrowLeft size={16} />
                  Previous Album
                </span>

                <h3 className="mt-6 text-3xl font-black text-slate-900 transition-colors group-hover:text-[#D84D95]">
                  {previous.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {previous.description}
                </p>
              </Link>
            ) : (
              <div />
            )}

            {/* Next */}

            {next ? (
              <Link
                href={`/student-life/gallery/${next.slug}`}
                className="group overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 p-8 text-right transition-all duration-300 hover:-translate-y-1 hover:border-[#B7D531]/30 hover:bg-white hover:shadow-[0_25px_70px_rgba(15,23,42,.08)]"
              >
                <span className="flex items-center justify-end gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#B7D531]">
                  Next Album
                  <ArrowRight size={16} />
                </span>

                <h3 className="mt-6 text-3xl font-black text-slate-900 transition-colors group-hover:text-[#B7D531]">
                  {next.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {next.description}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
