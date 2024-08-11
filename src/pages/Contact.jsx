import React, { useState } from "react";

import Navbar from "../components/Navbar";
import {
  contactSlide,
  contactSlideTwo,
} from "../utils/animations/anime";
import { motion } from "framer-motion";
import ScrollingContactButtons from "../components/contactComponents/ScrollingContactButtons";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const phoneNumber = "+91-6282251370";

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className=" w-screen min-h-screen relative cursor-none scrollbar-hidden overflow-hidden dark:bg-black bg-white">
      <div className="w-full z-30 fixed">
        <Navbar />
      </div>
      <section className=" md:mt-24 absolute z-20 flex flex-col items-start ml-10 md:ml-0 md:grid md:grid-flow-col grid-rows-4 gap-20 md:gap-4 h-screen w-full justify-center">
        <div className=" border-b border-x-0 border-gray-500 overflow-hidden pb-5">
          <motion.p
            variants={contactSlideTwo}
            initial="initial"
            animate="enter"
            className=" text-black dark:text-white text-xs sm:text-base font-secondary  translate-y-2 "
          >
            Want to{" "}
            <span className=" text-violet-500 text-xs sm:text-base font-secondary ">
              HIRE ME?
            </span>
          </motion.p>
          <motion.h1
            variants={contactSlide}
            initial="initial"
            animate="enter"
            className=" text-4xl md:text-8xl text-black font-extrabold dark:text-white font-alfaslab tracking-widest"
          >
            LET'S TALK!
          </motion.h1>
        </div>
        <div className=" border-b border-x-0 border-gray-500 pb-5 overflow-hidden">
          <div className=" translate-y-1">
            <motion.p
              variants={contactSlideTwo}
              initial="initial"
              animate="enter"
              className=" text-black dark:text-white text-xs sm:text-base font-secondary "
            >
              Shoot me a{" "}
              <span className=" text-violet-500 text-xs sm:text-base font-secondary ">
                MAIL.
              </span>
            </motion.p>
          </div>
          <motion.div variants={contactSlide} initial="initial" animate="enter">
            <a
              href="mailto:akshaykumarkanad@gmail.com"
              className=" w-fit text-xl md:text-5xl lg:text-6xl flex-wrap flex font-extrabold font-alfaslab  text-black dark:text-white hover:text-violet-500 dark:hover:text-violet-500 duration-500"
            >
              akshaykumarkanad@gmail.com
            </a>
          </motion.div>
        </div>
        <div className=" relative border-b border-x-0 border-gray-500 overflow-hidden pb-5">
          <div className=" translate-y-1">
            <motion.p
              variants={contactSlideTwo}
              initial="initial"
              animate="enter"
              className=" text-black dark:text-white text-xs sm:text-base font-secondary "
            >
              Feel free to{" "}
              <span className=" text-violet-500 text-xs sm:text-base font-secondary ">
                CALL.
              </span>
            </motion.p>
          </div>
          <motion.div variants={contactSlide} initial="initial" animate="enter">
            <button
              onClick={copyToClipBoard}
              className=" text-xl md:text-5xl lg:text-6xl font-extrabold text-black dark:text-white font-alfaslab tracking-widest hover:text-violet-500 dark:hover:text-violet-500 duration-500 "
            >
              {phoneNumber}
            </button>
          </motion.div>

          {copied && (
            <div className=" absolute z-20 md:px-4 px-2 bg-black dark:bg-white bg-opacity-10 dark:bg-opacity-80 rounded-full overflow-hidden text-violet-600 font-normal text-sm md:text-xl">
              Copied
            </div>
          )}
        </div>
      </section>
      <div className=" ">
        <ScrollingContactButtons
          text="GITHUB"
          text2="LINKEDIN"
          text3="INSTAGRAM"
        />
      </div>
      {/* <div className=" mt-2">
        <ScrollingText text="CONTACT" />
      </div> */}
    </div>
  );
};

export default Contact;
