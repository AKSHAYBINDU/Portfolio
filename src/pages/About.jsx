import React from "react";
import { contactSlide, contactSlideTwo } from "../utils/animations/anime";
import { motion } from "framer-motion";
import loveSvg from "../assets/icons/loveSvg.svg";
import { Link } from "react-router-dom";
import resumePdf from "../assets/pdf/myResume.pdf";
import SkillsSet from "../components/aboutComponents/SkillsSet";
import ScrollingText from "../components/ScrollingText";
import Navbar from "../components/Navbar";

const About = () => {
  const openResume = () => {
    window.open(resumePdf, "_blank");
  };

  return (
    <div className=" w-screen h-auto md:min-h-screen relative cursor-none md:overflow-hidden scrollbar-hidden dark:bg-black bg-white">
      <div className="w-full fixed z-30 bg-white dark:bg-black md:bg-transparent md:dark:bg-transparent md:absolute">
        <Navbar />
      </div>
      <section className=" z-20 w-full md:absolute min-h-screen flex justify-center items-center">
        <div className=" flex justify-between text-center md:mx-28 mx-2 my-24 gap-5 overflow-hidden flex-col md:flex-row">
          <div className=" md:w-1/2 overflow-hidden">
            <div className=" mb-5 dark:text-white text-black text-3xl md:text-5xl lg:text-7xl font-bold font-secondary  overflow-hidden">
              <motion.h1
                variants={contactSlide}
                initial="initial"
                animate="enter"
              >
                WHO I AM.
              </motion.h1>
            </div>
            <section className=" pb-5 overflow-hidden md:mx-6">
              <motion.div className="  overflow-hidden pt-10">
                <motion.p
                  variants={contactSlideTwo}
                  initial="initial"
                  animate="enter"
                  className=" px-4 pb-4 dark:text-white text-[#1e1e1e] text-opacity-80 dark:text-opacity-90 font-normal text-start text-base "
                >
                  Hi, I'm{" "}
                  <span className=" italic font-bodoni font-extrabold text-xl">
                    {" "}
                    Akshay Kumar K
                  </span>
                  , an MCA graduate driven by a{" "}
                  <img
                    src={loveSvg}
                    alt="love logo"
                    className=" w-7 h-auto inline-block"
                  />{" "}
                  for{" "}
                  <span className=" relative pb-1 text-blue-300 font-bold duration-500">
                    Software Development.{" "}
                    {/* <div className=" absolute left-0 bottom-0 w-full h-1 bg-red-500 dark:bg-red-300 bg-opacity-30 rounded-full"></div> */}
                  </span>{" "}
                  {/* I use the{" "}
                  <span className=" relative pb-1 hover:text-green-500 hover:text-opacity-30 dark:hover:text-green-200 duration-500">
                    MERN
                    <div className=" absolute left-0 bottom-0 w-full h-1 bg-green-500 dark:bg-green-200 bg-opacity-30 rounded-full"></div>
                  </span>{" "}
                  stack to build powerful applications and{" "}
                  <span className=" relative pb-1 hover:text-blue-500 hover:text-opacity-30 dark:hover:text-blue-200 duration-500">
                    Figma
                    <div className=" absolute left-0 bottom-0 w-full h-1 bg-blue-500 dark:bg-blue-200 bg-opacity-30 rounded-full"></div>
                  </span>{" "}
                  to design user-friendly mockups. */}
                  I focus on building robust applications and crafting
                  user-friendly interfaces, continuously learning and applying
                  new technologies. Currently, I am focused on mastering{" "}
                  <span className=" relative pb-1 text-green-300 font-bold duration-500">
                    NextJS
                    {/* <div className=" absolute left-0 bottom-0 w-full h-1 bg-green-500 dark:bg-green-200 bg-opacity-30 rounded-full"></div> */}
                  </span>{" "}
                  to enhance my React skills and exploring{" "}
                  <span className=" relative pb-1 text-yellow-300 font-bold duration-500">
                    Framer-Motion
                    {/* <div className=" absolute left-0 bottom-0 w-full h-1 bg-yellow-500 dark:bg-yellow-200 bg-opacity-30 rounded-full"></div> */}
                  </span>{" "}
                  to create visually stunning web applications.
                </motion.p>
              </motion.div>
              <motion.div className=" overflow-hidden">
                <motion.p
                  variants={contactSlideTwo}
                  initial="initial"
                  animate="enter"
                  className="px-4 dark:text-white text-[#1e1e1e] font-normal text-opacity-80 dark:text-opacity-90 text-start text-base "
                >
                  Currently looking for a full time job in front-end or
                  full-stack development, I am motivated by the opportunity to
                  put my skills into practice within a dynamic team. If my
                  profile interests you, I would be happy to talk with you to
                  discuss opportunities.
                </motion.p>
              </motion.div>
              <div className=" flex justify-start items-center gap-8 p-4 flex-wrap">
                {/* <Link
                  to="/projects"
                  className=" text-sm hover:text-violet-500 bg-[#818181] text-white hover:bg-[#e8e8e8] dark:bg-[#1d1d1d] dark:hover:bg-[#3e3e3e] dark:hover:text-white dark:text-violet-500 rounded-full px-7 py-3 duration-700 "
                >
                  PROJECTS
                </Link>
                <Link
                  to="/contact"
                  className=" text-sm hover:text-violet-500 bg-[#818181] text-white hover:bg-[#e8e8e8] dark:bg-[#1d1d1d] dark:hover:bg-[#3e3e3e] dark:hover:text-white dark:text-violet-500 rounded-full px-7 py-3 duration-700 "
                >
                  CONTACT
                </Link> */}

                <button
                  onClick={openResume}
                  className=" text-sm text-white hover:text-violet-500 hover:border-violet-500 bg-violet-500 hover:bg-white dark:hover:bg-black hover:border border border-violet-500 dark:hover:border-violet-500 rounded-full px-8 py-3 duration-700 "
                >
                  RESUME
                </button>
              </div>
            </section>
          </div>

          <div className=" md:w-1/2 md:border-l border-black dark:border-white border-opacity-10 dark:border-opacity-10">
            <div className=" mb-5 dark:text-white text-black text-3xl md:text-5xl lg:text-7xl  font-bold font-secondary  overflow-hidden">
              <motion.h1
                variants={contactSlide}
                initial="initial"
                animate="enter"
              >
                WHAT I KNOW.
              </motion.h1>
            </div>

            <div className=" h-full md:mx-6 ">
              <SkillsSet />
            </div>
          </div>
        </div>
      </section>
      <div className="">
        <ScrollingText text="ABOUT ME !" />
      </div>
    </div>
  );
};

export default About;
