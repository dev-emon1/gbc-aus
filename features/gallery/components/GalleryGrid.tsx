import Image from "next/image";
import Link from "next/link";

import { ArrowRight, CalendarDays, Images } from "lucide-react";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CONTAINER } from "@/constants/layout";

import { GALLERY_CONTENT } from "../data/gallery";

interface GalleryGridProps {
  activeCategory: string;
}

export default function GalleryGrid({ activeCategory }: GalleryGridProps) {
  const albums = GALLERY_CONTENT.albums;

  const filteredAlbums =
    activeCategory === "All Albums"
      ? albums
      : albums.filter((album) => album.category === activeCategory);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-28">
      {/* Ambient */}

      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-[#D84D95]/5 blur-[170px]" />

      <div className="absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#B7D531]/10 blur-[180px]" />

      <div className={CONTAINER}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
              Gallery Archive
            </span>

            <h2 className="mt-5 text-5xl font-black tracking-tight text-slate-900">
              Every Album Tells a Story
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Browse our collection of memorable moments from George Brown
              College, celebrating student life, graduations, cultural events
              and campus activities.
            </p>
          </div>
        </MotionReveal>

        {filteredAlbums.length === 0 ? (
          <MotionReveal>
            <div className="mt-20 rounded-[36px] border border-dashed border-slate-300 bg-white py-24 text-center">
              <Images size={54} className="mx-auto text-[#D84D95]" />

              <h3 className="mt-8 text-3xl font-bold text-slate-900">
                No Albums Found
              </h3>

              <p className="mx-auto mt-4 max-w-xl leading-8 text-slate-600">
                There are currently no albums available for this category.
                Please choose another category to continue exploring our
                gallery.
              </p>
            </div>
          </MotionReveal>
        ) : (
          <MotionStagger className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredAlbums.map((album, index) => (
              <MotionReveal
                key={album.id}
                delay={index * 0.06}
                className="h-full"
              >
                <Link
                  href={`/gallery/${album.slug}`}
                  className="group block h-full"
                >
                  <article className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,.07)] transition-all duration-500 hover:-translate-y-2 hover:border-[#D84D95]/30 hover:shadow-[0_45px_120px_rgba(15,23,42,.14)]">
                    {/* Image */}

                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={album.coverImage}
                        alt={album.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08] group-hover:rotate-[0.6deg]"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/5 opacity-80 transition-all duration-500 group-hover:opacity-100" />

                      {/* Category */}

                      <div className="absolute left-6 top-6">
                        <span className="rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-xl transition-all duration-300 group-hover:border-[#D84D95]/30 group-hover:bg-[#D84D95]">
                          {album.category}
                        </span>
                      </div>

                      {/* Featured Badge */}

                      {album.featured && (
                        <div className="absolute right-6 top-6 rounded-full bg-[#D84D95] px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-lg">
                          Featured Album
                        </div>
                      )}

                      {/* Bottom Content */}

                      <div className="absolute inset-x-0 bottom-0 p-7">
                        <div className="translate-y-4 transition-all duration-500 ease-out group-hover:translate-y-0">
                          <h3
                            className={`font-black text-white ${
                              index === 0 ? "text-4xl" : "text-3xl"
                            }`}
                          >
                            {album.title}
                          </h3>

                          <p className="mt-4 line-clamp-2 max-w-md text-sm leading-7 text-white/80 opacity-0 translate-y-2 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                            {album.description}
                          </p>

                          <div className="mt-7 flex items-center justify-between opacity-0 transition-all delay-100 duration-500 group-hover:opacity-100">
                            <div className="flex items-center gap-5 text-sm text-white/90">
                              <span className="flex items-center gap-2">
                                <CalendarDays size={16} />

                                {album.year}
                              </span>

                              <span className="flex items-center gap-2">
                                <Images size={16} />
                                {album.photosCount} Photos
                              </span>
                            </div>

                            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-5 py-2 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 group-hover:border-[#D84D95] group-hover:bg-[#D84D95]">
                              View Album
                              <ArrowRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </MotionReveal>
            ))}
          </MotionStagger>
        )}
      </div>
    </section>
  );
}
