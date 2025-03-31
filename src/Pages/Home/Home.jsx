import React from "react";
import linkedin from "../../assets/icon/linkedin.png";
import gmail from "../../assets/icon/gmail.png";
import github from "../../assets/icon/github.png";
import telegram from "../../assets/icon/telegram.png";
import { HomeData } from "../../Mydata/data";
import profile from "../../assets/img/kum-AI.jpg";
import Terminal from "../Terminal/Terminal";
import { linkData } from "../../Mydata/data";
import About from "../../Components/About/About";
import Contact from "../../Components/Contacts/Contact";
import Projects from "../../Components/Projects/Projects";

const Home = () => {
  const item = HomeData[0];
  const imageMap = {
    github: github,
    linkedin: linkedin,
    gmail: gmail,
    telegram: telegram,
  };

  return (
    // <div className="py-15 p-5 grid grid-cols-1 md:grid-cols-2">
    <div className="py-15  w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 p-5">
      {/* Left Column */}
      <div className="w-full">
        <h1 className="text-white text-3xl md:text-4xl font-bold">
          {item.title}
        </h1>
        <h2 className="p-1 text-sm text-amber-200">{item.subtitle}</h2>
        <p className="pt-5 text-gray-300 text-lg md:text-xl">
          {item.description1}
        </p>
        <p className="pt-5 text-gray-300 text-lg md:text-xl">
          {item.description2}
        </p>
        <div className="p-5 pt-5 flex justify-between text-white">
          <div className="flex gap-2">
          <img src={profile} alt="Profile" className="rounded-full h-15 w-15" />
          <div className="grid">
            <p className="font-bold">Kumsa Mergia.</p>
            <p className="text-sm text-amber-200">Front-End | Devops</p>
          </div>
          </div>
          <div className="">
            {" "}
            {/* Adjusted margin for mobile layout */}
            <button className="bg-yellow-300 hover:bg-black hover:text-yellow-300 font-semibold text-black rounded-md border-2 border-yellow-250 px-6 py-2">
              contact me
            </button>
          </div>
        </div>
        {/* Connect sectio */}
        {/* Connect Section */}
        <div className="mt-8 text-center">
          <p className="text-white text-lg font-semibold">FIND ME ON</p>
          <p className="text-gray-300 text-sm">
            Feel free to{" "}
            <span className="text-yellow-300 font-bold">connect</span> with me
          </p>
          <div className="flex justify-center gap-4 mt-3">
            {linkData.map((link) => (
              <a
                key={link.name}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110"
              >
                <img
                  src={imageMap[link.image]}
                  alt={link.name}
                  className="h-10 w-10 rounded-full"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column (Terminal) - Hidden on Small Screens */}
      <div className="p-2 min-h[907px] hidden md:block">
        <Terminal />
      </div>
      </div>

      <hr className=" border-b-1 text-yellow-300"/>

       <About />
       <hr className=" border-b-1 text-yellow-300"/>

       <Projects />

      <Contact />
    </div>
  );
};

export default Home;
