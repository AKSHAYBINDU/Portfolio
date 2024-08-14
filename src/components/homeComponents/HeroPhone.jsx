import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import HeroImage from "../../assets/images/HeroImage.png";
import { useNavigate } from "react-router-dom";

const HeroPhone = () => {
  const navigate = useNavigate();

  const handleHireMeClick = () => {
    navigate("/about");
  };

  return (
    <motion.div className=" relative w-screen h-screen flex justify-center items-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: "-200%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className=" grid grid-cols-4 h-screen absolute w-full"
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="border border-black border-opacity-10 p-4 text-center"
          ></div>
        ))}
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          src={HeroImage}
          onClick={handleHireMeClick}
          className=" absolute z-20  object-cover overflow-hidden shadow-black rounded-2xl border border-violet-500 shadow-2xl dark:opacity-60 grayscale h-auto w-auto "
        />
        {/* 
        <motion.button
          animate={{ opacity: [1, 0, 1] }} // Blinking effect
          transition={{
            repeat: Infinity, // Loop the animation infinitely
            duration: 1, // Duration of each blink (in seconds)
            repeatDelay: 5, // Delay between each blink (in seconds)
          }}
          className=" duration-500 absolute z-40 px-2 py-1 shadow-2xl shadow-black bg-white bg-opacity-60 rounded-full overflow-hidden text-violet-500 font-normal text-xs"
        >
          About Me
        </motion.button> */}
        <div className=" w-full h-full">
          <motion.div className=" absolute top-52  rotate-90 left-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: "200%" }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: "-200%" }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className=""
            >
              <motion.h1 className=" text-shadow-two font-secondary text-violet-500 text-8xl text-center tracking-widest font-extrabold translate-y-28">
                AKSHAY
              </motion.h1>
            </motion.div>
          </motion.div>
          <motion.div className=" absolute bottom-40  rotate-90 right-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: "-200%" }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: "200%" }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className=""
            >
              <motion.h1 className=" text-shadow-two font-secondary text-violet-500 text-8xl text-center tracking-widest font-extrabold -translate-y-24">
                KUMAR
              </motion.h1>
            </motion.div>
          </motion.div>
        </div>
      </AnimatePresence>
    </motion.div>
  );
};

export default HeroPhone;
