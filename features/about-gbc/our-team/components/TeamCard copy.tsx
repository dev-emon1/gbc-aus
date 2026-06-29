"use client";

import { useState } from "react";

import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

import { ChevronDown, Quote } from "lucide-react";

import { MotionHover, MotionReveal } from "@/components/shared/animations";

import { TeamMember } from "../types";

type Props = {
  member: TeamMember;
};

export default function TeamCard({ member }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <MotionReveal>
      <MotionHover y={-6}>
        <article
          className="
            group
            overflow-hidden
            rounded-[32px]
            border
            border-slate-200
            bg-white
            shadow-[0_18px_55px_rgba(15,23,42,.06)]
            transition-all
            duration-500
            hover:-translate-y-1
            hover:border-[#D84D95]/15
            hover:shadow-[0_35px_90px_rgba(15,23,42,.10)]
          "
        >
          {" "}
          {/* Image */}
          <div className="relative aspect-[4/4.8] overflow-hidden">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="
                object-cover
                transition-transform
                duration-700
                group-hover:scale-[1.05]
              "
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />

            {/* Floating Badge */}

            {member.department && (
              <div className="absolute left-6 top-6">
                <span
                  className="
                    rounded-full
                    bg-white/90
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    text-slate-700
                    backdrop-blur-xl
                  "
                >
                  {member.department}
                </span>
              </div>
            )}
          </div>{" "}
          {/* Content */}
          <div className="flex min-h-[340px] flex-col p-8">
            <h3
              className="
                text-[28px]
                font-bold
                leading-tight
                text-slate-900
                transition-colors
                duration-300
                group-hover:text-[#D84D95]
              "
            >
              {member.name}
            </h3>
            <div className="mt-4">
              <span
                className="
                  inline-flex
                  rounded-full
                  bg-[#D84D95]/10
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-[#D84D95]
                "
              >
                {member.designation}
              </span>
            </div>
            <p
              className="
                mt-6
                line-clamp-3
                text-[15px]
                leading-8
                text-slate-600
              "
            >
              {member.shortBio}
            </p>
            {/* Meta Chips */}

            {(member.experience || member.specialization) && (
              <div className="mt-8 flex flex-wrap gap-2">
                {member.experience && (
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">
                    {member.experience}
                  </span>
                )}

                {member.specialization && (
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">
                    {member.specialization}
                  </span>
                )}
              </div>
            )}

            {/* Divider */}

            <div className="mt-8 h-px w-full bg-gradient-to-r from-[#D84D95]/20 via-slate-200 to-transparent" />

            {/* Read More */}

            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="
                mt-auto
                flex
                w-full
                items-center
                justify-between
                pt-6
                text-left
                transition-colors
                duration-300
                hover:text-[#D84D95]
              "
            >
              <span className="text-sm font-semibold">
                {expanded ? "Show Less" : "Read More"}
              </span>

              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Expand Content */}

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden"
                >
                  <div className="pt-6">
                    {member.fullBio && (
                      <p className="leading-8 text-slate-600">
                        {member.fullBio}
                      </p>
                    )}

                    {member.featuredQuote && (
                      <div className="mt-8 rounded-2xl border border-[#D84D95]/10 bg-gradient-to-br from-[#FFF7FB] to-white p-6">
                        <Quote size={22} className="text-[#D84D95]" />

                        <p className="mt-4 italic leading-8 text-slate-700">
                          “{member.featuredQuote}”
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </article>
      </MotionHover>
    </MotionReveal>
  );
}
