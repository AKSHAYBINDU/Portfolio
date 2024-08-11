import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const  ScrollingContactButtons = ({ text, text2, text3 }) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      controls.stop();
    } else {
      controls.start({
        x: [null, "-200%"],
        transition: { repeat: Infinity, duration: 100, ease: "linear" },
      });
    }
  }, [isHovered, controls]);

  const handleContactButton = (contactType) => {
    if (contactType === "text1") {
      window.open( "https://github.com/AKSHAYBINDU",'_blank');
    } else if (contactType === "text2") {
      window.open("https://www.linkedin.com/in/akshay-kumar-k-436589271/", '_blank');
    } else if (contactType === "text3") {
      window.open("https://www.instagram.com/akshay.kumar9727/", '_blank');
    }
  };

  return (
    <div
      className="fixed h-fit w-full  bottom-0 z-20 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={controls}
        initial={{ x: "0%" }}
      >
        {[...Array(100)].map((_, index) => (
          <React.Fragment key={index}>
            <button
              onClick={() => handleContactButton("text1")}
              className="font-extrabold text-2xl sm:text-5xl font-secondary my-1 uppercase text-black dark:text-white  mx-1 md:mx-2 hover:text-violet-500 dark:hover:text-violet-500 duration-500"
            >
              {text}
            </button>
            <button
              onClick={() => handleContactButton("text2")}
              className="font-extrabold text-2xl sm:text-5xl font-secondary my-1 uppercase text-black dark:text-white mx-1 md:mx-2 hover:text-violet-500 dark:hover:text-violet-500 duration-500"
            >
              {text2}
            </button>
            <button
              onClick={() => handleContactButton("text3")}
              className="font-extrabold text-2xl sm:text-5xl font-secondary my-1 uppercase text-black dark:text-white mx-1 md:mx-2 hover:text-violet-500 dark:hover:text-violet-500 duration-500"
            >
              {text3}
            </button>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingContactButtons;
