import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import MySkills from "./MySkills";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Footer from "./Footer";

const Container = () => {
  return (
    <div className="flex text-gray-700 flex-col px-auto max-w-screen overflow-hidden mx-auto">
    <section id="home"  className="w-full lg:h-full h-fit lg:mx-auto  my-5 mb-10 lg:mb-10 md:mb-0">
    <Hero/>
    </section>
    <section id='aboutMe' className='w-full lg:h-full h-fit lg:mx-auto mx-5  my-5 mb-10 lg:mb-10 md:mb-0'>
    <AboutMe/>
    </section>
    <section id="mySkills" className="w-full lg:h-full h-fit lg:mx-auto mx-5  my-5 mb-10 lg:mb-10 md:mb-0">
    <MySkills/>
    </section>
    <section
      id="projects"
      className="w-full lg:h-full h-fit lg:mx-auto mx-5  my-5 mb-10 lg:mb-10 md:mb-0"
    >
      <Projects/>
    </section>
    <section id="contactMe" className="w-full lg:h-full h-fit mx-auto mx-5  my-auto md:mb-0">
    <ContactMe/>
    </section>
    </div>
  );
};

export default Container;
