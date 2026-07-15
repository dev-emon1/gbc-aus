"use client";

import { useEffect } from "react";

import Image from "next/image";

import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { GalleryPhoto } from "../types";

interface GalleryLightboxProps {
  photos: GalleryPhoto[];

  currentIndex: number;

  isOpen: boolean;

  onClose: () => void;

  onNext: () => void;

  onPrevious: () => void;
}

export default function GalleryLightbox({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious,
}: GalleryLightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowRight":
          onNext();
          break;

        case "ArrowLeft":
          onPrevious();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrevious]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const photo = photos[currentIndex];

  return (
    <div className="fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-xl">
      {/* Overlay */}

      <div className="absolute inset-0" onClick={onClose} />

      {/* Header */}

      <div className="absolute left-0 right-0 top-0 z-30 flex items-center justify-between border-b border-white/10 px-6 py-5 lg:px-10">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-white/50">
            Gallery
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">{photo.alt}</h3>
        </div>

        <div className="flex items-center gap-5">
          <span className="text-sm font-medium text-white/70">
            {currentIndex + 1} / {photos.length}
          </span>

          <button
            onClick={onClose}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
          >
            <X size={22} />
          </button>
        </div>
      </div>

      {/* Previous */}

      <button
        onClick={onPrevious}
        className="absolute left-4 top-1/2 z-30 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 lg:left-8"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Next */}

      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 z-30 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 lg:right-8"
      >
        <ChevronRight size={28} />
      </button>

      {/* Image */}

      <div className="relative flex h-full items-center justify-center px-8 pt-28 pb-28 lg:px-20">
        <div className="relative h-full w-full max-w-7xl">
          <Image
            src={photo.image}
            alt={photo.alt}
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>

      {/* Caption */}

      <div className="absolute bottom-0 left-0 right-0 z-30 border-t border-white/10 bg-slate-950/70 px-8 py-6 backdrop-blur">
        <p className="mx-auto max-w-4xl text-center text-white/80">
          {photo.caption ?? photo.alt}
        </p>
      </div>
    </div>
  );
}
