import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { CONTAINER } from "@/constants/layout";

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "#",
  },
  {
    icon: FaInstagram,
    href: "#",
  },
  {
    icon: FaLinkedinIn,
    href: "#",
  },
  {
    icon: FaYoutube,
    href: "#",
  },
];

const footerLinks = [
  {
    title: "Policies & Procedures",
    href: "/policies-and-procedures",
  },
  {
    title: "Forms",
    href: "/forms",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
  },
];

export default function FooterBottom() {
  return (
    <div className="border-t border-slate-200/70">
      <div
        className={`
          ${CONTAINER}
          py-8
        `}
      >
        <div
          className="
            flex
            flex-col
            items-center
            gap-8
            text-center

            xl:flex-row
            xl:items-center
            xl:justify-between
            xl:text-left
          "
        >
          {/* Copyright */}

          <div className="space-y-2 xl:max-w-sm">
            <p className="text-sm leading-6 text-slate-700">
              © 2026 Captain Cook Institute Pty Ltd trading as George Brown
              College.
            </p>

            <p className="text-sm leading-6 text-slate-500">
              CRICOS 03208D · RTO 91707 · ABN 94 134 836 454
            </p>
          </div>

          {/* Footer Links */}

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="
                  relative
                  text-sm
                  text-slate-600
                  transition-all
                  duration-300
                  hover:text-[#D84D95]

                  after:absolute
                  after:-bottom-1
                  after:left-0
                  after:h-px
                  after:w-0
                  after:bg-[#D84D95]
                  after:transition-all
                  after:duration-300

                  hover:after:w-full
                "
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Social */}

          <div className="flex items-center justify-center gap-3">
            {socialLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={index}
                  href={item.href}
                  className="
                    group
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    text-slate-600
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-[#D84D95]
                    hover:bg-[#D84D95]
                    hover:text-white
                    hover:shadow-[0_12px_30px_rgba(216,77,149,0.25)]
                  "
                >
                  <Icon
                    size={14}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
