"use client";

import Image from "next/image";
import { useState } from "react";

import { Expand, Images, Plus } from "lucide-react";
import { motion } from "framer-motion";

import { CONTAINER } from "@/constants/layout";

import { GalleryAlbum } from "../types";

import GalleryLightbox from "./GalleryLightbox";

interface AlbumGalleryProps {
  album: GalleryAlbum;
}

const INITIAL_VISIBLE = 40;

const LOAD_MORE_COUNT = 24;

export default function AlbumGallery({ album }: AlbumGalleryProps) {
  const initialCount =
    album.photos.length > INITIAL_VISIBLE ? 24 : album.photos.length;

  const [visibleCount, setVisibleCount] = useState(initialCount);

  const [isOpen, setIsOpen] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const visiblePhotos = album.photos.slice(0, visibleCount);

  const hasMore = visibleCount < album.photos.length;

  const loadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + LOAD_MORE_COUNT, album.photos.length),
    );
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      {/* Background */}

      <div className="absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-[#D84D95]/10 blur-[150px]" />

      <div className="absolute -right-40 bottom-20 h-[350px] w-[350px] rounded-full bg-[#B7D531]/10 blur-[150px]" />

      <div className={CONTAINER}>
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D84D95]">
            Photo Collection
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Explore Every Moment
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Browse every photograph captured during this memorable event.
          </p>
        </div>

        {/* Counter */}

        <div className="mt-8 text-center text-sm font-medium text-slate-500">
          Showing{" "}
          <span className="font-bold text-slate-900">
            {visiblePhotos.length}
          </span>{" "}
          of{" "}
          <span className="font-bold text-slate-900">
            {album.photos.length}
          </span>{" "}
          photos
        </div>

        {/* Gallery Grid */}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visiblePhotos.map((photo, index) => (
            <motion.article
              key={photo.id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
                delay: index < 12 ? index * 0.03 : 0,
              }}
              onClick={() => {
                setCurrentIndex(index);

                setIsOpen(true);
              }}
              className="group cursor-pointer overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#D84D95]/30 hover:shadow-[0_35px_90px_rgba(15,23,42,.12)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={photo.image}
                  alt={photo.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Expand Icon */}

                <div className="absolute right-5 top-5 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <Expand size={18} />
                </div>

                {/* Caption */}

                <div className="absolute bottom-0 left-0 right-0 translate-y-5 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="line-clamp-2 text-sm font-semibold text-white">
                    {photo.caption}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-xs text-white/80">
                    <Images size={14} />
                    Photo {index + 1} of {album.photos.length}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More */}

        {hasMore && (
          <div className="mt-14 flex justify-center">
            <button
              onClick={loadMore}
              className="group inline-flex items-center gap-3 rounded-full bg-[#D84D95] px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#C63F86]"
            >
              <Plus
                size={18}
                className="transition-transform duration-300 group-hover:rotate-90"
              />
              Load More Photos
            </button>
          </div>
        )}
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
