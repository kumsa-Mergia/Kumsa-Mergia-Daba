import React from "react";
import linkedin from "../../assets/icon/linkedin.png";
import gmail from "../../assets/icon/gmail.png";
import github from "../../assets/icon/github.png";
import telegram from "../../assets/icon/telegram.png";
import { linkData } from "../../Mydata/data";
const Contact = () => {
  const imageMap = {
    github: github,
    linkedin: linkedin,
    gmail: gmail,
    telegram: telegram,
  };
  return (
    <div className="bg-custom-gray py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side (Get In Touch) */}
          <div className="md:pr-8">
            <h2 className="text-3xl font-semibold mb-4 text-white">
              📩 Get In Touch
            </h2>
            <p className="text-gray-300 mb-6">
              Have a question or want to collaborate? Feel free to reach out!
              I’ll get back to you as soon as possible. Feel free to contact ?
            </p>
            <div className="flex items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-gray-300">+251984826727</span>
            </div>
            <div className="flex items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-gray-300">kumsamega@gmail.com</span>
            </div>
            <div className="flex items-start mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-gray-300">Addis Ababa, Ethiopia</span>
            </div>
            {/* social Icons */}
            <div className="flex space-x-4">
              <div className="flex justify-center md:justify-start gap-6 mt-3">
                {linkData.map((link) => (
                  <a
                    key={link.name}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="h-10 w-10 rounded-full transition-transform transform hover:scale-110"
                      src={imageMap[link.image]}
                      alt={link.name}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Right Side (Send Us Message) */}
          <div className="bg-white rounded-lg shadow-md p-2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Send Message
            </h3>
            <form
              action="https://formsubmit.co/kumsamega@gmail.com"
              method="POST"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-200"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-200"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-200"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
