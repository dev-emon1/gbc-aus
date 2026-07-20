import { SearchX } from "lucide-react";

export default function AgentEmpty() {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-8 py-20 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D84D95]/10 text-[#D84D95]">
        <SearchX size={30} />
      </div>

      <h3 className="mt-6 text-2xl font-semibold text-slate-900">
        No representative found
      </h3>

      <p className="mt-3 max-w-md text-base leading-7 text-slate-600">
        We couldn't find any authorised education representative matching your
        search. Please try a different agency name or email address.
      </p>
    </div>
  );
}
