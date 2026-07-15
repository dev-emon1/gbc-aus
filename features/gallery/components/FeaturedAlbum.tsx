import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  CalendarDays,
  Images,
  MapPin,
  Sparkles,
} from "lucide-react";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CONTAINER } from "@/constants/layout";

import { GALLERY_CONTENT } from "../data/gallery";

export default function FeaturedAlbum() {
  const album = GALLERY_CONTENT.featuredAlbum;

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Ambient */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#D84D95]/10 blur-[180px]" />

      <div className="absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#B7D531]/10 blur-[180px]" />

      <div className={CONTAINER}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D84D95]/15 bg-[#D84D95]/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D84D95]">
              <Sparkles size={14} />
              Featured Memory
            </span>

            <h2 className="mt-7 text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
              A Story Behind Every Smile
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              Discover one unforgettable event from George Brown College through
              a beautifully curated collection of photographs.
            </p>
          </div>
        </MotionReveal>

        <MotionStagger className="mt-16">
          <article className="overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-[0_35px_100px_rgba(15,23,42,.08)]">
            {/* Hero Image */}

            <div className="relative aspect-[16/8] overflow-hidden">
              <Image
                src={album.coverImage}
                alt={album.coverAlt}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />

              {/* Badge */}

              <div className="absolute left-8 top-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 backdrop-blur-xl">
                  <Sparkles size={14} className="text-[#D84D95]" />
                  Featured Album
                </span>
              </div>

              {/* Hero Content */}

              <div className="absolute bottom-10 left-8 right-8 lg:left-12 lg:right-12">
                <span className="inline-flex rounded-full bg-[#D84D95] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  {album.category}
                </span>

                <h3 className="mt-5 max-w-3xl text-4xl font-black text-white md:text-5xl lg:text-6xl">
                  {album.title}
                </h3>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
                  {album.description}
                </p>
              </div>
            </div>
            {/* Bottom Content */}

            <div className="border-t border-slate-200 bg-white px-8 py-8 lg:px-12">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                {/* Left */}

                <div>
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                      <CalendarDays size={16} className="text-[#D84D95]" />

                      {album.eventDate}
                    </span>

                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                      <Images size={16} className="text-[#B7D531]" />
                      {album.photosCount} Photos
                    </span>

                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                      <MapPin size={16} className="text-sky-500" />

                      {album.location}
                    </span>
                  </div>

                  <p className="mt-6 max-w-3xl leading-8 text-slate-600">
                    Browse the complete collection and relive every memorable
                    moment from this event through high-quality photographs
                    captured during the celebration.
                  </p>
                </div>

                {/* CTA */}

                <div className="shrink-0">
                  <Link
                    href={`/gallery/${album.slug}`}
                    className="group inline-flex items-center gap-3 rounded-full bg-[#D84D95] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#C53F86] hover:shadow-[0_20px_45px_rgba(216,77,149,.35)]"
                  >
                    Explore Album
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </MotionStagger>
      </div>
    </section>
  );
}
