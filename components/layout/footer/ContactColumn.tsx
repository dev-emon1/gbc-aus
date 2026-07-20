import Link from "next/link";

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const contacts = [
  {
    icon: MapPin,
    title: "Level 5, 191 Thomas Street",
    subtitle: "Haymarket NSW 2000",
  },
  {
    icon: Phone,
    title: "+61 2 9279 4949",
    href: "tel:+61292794949",
  },
  {
    icon: Mail,
    title: "info@georgebrown.nsw.edu.au",
    href: "mailto:info@georgebrown.nsw.edu.au",
  },
];

export default function ContactColumn() {
  return (
    <div className="w-full">
      <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-slate-900">
        Contact
      </h3>

      <div className="mt-4 space-y-3">
        {contacts.map((item) => {
          const Icon = item.icon;

          const content = (
            <>
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D84D95]/8 text-[#D84D95]">
                <Icon size={15} strokeWidth={2} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="break-words text-[13px] font-medium leading-5 text-slate-800">
                  {item.title}
                </p>

                {item.subtitle && (
                  <p className="mt-1 text-[12px] leading-5 text-slate-500">
                    {item.subtitle}
                  </p>
                )}
              </div>
            </>
          );

          if (item.href) {
            return (
              <Link
                key={item.title}
                href={item.href}
                className="group flex items-start gap-2.5 rounded-lg transition-colors hover:text-[#D84D95]"
              >
                {content}
              </Link>
            );
          }

          return (
            <div key={item.title} className="flex items-start gap-2.5">
              {content}
            </div>
          );
        })}
      </div>

      <Link
        href="/meet-an-advisor"
        className="group mt-5 inline-flex items-center gap-2 text-[13px] font-medium text-[#D84D95]"
      >
        Meet an Advisor
        <ArrowRight
          size={14}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
}
