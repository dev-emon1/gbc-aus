import Link from "next/link";

import { ArrowRight } from "lucide-react";

type FooterColumnProps = {
  title: string;
  links: {
    title: string;
    href: string;
  }[];
};

export default function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <nav aria-labelledby={title}>
      <h3
        id={title}
        className="text-[15px] font-semibold tracking-[-0.02em] text-slate-900"
      >
        {title}
      </h3>

      <ul className="mt-4 space-y-1">
        {links.map((link) => (
          <li key={link.title}>
            <Link
              href={link.href}
              className="group flex items-center justify-between rounded-lg px-2 py-1.5 transition-all duration-200 hover:bg-slate-50"
            >
              <span className="truncate text-[14px] leading-6 text-slate-600 transition-colors group-hover:text-[#D84D95]">
                {link.title}
              </span>

              <ArrowRight
                size={13}
                strokeWidth={2}
                className="shrink-0 -translate-x-1 opacity-0 text-slate-400 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-[#D84D95]"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
