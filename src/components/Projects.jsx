import React from "react";
import { projects } from "../data";

function Projects() {
  return (
    <section
      id="projects"
      className="w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#030a1c] to-[#05174e]"
    >
      <div className="w-full flex flex-col py-20 px-8 md:px-10 gap-10 lg:gap-20 lg:py-20">
        <h4 className="text-3xl font-bold text-black dark:text-white mt-10 ">
          My recent projects
        </h4>

        <div className="flex flex-wrap gap-10 lg:gap-20 justify-center ">
          {projects.map((p, index) => (
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              key={index}
              className="group w-[350px] h-[300px] cursor-pointer shadow-xl hover:scale-110 ease-in-out duration-300 rounded-md z-[1]"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-[250px] object-cover rounded-md "
              />

              <div className="w-full h-[50px] bg-white dark:bg-[#04133e] rounded-md">
                <h4 className="text-2xl text-black dark:text-white font-semibold py-2 text-center ">
                  {p.title}
                </h4>
              </div>
              <div className="w-full h-full bg-blue-800 bg-opacity-60 absolute top-0 left-0 z-[5] hidden group-hover:block rounded-md"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
