export const DividerAnim = {
  hidden: { opacity: 0, width: "0%" },
  show: {
    opacity: 1,
    width: "80%",
    transition: { duration: 0.5 },
  },
};

export const CardAnim = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const h2Anim = {
  hidden: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};
