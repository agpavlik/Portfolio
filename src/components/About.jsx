import React from "react";
import { Profile } from "../assets";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaGithubSquare } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="w-full px-0 lg:px-5 2xl:px-40 pt-5 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#05174e] via-[#030a1c] to-[#05174e]"
    >
      <div className="w-full flex flex-col lg:flex-row px-8 gap-10 lg:gap-20 pt-10 pb-20 border-b-[1px] border-gray-500">
        <div className="w-full h-[250px] lg:w-8/12 flex flex-col items-center bg-white border border-gray-500 rounded-md">
          <img
            src={Profile}
            alt=""
            className="h-[250px] p-1 rounded-md ease-in-out duration-300 hover:scale-125"
          />
        </div>
        <div className="w-full flex flex-col">
          <p className="text-3xl font-bold text-black dark:text-gray-100 pb-4">
            About Me
          </p>
          <p className="text-lg text-black dark:text-gray-200 leading-10 text-justify">
            Front-end developer with a commitment to continuous professional
            development. I am a self-motivated, organized, and goal-oriented
            person with ability to learn and collaborate in rapidly changing
            environments. I am passionate about creating intuitive web
            applications and enjoy diving into new engrossing projects. My
            background in business analysis, banking, and property appraisal
            gives me a splendid combination of skills and knowledge, enabling me
            to take a holistic approach to challenges. Eager to tackle web
            development tasks to achieve lasting impacts on user experience.
          </p>
        </div>

        {/* ----- Set of buttons start----- */}
        <div
          className="mt-5 2xl:mt-10 flex items-center justify-center flex-wrap gap-20 flex-row lg:flex-col"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <a
            href="https://www.linkedin.com/in/alex-pavlyk/"
            target="_blank"
            rel="noreferrer"
            className="h-[40px] flex gap-3 items-center justify-center rounded-[5px] shadow-lg bg-slate-950 text-white cursor-pointer hover:bg-blue-600"
          >
            <RxLinkedinLogo size={40} color={"white"} hover={50} />
          </a>
          <a
            href="https://github.com/agpavlik"
            target="_blank"
            rel="noreferrer"
            className="h-[40px] flex gap-3 items-center justify-center rounded-[5px] shadow-lg bg-slate-950 text-white cursor-pointer hover:bg-blue-600"
          >
            <FaGithubSquare size={40} />
          </a>
          {/* hover:shadow-[0_0_10px_5px_orange] */}
          <button className="leading-3 h-[40px] bg-orange-700 text-lg text-gray-100 border-2 border-gray-100 font-semibold rounded-md py-2 px-5 hover:bg-white hover:border-orange-700 hover:text-orange-700 cursor-pointer easi-in duration-300">
            <a
              href="https://flowcv.com/resume/95vgl16kej"
              target="_blank"
              rel="noreferrer"
            >
              RESUME
            </a>
          </button>
        </div>
        {/* ----- Set of buttons end----- */}
      </div>
    </section>
  );
}

export default About;
