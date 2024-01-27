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

        <div className=" text-xs flex text-white flex-row justify-between">
          <div>
            <p className="text-center ml-10">Copyright © 2023 by Alex Pavlyk</p>
          </div>
          <div>
            <p className="text-center mr-10">All right reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
