import React from "react";
import creators from "../assets/creators.png";

const AboutMe = () => {
  return (
    <div className="lg:w-full w-80 lg:w-80 md:w-full md:mr-10 lg:mr-0 h-full h-fit lg:mx-auto mx-5 my-5 lg:mb-10">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-10 md:w-10/11 lg:w-full">
        <div className="flex flex-col transition-transform duration-300 mx-auto  w-full gap-4">
          <div className="text-orange-600 font-black text-4xl">Innovate. Collaborate. Create.</div>
          <div>
            <p className="break-words text-gray-700 text-md leading-relaxed">
              I am passionate about creativity and thrive on collaborating with like-minded innovators. 
              Bringing ideas to life through technology and design excites me, and I firmly believe that 
              the best solutions emerge from the synergy of diverse talents. As a software developer, 
              I embrace collaboration, exchanging ideas, and pushing the boundaries of innovation. 
              Every project is an opportunity to craft something impactful, blending expertise, vision, 
              and a shared drive for excellence.
            </p>
          </div>
          <div className="hidden lg:block">
            <button className="bg-white text-orange-600 shadow-md transition-transform duration-500 py-3 text-medium font-bold rounded px-5 hover:bg-blue-600 hover:text-white">
              Let’s Collaborate
            </button>
          </div>
        </div>
        <div className="flex mx-auto w-full h-full">
          <img src={creators} alt="Creators" className="rounded-xl h-full" />
        </div>
        <div className="lg:hidden block w-full">
          <button className="w-full bg-white text-orange-600 shadow-md transition-transform duration-500 py-3 text-medium font-bold rounded px-5 hover:bg-blue-600 hover:text-white">
            Let’s Collaborate
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
