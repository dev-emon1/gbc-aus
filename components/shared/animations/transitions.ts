import { Transition } from "framer-motion";

export const fast: Transition = {
  duration: 0.35,
  ease: "easeOut",
};

export const normal: Transition = {
  duration: 0.6,
  ease: "easeOut",
};

export const slow: Transition = {
  duration: 0.9,
  ease: "easeOut",
};

export const spring = {
  type: "spring",
  stiffness: 120,
  damping: 18,
};

export const smoothSpring = {
  type: "spring",
  stiffness: 80,
  damping: 20,
};
