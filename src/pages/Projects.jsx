import Navbar from "../components/Navbar";
import { ProjectHoverLinks } from "../components/projectComponents/ProjectHoverLinks";

import ScrollingText from "../components/ScrollingText";

const Projects = () => {
  return (
    <div className="  w-screen h-auto md:min-h-screen relative cursor-none scrollbar-hidden overflow-hidden dark:bg-black bg-white">
      <div className="w-full z-30 fixed bg-white dark:bg-black md:bg-transparent md:dark:bg-transparent md:absolute">
        <Navbar />
      </div>
      <section className=" md:absolute min-h-screen w-full mt-28">
        <h1 className=" text-xl md:text-xl text-black dark:text-white font-bold mx-6 md:mx-28">
          Selected Projects
        </h1>
        <div className=" mx-6 md:mx-28">
          <ProjectHoverLinks />
        </div>
      </section>
      <div className=" mt-2">
        <ScrollingText text="PROJECTS" />
      </div>
    </div>
  );
};

export default Projects;
