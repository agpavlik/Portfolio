import React from "react";

function Footer() {
  return (
    <footer className="px-4 border-t-[1px] border-gray-600">
      <div className="w-full flex flex-col py-5 px-8 gap-2.5 justify-center ">
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

        <div className=" text-xs flex text-white flex-row justify-between">
          <div>
            <p>@ 2023 ALL RIGHTS RESERVED</p>
          </div>
          <div>
            <p>DEVELOPED BY ALEX_PAVLYK</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
