import React from "react";
import { Profile } from "../assets";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#030a1c] to-[#05174e]"
    >
      <div className="w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 lg:gap-20 lg:py-20 ">
        <div className="w-full md:h-[290px] lg:w-1/3 flex flex-col items-center border border-gray-500 dark:bg-transparent rounded-md">
          <img
            src={Profile}
            className="h-[290px] p-1 rounded-md ease-in-out duration-300 hover:scale-125"
          />
        </div>
        <div className="w-full flex flex-col">
          <p className="text-3xl font-bold text-black dark:text-white">
            About Me
          </p>
          <p className="text-lg text-black dark:text-gray-400 leading-10">
            Full-Stack Web Developer with ability to learn and collaborate in
            rapidly changing environments and compositions. Worked through hours
            of bootcamp structure, learning JavaScript, NodeJs, ReactJs, NextJs
            and TypeScript. Eager to tackle web development/design challenges to
            achieve lasting impacts on user experience.
          </p>
        </div>
        <div
          className="mt-5 2xl:mt-10 flex flex-wrap gap-5"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <p className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer">
            <FaUserAlt size={14} /> Alex Pavlyk
          </p>
          <p className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer">
            <MdOutlineAlternateEmail size={20} /> olekpavlyk@gmail.com
          </p>
          <a
            href="https://www.linkedin.com/in/alex-pavlyk/"
            className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>
          <a
            href="https://github.com/agpavlik"
            className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer"
          >
            <FaGithub size={20} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
