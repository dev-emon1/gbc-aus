import { ArrowDown } from "lucide-react";

type Props = {
  pathways?: string[];
};

export default function PathwayTimeline({ pathways }: Props) {
  if (!pathways?.length) return null;

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8">
      <span className="text-sm font-semibold uppercase tracking-[0.30em] text-[#D84D95]">
        Learning Pathway
      </span>

      <h3 className="mt-3 text-2xl font-bold text-slate-900">
        Continue Your Education
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        Complete this qualification and progress into higher-level nationally
        recognised programs.
      </p>

      <div className="mt-10 flex flex-col">
        {pathways.map((item, index) => (
          <div key={item} className="flex flex-col items-start">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D84D95] text-base font-bold text-white">
                {index + 1}
              </div>

              <div>
                <p className="font-semibold text-slate-900">{item}</p>

                <span className="text-sm text-slate-500">
                  Next Qualification
                </span>
              </div>
            </div>

            {index !== pathways.length - 1 && (
              <div className="ml-6 flex h-12 items-center">
                <ArrowDown size={18} className="text-[#D84D95]" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
