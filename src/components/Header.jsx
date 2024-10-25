import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Tablet from "./Tablet";
import { FaGithubSquare } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";

const Header = () => {
  return (
    <section id="home" className="px-0 lg:px-5 2xl:px-40 pt-20 lg:py-0">
      <div className="w-full flex flex-col lg:flex-row px-8 gap-10 2xl:gap-20 py-20 border-b-[1px] border-gray-500">
        {/* ===== Left part start ===== */}
        <div
          className="flex flex-col justify-center mt-10"
          // data-aos="fade-down"
          // data-aos-offset="100"
          // data-aos-delay="50"
          // data-aos-duration="1000"
          // data-aos-easing="ease-in-out"
        >
          <div className="flex gap-4 items-center mt-30">
            <h1
              data-aos="fade-down"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="text-slate-800 dark:text-gray-100 text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-center mb-4"
            >
              ALEX PAVLYK
            </h1>
          </div>
          <h1
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="text-2xl 2xl:text-4xl font-bold text-blue-600 tracking-wider"
          >
            FULL-STACK DEVELOPER
          </h1>
          <p
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="text-lg text-black dark:text-gray-200 mt-5 2xl:mt-10 mr-10"
          >
            Versatile full-stack developer with a proactive approach to learning
            and collaboration in rapidly changing environments, dedicated to
            crafting engaging digital compositions.
          </p>
          <div className="mt-10 flex gap-10">
            <div className=" flex items-center justify-center flex-wrap gap-10">
              <a
                href="https://www.linkedin.com/in/opavlyk/"
                target="_blank"
                rel="noreferrer"
                className="h-[40px] flex gap-3 items-center justify-center rounded-[5px] shadow-lg bg-slate-950 cursor-pointer hover:bg-blue-600"
              >
                <RxLinkedinLogo size={40} color={"white"} />
              </a>
              <a
                href="https://github.com/agpavlik"
                target="_blank"
                rel="noreferrer"
                className="h-[40px] flex gap-3 items-center justify-center rounded-[5px] shadow-lg bg-slate-950 text-white cursor-pointer hover:bg-blue-600"
              >
                <FaGithubSquare size={40} />
              </a>
            </div>
          </div>
        </div>
        {/* ===== Left part end ===== */}

        {/* ===== Right part - 3d model - start ===== */}
        <div className="w-full flex-1 flex justify-center">
          <div className="w-[250px] h-[300px] md:w-[350px] md:h-[400px] lg:w-[400px] lg:h-[500px] relative md:mt-20 lg:mt-0 flex items-center justify-center">
            <Canvas>
              <Suspense fallback={null}>
                <Stage environment="city" intensity={0.8}>
                  <Tablet />
                </Stage>
                <OrbitControls
                  enableZoom={false}
                  autoRotate
                  autoRotateSpeed={5}
                />
              </Suspense>
            </Canvas>
          </div>
        </div>
        {/* ===== Right part end ===== */}
      </div>
    </section>
  );
};

export default Header;
