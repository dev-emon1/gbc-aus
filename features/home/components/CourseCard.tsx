import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Clock3 } from "lucide-react";

type CourseCardProps = {
  title: string;
  duration: string;
  category: string;
  image: string;
  href: string;
};

const features = ["Industry Ready", "Practical Training", "Career Pathway"];

export default function CourseCard({
  title,
  duration,
  category,
  image,
  href,
}: CourseCardProps) {
  return (
    <Link
      href={href}
      className="
        group
        flex
        h-full
        flex-col

        overflow-hidden

        rounded-[32px]
        border
        border-slate-100

        bg-white

        transition-all
        duration-300

        hover:-translate-y-2
        hover:border-[#D84D95]/20

        hover:shadow-[0_25px_70px_rgba(216,77,149,0.12)]
      "
    >
      {/* Image Area */}
      <div
        className="
          relative
          h-[240px]
          overflow-hidden
        "
      >
        {/* Fallback Gradient */}
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-br
            from-[#D84D95]
            via-[#f08fc0]
            to-[#B7D531]
          "
        />

        {/* Real Image */}
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover

            transition-transform
            duration-700

            group-hover:scale-110
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t
            from-black/50
            via-black/10
            to-transparent
          "
        />

        {/* Category Badge */}
        <div
          className="
            absolute
            left-5
            top-5 rounded-full  bg-white/95

            px-4
            py-2

            text-xs
            font-semibold
            uppercase
            tracking-wide

            text-[#D84D95]

            backdrop-blur
          "
        >
          {category}
        </div>
      </div>

      {/* Content */}
      <div
        className="
          flex
          flex-1
          flex-col

          p-8
        "
      >
        <h3
          className="
            min-h-[72px]

            text-2xl
            font-bold

            leading-tight

            text-slate-900
          "
        >
          {title}
        </h3>

        {/* Features */}
        <div className="mt-6 space-y-3">
          {features.map((feature) => (
            <div
              key={feature}
              className="
                flex
                items-center
                gap-3
              "
            >
              <CheckCircle2
                className="
                  h-5
                  w-5

                  text-[#B7D531]
                "
              />

              <span
                className="
                  text-sm
                  text-slate-600
                "
              >
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-auto pt-8">
          <div
            className="
              flex
              items-center
              gap-2

              text-slate-500
            "
          >
            <Clock3 className="h-4 w-4" />

            <span className="text-sm">{duration}</span>
          </div>

          <div
            className="
              mt-6

              flex
              items-center
              gap-2

              font-semibold

              text-[#D84D95]
            "
          >
            Learn More
            <ArrowRight
              className="
                h-4
                w-4

                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
