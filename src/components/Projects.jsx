import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import hblab from "../assets/Projects/hblab.png";
import portfolio from "../assets/Projects/portfolio.png";
import spotifyClone from "../assets/Projects/spotify_clone.png";
import { FiArrowRight } from "react-icons/fi";
import { title } from "framer-motion/client";

const Projects = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="relative lg:w-full md:w-full w-80 h-full h-fit lg:mx-auto mx-5 my-5 mb-10">
      <div className="flex flex-col mx-auto gap-5">
        <div className="flex mx-auto text-center text-blue-600 font-black text-5xl my-4">
          Projects I Worked On
        </div>
        <div className="overflow-hidden md:w-10/11 lg:w-full w-full p-4">
          {isLargeScreen ? (
            <motion.div
              className="flex lg:flex-row flex-col gap-5"
              animate={{ x: [0, 100, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            >
              <ProjectCard
                imgSrc={hblab}
                title="HB-Lab Platform (In Development)"
                description="A cutting-edge platform designed for HB-Lab members and aspiring learners. This system simplifies registration, enables course tracking, and fosters seamless engagement with the community."
              />

              <ProjectCard
                imgSrc={spotifyClone}
                title="Spotify Clone"
                description="A fully responsive Spotify-inspired music streaming interface. Built to mirror the authentic Spotify user experience, with sleek UI elements and smooth interactions."
              />

              <ProjectCard
                imgSrc={portfolio}
                title="My Personal Portfolio"
                description="A modern and interactive portfolio showcasing my skills, projects, and journey as a developer. Designed with a unique aesthetic and seamless user experience."
              />
            </motion.div>
          ) : (
            <div className="flex flex-col gap-5">
              <ProjectCard
                imgSrc={hblab}
                title="HB-Lab Platform (In Development)"
                description="A cutting-edge platform designed for HB-Lab members and aspiring learners. This system simplifies registration, enables course tracking, and fosters seamless engagement with the community."
              />

              <ProjectCard
                imgSrc={spotifyClone}
                title="Spotify Clone"
                description="A fully responsive Spotify-inspired music streaming interface. Built to mirror the authentic Spotify user experience, with sleek UI elements and smooth interactions."
              />

              <ProjectCard
                imgSrc={portfolio}
                title="My Personal Portfolio"
                description="A modern and interactive portfolio showcasing my skills, projects, and journey as a developer. Designed with a unique aesthetic and seamless user experience."
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ imgSrc, title, description }) => (
  <div className="flex flex-col mx-auto p-2 shadow-md rounded-xl bg-white w-full gap-2 transition-transform duration-300 hover:scale-120 hover:m-5 hover:p-5">
    <div className="flex justify-center items-center">
      <img
        src={imgSrc}
        alt="Project Thumbnail"
        className="w-full rounded-xl shadow opacity-75 contrast-75 hover:opacity-100 hover:contrast-100"
      />
    </div>
    <div className="font-sm text-orange-600 text-xl">{title}</div>
    <div>{description}</div>
  </div>
);

export default Projects;
