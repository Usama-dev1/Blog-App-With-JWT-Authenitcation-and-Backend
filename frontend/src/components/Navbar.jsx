import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import Gravatar from "react-gravatar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userString = localStorage.getItem("email");
    const user = setUser(userString);
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    // Optionally, navigate to the login page or home page
    window.location.href = "/";
  };

  return (
    <nav className="bg-black sticky p-4">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">BLOG APP</span>
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
          <div className=" lg:flex lg:justify-center  lg:flex-grow">
            <a
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white lg:mx-5">
              Home
            </a>

            <a
              href="/services"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white lg:mx-5">
              Services
            </a>
            <a
              href="/aboutus"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white lg:mx-5">
              About
            </a>
            <a
              href="/contactus"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white lg:mx-5">
              Contact Us
            </a>
          </div>
          <div className="lg:flex lg:items-center lg:justify-around lg:mx-5">
            {isLoggedIn ? (
              <>
                <div className="flex items-end">
                  <div className="flex flex-col">
                    <span className="text-sm text-white">{user}</span>
                    <a
                      href="/dashboard"
                      className=" w-20 text-sm text-white border text-center border-white rounded hover:border-white hover:bg-white hover:text-purple-800 transition duration-300 sm:block w-230">
                      dashboard
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="lg:mx-2 block w-20 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0">
                  Logout
                </button>
              </>
            ) : (
              <>
                <a
                  href="/login"
                  className="lg:mx-2 inline-block w-20 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0">
                  Login
                </a>
                <a
                  href="/signup"
                  className="lg:mx-2 block w-20 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0">
                  SignUp
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
