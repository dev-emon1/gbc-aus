type Props = {
  code: string;
  title: string;
};

export default function SubjectItem({ code, title }: Props) {
  return (
    <div className="group flex items-center justify-between gap-6 rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#D84D95]/30 hover:shadow-lg">
      <div className="flex items-center gap-5">
        <div className="min-w-[96px] rounded-xl bg-[#D84D95]/10 px-3 py-2 text-center transition-all duration-300 group-hover:bg-[#D84D95]">
          <span className="text-xs font-bold tracking-wider text-[#D84D95] transition-colors duration-300 group-hover:text-white text-center">
            {code}
          </span>
        </div>

        <h3 className="text-[15px] font-medium leading-7 text-slate-800">
          {title}
        </h3>
      </div>

      <div className="h-2 w-2 rounded-full bg-[#B7D531]" />
    </div>
  );
}
