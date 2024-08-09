import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const [circles, setCircles] = useState(
    Array.from({ length: 18 }, () => ({ x: 0, y: 0 }))
  );
  const coords = useRef({ x: 0, y: 0 });
  const frameRef = useRef(null);

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      coords.current = {
        x: e.clientX + window.scrollX,
        y: e.clientY + window.scrollY,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(true);
      clearTimeout(frameRef.current);
      frameRef.current = setTimeout(() => setScrolling(false), 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(frameRef.current);
    };
  }, []);

  useEffect(() => {
    const animateCircles = () => {
      setCircles((prevCircles) => {
        const newCircles = prevCircles.map((circle, index) => {
          const nextCircle = prevCircles[index + 1] || coords.current;
          const dx = (nextCircle.x - circle.x) * 0.8;
          const dy = (nextCircle.y - circle.y) * 0.8;

          return {
            x: circle.x + dx,
            y: circle.y + dy,
          };
        });
        return newCircles;
      });

      frameRef.current = requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <div
      className={` fixed inset-0 z-0 w-full h-full ${
        scrolling ? "cursor-none" : ""
      }`}
    >
      {circles.map((circle, index) => (
        <div
          key={index}
          className="circle h-6 w-6 absolute rounded-3xl pointer-events-none bg-black dark:bg-white"
          style={{
            left: `${circle.x - 12}px`,
            top: `${circle.y - 12}px`,
            transform: `scale(${index / circles.length})`,
            transition: "transform 0.1s linear",
          }}
        ></div>
      ))}
    </div>
  );
};

export default CustomCursor;
