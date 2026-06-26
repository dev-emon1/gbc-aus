"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type MotionHoverProps = {
  children: ReactNode;
  className?: string;
  scale?: number;
  y?: number;
  rotate?: number;
};

export default function MotionHover({
  children,
  className,
  scale = 1.02,
  y = -6,
  rotate = 0,
}: MotionHoverProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale,
        y,
        rotate,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
