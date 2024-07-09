import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-800 to-pink-600 p-4">
      <div className="container-fluid px-100 flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">MyApp</span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
            <FiMenu className="h-6 w-6" />
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center sm:justify-end lg:justify-between lg:w-auto ${
            isOpen ? "" : "hidden"
          }`}>
          <div className="lg:flex lg:justify-center  lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white lg:mx-5">
              Home
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white lg:mx-5">
              About
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white lg:mx-5">
              Contact
            </a>
          </div>
          <div className="lg:flex lg:items-center lg:justify-around lg:mx-5">
            <a
              href="#"
              className="lg:mx-2 block w-20 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0">
              Login
            </a>
            <a
              href="#"
              className="lg:mx-2 block w-20 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0">
              SignUp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
