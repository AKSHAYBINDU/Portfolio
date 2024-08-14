import React, {useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { menuButtonVariants} from '../utils/animations/anime'
import Menu from "./Menu";


const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
 
  const isDarkMode = theme === "dark";

  return (
    <div className=" cursor-none">
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleTheme}
        size={30}
        sunColor="black"
        moonColor="white"
        className=" cursor-none"
      />
    </div>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

//   useClickOutside(menuRef, handleClickOutside);

  return (
    <div className=" relative w-full h-fit cursor-none ">
      <div className=" px-4 md:px-10 py-5 flex justify-between items-center text-center">
        <div className=" z-0">
          <Link to="/" className=" font-righteous pr-4 pl-2 text-black dark:text-white text-4xl font-bold hover:text-violet-500 dark:hover:text-violet-500 duration-700">
            ak
          </Link>
        </div>

        <div className="flex justify-end">
          <AnimatePresence mode="wait">
            <motion.div
              key={menuOpen ? "close" : "menu"}
              onClick={handleMenuOpen}
              variants={menuButtonVariants}
              whileHover="hover"
              initial="initial"
              animate="animate"
              exit="exit"
              className={` text-black text-2xl font-bold dark:text-white cursor-none p-2 z-50 ${
                menuOpen ? " text-white dark:text-black tracking-tighter" : " "
              }`}
            >
              {menuOpen ? (
                <motion.button
                  className=" relative tracking-widest font-semibold text-black dark:text-white rounded focus:outline-none cursor-none  z-50"
                  whileHover="hover"
                  initial="rest"
                >
                  CLOSE
                  <motion.div
                    className="absolute left-0 bottom-0 w-full h-1 bg-violet-500 "
                    variants={{
                      rest: { scaleX: 0, opacity: 0 },
                      hover: { scaleX: 1, opacity: 1 },
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: "left" }}
                  />
                </motion.button>
              ) : (
                <div className=" -translate-x-5"> |||</div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className=" cursor-none z-0">
          <ThemeToggleButton />
        </div>
      </div>
      <AnimatePresence mode="wait">
        {menuOpen && (
          <div className=" relative" ref={menuRef}>
            <Menu/>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
