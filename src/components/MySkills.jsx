import React from "react";

const MySkills = () => {
  return (
    <div className=" lg:w-full w-80 md:w-full h-full h-fit lg:mx-auto mx-5 my-5 md:my-0 lg:my-5 mb-10">
      <div className="flex flex-col mx-auto gap-5">
        <div className="flex mx-auto text-center text-blue-600 font-black text-5xl my-4">
          Skills
        </div>
        <div className="flex flex-col items-center gap-10 md:w-10/11 lg:w-full">
          {/* Frontend Development */}
          <div className="flex">
            <div className="lg:w-2/3 border-3 border-orange-600 p-6 rounded-xl bg-white shadow-lg">
              <h1 className="font-black text-orange-600 text-2xl hover:text-blue-600 transition-all duration-300">
                Frontend Development
              </h1>
              <p>
                Proficient in HTML, CSS, JavaScript, and frameworks like React.js, Tailwind CSS, and Bootstrap. I craft
                interactive and responsive UIs with a strong focus on user experience and aesthetics.
              </p>
            </div>
          </div>
          
          {/* Backend Development */}
          <div className="flex lg:flex-row-reverse">
            <div className="lg:w-2/3 border-3 border-orange-600 p-6 rounded-xl bg-white shadow-lg">
              <h1 className="font-black text-orange-600 text-2xl hover:text-blue-600 transition-all duration-300">
                Backend Development & Databases
              </h1>
              <p>
                Skilled in building robust APIs and backend services using Node.js (Express), Django, PHP, and Java.
                I develop scalable and secure backend solutions with well-structured database integration. My database expertise includes
                MongoDB for NoSQL flexibility, MySQL for structured relational data, and PostgreSQL for advanced SQL-based applications.
                I ensure optimized query performance, secure data transactions, and seamless backend-database interactions.
              </p>
            </div>
          </div>
          
          {/* Mobile Development */}
          <div className="flex">
            <div className="lg:w-2/3 border-3 border-orange-600 p-6 rounded-xl bg-white shadow-lg">
              <h1 className="font-black text-orange-600 text-2xl hover:text-blue-600 transition-all duration-300">
                Mobile App Development
              </h1>
              <p>
                Experience in developing mobile applications using Android Studio (Java), Flutter (Dart), and React Native.
                I create cross-platform and native apps with seamless performance.
              </p>
            </div>
          </div>
          
          {/* UX/UI Design */}
          <div className="flex lg:flex-row-reverse">
            <div className="lg:w-2/3 border-3 border-orange-600 p-6 rounded-xl bg-white shadow-lg">
              <h1 className="font-black text-orange-600 text-2xl hover:text-blue-600 transition-all duration-300">
                UX / UI Design
              </h1>
              <p>
                Passionate about crafting intuitive user interfaces using Figma, Photoshop, and Illustrator.
                I design visually appealing and user-centric experiences that enhance usability.
              </p>
            </div>
          </div>
          
          {/* Tools & Platforms */}
          <div className="flex">
            <div className="lg:w-2/3 border-3 border-orange-600 p-6 rounded-xl bg-white shadow-lg">
              <h1 className="font-black text-orange-600 text-2xl hover:text-blue-600 transition-all duration-300">
                Tools & Platforms
              </h1>
              <p>
                Proficient with essential development tools such as Git, Docker, VS Code (my favorite editor), Postman, Linux,
                and GitHub. These tools enhance my workflow and efficiency in software development.
              </p>
            </div>
          </div>
          
          {/* Programming Languages */}
          <div className="flex lg:flex-row-reverse">
            <div className="lg:w-2/3 border-3 border-orange-600 p-6 rounded-xl bg-white shadow-lg">
              <h1 className="font-black text-orange-600 text-2xl hover:text-blue-600 transition-all duration-300">
                Other Programming Languages
              </h1>
              <p>
                Apart from my main tech stack, I have experience in C, C++, VBA, and Bash programming, allowing me
                to handle various development challenges across different platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
