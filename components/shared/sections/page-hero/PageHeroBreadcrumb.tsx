import Link from "next/link";

import { ChevronRight } from "lucide-react";

import { PageHeroData } from "./types";

type Props = {
  breadcrumbs: PageHeroData["breadcrumbs"];
};

export default function PageHeroBreadcrumb({ breadcrumbs }: Props) {
  return (
    <nav className="flex flex-wrap items-center gap-2 text-sm text-white/75">
      {breadcrumbs.map((item, index) => (
        <div key={item.label} className="flex items-center gap-2">
          {item.href ? (
            <Link
              href={item.href}
              className="transition-colors duration-300 hover:text-white"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-white">{item.label}</span>
          )}

          {index !== breadcrumbs.length - 1 && <ChevronRight size={16} />}
        </div>
      ))}
    </nav>
  );
}
