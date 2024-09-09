import React, { useState } from "react";
import logo from "../img/logo.png";
import { Link } from "react-scroll";
import Button from "../small-Components/Button";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="font-[Open Sans] flex 2xl:w-[75%] 2xl:m-auto justify-between items-center p-2 max-md:bg-[#04000a]">
        <div>
          <img className="w-[25%] md:w-[35%]" src={logo} alt="logo" />
        </div>
        <div className="max-lg:hidden">
          <ul className="flex items-center gap-5 text-white cursor-pointer ">
            <Link to="homepage" spy={true} smooth={true}>
              <li className="hover:text-[#b20e5d] font-semibold">HOME</li>
            </Link>
            <Link to="highlight" spy={true} smooth={true}>
              <li className="hover:text-[#b20e5d]  font-semibold">
                HIGHLIGHTS
              </li>
            </Link>
            <Link to="pricing" spy={true} smooth={true}>
              <li className="hover:text-[#b20e5d]  font-semibold">PRICING</li>
            </Link>
            <Link to="sponser" spy={true} smooth={true}>
              <li className="hover:text-[#b20e5d]  font-semibold">SPONSERS</li>
            </Link>
            <Link to="location" spy={true} smooth={true}>
              <li className="hover:text-[#b20e5d]  font-semibold">LOCATION</li>
            </Link>

            <li>
              <Button name="Buy Ticket" />
            </li>
          </ul>
        </div>
        <button
          onClick={toggleNavbar}
          className="inline-flex bar lg:hidden items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        >
          {isOpen ? (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        {isOpen && (
          <div className="bar lg:hidden flex flex-col w-full  bg-black text-white absolute top-0 left-0 p-4 z-50">
            <div className="lg:hidden text-end" id="mobile-menu">
              <button
                onClick={toggleNavbar}
                className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                {isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  ""
                )}
              </button>
            </div>
            <ul className="flex flex-col justify-center items-center gap-4 m-auto">
              <Link to="homepage" spy={true} smooth={true}>
                <li className="hover:text-[#b20e5d] font-semibold">HOME</li>
              </Link>
              <Link to="highlight" spy={true} smooth={true}>
                <li className="hover:text-[#b20e5d]  font-semibold">
                  HIGHLIGHTS
                </li>
              </Link>
              <Link to="pricing" spy={true} smooth={true}>
                <li className="hover:text-[#b20e5d]  font-semibold">PRICING</li>
              </Link>
              <Link to="sponser" spy={true} smooth={true}>
                <li className="hover:text-[#b20e5d]  font-semibold">
                  SPONSERS
                </li>
              </Link>
              <Link to="location" spy={true} smooth={true}>
                <li className="hover:text-[#b20e5d]  font-semibold">
                  LOCATION
                </li>
              </Link>
              <li>
                <Button name="Buy Ticket" />
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
