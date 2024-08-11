import { useRef, useState } from "react";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import TypeWriter from "../../assets/images/TypeWriter.png";
import HintImage from "../../assets/images/HintImage.png";
import { ProjectSpringModal } from "./ProjectSpringModel";

export const ProjectHoverLinks = () => {
  return (
    <section className=" ">
      <div className="">
        <Link
          heading="HINT"
          subheading="Learn what we do here"
          imgSrc={HintImage}
          href="#"
        />
        <Link
          heading="FONGARD"
          subheading="Your Mobile Protection Partner"
          imgSrc={TypeWriter}
          href="#"
        />
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

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
  };

  return (
    <>
      <motion.a
        href={href}
        ref={ref}
        onMouseMove={handleMouseMove}
        initial="initial"
        whileHover="whileHover"
        onClick={() => setIsOpen(true)}
        className="group z-10 relative flex items-center justify-between border-b-2 border-neutral-700 py-1 sm:py-4 transition-colors duration-500 hover:border-violet-500 md:py-8"
      >
        <div>
          <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: -16 },
            }}
            transition={{
              type: "spring",
              staggerChildren: 0.075,
              delayChildren: 0.25,
            }}
            className="relative z-10 block text-2xl sm:text-4xl font-bold text-black text-opacity-70 dark:text-neutral-500 transition-colors duration-500 group-hover:text-violet-500 md:text-6xl"
          >
            {heading.split("").map((l, i) => (
              <motion.span
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: 16 },
                }}
                transition={{ type: "spring" }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </motion.span>
          <span className="relative z-10 mt-2 block  text-xs sm:text-base text-neutral-500 transition-colors duration-500 group-hover:text-violet-500 ">
            {subheading}
          </span>
        </div>

        <motion.img
          style={{
            top,
            left,
            translateX: "-75%",
            translateY: "-50%",
          }}
          variants={{
            initial: { scale: 0 },
            whileHover: { scale: 1 },
          }}
          transition={{ type: "easeOut" }}
          src={imgSrc}
          className="absolute h-24 w-32 object-cover md:h-96 md:w-72 rounded-3xl"
          alt={`Image representing a link for ${heading}`}
        />

        <motion.div
          variants={{
            initial: {
              x: "25%",
              opacity: 0,
            },
            whileHover: {
              x: "0%",
              opacity: 1,
            },
          }}
          transition={{ type: "spring" }}
          className="relative z-10 p-4  block"
        >
          <svg
            className=" dark:fill-violet-500"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className=" fill-violet-500 dark:fill-violet-500"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.7323 10.7322C31.7085 9.75593 33.2915 9.75593 34.2677 10.7322L51.7677 28.2323C52.744 29.2085 52.744 30.7915 51.7677 31.7677L34.2677 49.2677C33.2915 50.244 31.7085 50.244 30.7323 49.2677C29.756 48.2915 29.756 46.7085 30.7323 45.7323L43.9645 32.5H10C8.6193 32.5 7.5 31.3807 7.5 30C7.5 28.6193 8.6193 27.5 10 27.5H43.9645L30.7323 14.2678C29.756 13.2914 29.756 11.7086 30.7323 10.7322Z"
              fill="black"
            />
          </svg>
        </motion.div>
      </motion.a>
      <ProjectSpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
