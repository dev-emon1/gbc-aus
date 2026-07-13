import { MapPinned } from "lucide-react";

import { CONTACT_CONTENT } from "../data/contact";

export default function GoogleMap() {
  return (
    <div className="overflow-hidden border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,.06)]">
      <div className="flex items-center gap-4 border-b border-slate-200 px-8 py-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D84D95]/10 text-[#D84D95]">
          <MapPinned size={24} />
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
            Campus Location
          </span>

          <h3 className="mt-2 text-2xl font-bold text-slate-900">
            Visit Our Campus
          </h3>

          <p className="mt-1 text-sm text-slate-600">
            Level 5, 191 Thomas Street, Haymarket NSW 2000
          </p>
        </div>
      </div>

      <iframe
        title="George Brown College Location"
        src={CONTACT_CONTENT.details.mapEmbedUrl}
        className="h-[450px] w-full border-0 lg:h-[520px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />

      <div className="border-t border-slate-200 bg-slate-50 px-8 py-4">
        <p className="text-sm text-slate-600">
          Easily accessible by public transport, located in Sydney CBD.
        </p>
      </div>
    </div>
  );
}
