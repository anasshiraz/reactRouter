import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `block rounded-md py-2 px-3 duration-200 hover:text-orange-700 hover:bg-orange-50 lg:hover:bg-transparent ${
      isActive ? "text-orange-700" : "text-gray-700"
    }`;

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          {/* Buttons */}
          <div className="flex items-center gap-2 lg:order-2">
            <Link
              to="/LogIn"
              className="hidden sm:inline-flex text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2"
            >
              Get started
            </Link>
            <button
              type="button"
              className="inline-flex items-center p-2 text-gray-700 rounded-md lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-300"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Menu */}
          <div
            id="mobile-menu"
            className={`${isMenuOpen ? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto lg:order-1`}
          >
            <ul className="mt-4 grid grid-cols-1 gap-1 font-medium rounded-lg border border-gray-100 p-2 bg-gray-50 lg:mt-0 lg:flex lg:flex-row lg:space-x-4 lg:gap-0 lg:border-0 lg:bg-transparent lg:p-0">
              <li>
                <NavLink
                  to="/"
                  className={navLinkClasses}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/About"
                  className={navLinkClasses}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Contact"
                  className={navLinkClasses}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/GitHub"
                  className={navLinkClasses}
                  onClick={() => setIsMenuOpen(false)}
                >
                  GitHub
                </NavLink>
              </li>

              <li className="sm:hidden">
                <Link
                  to="/LogIn"
                  className="block rounded-md py-2 px-3 text-gray-700 hover:text-orange-700 hover:bg-orange-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
