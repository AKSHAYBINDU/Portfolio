import { animate } from "framer-motion";

const menuSlide = {
  initial: { y: "-100%" },
  enter: {
    y: "0%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: "-100%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slide = {
  initial: { x: 0 },
  enter: (i) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

export const scale = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } },
};
export const menuButtonVariants = {
  initial: {
    y: -25,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    y: -25,
    opacity: 0,
    transition: { duration: 0.5 },
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.3 },
  },
};

export default menuSlide;


export const contactSlide = {
  initial: { y: "-200%" },
  enter: {
    y: "0%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: "-100%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const contactSlideTwo = {
  initial: { y: "-200%",opacity:0 },
  enter: {
    y: "0%",
    opacity:1,
    transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: "-100%",
    transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
  },
};


export const textScale = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 1 } },
};

