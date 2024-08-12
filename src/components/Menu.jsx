import { motion } from "framer-motion";
import CustomCursor from "./CustomCursor";
import { RevealLinks } from "./RevealLinks";
import menuSlide from "../utils/animations/anime";


const Menu = () => {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={` fixed inset-0 w-full h-full dark:bg-black bg-white`}
    >
      <div className="p-8 ">
        <div className=" hidden md:block">
          <CustomCursor/>
        </div>
        <RevealLinks/>
      </div>
    </motion.div>
  );
};

export default Menu;
