import React from "react";
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { navdata } from "./index.js";
import { Link } from "react-scroll";

const Navbar = ({ darkMode, isOpen, toggleMenu, toggleTheme }) => {
  return (
    <div className="px-0 2xl:px-40 border-b-[1px] border-gray-500">
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
            {navdata.map((nav) => (
              <li
                key={nav.id}
                // activeClass="active"
                className="cursor-pointer hover:text-blue-500 tracking-wider font-medium duration-300"
              >
                {/* <a href={nav.link}>{nav.title}</a> */}

                <Link
                  activeClass="active"
                  to={nav.link}
                  spy={true}
                  smooth={false}
                  offset={-70}
                  duration={0}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
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
              tracking-wider
              font-medium
            >
              About
            </a>
            <a
              href="#skills"
              onClick={toggleMenu}
              className="cursor-pointer  hover:text-blue-500"
              tracking-wider
              font-medium
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={toggleMenu}
              className="cursor-pointer hover:text-blue-500"
              tracking-wider
              font-medium
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="cursor-pointer hover:text-blue-500"
              tracking-wider
              font-medium
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
