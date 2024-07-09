import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white py-8 ">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">TureSight</h3>
              <p className="text-gray-400">Federal,Capital</p>
              <p className="text-gray-400">Email: wiserfeed@gmail.com</p>
              <p className="text-gray-400">Phone: (123) 456-7890</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="text-gray-400">
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/aboutus" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/services" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/contactus" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4 justify-center">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.602 0 0 .602 0 1.351v21.298C0 23.398.602 24 1.325 24H12.82v-9.294H9.692v-3.623h3.128V8.413c0-3.1 1.891-4.788 4.656-4.788 1.324 0 2.462.098 2.795.142v3.24l-1.918.001c-1.505 0-1.796.716-1.796 1.764v2.31h3.587l-.467 3.623h-3.12V24h6.116C23.398 24 24 23.398 24 22.649V1.351C24 .602 23.398 0 22.675 0z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    ={" "}
                    <path d="M24 4.557a9.828 9.828 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.937 13.937 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.904 4.904 0 01-2.224-.615v.061a4.916 4.916 0 003.946 4.827 4.899 4.899 0 01-2.213.084 4.919 4.919 0 004.594 3.419A9.869 9.869 0 010 19.54a13.9 13.9 0 007.548 2.212c9.057 0 14.01-7.51 14.01-14.01 0-.213-.005-.426-.014-.637A10.005 10.005 0 0024 4.557z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.31.976.976 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.976.976-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.976-.976-1.249-2.242-1.311-3.608C2.175 15.583 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.976-.976 2.242-1.249 3.608-1.311 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.755 0 8.336.013 7.053.072 5.738.132 4.445.478 3.359 1.564c-1.086 1.086-1.432 2.379-1.492 3.694C1.514 7.336 1.5 7.755 1.5 12c0 4.245.014 4.664.072 5.947.06 1.315.406 2.608 1.492 3.694 1.086 1.086 2.379 1.432 3.694 1.492C8.336 23.987 8.755 24 12 24c4.245 0 4.664-.014 5.947-.072 1.315-.06 2.608-.406 3.694-1.492 1.086-1.086 1.432-2.379 1.492-3.694.058-1.283.072-1.702.072-5.947 0-4.245-.014-4.664-.072-5.947-.06-1.315-.406-2.608-1.492-3.694-1.086-1.086-2.379-1.432-3.694-1.492C15.664.013 15.245 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-4 text-center">
            <p className="text-gray-400">
              &copy; 2024 Raja Usama.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
