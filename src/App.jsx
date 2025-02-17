import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import MySkills from "./components/MySkills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Container from "./components/Container";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="relative flex flex-col items-center justify-center font-Poppins bg-Solitude bg-gray-200 text-sm">
      <div className="w-full h-auto">
        <div
          className={`${
            isScrolled
              ? "md:bg-white bg-transparent shadow-md"
              : "lg:bg-gray-200 bg-transparent"
          } z-50 fixed w-full`}
        >
          <Navbar />
        </div>
        <div className="flex mx-auto lg:w-4/5 w-full mt-30">
          <Router>
            <Routes>
              <Route path="/" element={<Container/>}/>
              {/* <Route path="/navbar" element={<Navbar />} />
              <Route path="/home" element={<Container />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/myskills" element={<MySkills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contactme" element={<ContactMe />} /> */}
            </Routes>
          </Router>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
