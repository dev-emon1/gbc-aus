"use client";

import Link from "next/link";
import Image from "next/image";

import { Menu, ChevronRight } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { mobileNavigation } from "@/constants/mobile-navigation";

export default function MobileMenu() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button
            className="
              flex
              h-11
              w-11
              items-center
              justify-center

              rounded-xl

              border
              border-gray-200

              bg-white

              shadow-sm
            "
          >
            <Menu
              className="
    h-5
    w-5

    text-slate-900

    stroke-[2.5]
    shrink-0
  "
            />
          </button>
        </SheetTrigger>

        <SheetContent side="right" className="p-0">
          {/* Header */}
          <div
            className="
              border-b
              border-gray-100

              bg-white

              px-6
              py-5
            "
          >
            <Image
              src="/logo.png"
              alt="George Brown College"
              width={180}
              height={48}
              priority
            />
          </div>

          {/* Content */}
          <div
            className="
              flex-1
              overflow-y-auto

              px-6
              py-6
            "
          >
            {/* Navigation */}
            <Accordion type="single" collapsible className="space-y-2">
              {mobileNavigation.map((item) => {
                if (item.items) {
                  return (
                    <AccordionItem
                      key={item.label}
                      value={item.label}
                      className="
                        rounded-2xl
                        border
                        border-gray-200

                        bg-gray-50

                        px-4
                      "
                    >
                      <AccordionTrigger
                        className="
                          py-4

                          text-[16px]
                          font-semibold

                          text-gray-900

                          hover:no-underline
                        "
                      >
                        {item.label}
                      </AccordionTrigger>

                      <AccordionContent>
                        <div className="pb-3">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="
                                flex
                                items-center
                                justify-between

                                rounded-xl

                                px-4
                                py-3

                                text-[15px]
                                font-medium

                                text-gray-600

                                transition-all

                                hover:bg-white
                                hover:text-[#D84D95]
                              "
                            >
                              {subItem.label}

                              <ChevronRight className="h-4 w-4" />
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className="
                      flex
                      items-center
                      justify-between

                      rounded-2xl

                      border
                      border-gray-200

                      bg-gray-50

                      px-5
                      py-4

                      text-[16px]
                      font-semibold

                      text-gray-900

                      transition-all

                      hover:bg-white
                    "
                  >
                    {item.label}

                    <ChevronRight className="h-4 w-4" />
                  </Link>
                );
              })}
            </Accordion>

            {/* Language */}
            <div className="mt-8">
              <p
                className="
                  mb-3

                  text-xs
                  font-semibold

                  uppercase
                  tracking-wider

                  text-gray-400
                "
              >
                Language
              </p>

              <button
                className="
                  flex
                  w-full
                  items-center
                  justify-between

                  rounded-2xl

                  border
                  border-gray-200

                  bg-gray-50

                  px-5
                  py-4

                  text-[15px]
                  font-medium

                  text-gray-900
                "
              >
                <span>🇬🇧 English</span>

                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Quick Access */}
            <div className="mt-8">
              <p
                className="
                  mb-3

                  text-xs
                  font-semibold

                  uppercase
                  tracking-wider

                  text-gray-400
                "
              >
                Quick Access
              </p>

              <div className="space-y-3">
                <Link
                  href="/apply-now"
                  className="
                    flex
                    h-12
                    items-center
                    justify-center

                    rounded-xl

                    bg-[#B7D531]

                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  Apply Now
                </Link>

                <Link
                  href="/rto-manager"
                  className="
                    flex
                    h-12
                    items-center
                    justify-center

                    rounded-xl

                    border
                    border-gray-200

                    bg-white

                    text-sm
                    font-semibold
                    text-gray-900
                  "
                >
                  RTO Manager
                </Link>

                <Link
                  href="/e-learning"
                  className="
                    flex
                    h-12
                    items-center
                    justify-center

                    rounded-xl

                    border
                    border-gray-200

                    bg-white

                    text-sm
                    font-semibold
                    text-gray-900
                  "
                >
                  E-Learning
                </Link>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/meet-an-advisor"
              className="
                mt-8

                flex
                h-14
                items-center
                justify-center

                rounded-full

                bg-[#D84D95]

                text-sm
                font-semibold
                text-white

                shadow-lg
              "
            >
              Start Your Journey
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
