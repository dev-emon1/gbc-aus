type Props = {
  title: string;
  children: React.ReactNode;
};

export default function SidebarSection({ title, children }: Props) {
  return (
    <section className="border-t border-slate-100 pt-7 first:border-0 first:pt-0">
      <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-slate-900">
        {title}
      </h3>

      {children}
    </section>
  );
}
