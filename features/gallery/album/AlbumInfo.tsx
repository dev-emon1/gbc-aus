import { CalendarDays, Images, MapPin, Sparkles } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";

import { CONTAINER } from "@/constants/layout";

import { GalleryAlbum } from "../types";

interface AlbumInfoProps {
  album: GalleryAlbum;
}

export default function AlbumInfo({ album }: AlbumInfoProps) {
  return (
    <section className="relative bg-white py-24 lg:py-28">
      <div className={CONTAINER}>
        <MotionReveal>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
            {/* Story */}

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
                Album Story
              </span>

              <h2 className="mt-5 text-5xl font-black tracking-tight text-slate-900">
                {album.title}
              </h2>

              <p className="mt-8 text-lg leading-9 text-slate-600">
                {album.description}
              </p>

              <div className="mt-10 h-px w-32 bg-gradient-to-r from-[#D84D95] to-[#B7D531]" />

              <p className="mt-10 leading-8 text-slate-600">
                Every photograph captures memorable experiences shared by our
                students, faculty and community. These moments reflect the
                vibrant campus culture and lifelong friendships built at George
                Brown College.
              </p>
            </div>

            {/* Info Card */}

            <div className="rounded-[34px] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">
                Event Information
              </h3>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <CalendarDays className="mt-1 text-[#D84D95]" size={22} />

                  <div>
                    <p className="text-sm text-slate-500">Event Date</p>

                    <p className="font-semibold text-slate-900">
                      {album.eventDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 text-[#B7D531]" size={22} />

                  <div>
                    <p className="text-sm text-slate-500">Location</p>

                    <p className="font-semibold text-slate-900">
                      {album.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Images className="mt-1 text-sky-500" size={22} />

                  <div>
                    <p className="text-sm text-slate-500">Photos</p>

                    <p className="font-semibold text-slate-900">
                      {album.photosCount} Images
                    </p>
                  </div>
                </div>
              </div>

              <div className="my-8 h-px bg-slate-200" />

              <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <Sparkles size={20} className="text-[#D84D95]" />
                Highlights
              </h4>

              <ul className="mt-6 space-y-4">
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="h-2 w-2 rounded-full bg-[#D84D95]" />
                  Student participation
                </li>

                <li className="flex items-center gap-3 text-slate-700">
                  <span className="h-2 w-2 rounded-full bg-[#B7D531]" />
                  Cultural diversity
                </li>

                <li className="flex items-center gap-3 text-slate-700">
                  <span className="h-2 w-2 rounded-full bg-sky-500" />
                  Community engagement
                </li>

                <li className="flex items-center gap-3 text-slate-700">
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                  Memorable campus moments
                </li>
              </ul>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
