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
      <MotionHover y={-8}>
        <article
          className="
            group
            overflow-hidden
            rounded-[34px]
            border
            border-slate-200/80
            bg-white
            shadow-[0_15px_55px_rgba(15,23,42,.06)]
            transition-all
            duration-500
            hover:-translate-y-2
            hover:border-[#D84D95]/20
            hover:shadow-[0_35px_90px_rgba(15,23,42,.12)]
          "
        >
          {/* Image */}

          <div className="relative aspect-[4/4.7] overflow-hidden">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="
                object-cover
                transition-all
                duration-700
                group-hover:scale-[1.06]
              "
            />

            {/* Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-slate-950/75
                via-slate-950/15
                to-transparent
                opacity-0
                transition-all
                duration-500
                group-hover:opacity-100
              "
            />

            {/* Floating Department */}

            {member.department && (
              <div
                className="
                  absolute
                  left-6
                  top-6
                  rounded-full
                  border
                  border-white/20
                  bg-white/15
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  text-white
                  backdrop-blur-xl
                "
              >
                {member.department}
              </div>
            )}

            {/* Hover Info */}

            <div
              className="
                absolute
                inset-x-0
                bottom-0
                translate-y-8
                p-7
                opacity-0
                transition-all
                duration-500
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >
              <h3 className="text-2xl font-bold text-white">{member.name}</h3>

              <p className="mt-2 text-sm text-white/80">{member.designation}</p>
            </div>
          </div>
          {/* Content */}

          <div className="flex min-h-[360px] flex-col p-8">
            <span
              className="
                inline-flex
                w-fit
                rounded-full
                bg-[#D84D95]/10
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#D84D95]
              "
            >
              {member.designation}
            </span>

            <h3
              className="
                mt-6
                text-[30px]
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

            <div className="mt-6 h-px w-20 bg-gradient-to-r from-[#D84D95] to-transparent" />

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
            {/* Meta */}

            <div className="mt-8 flex flex-wrap gap-2">
              {member.experience && (
                <span
                  className="
                    rounded-full
                    border
                    border-slate-200
                    bg-slate-50
                    px-3
                    py-2
                    text-xs
                    font-medium
                    text-slate-600
                  "
                >
                  {member.experience}
                </span>
              )}

              {member.specialization && (
                <span
                  className="
                    rounded-full
                    border
                    border-slate-200
                    bg-slate-50
                    px-3
                    py-2
                    text-xs
                    font-medium
                    text-slate-600
                  "
                >
                  {member.specialization}
                </span>
              )}
            </div>

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
                {expanded ? "Show Less" : "Read Profile"}
              </span>

              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Expanded */}

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden"
                >
                  <div className="pt-8">
                    {/* Full Bio */}

                    {member.fullBio && (
                      <p className="leading-8 text-slate-600">
                        {member.fullBio}
                      </p>
                    )}

                    {/* Quote */}

                    {member.featuredQuote && (
                      <div className="mt-8 border-l-[3px] border-[#D84D95] pl-6">
                        <Quote size={20} className="mb-3 text-[#D84D95]" />

                        <p className="italic leading-8 text-slate-700">
                          “{member.featuredQuote}”
                        </p>
                      </div>
                    )}

                    {/* Bottom Accent */}

                    <div className="mt-10 flex items-center justify-between">
                      <div className="h-1.5 w-20 rounded-full bg-gradient-to-r from-[#D84D95] to-[#B7D531]" />

                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        George Brown College
                      </span>
                    </div>
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
