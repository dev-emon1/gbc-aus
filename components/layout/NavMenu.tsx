import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { navigation } from "@/constants/navigation";

import CoursesMegaMenu from "./CoursesMegaMenu";
import NavigationMenu from "./NavigationMenu";

export default function NavMenu() {
  return (
    <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
      {navigation.map((item) => {
        const hasDropdown = item.dropdown || item.megaMenu;

        return (
          <div key={item.label} className="group relative">
            {item.href ? (
              <Link
                href={item.href}
                className="
                  relative
                  flex
                  items-center
                  gap-1
                  py-2

                  whitespace-nowrap

                  text-[15px]
                  font-semibold

                  text-gray-800

                  transition-all
                  duration-300

                  hover:text-[#D84D95]
                "
              >
                {item.label}

                <span
                  className="
                    absolute
                    -bottom-[6px]
                    left-0
                    h-[2px]
                    w-0
                    bg-[#D84D95]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </Link>
            ) : (
              <button
                className="
                  relative
                  flex
                  items-center
                  gap-1
                  py-2

                  whitespace-nowrap

                  text-[15px]
                  font-semibold

                  text-gray-800

                  transition-all
                  duration-300

                  hover:text-[#D84D95]
                "
              >
                {item.label}

                {hasDropdown && (
                  <ChevronDown
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:rotate-180
                    "
                  />
                )}

                <span
                  className="
                    absolute
                    -bottom-[6px]
                    left-0
                    h-[2px]
                    w-0
                    bg-[#D84D95]
                    transition-all
                    duration-300
                    group-hover:w-full
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
