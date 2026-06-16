import type { Variants } from "framer-motion";

const motionEase = [0.22, 1, 0.36, 1] as const;

export const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.12,
      when: "beforeChildren",
    },
  },
};

export const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: motionEase,
    },
  },
};

export const lineVariants: Variants = {
  hidden: {
    scaleX: 0,
    scaleY: 0,
  },
  visible: {
    scaleX: 1,
    scaleY: 1,
    transition: {
      duration: 1,
      ease: motionEase,
    },
  },
};

export const stepVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.58,
      ease: motionEase,
    },
  },
};

export const deployVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -14,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};
