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
          className=" absolute z-20  object-cover overflow-hidden shadow-black rounded-md shadow-2xl dark:opacity-60 grayscale h-auto w-auto "
        />

        <motion.button className=" hover:block hidden absolute z-40 px-4 py-1 bg-white bg-opacity-60 rounded-full overflow-hidden text-violet-500 font-semibold">
          About Me
        </motion.button>
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
              <motion.h1 className=" text-shadow font-secondary text-violet-500 text-8xl text-center tracking-widest font-extrabold translate-y-28">
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
              <motion.h1 className=" text-shadow font-secondary text-violet-500 text-8xl text-center tracking-widest font-extrabold -translate-y-24">
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
