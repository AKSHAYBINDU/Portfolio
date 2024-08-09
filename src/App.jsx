import { AnimatePresence,motion } from "framer-motion";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import CustomCursor from "./components/CustomCursor";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import PreLoader from "./components/Preloader";
import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  useEffect(() => {
    setLoading(true); // Set loading true when location changes
  }, [location]);

  const getLettersForPath = (path) => {
    switch (path) {
      case "/":
        return "NAMASTE".split("");
      case "/about":
        return "ABOUTME".split("");
      case "/contact":
        return "CONTACT".split("");
      case "/projects":
        return "PROJECT".split("");
      default:
        return "NAMASTE".split("");
    }
  };

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div key="model" className=" w-screen h-screen">
          <PreLoader
            isVisible={loading}
            letters={getLettersForPath(location.pathname)}
          />
        </motion.div>
      ) : (
        <>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <CustomCursor />
        </>
      )}
    </AnimatePresence>
  );
};

export default App;
