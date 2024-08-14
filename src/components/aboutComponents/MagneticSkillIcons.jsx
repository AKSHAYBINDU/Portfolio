import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";
import { contactSlideTwo } from "../../utils/animations/anime";

export default function MagneticSkillIcons({ children }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const offsetX = ((clientX - centerX) / width) * 30;
    const offsetY = ((clientY - centerY) / height) * 30;

    x.set(offsetX);
    y.set(offsetY);
  };

  const mouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      className=" block overflow-hidden sm:hidden"
    >
      <motion.div
        variants={contactSlideTwo}
        initial="initial"
        animate="enter"
        style={{
          x,
          y,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
