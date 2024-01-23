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

  return (
    <section
      id="projects"
      className="w-full px-0 lg:px-5 2xl:px-40 py-10 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#030a1c] to-[#05174e]"
    >
      <div className="w-full flex flex-col py-5 px-8 md:px-10 gap-10 lg:gap-10">
        <h4 className="text-3xl font-bold text-black dark:text-white mt-10 ">
          My recent Projects
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
              className="group w-[350px] h-[250px] cursor-pointer shadow-2xl hover:scale-110 ease-in-out duration-300 rounded-md z-[1]"
            >
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-[250px] object-cover rounded-md "
              />

              <div
                onClick={() => showModalHandler(project.id)}
                className="w-full h-full bg-blue-800 bg-opacity-70 absolute top-0 left-0 z-[5] hidden group-hover:block rounded-md 
              "
              >
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <div className="text-2xl text-white font-[700] my-5">
                    <h2>{project.title}</h2>
                  </div>

                  <button className="text-white bg-[#04133e] hover:bg-blue-800 py-2 px-2 rounded-[20px] ease-in duration-200">
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
