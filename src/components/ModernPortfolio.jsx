import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaSun, FaMoon } from "react-icons/fa";
import hblab from "../assets/Projects/hblab.png";
import portfolio from "../assets/Projects/portfolio.png";
import spotifyClone from "../assets/Projects/spotify_clone.png";
import profileImage from "../assets/me.png";
import hhh from "../assets/w-others.jpg";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const ModernPortfolio = () => {
  const form = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_uyyhhg3", "template_c2txmv4", form.current, "7rYgl24uwNaGRAE24")
      .then((result) => {
        alert("Message sent successfully!");
        form.current.reset();
      }, (error) => {
        alert("Failed to send message. Please try again.");
      });
  };

  const contactInfo = [
    { icon: "phone", text: "+250 726 922 589", link: "tel:+250726922589" },
    { icon: "envelope", text: "realkwizera1@gmail.com", link: "mailto:realkwizera1@gmail.com" },
    { icon: "map-marker-alt", text: "Kigali, Rwanda" }
  ];

  const socialLinks = [
    { icon: <FaLinkedin className="text-lg" />, url: "https://linkedin.com/in/realkwizera" },
    { icon: <FaGithub className="text-lg" />, url: "https://github.com/realkwizera" },
    { icon: <FaWhatsapp className="text-lg" />, url: "https://wa.me/250726922589" },
    { icon: <FaInstagram className="text-lg" />, url: "https://instagram.com/realkwizera1" }
  ];

  // Color scheme
  const colors = {
    light: {
      bg: "bg-gray-50",
      text: "text-gray-800",
      primary: "text-blue-600",
      secondary: "text-gray-600",
      card: "bg-white",
      border: "border-gray-200",
      button: "bg-blue-600 hover:bg-blue-700 text-white",
      buttonSecondary: "border border-blue-600 text-blue-600 hover:bg-blue-50"
    },
    dark: {
      bg: "bg-gray-900",
      text: "text-gray-100",
      primary: "text-blue-400",
      secondary: "text-gray-400",
      card: "bg-gray-800",
      border: "border-gray-700",
      button: "bg-blue-600 hover:bg-blue-700 text-white",
      buttonSecondary: "border border-blue-400 text-blue-400 hover:bg-gray-700"
    }
  };

  const theme = darkMode ? colors.dark : colors.light;

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${theme.card} shadow-sm ${theme.border} transition-colors duration-300`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <div className={`w-3 h-3 rounded-full ${theme.primary}`}></div>
            <span className="text-xl font-bold">REAL KWIZERA</span>
          </motion.div>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.05, color: darkMode ? "#60A5FA" : "#2563EB" }}
                  className={`cursor-pointer font-medium ${theme.text} hover:${theme.primary} transition-colors`}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${theme.secondary} hover:${theme.primary} transition-colors`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden z-50"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden ${theme.card} shadow-lg ${theme.border}`}
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={toggleMenu}
                  whileHover={{ color: darkMode ? "#60A5FA" : "#2563EB" }}
                  className={`cursor-pointer font-medium py-2 ${theme.text}`}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Content Section */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${theme.text}`}>
                Hi, I'm <span className={theme.primary}>Ferdinand KWIZERA</span>
              </h1>
              <h2 className={`text-2xl md:text-3xl font-semibold mb-6 ${theme.secondary}`}>
                Full Stack Developer & UI/UX Designer
              </h2>
              <p className={`text-lg mb-8 max-w-lg ${theme.secondary}`}>
                I build elegant digital experiences with modern technologies and thoughtful design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-full font-medium text-center ${theme.button} transition-colors`}
                >
                  View Projects
                </motion.a>
                <motion.a
                  href="https://drive.google.com/file/d/1ddsYE1a0UNJAsd_jN94twyXeF2w0Rq0x/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-full font-medium text-center ${theme.buttonSecondary} transition-colors`}
                >
                  Download CV
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full ${theme.card} flex items-center justify-center overflow-hidden shadow-xl`}>
                <img
                  src={profileImage}
                  alt="Ferdinand KWIZERA"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-6 ${theme.bg} transition-colors duration-300`}>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme.text}`}>
              About <span className={theme.primary}>Me</span>
            </h2>
            <div className={`w-20 h-1 mx-auto ${darkMode ? "bg-blue-400" : "bg-blue-600"}`}></div>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-10 md:mb-0 flex justify-center">
              <div className="relative">
                <div className={`w-full h-full rounded-lg overflow-hidden shadow-lg ${theme.border}`}>
                  <img
                    src={hhh}
                    alt="About Ferdinand"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`absolute -bottom-5 -right-5 px-6 py-3 rounded-lg shadow-lg ${theme.button}`}>
                  <span className="font-bold">3+ Years Experience</span>
                </div>
              </div>
            </div>

            <div className="md:w-2/3 md:pl-16">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className={`text-2xl font-semibold mb-6 ${theme.text}`}>
                  Full Stack Developer based in Rwanda
                </h3>
                <p className={`mb-6 ${theme.secondary}`}>
                  I'm passionate about creating digital solutions that blend technical excellence with 
                  intuitive design. My approach combines clean code with thoughtful user experiences.
                </p>
                <p className={`mb-8 ${theme.secondary}`}>
                  With expertise across the full stack, I bring ideas to life through modern web 
                  technologies while ensuring performance, accessibility, and maintainability.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { label: "Name:", value: "Ferdinand KWIZERA" },
                    { label: "Email:", value: "realkwizera1@gmail.com" },
                    { label: "From:", value: "Kigali, Rwanda" },
                    { label: "Phone:", value: "+250 726 922 589" },
                  ].map((item, index) => (
                    <div key={index} className={`p-4 rounded-lg ${theme.card} shadow-sm ${theme.border}`}>
                      <span className={theme.secondary}>{item.label}</span>
                      <p className={`font-medium ${theme.text}`}>{item.value}</p>
                    </div>
                  ))}
                </div>
                <a
                  href="https://drive.google.com/file/d/1ddsYE1a0UNJAsd_jN94twyXeF2w0Rq0x/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block px-8 py-3 rounded-full font-medium ${theme.button} transition-colors`}
                >
                  Download CV
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme.text}`}>
              My <span className={theme.primary}>Skills</span>
            </h2>
            <div className={`w-20 h-1 mx-auto ${darkMode ? "bg-blue-400" : "bg-blue-600"}`}></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Frontend Development */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`p-8 rounded-xl shadow-sm ${theme.card} ${theme.border} transition-colors duration-300`}
            >
              <h3 className={`text-xl font-semibold mb-6 flex items-center ${theme.text}`}>
                <span className={`w-3 h-3 rounded-full mr-3 ${darkMode ? "bg-blue-400" : "bg-blue-600"}`}></span>
                Frontend Development
              </h3>
              <div className="space-y-4">
                {[
                  { name: "HTML/CSS", level: 95 },
                  { name: "JavaScript", level: 80 },
                  { name: "React.js", level: 85 },
                  { name: "Tailwind CSS", level: 80 },
                  { name: "Bootstrap", level: 80 },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className={theme.text}>{skill.name}</span>
                      <span className={theme.secondary}>{skill.level}%</span>
                    </div>
                    <div className={`w-full rounded-full h-2 ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                      <div
                        className={`h-2 rounded-full ${darkMode ? "bg-blue-400" : "bg-blue-600"}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Backend Development */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className={`p-8 rounded-xl shadow-sm ${theme.card} ${theme.border} transition-colors duration-300`}
            >
              <h3 className={`text-xl font-semibold mb-6 flex items-center ${theme.text}`}>
                <span className={`w-3 h-3 rounded-full mr-3 ${darkMode ? "bg-blue-400" : "bg-blue-600"}`}></span>
                Backend Development
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Node.js (Express)", level: 85 },
                  { name: "Laravel", level: 80 },
                  { name: "Django", level: 75 },
                  { name: "PHP", level: 80 },
                  { name: "Java", level: 70 },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className={theme.text}>{skill.name}</span>
                      <span className={theme.secondary}>{skill.level}%</span>
                    </div>
                    <div className={`w-full rounded-full h-2 ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                      <div
                        className={`h-2 rounded-full ${darkMode ? "bg-blue-400" : "bg-blue-600"}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Databases */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className={`p-8 rounded-xl shadow-sm ${theme.card} ${theme.border} transition-colors duration-300`}
            >
              <h3 className={`text-xl font-semibold mb-6 flex items-center ${theme.text}`}>
                <span className={`w-3 h-3 rounded-full mr-3 ${darkMode ? "bg-blue-400" : "bg-blue-600"}`}></span>
                Databases
              </h3>
              <div className="space-y-4">
                {[
                  { name: "MySQL", level: 85 },
                  { name: "PostgreSQL", level: 70 },
                  { name: "MongoDB", level: 75 },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className={theme.text}>{skill.name}</span>
                      <span className={theme.secondary}>{skill.level}%</span>
                    </div>
                    <div className={`w-full rounded-full h-2 ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                      <div
                        className={`h-2 rounded-full ${darkMode ? "bg-blue-400" : "bg-blue-600"}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Mobile Development */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className={`p-8 rounded-xl shadow-sm ${theme.card} ${theme.border} transition-colors duration-300`}
            >
              <h3 className={`text-xl font-semibold mb-6 flex items-center ${theme.text}`}>
                <span className={`w-3 h-3 rounded-full mr-3 ${darkMode ? "bg-blue-400" : "bg-blue-600"}`}></span>
                Mobile Development
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Android (Java)", level: 70 },
                  { name: "Flutter (Dart)", level: 70 },
                  { name: "React Native", level: 70 },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className={theme.text}>{skill.name}</span>
                      <span className={theme.secondary}>{skill.level}%</span>
                    </div>
                    <div className={`w-full rounded-full h-2 ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                      <div
                        className={`h-2 rounded-full ${darkMode ? "bg-blue-400" : "bg-blue-600"}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* UX/UI Design */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className={`p-8 rounded-xl shadow-sm ${theme.card} ${theme.border} transition-colors duration-300`}
            >
              <h3 className={`text-xl font-semibold mb-6 flex items-center ${theme.text}`}>
                <span className={`w-3 h-3 rounded-full mr-3 ${darkMode ? "bg-blue-400" : "bg-blue-600"}`}></span>
                UX/UI Design
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Figma", level: 85 },
                  { name: "Photoshop", level: 80 },
                  { name: "Illustrator", level: 70 },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className={theme.text}>{skill.name}</span>
                      <span className={theme.secondary}>{skill.level}%</span>
                    </div>
                    <div className={`w-full rounded-full h-2 ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                      <div
                        className={`h-2 rounded-full ${darkMode ? "bg-blue-400" : "bg-blue-600"}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tools & Other */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              viewport={{ once: true }}
              className={`p-8 rounded-xl shadow-sm ${theme.card} ${theme.border} md:col-span-2 transition-colors duration-300`}
            >
              <h3 className={`text-xl font-semibold mb-6 flex items-center ${theme.text}`}>
                <span className={`w-3 h-3 rounded-full mr-3 ${darkMode ? "bg-blue-400" : "bg-blue-600"}`}></span>
                Tools & Other Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Git", "Docker", "VS Code", "Postman", "Linux", "GitHub", "C", "C++", 
                  "VBA", "Bash", "AI/ML", "Python", "Next.js", "TypeScript"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <span className={`w-2 h-2 rounded-full mr-2 ${darkMode ? "bg-blue-400" : "bg-blue-600"}`}></span>
                    <span className={theme.text}>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-6 ${darkMode ? "bg-gray-800" : "bg-gray-50"} transition-colors duration-300`}>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme.text}`}>
              My <span className={theme.primary}>Projects</span>
            </h2>
            <div className={`w-20 h-1 mx-auto ${darkMode ? "bg-blue-400" : "bg-blue-600"}`}></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* HB-Lab Platform */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`rounded-xl overflow-hidden shadow-lg ${theme.card} ${theme.border} transition-colors duration-300`}
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={hblab}
                  alt="HB-Lab Platform"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${theme.text}`}>
                  HB-Lab Platform (In Development)
                </h3>
                <p className={`mb-4 ${theme.secondary}`}>
                  A cutting-edge platform for HB-Lab members with course tracking and community engagement features.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "MongoDB", "Tailwind CSS"].map(
                    (tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`text-xs px-3 py-1 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-200"} ${theme.text}`}
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
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`rounded-xl overflow-hidden shadow-lg ${theme.card} ${theme.border} transition-colors duration-300`}
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={spotifyClone}
                  alt="Spotify Clone"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${theme.text}`}>
                  Spotify Clone
                </h3>
                <p className={`mb-4 ${theme.secondary}`}>
                  A responsive music streaming interface mirroring Spotify's UX with sleek UI elements.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Bootstrap"].map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`text-xs px-3 py-1 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-200"} ${theme.text}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Portfolio */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`rounded-xl overflow-hidden shadow-lg ${theme.card} ${theme.border} transition-colors duration-300`}
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={portfolio}
                  alt="Portfolio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${theme.text}`}>
                  My Personal Portfolio
                </h3>
                <p className={`mb-4 ${theme.secondary}`}>
                  A modern portfolio showcasing skills and projects with unique aesthetics and seamless UX.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Tailwind CSS", "Framer Motion"].map(
                    (tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`text-xs px-3 py-1 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-200"} ${theme.text}`}
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
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme.text}`}>
              Get In <span className={theme.primary}>Touch</span>
            </h2>
            <div className={`w-20 h-1 mx-auto ${darkMode ? "bg-blue-400" : "bg-blue-600"}`}></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left side - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`p-8 rounded-xl shadow-sm ${theme.card} ${theme.border} transition-colors duration-300`}
            >
              <h3 className={`text-xl font-semibold mb-6 ${theme.text}`}>Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={`M${item.icon === 'phone' ? '3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' : 
                          item.icon === 'envelope' ? '3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' : 
                          '17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z'}`} />
                      </svg>
                    </div>
                    {item.link ? (
                      <a href={item.link} className={`hover:${theme.primary} transition-colors ${theme.text}`}>
                        {item.text}
                      </a>
                    ) : (
                      <span className={theme.text}>{item.text}</span>
                    )}
                  </motion.div>
                ))}
                <div className="flex space-x-4 pt-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"} transition-colors`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`p-8 rounded-xl shadow-sm ${theme.card} ${theme.border} transition-colors duration-300`}
            >
              <h3 className={`text-xl font-semibold mb-6 ${theme.text}`}>Send Me a Message</h3>
              <motion.form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { delay: 0.2, duration: 0.5 } }}
                viewport={{ once: true }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="from_name" className={`block mb-2 ${theme.text}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    className={`w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${darkMode ? "bg-gray-700 border-gray-600 focus:ring-blue-400" : "bg-white border-gray-300 focus:ring-blue-500"} border`}
                    placeholder="Your name"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="from_email" className={`block mb-2 ${theme.text}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    className={`w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${darkMode ? "bg-gray-700 border-gray-600 focus:ring-blue-400" : "bg-white border-gray-300 focus:ring-blue-500"} border`}
                    placeholder="Your email"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className={`block mb-2 ${theme.text}`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={`w-full rounded-lg px-4 py-3 h-32 focus:outline-none focus:ring-2 ${darkMode ? "bg-gray-700 border-gray-600 focus:ring-blue-400" : "bg-white border-gray-300 focus:ring-blue-500"} border`}
                    placeholder="Your message"
                    required
                  ></textarea>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.5 } }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full px-8 py-3 rounded-full font-medium ${theme.button} transition-colors`}
                  >
                    Send Message
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 ${darkMode ? "bg-gray-800" : "bg-gray-100"} border-t ${darkMode ? "border-gray-700" : "border-gray-200"} transition-colors duration-300`}>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${darkMode ? "bg-blue-400" : "bg-blue-600"}`}></div>
                <span className={`text-xl font-bold ${theme.text}`}>KWIZERA</span>
              </div>
              <p className={`mt-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                Full Stack Developer & UI/UX Designer
              </p>
            </div>

            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-white hover:bg-gray-200"} shadow-sm transition-colors`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className={`border-t ${darkMode ? "border-gray-700" : "border-gray-200"} mt-12 pt-8 text-center ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
            <p>
              &copy; {new Date().getFullYear()} Ferdinand KWIZERA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernPortfolio;