import React from "react";
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { GoHome } from "react-icons/go";

const Navbar = ({ darkMode, isOpen, toggleMenu, toggleTheme }) => {
  return (
    <div className="px-0 2xl:px-40 border-b-[1px] border-gray-600">
      <div className="w-full items-center justify-between py-4 px-10">
        <div className="flex items-center justify-between w-full">
          {/*===== Home icon start =====*/}
          <a
            href="#home"
            className="text-2xl font-bold text-blue-500 cursor-pointer"
          >
            <GoHome
              className={`${darkMode ? "text-white" : "text-blue-500"}`}
            />
          </a>
          {/*===== Home icon end =====*/}

          {/*===== Menu start=====*/}
          <ul className="hidden md:flex gap-10 text-lg text-slate-800 dark:text-gray-200">
            {/* <li className="cursor-pointer hover:text-blue-500 ">
              <a href="#home">Home</a>
            </li> */}
            <li className="cursor-pointer hover:text-blue-500">
              <a href="#about">About</a>
            </li>

            <li className="cursor-pointer hover:text-blue-500">
              <a href="#skills">Skills</a>
            </li>
            <li className="cursor-pointer hover:text-blue-500">
              <a href="#projects">Projects</a>
            </li>
            <li className="cursor-pointer hover:text-blue-500">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          {/*===== Menu end =====*/}

          {/*===== Dark mode button start =====*/}
          <button onClick={toggleTheme} className="p-2">
            {darkMode ? (
              <FiSun size={20} color={"white"} />
            ) : (
              <IoMoonOutline size={20} color={"#3b82f6"} />
            )}
          </button>
          {/*===== Dark mode button end =====*/}

          {/*===== Mobile menu icon start =====*/}
          <div className="md:hidden">
            <button
              type="button"
              className=""
              aria-controls=",online-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <BiMenu
                size={26}
                className={`${
                  isOpen ? "hidden" : "block"
                } text-gray-700 dark:text-white`}
              />
              <AiOutlineClose
                size={24}
                className={`${
                  isOpen ? "block" : "hidden"
                } h-6 w-6 dark:text-gray-200`}
              />
            </button>
          </div>
          {/*===== Mobile menu icon end =====*/}
        </div>
        {/*===== Mobile menu start=====*/}
        <div
          className={`${isOpen ? "block pt-4" : "hidden"} md:hidden`}
          id="mobile-menu"
        >
          <div className="flex flex-col gap-4 text-md text-gray-700 dark:text-neutral-200">
            <a
              href="#about"
              onClick={toggleMenu}
              className="cursor-pointer  hover:text-blue-500"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={toggleMenu}
              className="cursor-pointer  hover:text-blue-500"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={toggleMenu}
              className="cursor-pointer hover:text-blue-500"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="cursor-pointer hover:text-blue-500"
            >
              Contact
            </a>
          </div>
        </div>
        {/*===== Mobile menu end=====*/}
      </div>
    </div>
  );
};

export default Navbar;
