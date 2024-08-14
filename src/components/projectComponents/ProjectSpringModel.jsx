import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { scale } from "../../utils/animations/anime";

export const ProjectSpringModal = ({ isOpen, setIsOpen, projects }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Exclude the first image by slicing the array
  const sliderImages = projects.images.slice(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % sliderImages.length
      );
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [sliderImages.length]);

  const variants = {
    enter: { x: "100%", opacity: 0, scale: 0 },
    center: { x: 0, opacity: 1, scale: 1 },
    exit: { x: "-100%", opacity: 0, scale: 0 },
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer scrollbar-hidden"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className=" text-white w-11/12  md:w-10/12 h-5/6 shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="h-full w-full z-10 rounded-xl md:grid md:grid-flow-col md:grid-cols-3 md:overflow-hidden overflow-y-auto">
              <div className="w-full h-full md:h-full flex-shrink-0 dark:bg-neutral-800 bg-white flex flex-col justify-between text-black dark:text-white p-4 sm:p-8">
                <div className="flex flex-col gap-5">
                  <h1 className="font-secondary text-xl md:text-3xl">
                    {projects.heading}
                  </h1>
                  <p>{projects.description}</p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className=" font-medium">
                    <span className="font-semibold text-opacity-25 text-black dark:text-white dark:text-opacity-50">
                      Role:{" "}
                    </span>
                    {projects.role}
                  </p>
                  <p className=" font-medium">
                    <span className="font-semibold text-opacity-25 text-black dark:text-white dark:text-opacity-50">
                      Year:{" "}
                    </span>
                    {projects.year}
                  </p>
                  <p>
                    <span className="font-semibold text-opacity-25 text-black dark:text-white dark:text-opacity-50">
                      Contribution:{" "}
                    </span>
                    {projects.contributions.map((contribution, index) => (
                      <span className=" font-medium uppercase" key={index}>
                        {contribution}{" "}
                        {index < projects.contributions.length - 1 && " , "}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
              <div
                key="model"
                className="w-full md:h-full h-full flex-shrink-0 overflow-hidden bg-violet-300 flex justify-center items-center"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={currentImageIndex}
                    src={sliderImages[currentImageIndex]}
                    alt="mockup image"
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-full h-full object-contain duration-500"
                  />
                </AnimatePresence>
              </div>

              <div className="w-full md:h-full h-full flex-shrink-0 dark:bg-neutral-800 bg-white flex flex-col justify-between text-black dark:text-white p-8">
                <div className="flex flex-col gap-5">
                  <h1 className="font-secondary text-base">
                    Technologies Used:
                  </h1>
                  <div className=" flex  gap-2 flex-wrap">
                    {projects.technologies.map((technology, index) => (
                      <div
                        key={index}
                        className="text-black text-xs dark:text-white border uppercase font-semibold border-black border-opacity-70 dark:border-neutral-200 rounded-full px-4 py-1 w-fit"
                      >
                        {technology}
                      </div>
                    ))}
                  </div>
                </div>
                <div className=" flex justify-between items-center">
                  <p
                    className={` ${
                      projects.status === "Not Live"
                        ? " text-red-600 bg-red-200"
                        : " text-blue-600 bg-blue-200"
                    }  rounded px-4 py-2`}
                  >
                    {projects.status}
                  </p>
                  {projects.link && (
                    <a
                      href={projects.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" inline-block bg-violet-500 text-white font-bold py-2 px-4 rounded hover:bg-violet-600 transition-colors duration-300"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
