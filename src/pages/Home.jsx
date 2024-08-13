import BackgroundStars from "../components/homeComponents/BackgroundStars";
import Hero from "../components/homeComponents/Hero";
import HeroPhone from "../components/homeComponents/HeroPhone";
import TimeComponent from "../components/homeComponents/TimeComponent";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className=" relative cursor-none ">
      <div className=" absolute -z-50">
        <BackgroundStars />
      </div>
      <div className="w-full z-30 fixed">
        <Navbar />
      </div>
      <div className="relative z-10 w-full sm:block hidden">
        <Hero />
      </div>
      <div className=" absolute z-10 w-full h-screen md:hidden overflow-hidden">
        <HeroPhone/>
      </div>
      <div className=" bottom-0 w-full h-fit fixed">
        <div className=" flex justify-between mx-3 md:mx-5">
          <div className=" md:mx-10 mx-4 mb-4 md:mb-10">
            <h1 className=" text-black dark:text-white text-xs font-bold font-orbitron tracking-widest">
              <span className=" text-violet-500 text-xs font-bold tracking-widest font-orbitron">
                CREATIVE
              </span>{" "}
              WEB DEVELOPER
            </h1>
          </div>
          <div className=" md:mx-10 mr-4 mb-4 md:mb-10">
            <TimeComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
