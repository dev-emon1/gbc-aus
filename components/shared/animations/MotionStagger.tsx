"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

import { staggerContainer } from "./variants";
import { viewport } from "./viewport";

type MotionStaggerProps = {
  children: ReactNode;
  className?: string;
};

export default function MotionStagger({
  children,
  className,
}: MotionStaggerProps) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}
