import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { CONTAINER } from "@/constants/layout";

export default function TopBar() {
  return (
    <div className="hidden lg:block bg-[#D84D95]">
      <div className={CONTAINER}>
        <div className="flex h-11 items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-8">
            <a
              href="mailto:info@georgebrown.nsw.edu.au"
              className="
                flex items-center gap-2
                text-sm font-medium text-white/90
                transition-colors
                hover:text-white
              "
            >
              <Mail className="h-4 w-4" />
              <span>info@georgebrown.nsw.edu.au</span>
            </a>

            <a
              href="tel:0292794949"
              className="
                flex items-center gap-2
                text-sm font-medium text-white/90
                transition-colors
                hover:text-white
              "
            >
              <Phone className="h-4 w-4" />
              <span>02 9279 4949</span>
            </a>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <Link
              href="/apply-now"
              className="
                inline-flex
                h-8
                items-center
                rounded-full
                bg-[#B7D531]
                px-4
                text-xs
                font-semibold
                tracking-wide
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-lg
              "
            >
              APPLY NOW
            </Link>

            <Link
              href="https://rtomanager.example.com"
              target="_blank"
              className="
                inline-flex
                h-8
                items-center
                rounded-full
                bg-white/15
                px-4
                text-xs
                font-semibold
                tracking-wide
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:bg-white/25
              "
            >
              RTO MANAGER
            </Link>

            <Link
              href="/e-learning"
              className="
                inline-flex
                h-8
                items-center
                rounded-full
                border
                border-white/20
                bg-white/10
                px-4
                text-xs
                font-semibold
                tracking-wide
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:bg-white/20
              "
            >
              E-LEARNING
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
