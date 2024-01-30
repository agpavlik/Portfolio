import React from "react";

function Footer() {
  return (
    <footer className="px-0">
      <div className="w-full flex flex-col py-5 px-4 gap-2.5 justify-center ">
        <div className="flex flex-row text-sm gap-5 text-white justify-center ">
          <a href="#home" className="cursor-pointer  hover:text-blue-500">
            Home
          </a>
          <a href="#about" className="cursor-pointer  hover:text-blue-500">
            About
          </a>
          <a href="#skills" className="cursor-pointer  hover:text-blue-500">
            Skills
          </a>
          <a href="#projects" className="cursor-pointer  hover:text-blue-500">
            Projects
          </a>
          <a href="#contact" className="cursor-pointer  hover:text-blue-500">
            Contact
          </a>
        </div>

        <div className=" text-xs flex text-white md:flex-row xs:flex-col justify-between">
          <div>
            <p className="text-center sm:ml-2 lg:ml-10">
              Copyright © 2023 Alex Pavlyk
            </p>
          </div>
          <div>
            <p className="text-center sm:mr-2 lg:mr-20">
              Built using React & Tailwind by Alex Pavlyk
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
