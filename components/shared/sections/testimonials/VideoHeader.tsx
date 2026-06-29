import { MotionReveal } from "@/components/shared/animations";

type Props = {
  badge: string;

  title: string;

  description: string;

  centered?: boolean;
};

export default function VideoHeader({
  badge,
  title,
  description,
  centered = true,
}: Props) {
  return (
    <div
      className={
        centered ? "mx-auto mb-16 max-w-3xl text-center" : "mb-16 max-w-3xl"
      }
    >
      <MotionReveal>
        <span
          className="
            inline-flex
            rounded-full
            border
            border-[#D84D95]/15
            bg-[#D84D95]/10
            px-5
            py-2
            text-sm
            font-semibold
            uppercase
            tracking-[0.18em]
            text-[#D84D95]
          "
        >
          {badge}
        </span>
      </MotionReveal>

      <MotionReveal delay={0.08}>
        <h2
          className="
            mt-6
            text-4xl
            font-bold
            leading-[1.08]
            text-slate-900
            md:text-5xl
            xl:text-6xl
          "
        >
          {title}
        </h2>
      </MotionReveal>

      <MotionReveal delay={0.16}>
        <div
          className={`
            mt-8
            h-1
            w-24
            rounded-full
            bg-[#D84D95]
            ${centered ? "mx-auto" : ""}
          `}
        />
      </MotionReveal>

      <MotionReveal delay={0.24}>
        <p
          className={`
            mt-8
            text-lg
            leading-8
            text-slate-600
            ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}
          `}
        >
          {description}
        </p>
      </MotionReveal>
    </div>
  );
}
