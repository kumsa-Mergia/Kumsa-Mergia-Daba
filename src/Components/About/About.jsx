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
import kumsa from "../../assets/img/kum-AI.jpg";

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
          about me
        </h1>
        <p className="text-center text-yellow-300">Something about me</p>
        <div className=" p-5 grid grid-cols-1 md:grid-cols-2">
          <div className="p-8  transition-opacity">
            <img src={kumsa} className="rounded-4xl" />
          </div>
          <div>
            <p className="p-1 italic pt-5 text-gray-300 text-lg md:text-xl">
              Hi, I'm Kumsa Mergia, a passionate Frontend Developer and IT
              Infrastructure Engineer with expertise in cloud computing,
              virtualization, and automation. With experience in computing and
              cloud administration, I specialize in managing enterprise
              environments using VMware, Nutanix, IBM virtualization,
              Kubernetes, Terraform, and Ansible.
            </p>
            <p className="p-1 italic pt-5 text-gray-300 text-lg md:text-xl">
              I hold a BSc in Computer Science from Ambo University and a
              Diploma in IT from Woliso Polytechnic College. Currently, I live
              in Addis Ababa, Ethiopia.
            </p>

            <p className="p-1 italic pt-5 text-gray-300 text-lg md:text-xl">
              As a frontend developer, I craft modern, responsive, and visually
              appealing web applications using HTML, CSS, JavaScript, React,
              Tailwind CSS, and Bootstrap. I focus on creating user-friendly
              interfaces that enhance digital experiences. Currently, I am
              deepening my knowledge of Azure and Terraform, while balancing my
              professional work with continuous learning and self-improvement.
            </p>
            <p className="pb-3 italic pt-5 text-gray-300 text-lg md:text-xl">
              My goal is to leverage technology to build scalable and efficient
              solutions, whether in cloud infrastructure or front-end
              development. Outside of work, I enjoy reading, exercising, and
              meditation, as well as improving my English communication skills
              to collaborate effectively in global teams. Let's connect and
              create something amazing!
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
        <div className="py-5 flex flex-wrap justify-center gap-4">
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
          {/* three */}
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
        </div>
        {/* <div className="">
          <div className="bg-custom-gray  rounded-lg shadow-md flex flex-col items-center">
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

        </div> */}

      </div>



      <hr className=" border-b-1 text-yellow-300" />
      {/* Skill & Expertise */}
      <div className="py-3">
        <h1 className="py-3 text-2xl text-center underline decoration-white text-yellow-300">
          technology i use
        </h1>
        <div className="py-5 flex flex-wrap justify-center gap-4">
          {technologyData.map((item) => (
            <div
              key={item.name}
              className={`bg-custom-gray rounded-lg shadow-md shadow-black w-35 flex flex-col items-center tech-icon ${
                iconsVisible ? "visible" : ""
              }`}
            >
              <img
                src={imgMap[item.image]}
                className="w-10 h-10 mb-2 p-1"
                alt={item.name}
              />
              <p className="text-yellow-200">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
