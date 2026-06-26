import {
  ShieldCheck,
  GraduationCap,
  BriefcaseBusiness,
  Clock3,
  BadgeCheck,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "CRICOS Registered",
  },
  {
    icon: GraduationCap,
    title: "Nationally Recognised",
  },
  {
    icon: BriefcaseBusiness,
    title: "Industry Focused",
  },
  {
    icon: Clock3,
    title: "Flexible Learning",
  },
  {
    icon: BadgeCheck,
    title: "Career Ready Programs",
  },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-slate-100 bg-white">
      <div className="mx-auto max-w-[1480px] px-8">
        <div
          className="
            grid
            gap-6

            py-8

            md:grid-cols-3
            xl:grid-cols-5
          "
        >
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  flex
                  items-center
                  gap-4
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center

                    rounded-2xl

                    bg-[#D84D95]/10
                  "
                >
                  <Icon className="h-6 w-6 text-[#D84D95]" />
                </div>

                <span
                  className="
                    font-semibold
                    text-slate-800
                  "
                >
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
