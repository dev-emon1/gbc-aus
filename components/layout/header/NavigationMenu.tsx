import Image from "next/image";
import Link from "next/link";

import { ArrowRight, ChevronRight } from "lucide-react";

import { navigation } from "@/constants/navigation";

type Props = {
  menu: string;
};

export default function NavigationMenu({ menu }: Props) {
  const currentMenu = navigation.find((item) => item.label === menu);

  if (!currentMenu?.children) return null;

  return (
    <div className="invisible absolute left-1/2 top-full z-50 mt-5 w-[760px] -translate-x-1/2 translate-y-3 overflow-hidden rounded-[32px] border border-slate-200 bg-white opacity-0 shadow-[0_35px_90px_rgba(15,23,42,0.14)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      <div className="grid grid-cols-[260px_1fr]">
        {/* Left Panel */}

        <div className="relative overflow-hidden">
          <Image
            src={currentMenu.image || "/images/navigation/about-gbc.jpg"}
            alt=""
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/75 to-[#D84D95]/45" />

          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/15" />

          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 flex h-full flex-col justify-between p-7 text-white">
            <div>
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] backdrop-blur-md">
                {currentMenu.label}
              </span>

              <div className="mt-5 border-t border-white/15 pt-5">
                <h4 className="text-[22px] font-bold leading-[1.2] text-white">
                  Need Help
                  <br />
                  Choosing a Course?
                </h4>

                <p className="mt-4 text-[14px] leading-7 text-white/80">
                  Speak with our advisors and receive personalised guidance for
                  choosing the right course and study pathway.
                </p>
              </div>
            </div>

            <div>
              <div className="mb-5 h-px bg-white/15" />

              <Link
                href={currentMenu.ctaHref ?? "#"}
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-[15px] font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/20 hover:shadow-[0_15px_35px_rgba(255,255,255,0.15)]"
              >
                <span>{currentMenu.ctaButton}</span>

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Panel */}

        <div className="relative overflow-hidden p-8">
          <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-[#D84D95]/8 blur-3xl" />

          <div className="absolute -bottom-24 -left-24 h-60 w-60 rounded-full bg-[#B7D531]/8 blur-3xl" />

          <div className="relative z-10">
            <h4 className="text-[28px] font-bold text-slate-900">
              Explore {currentMenu.label}
            </h4>

            <p className="mt-3 max-w-xl text-[15px] leading-7 text-slate-500">
              Discover everything you need to know about George Brown College
              and explore the resources available for future students.
            </p>

            <div className="mt-7 h-px bg-gradient-to-r from-transparent via-[#D84D95]/20 to-transparent" />

            <div className="mt-2 space-y-1">
              {currentMenu.children.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group/item relative flex items-center justify-between overflow-hidden rounded-2xl px-4 py-3 transition-all duration-300 hover:bg-[#FBF8FA]"
                >
                  {/* Left Accent */}

                  <span className="absolute bottom-0 left-0 top-0 w-0 rounded-r-full bg-[#D84D95] transition-all duration-300 group-hover/item:w-1" />

                  <div className="relative z-10 flex items-center gap-3 pl-2">
                    <h5 className="font-semibold text-slate-900 transition-colors duration-300 group-hover/item:text-[#D84D95]">
                      {item.label}
                    </h5>

                    {item.badge && (
                      <span className="rounded-full bg-[#D84D95]/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#D84D95]">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all duration-300 group-hover/item:bg-[#D84D95] group-hover/item:text-white group-hover/item:shadow-[0_10px_25px_rgba(216,77,149,0.25)]">
                    <ChevronRight
                      size={18}
                      className="transition-transform duration-300 group-hover/item:translate-x-0.5"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
