import React from "react";
import { motion } from "framer-motion";

export const RevealLinks = () => {
  return (
    <section className=" flex flex-col gap-5 place-content-end text-start items-start md:text-end md:items-end px-4 md:px-8 pt-20 text-black dark:text-white ">
      <FlipLink href="/">HOME</FlipLink>
      <FlipLink href="/about">ABOUT</FlipLink>
      <FlipLink href="/projects">PROJECTS</FlipLink>
      <FlipLink href="/contact">CONTACT</FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.055;

const FlipLink = ({ children, href }) => {
  const isActive = window.location.pathname === href;

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className={` relative block overflow-hidden whitespace-nowrap font-black uppercase text-5xl sm:text-7xl md:text-8xl lg:text-9xl cursor-none  ${
        isActive ? " text-violet-500 dark:text-violet-500" : " text-black dark:text-white"
      }`}
      style={{
        lineHeight: 0.85,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block "
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div
        className={`absolute inset-0 ${
          isActive ? "" : "text-violet-500 dark:text-violet-500"
        }`}
      >
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
