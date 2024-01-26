import React, { useEffect, useState } from "react";
import { skills } from "../data";

function Skills() {
  // Select skills by category
  const [techSkills, setTechSkills] = useState(skills);
  const [selectTab, setSelectTab] = useState("all");

  useEffect(() => {
    if (selectTab === "all") {
      setTechSkills(skills);
    }

    if (selectTab === "language") {
      const filteredData = skills.filter(
        (item) => item.category === "language"
      );
      setTechSkills(filteredData);
    }
    if (selectTab === "frontend") {
      const filteredData = skills.filter(
        (item) => item.category === "frontend"
      );
      setTechSkills(filteredData);
    }
    if (selectTab === "backend") {
      const filteredData = skills.filter((item) => item.category === "backend");
      setTechSkills(filteredData);
    }
    if (selectTab === "library") {
      const filteredData = skills.filter((item) => item.category === "library");
      setTechSkills(filteredData);
    }
    if (selectTab === "design") {
      const filteredData = skills.filter((item) => item.category === "design");
      setTechSkills(filteredData);
    }
    if (selectTab === "testing") {
      const filteredData = skills.filter((item) => item.category === "testing");
      setTechSkills(filteredData);
    }
    if (selectTab === "tool") {
      const filteredData = skills.filter((item) => item.category === "tool");
      setTechSkills(filteredData);
    }
  }, [selectTab]);

  return (
    <section
      id="skills"
      className="w-full h-full px-0 lg:px-5 2xl:px-40 py-5 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#05174e] to-[#030a1c]"
    >
      <div className="w-full h-auto flex flex-col py-10 px-8">
        {/* ----- Set of buttons for selection start -----*/}
        <div className="flex items-center justify-between flex-wrap mb-10">
          <div>
            <h4 className="text-3xl font-bold text-black dark:text-white mb-10 text-center">
              My Skill Set
            </h4>
          </div>
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => setSelectTab("all")}
              className="text-white bg-[#04133e] hover:bg-blue-800 focus:bg-blue-800 text-sm border border-solid border-white py-1 px-4 rounded-[8px]"
            >
              All
            </button>
            <button
              onClick={() => setSelectTab("language")}
              className=" text-white bg-[#04133e] hover:bg-blue-800 focus:bg-blue-800 text-sm border border-solid border-white py-1 px-4 rounded-[8px]"
            >
              Languages
            </button>
            <button
              onClick={() => setSelectTab("frontend")}
              className="text-white bg-[#04133e] hover:bg-blue-800 focus:bg-blue-800 text-sm border border-solid border-white py-1 px-4 rounded-[8px]"
            >
              Frontend
            </button>
            <button
              onClick={() => setSelectTab("backend")}
              className="text-white bg-[#04133e] hover:bg-blue-800 focus:bg-blue-800 text-sm border border-solid border-white py-1 px-4 rounded-[8px]"
            >
              Backend
            </button>
            <button
              onClick={() => setSelectTab("design")}
              className="text-white bg-[#04133e] hover:bg-blue-800 focus:bg-blue-800 text-sm border border-solid border-white py-1 px-4 rounded-[8px]"
            >
              Design
            </button>
            <button
              onClick={() => setSelectTab("library")}
              className="text-white bg-[#04133e] hover:bg-blue-800 focus:bg-blue-800 text-sm border border-solid border-white py-1 px-4 rounded-[8px]"
            >
              Useful libraries
            </button>
            <button
              onClick={() => setSelectTab("testing")}
              className="text-white bg-[#04133e] hover:bg-blue-800 focus:bg-blue-800 text-sm border border-solid border-white py-1 px-4 rounded-[8px]"
            >
              Testing
            </button>
            <button
              onClick={() => setSelectTab("tool")}
              className="text-white bg-[#04133e] hover:bg-blue-800 focus:bg-blue-800 text-sm border border-solid border-white py-1 px-4 rounded-[8px]"
            >
              Tools
            </button>
          </div>
        </div>
        {/* ----- Set of buttons for selection end -----*/}

        {/* ----- Skills rendering startv----- */}
        <div className="w-full flex flex-wrap gap-10 items-center justify-center">
          {techSkills.map((skill, index) => (
            <div
              key={index}
              className="flex gap-4 shadow-2xl py-2 px-6 bg-white rounded-full items-center hover:animate-bounce ease-in-out duration-3 00"
              data-aos="zoom-in-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="w-10 h-10">
                <a href={skill.url}>
                  <img src={skill.icon} className="w-full h-full" alt="" />
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <p className="text-md font-semibold text-black ">
                    {skill.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* ----- Skills rendering end ----- */}

        {/* <div className="mt-[10rem] ">
          <h4 className="text-3xl font-bold text-black dark:text-white mb-14 text-center">
            Soft Skills
          </h4>

          <div className="flex flex-col md:flex-row gap-16 items-center justify-center">
            <div className="flex flex-col bg-[#000000] dark:bg-[#224cff10] p-6 rounded-xl shadow-xl scale-110 hover:scale-125 ease-in-out duration-500 mb-10 md:mb-0">
              {softskills.slice(0, 5).map((s, index) => (
                <div key={index + s} className="flex items-center gap-3 p-4">
                  <BsCheck2All color="white" size={22} />
                  <p className="text-white">{s}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col bg-[#000000] dark:bg-[#224cff10] p-6 rounded-xl shadow-xl scale-110 hover:scale-125 ease-in-out duration-500 mb-10 md:mb-0">
              {softskills.slice(5, 10).map((s, index) => (
                <div key={index + s} className="flex items-center gap-3 p-4">
                  <BsCheck2All color="white" size={22} />
                  <p className="text-white">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Skills;
