import React, { useState } from "react";
import { projects } from "../data";
import Modal from "./Modal";
import { PiArrowSquareOutBold } from "react-icons/pi";

function Projects() {
  // Open/close Modal window
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  // bg-gradient-to-r from-blue-800 to-blue-800 opacity-70 hover:bg-[length:100%_100%] bg-[length:0_100%] bg-no-repeat ease-in duration-300

  return (
    <section
      id="projects"
      className="w-full px-0 lg:px-5 2xl:px-40 pt-5 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#05174e] via-[#030a1c] to-[#05174e]"
    >
      <div className="w-full flex flex-col pt-5 pb-20 px-8 gap-10 border-b-[1px] border-gray-500">
        <h4 className="text-3xl font-bold text-black dark:text-gray-100">
          My recent projects
        </h4>

        <div className="flex flex-wrap gap-5 lg:gap-10 justify-center ">
          {projects.map((project, index) => (
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              key={index}
              className="group w-[400px] sm:h-[200px] md:h-[300px] cursor-pointer shadow-2xl hover:scale-110 ease-in-out duration-300 rounded-md z-[1]"
            >
              <img
                src={project.img}
                alt={project.name}
                className="w-full sm:h-[200px] md:h-[300px] object-cover rounded-md "
              />

              <div
                onClick={() => showModalHandler(project.id)}
                className="w-full h-full hover:bg-blue-800 opacity-70 absolute top-0 left-0 z-[5] hidden group-hover:block rounded-md duration-300
              "
              >
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <div className="text-2xl text-white font-[700] my-5">
                    <h2>{project.title}</h2>
                  </div>

                  <button className="text-white hover:bg-blue-800 py-2 px-2 rounded-[20px] ease-in duration-200">
                    <PiArrowSquareOutBold size={20} color={"white"} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
    </section>
  );
}

export default Projects;
