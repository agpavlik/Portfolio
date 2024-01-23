import React from "react";

function Footer() {
  return (
    <footer className="px-4 border-t-[1px] border-gray-600">
      <div className="w-full flex flex-col py-8 px-8 gap-5 justify-center ">
        <div className="flex flex-row text-sm gap-5 text-white justify-center ">
          <a href="#home" className="cursor-pointer  hover:text-blue-500">
            HOME
          </a>
          <a href="#about" className="cursor-pointer  hover:text-blue-500">
            ABOUT
          </a>
          <a href="#skills" className="cursor-pointer  hover:text-blue-500">
            SKILLS
          </a>
          <a href="#projects" className="cursor-pointer  hover:text-blue-500">
            PROJECTS
          </a>
          <a href="#contact" className="cursor-pointer  hover:text-blue-500">
            CONTACT
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
