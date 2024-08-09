import React from "react";
import { motion } from "framer-motion";

export const RevealLinks = () => {
  return (
    <section className="grid place-content-end text-end items-end px-8 pt-20 text-black dark:text-white">
      <FlipLink href="/about">ABOUT</FlipLink>
      <FlipLink href="/projects">PROJECTS</FlipLink>
      <FlipLink href="/contact">CONTACT</FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.055;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-7xl lg:text-8xl cursor-none"
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
      <div className="absolute inset-0 text-violet-500 dark:text-violet-500">
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


