import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { ImMail } from "react-icons/im";

function Contact() {
  return (
    <section
      id="contact"
      className="w-full px-0 lg:px-5 2xl:px-40 py-20 dark:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#05174e] via-[#030a1c] to-[#05174e]"
    >
      <div className="w-full flex flex-col px-8 md:px-10 gap-10 py-5 ">
        <div className="sm:w-full lg:w-1/2 flex flex-col">
          <p className="text-3xl font-bold text-black dark:text-gray-100 pb-4">
            Get in Touch
          </p>
          <p className="text-lg text-black dark:text-gray-200 leading-10">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas, or opportunities to be a part of your
            visions.
          </p>
        </div>

        {/* ----- Set of buttons start----- */}
        <div
          className="lg:w-1/2 sm:w-full mt-5 2xl:mt-10 flex items-center justify-center flex-wrap gap-20"
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
            className="flex gap-4"
          >
            <span className="bannerIcon">
              <FaLinkedin size={60} />
            </span>
          </a>
          <a
            href="https://github.com/agpavlik"
            target="_blank"
            rel="noreferrer"
            className="flex gap-4"
          >
            <span className="bannerIcon">
              <FaGithubSquare size={60} />
            </span>
          </a>
          <a
            href=" ..."
            target="_blank"
            rel="noreferrer"
            className="flex gap-4"
          >
            <span className="bannerIcon">
              <FaDiscord size={50} />
            </span>
          </a>
          <a
            href=" ..."
            target="_blank"
            rel="noreferrer"
            className="flex gap-4"
          >
            <span className="bannerIcon">
              <ImMail size={54} />
            </span>
          </a>
        </div>
        {/* ----- Set of buttons end----- */}
      </div>
    </section>
  );
}

export default Contact;
