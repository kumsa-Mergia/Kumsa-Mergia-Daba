import React, { useState } from "react";
import logo from "../../assets/img/logo.jpg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const NavbarMenu = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "About",
      link: "/about",
    },
    {
      id: 3,
      title: "Projects",
      link: "/projects",
    },
    {
      id: 4,
      title: "Contact",
      link: "/contact",
    },
  ];

  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDownloadResume = () => {
    const resumePath = "/resume.pdf"; //Place the file in your public folder.
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "resume.pdf"; // Specify the desired filename.
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="items-center">
      <div className="flex justify-between ">

      <div className="flex items-center gap-3 w-full sm:w-auto">
        <Link to="/">
          <img
            className="rounded-full h-12 w-14 items-center"
            src={logo}
            alt="Logo"
          />
        </Link>
        <h1 className="font-bold text-2xl text-white md:block">Kumsa</h1>
      </div>

      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="h-10 w-10 fill-current" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.829-4.828 4.829a1 1 0 0 1-1.414-1.414l4.829-4.828-4.829-4.828a1 1 0 0 1 1.414-1.414l4.828 4.829 4.829-4.829a1 1 0 0 1 1.414 1.414l-4.829 4.828 4.829 4.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`w-full sm:w-auto mt-4 sm:mt-0 ${
          isMenuOpen ? "block" : "hidden"
        } sm:flex sm:items-center sm:justify-end`}
      >
        <ul className="flex flex-col sm:flex-row items-center text-white text-1.5xl">
          {NavbarMenu.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                className={`inline-block py-1 px-3 hover:border-b-2 hover:text-yellow-300 font-bold ${
                  location.pathname === item.link
                    ? "border-b-2 border-yellow-300"
                    : ""
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 sm:mt-0 hidden md:block">
        <button
          className="hover:bg-yellow-300 text-yellow-300 font-semibold hover:text-black rounded-md border-2 border-yellow-250 px-6 py-2 transition duration-200"
          onClick={handleDownloadResume}
        >
          Download Resume
        </button>
      </div>
      </div>

    </nav>
  );
};

export default Navbar;
