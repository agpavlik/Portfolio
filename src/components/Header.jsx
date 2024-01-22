import React, { Suspense } from "react";
import { Mongodb, NodeJS, Profile, ReactJS, Redux } from "../assets";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Tablet from "./Tablet";

const Header = () => {
  return (
    <section id="home" className="px-0 lg:px-5 2xl:px-40 py-10 lg:py-0">
      <div className="w-full flex flex-col lg:flex-row px-4 md:px-10 gap-10 2xl:gap-20 py-20">
        {/* ===== Left part start ===== */}
        <div
          className="flex flex-col mb-20 lg:mb-0"
          data-aos="fade-down"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <span className="text-lg font-bold text-orange-700">
            FULL-STACK DEVELOPER
          </span>
          <div className="flex gap-4 items-center my-4">
            <h1 className="text-gray-800 dark:text-neutral-100 text-4xl md:text-5xl 2xl:text-7xl font-bold text-center">
              ALEX PAVLYK
            </h1>
            <div className="flex item-center justify-center text-white shadow-lg bg-blue-800 dark:bg-[#224cff10] dark:text-[#224cff] rounded-full">
              <p className="text-3xl 2xl:text-5xl font-bold px-5 py-2 pb-2 text-center">
                Developer
              </p>
            </div>
          </div>
          <h1 className="text-5xl 2xl:text-7xl font-extrabold text-black dark:text-neutral-100 tracking-wider">
            DEVELOPER
          </h1>
          <p className="text-md text-black dark:text-gray-100 mt-5 2xl:mt-10">
            Full-Stack Web Developer with ability to learn and collaborate in
            rapidly changing environments and compositions
          </p>
          <div className="mt-10 flex gap-10">
            <button className="bg-orange-700 text-lg text-white font-semibold rounded-md py-3 px-5 hover:bg-orange-900 easi-in duration-300">
              RESUME
            </button>
            <a href="#projects">
              <button className="text-lg text-white font-semibold rounded-md py-3 px-5 bg-black dark:bg-[#224cff10]">
                Projects
              </button>
            </a>
          </div>
        </div>
        {/* ===== Left part end ===== */}

        {/* ===== Right part start ===== */}
        <div className="w-full flex-1 flex justify-center">
          <div className="w-[200px] h-[300px] md:w-[300px] md:h-[400px] 2xl:w-[400px] 2xl:h-[500px] relative md:mt-20 lg:mt-0 flex items-center justify-center">
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
            {/* <div
              className="relative w-full h-full rounded-full"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            ></div> */}
          </div>
        </div>
        {/* ===== Right part end ===== */}
      </div>
    </section>
  );
};

export default Header;
