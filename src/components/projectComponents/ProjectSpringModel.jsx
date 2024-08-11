import { AnimatePresence, motion } from "framer-motion";

export const ProjectSpringModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className=" text-white w-11/12  md:w-10/12 h-5/6 shadow-xl cursor-default relative overflow-hidden"
          >
            <div className=" h-full w-full z-10  rounded-xl md:grid md:grid-flow-col md:grid-cols-3 md:overflow-hidden overflow-y-auto">
              <div className=" w-full h-5/6 md:h-full flex-shrink-0 dark:bg-neutral-800 bg-white flex flex-col justify-between text-black dark:text-white p-8">
                <div className=" flex flex-col gap-5">
                  <h1 className=" font-secondary text-xl md:text-3xl">
                    Fongard
                  </h1>
                  <p>
                    Developed the Onsitego project, a comprehensive service
                    management platform that streamlines repair requests and
                    warranty services, enhancing user experience with efficient
                    tracking and support features.
                  </p>
                </div>
                <div className=" flex flex-col gap-3">
                  <p>
                    <span className=" font-semibold text-opacity-25 text-black dark:text-white">
                      Year:{" "}
                    </span>{" "}
                    2024
                  </p>
                  <p>
                    <span className=" font-semibold text-opacity-25 text-black dark:text-white">
                      Contribution:{" "}
                    </span>{" "}
                    Designed Developed Deployed
                  </p>
                </div>
              </div>
              <div className=" w-full md:h-full h-5/6 flex-shrink-0 bg-violet-300"></div>
              <div className=" w-full md:h-full h-5/6 flex-shrink-0 dark:bg-neutral-800 bg-white"></div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
