"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

import { fadeUp } from "./variants";
import { normal } from "./transitions";
import { viewport } from "./viewport";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: typeof fadeUp;
  animateOnMount?: boolean;
};

export default function MotionReveal({
  children,
  className,
  delay = 0,
  variant = fadeUp,
  animateOnMount = false,
}: MotionRevealProps) {
  if (animateOnMount) {
    return (
      <motion.div
        className={className}
        variants={variant}
        initial="hidden"
        animate="visible"
        transition={{
          ...normal,
          delay,
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{
        ...normal,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
