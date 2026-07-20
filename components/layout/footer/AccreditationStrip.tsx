import { CONTAINER } from "@/constants/layout";

const ACCREDITATIONS = [
  {
    label: "CRICOS",
    value: "03208D",
  },
  {
    label: "RTO",
    value: "91707",
  },
  {
    label: "Campus",
    value: "Sydney, Australia",
  },
];

export default function AccreditationStrip() {
  return (
    <section className="border-b border-slate-200/70">
      <div
        className={`
          ${CONTAINER}
          grid
          divide-y
          divide-slate-200/70

          py-6

          md:grid-cols-3
          md:divide-x
          md:divide-y-0

          lg:py-7

          xl:py-8
        `}
      >
        {ACCREDITATIONS.map((item) => (
          <div
            key={item.label}
            className="
              flex
              flex-col
              items-center
              justify-center

              px-4
              py-5

              first:pt-0
              last:pb-0

              md:px-6
              md:py-4

              lg:px-8
              lg:py-5

              xl:py-6
            "
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
              {item.label}
            </p>

            <p
              className="
                mt-2

                text-[22px]
                font-semibold
                tracking-[-0.03em]
                text-slate-900

                md:text-[24px]

                xl:mt-3
                xl:text-[26px]
              "
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
