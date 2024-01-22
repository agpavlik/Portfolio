import { useState } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <div
      className={`w-full h-full min-h-[100vh] bg-white ${darkMode && "dark"}`}
    >
      <nav className="z-10 fixed w-full top-0 left-0 bg-white dark:bg-[#061130]">
        <Navbar
          darkMode={darkMode}
          isOpen={isOpen}
          toggleMenu={toggleMenu}
          toggleTheme={toggleTheme}
        />
      </nav>
      <div className="w-full h-full min-h-[100vh] bg-white">
        <div className="dark:bg-gradient-to-tr from-[#0235a3] via-[#030a1c] to-[#05174e]">
          <Header />
        </div>
        <About />
        <Skills />
        <Projects />
      </div>
      <div
        id="contact"
        className="w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#05174e] to-[#030a1c] "
      >
        <Footer />
      </div>
    </div>
  );
}

export default App;
