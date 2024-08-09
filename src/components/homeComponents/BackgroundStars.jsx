import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useTheme } from "../../context/ThemeContext";

const BackgroundStars = () => {
  const { theme } = useTheme();
  return (
    <div className=" fixed h-screen bg-white dark:bg-black w-screen transition-colors duration-500 -z-50">
      <Canvas>
        <Stars radius={100} count={500} factor={4} fade speed={1} />
      </Canvas>
    </div>
  );
};

export default BackgroundStars;
