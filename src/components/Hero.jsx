import React from "react";
import realkwizera from "../assets/me.png";

const Hero = () => {
  const gHireForm = "https://docs.google.com/forms/d/e/1FAIpQLSd2XplnDUThqosyOrCj6l0RGTwAqosyi7BKt02KceGdYrQxoQ/viewform?usp=header"
  const myCV = "https://drive.google.com/file/d/1ddsYE1a0UNJAsd_jN94twyXeF2w0Rq0x/view?usp=sharing"
  return (
    <div className="md:w-full w-80 h-full h-screen lg:h-screen md:h-fit mx-auto my-2 lg:my-0 md:my-2 md:mx-5 lg:mx-auto">
      <div className="grid md:grid-cols-2 grid-cols-1 my-auto items-center gap-10">
        <div className="md:order-2 flex justify-center border-4 w-full lg:w-full md:w-90 md:mr-10 lg:mr-0 mx-auto border-orange-600 rounded-full h-full  md:mb-0 mb-3">
          <img
            src={realkwizera}
            alt=""
            className="flex w-full rounded-bl-full rounded-br-full"
          />
        </div>
        <div className="md:order-1 flex flex-col mx-auto gap-5 justify-start items-start mx-10">
          <div className="flex flex-col items-center gap-5 text-medium">
            <div className="flex flex-col ">
              <p className="font-black lg:text-4xl md:text-3xl text-2xl bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                Ferdinand KWIZERA,
                <br />
                Full Stack Software Developer.
              </p>
              <div className="break-words mx-auto">
                I'm a full-stack software developer with a deep passion for both
                frontend and backend development. As a UX/UI designer, I thrive
                on crafting visually appealing and commercially effective
                designs, ensuring that every element is thoughtfully arranged
                and artistically balanced. I love bringing ideas to life with
                seamless functionality and stunning aesthetics, blending
                creativity with technical precision to create exceptional
                digital experiences.
              </div>
            </div>
          </div>
          <div className="flex gap-4 ">
            <button onClick={()=>window.open(myCV, "_blank")} className="px-5 py-2 bg-blue-600 text-white rounded-lg cursor-pointer">
              Get My CV
            </button>
            <button onClick={()=>{window.open(gHireForm, "_blank");}} className="px-5 py-2 bg-orange-600 text-white rounded-lg cursor-pointer">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
