"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ArrowUpRight } from "lucide-react";

import { navigation } from "@/constants/navigation";

type Props = {
  menu: string;
};

export default function NavigationMenu({ menu }: Props) {
  const pathname = usePathname();

  const currentMenu = navigation.find((item) => item.label === menu);

  if (!currentMenu?.children?.length) return null;

  return (
    <div className="invisible absolute left-1/2 top-full z-50 w-[480px] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 xl:w-[540px] 2xl:w-[620px]">
      <div className="overflow-hidden rounded-[24px] border border-slate-200/70 bg-white shadow-[0_18px_45px_rgba(15,23,42,.08)] backdrop-blur-xl">
        {/* Header */}

        <header className="border-b border-slate-100 px-5 py-4">
          <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#D84D95]">
            {currentMenu.label}
          </span>

          <h3 className="mt-1 text-[19px] font-semibold tracking-[-0.03em] text-slate-900">
            {currentMenu.title}
          </h3>

          <p className="mt-1 max-w-[320px] text-[10px] leading-[17px] text-slate-500">
            {currentMenu.description}
          </p>
        </header>

        {/* Menu */}

        <nav aria-label={currentMenu.label} className="grid gap-0.5 p-2">
          {currentMenu.children.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`group/item flex items-center justify-between rounded-xl px-3 py-2.5 transition-all duration-200 ease-out ${
                  active ? "bg-[#D84D95]/6" : "hover:bg-slate-50"
                }`}
              >
                <div className="flex min-w-0 flex-1 items-start gap-2.5">
                  {/* Accent */}

                  <span
                    className={`mt-[8px] h-[2px] shrink-0 rounded-full transition-all duration-300 ${
                      active
                        ? "w-6 bg-[#D84D95]"
                        : "w-3 bg-slate-300 group-hover/item:w-5 group-hover/item:bg-[#D84D95]"
                    }`}
                  />

                  {/* Content */}

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h4
                        className={`truncate text-[13px] font-medium tracking-[-0.02em] transition-colors duration-200 ${
                          active
                            ? "text-[#D84D95]"
                            : "text-slate-800 group-hover/item:text-[#D84D95]"
                        }`}
                      >
                        {item.label}
                      </h4>

                      {item.badge && (
                        <span
                          className={`inline-flex items-center rounded-full border px-1.5 py-[2px] text-[8px] font-semibold uppercase tracking-[0.08em] transition-all duration-200 ${
                            active
                              ? "border-[#D84D95]/25 bg-[#D84D95]/5 text-[#D84D95]"
                              : "border-slate-200 text-slate-500 group-hover/item:border-[#D84D95]/30 group-hover/item:text-[#D84D95]"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {item.description && (
                      <p
                        className={`mt-0.5 max-w-[250px] text-[10px] leading-4 transition-colors duration-200 ${
                          active
                            ? "text-slate-700"
                            : "text-slate-500 group-hover/item:text-slate-700"
                        }`}
                      >
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>

                <ArrowUpRight
                  size={14}
                  strokeWidth={2}
                  className={`ml-3 shrink-0 transition-all duration-200 ${
                    active
                      ? "translate-x-0 opacity-100 text-[#D84D95]"
                      : "-translate-x-1 opacity-0 text-slate-400 group-hover/item:translate-x-0 group-hover/item:opacity-100 group-hover/item:text-[#D84D95]"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
