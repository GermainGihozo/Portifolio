import React, { useState } from "react";
import { useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";



const Navbar = () => {
  const [isTogglerOn, setIsTogglerOn] =useState(false)
  const gHireForm = "https://docs.google.com/forms/d/e/1FAIpQLSd2XplnDUThqosyOrCj6l0RGTwAqosyi7BKt02KceGdYrQxoQ/viewform?usp=header"
 
  return (
    <div className={`mx-0 md:mx-auto `}>
      <nav className="flex mx-0 md:mx-auto md:flex-row flex-col md:justify-center justify-start md:items-center items-start">
        <div className="flex md:mx-auto mx-0 lg:bg-transparent bg-white lg:py-0 py-3 lg:shadow-0 shadow top-0 mr-4 my-auto md:items-center items-start md:w-[inherit] w-full md:justify-center justify-between gap-5 ">
          <div className="flex md:mx-auto mx-0  items-center justify-center gap-5">
            <div className={`md:hidden ${isTogglerOn ? 'hidden':''}` } onClick={()=>{setIsTogglerOn(true)}}>
              <HiMenu className="text-blue-600" size={35} />
            </div>
            <div className="md:border-2 md:border-blue-600 p-2 md:rounded-lg my-auto">
              <label className="text-blue-600 text-2xl font-black">
                REAL KWIZERA
              </label>
            </div>
          </div>
          <div className={`${isTogglerOn ? '':'hidden'} md:bg-transparent rounded-full bg-blue-600 my-auto flex md:mx-auto mx-5 md:hidden`} onClick={()=>{setIsTogglerOn(false)}}>
            <HiX className="text-white" size={35} />
          </div>
        </div>
        <div id="links" className={`${isTogglerOn ? 'z-50':'md:inline hidden'} flex md:mx-auto mx-0 md:bg-transparent bg-blue-600 opacity-95 md:flex-row flex-col p-2 md:h-full h-screen justify-center`}>
          <div className={` ${isTogglerOn ? '':'md:inline hidden'}  grid md:grid-cols-1 grid-cols-4 flex md:items-center items-start justify-center`}>
            <div className="p-3 w-full md:col-span-1 col-span-3 flex md:flex-row flex-col md:justify-center justify-start md:items-center items-start gap-5">
              <div className="flex mx-auto md:flex-row md:text-black text-white flex-col gap-5 md:my-auto my-0 items-center justify-center ">
              <a href="#home" className="hover:text-orange-600 hover:font-semibold  transition-transform duration-300 hover:scale-130 lg:mx-2">Home</a>
                <a href="#aboutMe" className="hover:text-orange-600 hover:font-semibold  transition-transform duration-300 hover:scale-130 lg:mx-2">About Me</a>
                <a href="#mySkills" className="hover:text-orange-600 hover:font-semibold  transition-transform duration-300 hover:scale-130 lg:mx-2">My Skills</a>
                <a href="#projects" className="hover:text-orange-600 hover:font-semibold  transition-transform duration-300 hover:scale-130 lg:mx-2">Projects</a>
                <a href="#contactMe" className="hover:text-orange-600 hover:font-semibold  transition-transform duration-300 hover:scale-130 lg:mx-2">Contact Me</a>
              </div>
              <div onClick={()=>{window.open(gHireForm, "_blank");}} className="flex mx-auto md:flex-row flex-col md:p-3 px-4 py-2 md:bg-blue-600 bg-white md:my-0 my-5 md:border-0 cursor-pointer border-2 border-white rounded md:text-white text-blue-600 hover:bg-orange-600 hover:text-white hover:font-semibold rounded">
                <button onClick={()=>{window.open(gHireForm, "_blank");}} className="cursor-pointer">Hire Me</button>
              </div>
            </div>
            <div className="md:hidden">

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
