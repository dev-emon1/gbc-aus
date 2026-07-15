"use client";

import Image from "next/image";
import { useState } from "react";

import { Expand, Images } from "lucide-react";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CONTAINER } from "@/constants/layout";

import { GalleryAlbum } from "../types";

import GalleryLightbox from "./GalleryLightbox";

interface AlbumGalleryProps {
  album: GalleryAlbum;
}

export default function AlbumGallery({ album }: AlbumGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-28">
      {/* Ambient */}

      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-[#D84D95]/5 blur-[170px]" />

      <div className="absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#B7D531]/10 blur-[180px]" />

      <div className={CONTAINER}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
              Photo Collection
            </span>

            <h2 className="mt-5 text-5xl font-black tracking-tight text-slate-900">
              Explore Every Moment
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Browse every photograph captured during this memorable event.
            </p>
          </div>
        </MotionReveal>

        <MotionStagger className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {album.photos.map((photo, index) => (
            <MotionReveal
              key={photo.id}
              delay={index * 0.04}
              className={
                index % 7 === 0 ? "sm:col-span-2 sm:row-span-2" : undefined
              }
            >
              <article
                onClick={() => {
                  setCurrentIndex(index);
                  setIsOpen(true);
                }}
                className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#D84D95]/20 hover:shadow-[0_35px_90px_rgba(15,23,42,.12)]"
              >
                <div
                  className={`relative overflow-hidden ${
                    index % 7 === 0 ? "aspect-[4/3]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={photo.image}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-[1deg]"
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />

                  {/* Expand */}

                  <div className="absolute right-5 top-5 flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <Expand size={20} />
                  </div>

                  {/* Bottom */}

                  <div className="absolute inset-x-0 bottom-0 translate-y-6 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-lg font-bold text-white">
                      {photo.caption ?? photo.alt}
                    </p>

                    <div className="mt-3 flex items-center gap-2 text-sm text-white/80">
                      <Images size={16} />

                      <span>
                        Photo {index + 1} of {album.photosCount}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </MotionReveal>
          ))}
        </MotionStagger>
      </div>

      <GalleryLightbox
        photos={album.photos}
        currentIndex={currentIndex}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onNext={() =>
          setCurrentIndex((prev) =>
            prev === album.photos.length - 1 ? 0 : prev + 1,
          )
        }
        onPrevious={() =>
          setCurrentIndex((prev) =>
            prev === 0 ? album.photos.length - 1 : prev - 1,
          )
        }
      />
    </section>
  );
}
