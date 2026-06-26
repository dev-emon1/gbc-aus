import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
};

export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },

  visible: {
    opacity: 1,
    scale: 1,
  },
};

export const zoomIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },

  visible: {
    opacity: 1,
    scale: 1,
  },
};

export const rotateIn: Variants = {
  hidden: {
    opacity: 0,
    rotate: -8,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
  },
};

export const blurIn: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(12px)",
    y: 30,
  },

  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
  },
};

export const staggerContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const heroImage: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    y: 50,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
  },
};
