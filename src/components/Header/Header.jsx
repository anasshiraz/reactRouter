import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
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
          <div className="flex items-center lg:order-2">
            <Link
              to="/LogIn"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 mr-2"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2"
            >
              Get started
            </Link>
          </div>

          {/* Navigation Menu */}
          <div className="w-full lg:flex lg:items-center lg:w-auto lg:order-1">
            <ul className="flex flex-wrap justify-center lg:justify-start mt-4 lg:mt-0 font-medium lg:flex-row lg:space-x-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-3 duration-200 hover:text-orange-700 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    `block py-2 px-3 duration-200 hover:text-orange-700 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Contact"
                  className={({ isActive }) =>
                    `block py-2 px-3 duration-200 hover:text-orange-700 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/GitHub"
                  className={({ isActive }) =>
                    `block py-2 px-3 duration-200 hover:text-orange-700 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    }`
                  }
                >
                  GitHub
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
