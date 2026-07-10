import { MotionReveal } from "@/components/shared/animations";

type Props = {
  badge: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  maxWidth?: string;
};

export default function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  maxWidth = "max-w-3xl",
}: Props) {
  const isCenter = align === "center";

  return (
    <MotionReveal>
      <div
        className={`mx-auto ${maxWidth} ${
          isCenter ? "text-center" : "text-left"
        }`}
      >
        <span className="inline-flex rounded-full bg-[#D84D95]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#D84D95]">
          {badge}
        </span>

        <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
          {title}
        </h2>

        {description && (
          <p className="mt-6 text-lg leading-8 text-slate-600">{description}</p>
        )}
      </div>
    </MotionReveal>
  );
}
