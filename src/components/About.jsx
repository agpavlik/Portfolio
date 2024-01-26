import React from "react";
import { Profile } from "../assets";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaGithubSquare } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="w-full px-0 lg:px-5 2xl:px-40 pt-5 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#030a1c] to-[#05174e]"
    >
      <div className="w-full flex flex-col lg:flex-row px-8 gap-10 lg:gap-20 lg:py-10 border-b-[1px] border-gray-500">
        <div className="w-full md:h-[290px] lg:w-11/12 flex flex-col items-center bg-white border border-gray-500 rounded-md">
          <img
            src={Profile}
            alt=""
            className="h-[290px] p-1 rounded-md ease-in-out duration-300 hover:scale-125"
          />
        </div>
        <div className="w-full flex flex-col">
          <p className="text-3xl font-bold text-black dark:text-white pb-4">
            About Me
          </p>
          <p className="text-lg text-black dark:text-gray-400 leading-10">
            Full-Stack Web Developer with ability to learn and collaborate in
            rapidly changing environments and compositions. Worked through hours
            of bootcamp structure, learning JavaScript, NodeJs, ReactJs, NextJs
            and TypeScript. Eager to tackle web development/design challenges to
            achieve lasting impacts on user experience. Full-Stack Web Developer
            with ability to learn and collaborate in rapidly changing
            environments and compositions. Worked through hours of bootcamp
            structure, learning JavaScript.
          </p>
        </div>

        {/* ----- Set of buttons start----- */}
        <div
          className="mt-5 2xl:mt-10 flex items-center justify-center flex-wrap gap-10"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <a
            href="https://www.linkedin.com/in/alex-pavlyk/"
            className="h-[40px] flex gap-3 items-center justify-center rounded-[5px] shadow-lg bg-[#030a1c] text-white cursor-pointer hover:bg-blue-800"
          >
            <RxLinkedinLogo size={40} color={"white"} hover={50} />
          </a>
          <a
            href="https://github.com/agpavlik"
            className="h-[40px] flex gap-3 items-center justify-center rounded-[5px] shadow-lg bg-[#030a1c] text-white cursor-pointer hover:bg-blue-800"
          >
            <FaGithubSquare size={40} />
          </a>
          <button className="hover:shadow-[0_0_10px_5px_orange] h-[40px] bg-orange-800 text-lg text-white font-semibold rounded-md py-2 px-5 hover:bg-orange-600 easi-in duration-300">
            RESUME
          </button>
        </div>
        {/* ----- Set of buttons end----- */}
      </div>
    </section>
  );
}

export default About;
