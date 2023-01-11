// Logo
import Logo from "./../supports/assets/name.jpg";

import "./navbar.css";

import { MdLocationOn } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const idPattern = /\/product\/[0-9]+/ // using regex

export default function Navbar(props) {
  const location = useLocation(); // Digunakan untuk mendapatkan pathname

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="navbar fixed w-screen flex px-10 ">
        <div className="flex items-center">
          <Link to="/">
            <img src={Logo} width="50px" height="50px" />
          </Link>
          {location.pathname === "/register" ||
          location.pathname === "/login" ||  idPattern.test(location.pathname) ? null : (
            <>
              <span className="pl-10 font-bold carts">
                <Link to="/cart">Carts</Link>
              </span>
              <span className="pl-10 font-bold order">
                <Link to="/menu">Order</Link>
              </span>
              <span className="pl-10 font-bold">
                <Link to="*">Gift</Link>
                </span>
            </>
          )}
        </div>
        
        <div className="flex">
          {location.pathname === "/register" || location.pathname === "/login"? null : (
            <>
              <div className="items-center hidden md:flex">
                <MdLocationOn />
                <span className="mr-10 font-bold  ">Find a store</span>
              </div>
              {props.data.username ? (
                <div className="flex items-center">
                  <div className="font-bold">{props.data.username}</div>
                  <span className="my-fs-20 ml-1 font-bold">
                    <CgProfile title="click here for Logout" onClick={props.myFunc.onLogout}
                     />
                  </span>
                </div>
              ) : (
                <>
                  <button className="my-bg-main font-semibold my-light rounded-full mr-3 px-3 py-2 hidden sm:flex">
                    <Link to="/login">Sign in</Link>
                  </button>
                  <button
                    className="my-dark hidden sm:flex rounded-full font-semibold px-3 py-2"
                    style={{ border: "1px solid black" }}
                  >
                    <Link to="/register">Join now</Link>
                  </button>

                  <div className="relative">
                <button
                  className="flex items-center px-3 py-2 rounded text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 sm:hidden"
                  onClick={toggleMenu} // Add an event handler to toggle the value of "isOpen"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>

                <div
                  className={`fixed top-0 right-0 left-auto z-50 flex items-center justify-center group-focus:block group-focus:opacity-100 transition-opacity duration-150 ease-in-out ${
                    isOpen ? "block" : "hidden"
                  }`} // Show or hide the menu options based on the value of "isOpen"
                >
                  <div className="relative w-full bg-white rounded-lg shadow-xl py-[60px] px-6 flex-col">
                    <div
                      href="#"
                      className="block flex justify-end py-2 px-4 font-semibold rounded-lg text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
                    >
                        <div className="border-2 inline rounded-full my-bg-main mr-3 px-4 py-2 ">
                            <Link to="/login">Sign in</Link>
                        </div>
                    </div>
                    <a
                      href="#"
                      className="block flex justify-end py-2 px-4 font-semibold text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
                    >
                        <div className="border-2 inline rounded-full mr-3 px-3 py-2 ">
                            <Link to="/register">Join now</Link>
                        </div>
                      
                    </a>
                  </div>
                  <button
                    className="absolute top-0 right-0 pt-4 mr-4"
                    onClick={toggleMenu} // Add an event handler to toggle the value of "isOpen"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
