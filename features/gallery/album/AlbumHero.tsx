import Image from "next/image";

import { CalendarDays, Images, MapPin } from "lucide-react";

import { GalleryAlbum } from "../types";

interface AlbumHeroProps {
  album: GalleryAlbum;
}

export default function AlbumHero({ album }: AlbumHeroProps) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background */}

      <div className="relative h-[55vh] min-h-[500px] w-full">
        <Image
          src={album.coverImage}
          alt={album.coverAlt}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-900/20" />
      </div>

      {/* Content */}

      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-7xl px-6 pb-16 lg:px-8">
          <span className="inline-flex rounded-full bg-[#D84D95] px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white">
            {album.category}
          </span>

          <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight text-white lg:text-7xl">
            {album.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
            {album.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl">
              <CalendarDays size={20} className="text-[#D84D95]" />

              <div>
                <p className="text-xs uppercase tracking-wider text-white/60">
                  Event
                </p>

                <p className="font-semibold text-white">{album.eventDate}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl">
              <MapPin size={20} className="text-[#B7D531]" />

              <div>
                <p className="text-xs uppercase tracking-wider text-white/60">
                  Location
                </p>

                <p className="font-semibold text-white">{album.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl">
              <Images size={20} className="text-sky-400" />

              <div>
                <p className="text-xs uppercase tracking-wider text-white/60">
                  Photos
                </p>

                <p className="font-semibold text-white">{album.photosCount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
