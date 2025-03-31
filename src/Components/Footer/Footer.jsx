import React from "react";
import logo from "../../assets/img/logo.jpg";
import linkedin from "../../assets/icon/linkedin.png";
import gmail from "../../assets/icon/gmail.png";
import github from "../../assets/icon/github.png";
import telegram from "../../assets/icon/telegram.png";
import { linkData } from "../../Mydata/data";

const Footer = () => {
  const imageMap = {
    github: github,
    linkedin: linkedin,
    gmail: gmail,
    telegram: telegram,
  };

  return (
    <div className="bg-gradient-to-r  rounded-t-3xl">
      <div className=" text-white">
        {/* Top Section - Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-5 border-t-2 border-gray-300/10">
          {/* Left Column (Logo, Branding, Social) */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            {/* Logo & Branding */}
            <div className="flex items-center gap-4">
              <img className="rounded-full h-14 w-14" src={logo} alt="Logo" />
              <h1 className="font-bold text-3xl text-white">Kumsa</h1>
            </div>
            <p className="text-lg text-center md:text-left leading-relaxed">
              🚀 <span className="text-yellow-300 font-bold">Let’s Build </span>Something Amazing Together!
            </p>
            <p className="text-sm text-gray-300 text-center md:text-left">
              I’m always excited to collaborate on innovative projects—whether it’s
              building high-performance web applications or optimizing cloud
              infrastructure.
            </p>

            {/* Social Icons */}

          </div>

          {/* Center Column (Important Links) */}
          <div className="py-4">
            <h1 className="text-xl font-bold mb-3">Important Links</h1>
            <ul className="space-y-2">
              {["Home", "About", "Projects"].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-yellow-300 transition duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column (About) */}
          <div className="py-4">
            <h1 className="text-xl font-bold mb-3">About</h1>
            <ul className="space-y-2">
              {["What I Offer", "Skills & Expertise", "Personal Touch"].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-yellow-300 transition duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="border-b-1 text-yellow-300"/>

        {/* Copyright */}
        <div className="text-center py-4 border-t-2 border-gray-300/10">
          <span className="text-xl text-yellow-300">
            &copy; {new Date().getFullYear()} Kumsa Mergia
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;