import React from "react";
import { motion } from "framer-motion";

const ScrollingText = ({ text }) => {
  return (
    <div className="fixed h-fit w-full bottom-0 pb-2 overflow-hidden bg-white dark:bg-black">
      <motion.div
        className="flex whitespace-nowrap "
        animate={{ x: ["0%", "-200%"] }}
        transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
      >
        {[...Array(100)].map((_, index) => (
          <span
            key={index}
            className="font-extrabold text-2xl sm:text-5xl font-secondary anton-regular my-1 uppercase text-black text-opacity-5 dark:text-white dark:text-opacity-10 mx-1 sm:mx-2 md:mx-4"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingText;