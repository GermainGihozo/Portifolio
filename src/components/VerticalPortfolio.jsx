import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import hblab from "../assets/Projects/hblab.png";
import portfolio from "../assets/Projects/Himshop Online.png";
import spotifyClone from "../assets/Projects/spotify_clone.png";
import Smart_saving_track from "../assets/Projects/Smart saving track.png";
import NiceGarden from "../assets/Projects/Nice Garden Hotel.png";
import profileImage from "../assets/WhatsApp Image 2025-05-30 at 12.15.53_18082a4e.jpg";
import hhh from "../assets/w-others.jpg";
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";

const VerticalPortfolio = () => {
  const form = useRef();
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("themePreference");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("themePreference", JSON.stringify(newMode));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
    setActiveSection(sectionId);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_uyyhhg3",
        "template_c2txmv4",
        form.current,
        "7rYgl24uwNaGRAE24"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  // Color theme
  const colors = {
    light: {
      bg: "bg-stone-50",
      text: "text-stone-800",
      primary: "text-emerald-600",
      secondary: "text-stone-600",
      card: "bg-white",
      border: "border-stone-200",
      button: "bg-emerald-600 hover:bg-emerald-700 text-white",
      buttonSecondary:
        "border border-emerald-600 text-emerald-600 hover:bg-emerald-50",
      accent: "bg-emerald-100",
      navActive: "text-emerald-600",
    },
    dark: {
      bg: "bg-stone-900",
      text: "text-stone-100",
      primary: "text-emerald-400",
      secondary: "text-stone-400",
      card: "bg-stone-800",
      border: "border-stone-700",
      button: "bg-emerald-600 hover:bg-emerald-700 text-white",
      buttonSecondary:
        "border border-emerald-400 text-emerald-400 hover:bg-stone-700",
      accent: "bg-emerald-900",
      navActive: "text-emerald-400",
    },
  };

  const theme = darkMode ? colors.dark : colors.light;

  const contactInfo = [
    { icon: "phone", text: "+250 784 873 039", link: "tel:+250784873039" },
    {
      icon: "envelope",
      text: "gihozondahayogermain@gmail.com",
      link: "mailto:gihozondahayogermain@gmail.com",
    },
    { icon: "map-marker-alt", text: "Kigali, Rwanda" },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-lg" />,
      url: "https://linkedin.com",
    },
    {
      icon: <FaGithub className="text-lg" />,
      url: "https://github.com/GermainGihozo",
    },
    {
      icon: <FaWhatsapp className="text-lg" />,
      url: "https://wa.me/250784873039",
    },
    {
      icon: <FaInstagram className="text-lg" />,
      url: "https://www.instagram.com/germain_igihozo?igsh=ZXFxMW9jdHhubHk3",
    },
  ];

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text}`}>
      {/* Navigation */}
      {isMobile ? (
        <nav
          className={`fixed top-0 left-0 right-0 z-50 ${theme.card} shadow-lg ${theme.border} py-4 px-6`}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div
                className={`w-8 h-8 rounded-full ${theme.primary} flex items-center justify-center font-bold text-sm`}
              >
                GN
              </div>
              <span className="text-lg font-bold">IGIHOZO Ndahayo Germain</span>
            </div>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${theme.secondary} hover:${theme.primary}`}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
          <div className="flex overflow-x-auto space-x-4 mt-4 pb-2 scrollbar-hide">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
                  activeSection === item
                    ? theme.button
                    : `${theme.buttonSecondary}`
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </nav>
      ) : (
        <nav
          className={`fixed left-0 top-0 bottom-0 w-64 z-50 ${theme.card} shadow-lg ${theme.border} flex flex-col py-8 px-6`}
        >
          <div className="flex flex-col h-full justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-3 mb-12"
              >
                <div
                  className={`w-10 h-10 rounded-full ${theme.primary} flex items-center justify-center font-bold text-lg`}
                >
                  GN
                </div>
                <span className="text-xl font-bold">I.N Germain</span>
              </motion.div>

              <div className="space-y-4">
                {[
                  { id: "home", label: "Home" },
                  { id: "about", label: "About" },
                  { id: "skills", label: "Skills" },
                  { id: "projects", label: "Projects" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{ x: 5 }}
                    className={`w-full text-left py-3 px-4 rounded-lg flex items-center ${
                      activeSection === item.id ? theme.navActive : theme.text
                    } ${activeSection === item.id ? theme.accent : ""}`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full mr-3 ${
                        activeSection === item.id
                          ? darkMode
                            ? "bg-emerald-400"
                            : "bg-emerald-600"
                          : "bg-transparent"
                      }`}
                    ></span>
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <button
                onClick={toggleTheme}
                className={`p-3 rounded-lg flex items-center justify-center ${theme.secondary} hover:${theme.primary} ${theme.card} ${theme.border}`}
              >
                {darkMode ? (
                  <>
                    <FaSun className="mr-2" /> Light Mode
                  </>
                ) : (
                  <>
                    <FaMoon className="mr-2" /> Dark Mode
                  </>
                )}
              </button>

              <div className="flex justify-center space-x-4 pt-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      darkMode
                        ? "bg-stone-700 hover:bg-stone-600"
                        : "bg-stone-100 hover:bg-stone-200"
                    }`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Main Content */}
      <div className={`${isMobile ? "pt-28" : "ml-64"}`}>
        {/* Home Section */}
        <section
          id="home"
          className={`min-h-screen flex items-center justify-center px-6 md:px-16 py-16 ${theme.bg}`}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8 order-2 lg:order-1"
            >
              <div>
                <h1
                  className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight ${theme.text}`}
                >
                  Hi, I'm{" "}
                  <span className={theme.primary}>IGIHOZO Ndahayo Germain</span>
                </h1>
                <h2
                  className={`text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6 ${theme.secondary}`}
                >
                  Full Stack Developer & UI/UX Designer
                </h2>
                <p
                  className={`text-base md:text-lg mb-6 md:mb-8 ${theme.secondary}`}
                >
                  I build elegant digital experiences with modern technologies
                  and thoughtful design.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 md:px-8 md:py-3 rounded-full font-medium text-center text-sm md:text-base ${theme.button} transition-colors`}
                >
                  View Projects
                </motion.a>
                <motion.a
                  href="https://drive.google.com/file/d/1GVQeo-TlJR7_rmmnknLGKfRmIACwzk2j/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 md:px-8 md:py-3 rounded-full font-medium text-center text-sm md:text-base ${theme.buttonSecondary} transition-colors`}
                >
                  Download CV
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center order-1 lg:order-2 mb-6 lg:mb-0"
            >
              <div
                className={`w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shadow-xl`}
              >
                <img
                  src={profileImage}
                  alt="IGIHOZO Ndahayo Germain"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className={`min-h-screen flex items-center justify-center px-6 md:px-16 py-16 ${
            darkMode ? "bg-stone-800" : "bg-stone-100"
          } transition-colors duration-300`}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-16"
            >
              <h2
                className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${theme.text}`}
              >
                About <span className={theme.primary}>Me</span>
              </h2>
              <div
                className={`w-20 h-1 mx-auto ${
                  darkMode ? "bg-emerald-400" : "bg-emerald-600"
                }`}
              ></div>
            </motion.div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center">
                <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                  <div
                    className={`w-full h-full rounded-lg overflow-hidden shadow-lg ${theme.border}`}
                  >
                    <img
                      src={hhh}
                      alt="About Germain"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className={`absolute -bottom-3 -right-3 px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-lg text-sm md:text-base ${theme.button}`}
                  >
                    <span className="font-bold">2+ Years Experience</span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-2/3 mt-8 md:mt-0 md:pl-8 lg:pl-16">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3
                    className={`text-xl md:text-2xl font-semibold mb-4 md:mb-6 ${theme.text}`}
                  >
                    Full Stack Developer based in Rwanda
                  </h3>
                  <p
                    className={`text-sm md:text-base mb-4 md:mb-6 ${theme.secondary}`}
                  >
                    I'm passionate about creating digital solutions that blend
                    technical excellence with intuitive design. My approach
                    combines clean code with thoughtful user experiences.
                  </p>
                  <p
                    className={`text-sm md:text-base mb-6 md:mb-8 ${theme.secondary}`}
                  >
                    With expertise across the full stack, I bring ideas to life
                    through modern web technologies while ensuring performance,
                    accessibility, and maintainability.
                  </p>
                  <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                    {[
                      { label: "Name:", value: "IGIHOZO Ndahayo Germain" },
                      { label: "Email:", value: "gihozondahayogermain@gmail.com" },
                      { label: "From:", value: "Kigali, Rwanda" },
                      { label: "Phone:", value: "+250 784 873 039" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className={`p-3 md:p-4 rounded-lg ${theme.card} shadow-sm ${theme.border}`}
                      >
                        <span
                          className={`text-xs md:text-sm ${theme.secondary}`}
                        >
                          {item.label}
                        </span>
                        <p
                          className={`text-sm md:text-base font-medium ${theme.text}`}
                        >
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://drive.google.com/file/d/1GVQeo-TlJR7_rmmnknLGKfRmIACwzk2j/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block px-6 py-2 md:px-8 md:py-3 rounded-full font-medium text-sm md:text-base ${theme.button} transition-colors`}
                  >
                    Download CV
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="min-h-screen flex items-center justify-center px-4 md:px-8 py-16"
        >
          <div className="max-w-6xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-16"
            >
              <h2
                className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${theme.text}`}
              >
                My <span className={theme.primary}>Skills</span>
              </h2>
              <div
                className={`w-20 h-1 mx-auto ${
                  darkMode ? "bg-emerald-400" : "bg-emerald-600"
                }`}
              ></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Frontend Development */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className={`p-4 md:p-6 rounded-xl shadow-sm ${theme.card} ${theme.border}`}
              >
                <h3
                  className={`text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center ${theme.text}`}
                >
                  <span
                    className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full mr-2 md:mr-3 ${
                      darkMode ? "bg-emerald-400" : "bg-emerald-600"
                    }`}
                  ></span>
                  Frontend Development
                </h3>
                <div className="space-y-2 md:space-y-3">
                  {[
                    { name: "HTML/CSS", level: 95 },
                    { name: "JavaScript", level: 80 },
                    { name: "React.js", level: 85 },
                    { name: "Tailwind CSS", level: 80 },
                    { name: "Bootstrap", level: 80 },
                  ].map((skill, index) => (
                    <div key={index} className="mb-2 md:mb-3 last:mb-0">
                      <div className="flex justify-between text-xs md:text-sm mb-1">
                        <span className={theme.text}>{skill.name}</span>
                        <span className={theme.secondary}>{skill.level}%</span>
                      </div>
                      <div
                        className={`w-full rounded-full h-1.5 ${
                          darkMode ? "bg-stone-700" : "bg-stone-200"
                        }`}
                      >
                        <div
                          className={`h-1.5 rounded-full ${
                            darkMode ? "bg-emerald-400" : "bg-emerald-600"
                          }`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Backend Development */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className={`p-4 md:p-6 rounded-xl shadow-sm ${theme.card} ${theme.border}`}
              >
                <h3
                  className={`text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center ${theme.text}`}
                >
                  <span
                    className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full mr-2 md:mr-3 ${
                      darkMode ? "bg-emerald-400" : "bg-emerald-600"
                    }`}
                  ></span>
                  Backend Development
                </h3>
                <div className="space-y-2 md:space-y-3">
                  {[
                    { name: "Node.js (Express)", level: 85 },
                    { name: "Laravel", level: 80 },
                    { name: "Django", level: 75 },
                    { name: "PHP", level: 80 },
                    { name: "Java", level: 70 },
                  ].map((skill, index) => (
                    <div key={index} className="mb-2 md:mb-3 last:mb-0">
                      <div className="flex justify-between text-xs md:text-sm mb-1">
                        <span className={theme.text}>{skill.name}</span>
                        <span className={theme.secondary}>{skill.level}%</span>
                      </div>
                      <div
                        className={`w-full rounded-full h-1.5 ${
                          darkMode ? "bg-stone-700" : "bg-stone-200"
                        }`}
                      >
                        <div
                          className={`h-1.5 rounded-full ${
                            darkMode ? "bg-emerald-400" : "bg-emerald-600"
                          }`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Databases */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className={`p-4 md:p-6 rounded-xl shadow-sm ${theme.card} ${theme.border}`}
              >
                <h3
                  className={`text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center ${theme.text}`}
                >
                  <span
                    className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full mr-2 md:mr-3 ${
                      darkMode ? "bg-emerald-400" : "bg-emerald-600"
                    }`}
                  ></span>
                  Databases
                </h3>
                <div className="space-y-2 md:space-y-3">
                  {[
                    { name: "MySQL", level: 85 },
                    { name: "PostgreSQL", level: 70 },
                    { name: "MongoDB", level: 75 },
                  ].map((skill, index) => (
                    <div key={index} className="mb-2 md:mb-3 last:mb-0">
                      <div className="flex justify-between text-xs md:text-sm mb-1">
                        <span className={theme.text}>{skill.name}</span>
                        <span className={theme.secondary}>{skill.level}%</span>
                      </div>
                      <div
                        className={`w-full rounded-full h-1.5 ${
                          darkMode ? "bg-stone-700" : "bg-stone-200"
                        }`}
                      >
                        <div
                          className={`h-1.5 rounded-full ${
                            darkMode ? "bg-emerald-400" : "bg-emerald-600"
                          }`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Mobile Development */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className={`p-4 md:p-6 rounded-xl shadow-sm ${theme.card} ${theme.border}`}
              >
                <h3
                  className={`text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center ${theme.text}`}
                >
                  <span
                    className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full mr-2 md:mr-3 ${
                      darkMode ? "bg-emerald-400" : "bg-emerald-600"
                    }`}
                  ></span>
                  Mobile Development
                </h3>
                <div className="space-y-2 md:space-y-3">
                  {[
                    { name: "Android (Java)", level: 70 },
                    { name: "Flutter (Dart)", level: 70 },
                    { name: "React Native", level: 70 },
                  ].map((skill, index) => (
                    <div key={index} className="mb-2 md:mb-3 last:mb-0">
                      <div className="flex justify-between text-xs md:text-sm mb-1">
                        <span className={theme.text}>{skill.name}</span>
                        <span className={theme.secondary}>{skill.level}%</span>
                      </div>
                      <div
                        className={`w-full rounded-full h-1.5 ${
                          darkMode ? "bg-stone-700" : "bg-stone-200"
                        }`}
                      >
                        <div
                          className={`h-1.5 rounded-full ${
                            darkMode ? "bg-emerald-400" : "bg-emerald-600"
                          }`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* UX/UI Design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className={`p-4 md:p-6 rounded-xl shadow-sm ${theme.card} ${theme.border}`}
              >
                <h3
                  className={`text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center ${theme.text}`}
                >
                  <span
                    className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full mr-2 md:mr-3 ${
                      darkMode ? "bg-emerald-400" : "bg-emerald-600"
                    }`}
                  ></span>
                  UX/UI Design
                </h3>
                <div className="space-y-2 md:space-y-3">
                  {[
                    { name: "Figma", level: 85 },
                    { name: "Photoshop", level: 80 },
                    { name: "Adobe premiere pro", level: 80 },
                    { name: "Illustrator", level: 70 },
                  ].map((skill, index) => (
                    <div key={index} className="mb-2 md:mb-3 last:mb-0">
                      <div className="flex justify-between text-xs md:text-sm mb-1">
                        <span className={theme.text}>{skill.name}</span>
                        <span className={theme.secondary}>{skill.level}%</span>
                      </div>
                      <div
                        className={`w-full rounded-full h-1.5 ${
                          darkMode ? "bg-stone-700" : "bg-stone-200"
                        }`}
                      >
                        <div
                          className={`h-1.5 rounded-full ${
                            darkMode ? "bg-emerald-400" : "bg-emerald-600"
                          }`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Tools & Other */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className={`p-4 md:p-6 rounded-xl shadow-sm ${theme.card} ${theme.border} md:col-span-2`}
              >
                <h3
                  className={`text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center ${theme.text}`}
                >
                  <span
                    className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full mr-2 md:mr-3 ${
                      darkMode ? "bg-emerald-400" : "bg-emerald-600"
                    }`}
                  ></span>
                  Tools & Other Skills
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
                  {[
                    "Git",
                    "Docker",
                    "VS Code",
                    "Postman",
                    "Linux",
                    "GitHub",
                    "C",
                    "C++",
                    "VBA",
                    "Bash",
                    "AI/ML",
                    "Python",
                    "Next.js",
                    "Nuxt",
                    "Vue.js",
                    "TypeScript",
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <span
                        className={`w-1.5 h-1.5 rounded-full mr-2 ${
                          darkMode ? "bg-emerald-400" : "bg-emerald-600"
                        }`}
                      ></span>
                      <span className={`text-xs md:text-sm ${theme.text}`}>
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className={`min-h-screen flex items-center justify-center px-4 md:px-8 py-16 ${
            darkMode ? "bg-stone-800" : "bg-stone-100"
          } transition-colors duration-300`}
        >
          <div className="max-w-6xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-16"
            >
              <h2
                className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${theme.text}`}
              >
                My <span className={theme.primary}>Projects</span>
              </h2>
              <div
                className={`w-20 h-1 mx-auto ${
                  darkMode ? "bg-emerald-400" : "bg-emerald-600"
                }`}
              ></div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {/* HB-Lab Platform */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`rounded-xl overflow-hidden shadow-lg ${theme.card} ${theme.border} transition-colors duration-300 h-full`}
              >
                <div className="h-40 md:h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={hblab}
                    alt="HB-Lab Platform"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3
                    className={`text-lg md:text-xl font-semibold mb-2 ${theme.text}`}
                  >
                    HB-Lab Platform (In Development)
                  </h3>
                  <p
                    className={`text-xs md:text-sm mb-3 md:mb-4 ${theme.secondary}`}
                  >
                    A cutting-edge platform for HB-Lab members with course
                    tracking and community engagement features.
                  </p>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {["React", "Node.js", "MongoDB", "Tailwind CSS"].map(
                      (tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`text-xs px-2 py-1 rounded-full ${
                            darkMode ? "bg-stone-700" : "bg-stone-200"
                          } ${theme.text}`}
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Spotify Clone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`rounded-xl overflow-hidden shadow-lg ${theme.card} ${theme.border} transition-colors duration-300 h-full`}
              >
                <div className="h-40 md:h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={spotifyClone}
                    alt="Spotify Clone"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3
                    className={`text-lg md:text-xl font-semibold mb-2 ${theme.text}`}
                  >
                    Spotify Clone
                  </h3>
                  <p
                    className={`text-xs md:text-sm mb-3 md:mb-4 ${theme.secondary}`}
                  >
                    A responsive music streaming interface mirroring Spotify's
                    UX with sleek UI elements.
                  </p>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {["React", "Bootstrap"].map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`text-xs px-2 py-1 rounded-full ${
                          darkMode ? "bg-stone-700" : "bg-stone-200"
                        } ${theme.text}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
              {/*Smart saving track  */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`rounded-xl overflow-hidden shadow-lg ${theme.card} ${theme.border} transition-colors duration-300 h-full`}
              >
                <div className="h-40 md:h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={Smart_saving_track}
                    alt=" Smart Saving Track"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3
                    className={`text-lg md:text-xl font-semibold mb-2 ${theme.text}`}
                  >
                     Smart Saving Track
                  </h3>
                  <p
                    className={`text-xs md:text-sm mb-3 md:mb-4 ${theme.secondary}`}
                  >
                    A system for saving groups to manage their savings,loans,Get reminders for payments, meetings, and important group announcements..
                  </p>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {["React", "Node.js", "MongoDB", "Tailwind CSS"].map(
                      (tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`text-xs px-2 py-1 rounded-full ${
                            darkMode ? "bg-stone-700" : "bg-stone-200"
                          } ${theme.text}`}
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Nice Garden */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`rounded-xl overflow-hidden shadow-lg ${theme.card} ${theme.border} transition-colors duration-300 h-full`}
              >
                <div className="h-40 md:h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={NiceGarden}
                    alt="Spotify Clone"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3
                    className={`text-lg md:text-xl font-semibold mb-2 ${theme.text}`}
                  >
                    Nice Garden's Website
                  </h3>
                  <p
                    className={`text-xs md:text-sm mb-3 md:mb-4 ${theme.secondary}`}
                  >
                    A responsive E-commerce website for Nice Garden, showcasing their
                    Hospitality services and portfolio.
                  </p>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {["React", "Bootstrap"].map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`text-xs px-2 py-1 rounded-full ${
                          darkMode ? "bg-stone-700" : "bg-stone-200"
                        } ${theme.text}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Portfolio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`rounded-xl overflow-hidden shadow-lg ${theme.card} ${theme.border} transition-colors duration-300 h-full`}
              >
                <div className="h-40 md:h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={portfolio}
                    alt="Portfolio"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3
                    className={`text-lg md:text-xl font-semibold mb-2 ${theme.text}`}
                  >
                    Himshop Online Trading Poroject
                  </h3>
                  <p
                    className={`text-xs md:text-sm mb-3 md:mb-4 ${theme.secondary}`}
                  >
                    a project that helps sellers to sell their products,manage sales,reports and manage business branches 
                  </p>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {["PHP", "Bootstrap", "Javascrip"].map(
                      (tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`text-xs px-2 py-1 rounded-full ${
                            darkMode ? "bg-stone-700" : "bg-stone-200"
                          } ${theme.text}`}
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className={`min-h-screen flex items-center justify-center px-4 md:px-8 py-16 ${theme.bg}`}
        >
          <div className="max-w-4xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-12"
            >
              <h2
                className={`text-2xl md:text-3xl font-bold mb-4 ${theme.text}`}
              >
                Get In <span className={theme.primary}>Touch</span>
              </h2>
              <div
                className={`w-20 h-1 mx-auto ${
                  darkMode ? "bg-emerald-400" : "bg-emerald-600"
                }`}
              ></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`p-4 md:p-6 rounded-xl shadow-sm ${theme.card} ${theme.border}`}
              >
                <h3
                  className={`text-lg md:text-xl font-semibold mb-4 md:mb-6 ${theme.text}`}
                >
                  Contact Information
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div
                        className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mr-3 md:mr-4 ${
                          darkMode ? "bg-stone-700" : "bg-stone-100"
                        }`}
                      >
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d={`M${
                              item.icon === "phone"
                                ? "3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                : item.icon === "envelope"
                                ? "3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                : "17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            }`}
                          />
                        </svg>
                      </div>
                      {item.link ? (
                        <a
                          href={item.link}
                          className={`text-sm md:text-base hover:${theme.primary} transition-colors ${theme.text}`}
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span
                          className={`text-sm md:text-base ${theme.text}`}
                        >
                          {item.text}
                        </span>
                      )}
                    </div>
                  ))}
                  <div className="flex space-x-3 md:space-x-4 pt-3 md:pt-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${
                          darkMode
                            ? "bg-stone-700 hover:bg-stone-600"
                            : "bg-stone-100 hover:bg-stone-200"
                        } transition-colors`}
                      >
                        {React.cloneElement(social.icon, {
                          className: "text-base md:text-lg",
                        })}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`p-4 md:p-6 rounded-xl shadow-sm ${theme.card} ${theme.border}`}
              >
                <h3
                  className={`text-lg md:text-xl font-semibold mb-4 md:mb-6 ${theme.text}`}
                >
                  Send Me a Message
                </h3>
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="space-y-3 md:space-y-4"
                >
                  <div>
                    <label
                      htmlFor="from_name"
                      className={`block mb-1 md:mb-2 text-sm md:text-base ${theme.text}`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="from_name"
                      name="from_name"
                      className={`w-full px-3 py-2 md:px-4 md:py-2.5 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 ${
                        darkMode
                          ? "bg-stone-700 border-stone-600 focus:ring-emerald-400"
                          : "bg-white border-stone-300 focus:ring-emerald-500"
                      } border`}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="from_email"
                      className={`block mb-1 md:mb-2 text-sm md:text-base ${theme.text}`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="from_email"
                      name="from_email"
                      className={`w-full px-3 py-2 md:px-4 md:py-2.5 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 ${
                        darkMode
                          ? "bg-stone-700 border-stone-600 focus:ring-emerald-400"
                          : "bg-white border-stone-300 focus:ring-emerald-500"
                      } border`}
                      placeholder="Your email"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className={`block mb-1 md:mb-2 text-sm md:text-base ${theme.text}`}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className={`w-full px-3 py-2 md:px-4 md:py-2.5 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 ${
                        darkMode
                          ? "bg-stone-700 border-stone-600 focus:ring-emerald-400"
                          : "bg-white border-stone-300 focus:ring-emerald-500"
                      } border`}
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    disabled={isSubmitting}
                    className={`w-full px-6 py-2 md:px-8 md:py-3 rounded-full font-medium text-sm md:text-base ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : theme.button
                    } transition-colors`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VerticalPortfolio;