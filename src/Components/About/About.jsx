import React, { useState, useEffect } from "react";
import { technologyData } from "../../Mydata/data";
import ansible from "../../assets/technology/ansible.png";
import bootstrap from "../../assets/technology/bootstrap.png";
import css from "../../assets/technology/css.png";
import docker from "../../assets/technology/docker.png";
import exchangeServer from "../../assets/technology/exchange-server.png";
import git from "../../assets/technology/git.png";
import html from "../../assets/technology/html.png";
import javascript from "../../assets/technology/javascript.png";
import kubernetes from "../../assets/technology/kubernetes.png";
import linux from "../../assets/technology/linux.png";
import nutanix from "../../assets/technology/nutanix.png";
import nutanix2 from "../../assets/technology/nutanix2.svg";
import python from "../../assets/technology/python.png";
import react from "../../assets/technology/react.png";
import tailwind from "../../assets/technology/tailwind.png";
import terraform from "../../assets/technology/terraform.png";
import vmwareJpg from "../../assets/technology/vmware.jpg";
import vmware2 from "../../assets/technology/vmware2.png";
import vscode from "../../assets/technology/vscode.png";
import windowsServer from "../../assets/technology/windows-server.png";
import kumsa from "../../assets/img/images.png";

const About = () => {
  const imgMap = {
    ansible: ansible,
    bootstrap: bootstrap,
    css: css,
    docker: docker,
    exchangeServer: exchangeServer,
    git: git,
    html: html,
    javascript: javascript,
    kubernetes: kubernetes,
    linux: linux,
    nutanix: nutanix,
    nutanix2: nutanix2,
    python: python,
    react: react,
    tailwind: tailwind,
    terraform: terraform,
    vmwareJpg: vmwareJpg,
    vmware2: vmware2,
    vscode: vscode,
    windowsServer: windowsServer,
  };

  const [iconsVisible, setIconsVisible] = useState(false);

  useEffect(() => {
    setIconsVisible(true);
  }, []);

  return (
    <div className="text-white">
      {/* About Me */}

      <div className="py-3">
        <h1 className="py-3 text-4xl text-center underline decoration-yellow-300">
          About Me
        </h1>
        <p className="text-center text-yellow-300">Something about me</p>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center items-center transition-opacity">
            <img src={kumsa} className="rounded-4xl h-50 w-120" />
          </div>

          <div>
            <p className="p-1 italic pt-5 text-gray-300 text-lg md:text-xl">
              Hi, I'm Kumsa Mergia, a passionate Frontend Developer and IT
              Infrastructure Engineer...
              <span id="initialText">
                As a frontend developer, I craft modern, responsive, and
                visually appealing web applications using HTML, CSS, JavaScript,
                React, Tailwind CSS, and Bootstrap. I focus on creating
                user-friendly interfaces that enhance digital experiences.
                Currently, I am deepening my knowledge of Azure and Terraform,
                while balancing my professional work with continuous learning
                and self-improvement.
              </span>
              <span id="moreText" className="hidden">
                <br />
                <br />
                I hold a BSc in Computer Science from Ambo University and a
                Diploma in IT from Woliso Polytechnic College. Currently, I live
                in Addis Ababa, Ethiopia.
                <br />
                <br />
                My goal is to leverage technology to build scalable and
                efficient solutions, whether in cloud infrastructure or
                front-end development. Outside of work, I enjoy reading,
                exercising, and meditation, as well as improving my English
                communication skills to collaborate effectively in global teams.
                Let's connect and create something amazing!
              </span>
              <button
                id="seeMoreButton"
                className="text-yellow-300 hover:underline"
                onClick={() => {
                  const moreText = document.getElementById("moreText");
                  const initialText = document.getElementById("initialText");
                  const button = document.getElementById("seeMoreButton");

                  if (moreText.classList.contains("hidden")) {
                    moreText.classList.remove("hidden");
                    button.textContent = "See Less";
                    initialText.classList.add("hidden");
                  } else {
                    moreText.classList.add("hidden");
                    button.textContent = "See More";
                    initialText.classList.remove("hidden");
                  }
                }}
              >
                See More
              </button>
            </p>
          </div>
        </div>
      </div>

      <hr className=" border-b-1 text-yellow-300" />

      {/* What can I Offer */}

      <div className="py-3">
        <h1 className="py-3 text-2xl text-center underline decoration-white text-yellow-300">
          What Can I Offer?
        </h1>
        <p className="pt-5 text-gray-300">
          As a Frontend Developer & Cloud/Infrastructure Engineer, I bring a
          unique blend of skills in web development, cloud computing, and
          automation. Here’s how I can add value:
        </p>
        {/* card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-8">
          {/* one */}
          <div className="p-3 bg-custom-gray  rounded-lg shadow-md flex flex-col items-center">
            <p className="text-yellow-200">👨‍💻 Frontend Development</p>
            <ul className="text-gray-300">
              <li>
                Building responsive, user-friendly websites with React, Next.js,
                and modern JavaScript frameworks.
              </li>
              <li>
                Creating interactive UI/UX experiences with Tailwind CSS,
                Material UI, and CSS animations.
              </li>
              <li>
                Optimizing performance for fast and scalable web applications.
              </li>
            </ul>
          </div>
          {/* two */}
          <div className="p-3 bg-custom-gray  rounded-lg shadow-md flex flex-col items-center">
            <p className="text-yellow-200">👨‍💻 Infrastructure Solutions</p>
            <ul className="text-gray-300">
              <li>
                Expertise in managing and optimizing cloud infrastructure, with
                hands-on experience in VMware, Nutanix, and IBM Cloud
              </li>
              <li>
                Streamlining processes through automation with tools like
                Terraform, Ansible, and Docker to enhance efficiency and
                scalability.
              </li>
              <li>
                Implementing robust monitoring solutions using Prometheus and
                Grafana to ensure your systems are always running smoothly.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className=" border-b-1 text-yellow-300" />
      {/* Skill & Expertise */}
      <div className="py-8">
        <h1 className="text-3xl font-semibold text-center text-yellow-300 mb-6 border-b-2 border-yellow-300 pb-2 w-fit mx-auto">
          Technology I Use
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-center">
          {technologyData.map((item) => (
            <div
              key={item.name}
              className={`bg-gray-800 rounded-xl p-4 shadow-md shadow-gray-700 hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center`}
            >
              <img
                src={imgMap[item.image]}
                className="w-15 h-15 mb-3 object-contain"
                alt={item.name}
              />
              <p className="text-yellow-200 text-sm font-medium">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
