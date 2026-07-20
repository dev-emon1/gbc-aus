import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { navigation } from "@/constants/navigation";

import CoursesMegaMenu from "./CoursesMegaMenu";
import NavigationMenu from "./NavigationMenu";

export default function NavMenu() {
  return (
    <nav
      className="
        hidden
        lg:flex
        min-w-0
        items-center
      "
    >
      {navigation.map((item) => {
        const hasDropdown = item.dropdown || item.megaMenu;

        return (
          <div key={item.label} className="group relative flex shrink-0">
            {item.href ? (
              <Link
                href={item.href}
                className="
                  relative
                  flex
                  items-center
                  gap-0.5

                 px-3
xl:px-4
2xl:px-5

                  py-2

                  whitespace-nowrap

                  text-[14px]
                  xl:text-[15px]

                  font-semibold

                  text-slate-800

                  transition-colors
                  duration-300

                  hover:text-[#D84D95]
                "
              >
                {item.label}

                <span
                  className="
                    absolute
                    -bottom-[6px]
                    left-2
                    xl:left-3
                    2xl:left-4

                    h-[2px]
                    w-0

                    bg-[#D84D95]

                    transition-all
                    duration-300

                    group-hover:w-[calc(100%-16px)]
                    xl:group-hover:w-[calc(100%-24px)]
                    2xl:group-hover:w-[calc(100%-32px)]
                  "
                />
              </Link>
            ) : (
              <button
                className="
                  relative
                  flex
                  items-center
                  gap-0.5

                  px-2
                  xl:px-3
                  2xl:px-4

                  py-2

                  whitespace-nowrap

                  text-[14px]
                  xl:text-[15px]

                  font-semibold

                  text-slate-800

                  transition-colors
                  duration-300

                  hover:text-[#D84D95]
                "
              >
                {item.label}

                {hasDropdown && (
                  <ChevronDown
                    className="
                      h-3.5
                      w-3.5

                      transition-transform
                      duration-300

                      group-hover:rotate-180

                      xl:h-4
                      xl:w-4
                    "
                  />
                )}

                <span
                  className="
                    absolute
                    -bottom-[6px]
                    left-2
                    xl:left-3
                    2xl:left-4

                    h-[2px]
                    w-0

                    bg-[#D84D95]

                    transition-all
                    duration-300

                    group-hover:w-[calc(100%-16px)]
                    xl:group-hover:w-[calc(100%-24px)]
                    2xl:group-hover:w-[calc(100%-32px)]
                  "
                />
              </button>
            )}

            {item.dropdown && <NavigationMenu menu={item.label} />}

            {item.megaMenu && <CoursesMegaMenu />}
          </div>
        );
      })}
    </nav>
  );
}
