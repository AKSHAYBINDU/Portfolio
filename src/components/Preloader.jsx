import React from "react";
import { motion } from "framer-motion";

const PreLoader = ({ isVisible,letters }) => {

  const children = {
    hidden: {
      clipPath: "polygon(0% 100%, 100% 100% ,100% 100%, 0% 100%)",
    },
    show: (i) => ({
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      transition: {
        y: 0,
        ease: [0.11, 0.325, 0.16, 0.95],
        delay: Math.random() * (i / 15),
        duration: 1.2,
      },
    }),
    exit: (i) => ({
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      transition: {
        ease: [0.645, 0.045, 0.355, 0.8],
        delay: Math.random() * (i / 15),
        duration: 1.2,
      },
    }),
  };
  return (
    <>
      {isVisible && (
        <motion.div className=" w-screen h-screen overflow-hidden fixed inset-0 duration-500 bg-white dark:bg-black text-center">
          <div className=" w-full h-full grid grid-cols-7 gap-1 grid-rows-1">
            {letters.map((letter, i) => (
              <motion.div
                key={i}
                className="w-full h-full bg-violet-500 dark:bg-violet-500 flex justify-center items-center text-center"
                variants={children}
                initial="hidden"
                animate="show"
                exit="exit"
                custom={i}
              >
                <span className=" font-bold text-5xl sm:text-9xl font-secondary text-white dark:text-black">
                  {letter}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default PreLoader;
