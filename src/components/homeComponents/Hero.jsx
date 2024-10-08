import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
import HeroImage from "../../assets/images/HeroImage.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const ref = useRef(null);

  const navigate = useNavigate();

  const [showAboutMeButton, setShowAboutMeButton] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xDelayed = useMotionValue(0);
  const yDelayed = useMotionValue(0);

  const buttonX = useMotionValue(0);
  const buttonY = useMotionValue(0);

  // for the image.
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // for the hireme button.
  const buttonXSpring = useSpring(buttonX, { stiffness: 300, damping: 30 });
  const buttonYSpring = useSpring(buttonY, { stiffness: 300, damping: 30 });

  const mouseXDelayedSpring = useSpring(xDelayed, {
    stiffness: 300,
    damping: 30,
  });
  const mouseYDelayedSpring = useSpring(yDelayed, {
    stiffness: 300,
    damping: 30,
  });

  const top = useTransform(mouseYSpring, [-0.5, 0.5], ["20%", "25%"]);
  const left = useTransform(mouseXSpring, [-0.5, 0.5], ["39%", "44%"]);

  const topDelayed = useTransform(
    mouseYDelayedSpring,
    [-0.5, 0.5],
    ["20%", "25%"]
  );
  const leftDelayed = useTransform(
    mouseXDelayedSpring,
    [-0.5, 0.5],
    ["39%", "44%"]
  );

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);

    xDelayed.set(xPct * 0.85); // Slightly reduced value for delay effect
    yDelayed.set(yPct * 0.85); // Slightly reduced value for delay effect

    // Update button position
    buttonX.set(mouseX);
    buttonY.set(mouseY);
  };

  const handleMouseEnter = () => {
    setShowAboutMeButton(true);
  };

  const handleMouseLeave = () => {
    setShowAboutMeButton(false);
  };

  const handleAboutMeClick = () => {
    navigate("/about");
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      className=" relative w-full h-screen flex justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: "-200%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className=" hidden lg:grid lg:grid-cols-12 h-screen absolute w-full"
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="border border-black border-opacity-10 p-4 text-center"
          ></div>
        ))}
      </motion.div>
      <motion.img
        style={{ top, left }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        src={HeroImage}
        // layoutId="heroImage-layoutId"
        className=" absolute z-10  object-cover border border-violet-500 shadow-2xl shadow-black rounded-2xl dark:opacity-75 grayscale h-80 w-auto md:h-96"
      />
      {/* <motion.img
        style={{ top: topDelayed, left: leftDelayed }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        src={HeroImage}
        className=" absolute z-20  object-cover opacity-70 shadow-black rounded-2xl shadow-2xl dark:opacity-60 grayscale h-80 w-auto md:h-96"
      /> */}
      <motion.div
        style={{ top, left }}
        className=" absolute z-50 h-80 w-[290px] md:h-96 max-h-full overflow-hidden items-center rounded-2xl "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleAboutMeClick}
      ></motion.div>
      {showAboutMeButton && (
        <motion.button
          style={{
            top: buttonYSpring,
            left: buttonXSpring,
            transform: "translate(-50%, -50%)",
          }}
          className="absolute z-40 px-3 py-2 uppercase bg-white bg-opacity-60 rounded-full overflow-hidden text-violet-500 font-semibold text-xs"
        >
          About Me
        </motion.button>
      )}
      <motion.div className=" flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className=" flex justify-center items-center text-center "
        >
          <motion.h1 className=" text-shadow font-secondary text-violet-500 z-20 text-8xl md:text-9xl text-center translate-y-44 md:tracking-[50px] tracking-widest font-extrabold translate-x-10">
            AK
          </motion.h1>
          <motion.h1 className=" text-shadow font-secondary text-violet-500 z-20 text-8xl md:text-9xl text-center translate-y-44 md:tracking-[50px] tracking-widest font-extrabold translate-x-10">
            SH
          </motion.h1>
          <motion.h1 className=" text-shadow font-secondary text-violet-500 z-20 text-8xl md:text-9xl text-center translate-y-44 md:tracking-[50px] tracking-widest font-extrabold translate-x-10">
            AY
          </motion.h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, translateY: "200%" }}
          animate={{ opacity: 1, scale: 1, translateY: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <motion.h1 className=" text-shadow font-secondary text-[#252525] dark:text-[white] z-20  text-7xl md:text-8xl text-center translate-y-36 md:tracking-[20px] tracking-widest font-bold translate-x-10">
            kumar
          </motion.h1>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
