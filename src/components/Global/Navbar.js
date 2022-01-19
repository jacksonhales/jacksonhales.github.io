import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { DownloadIcon } from "@heroicons/react/solid";
import { MenuIcon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/solid";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="navbar mb-4 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div className="px-2 mx-2 navbar-start">
        <Link
          className="flex flex-row items-center space-x-4 text-lg font-bold text-emerald-500"
          to="/"
        >
          <img
            src="https://i.imgur.com/XTuOBLu.png"
            className="w-10"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="hidden px-2 mx-2 navbar-center lg:flex">
        <div className="flex items-stretch space-x-8 uppercase">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/photography">Photography</Link>
          <button className="btn btn-xs bg-transparent border-emerald-500 text-emerald-500 hover:bg-emerald-200">
            <div className="flex flex-col">
              <a
                target="_self"
                href="https://github.com/jacksonhales/jacksonhales.github.io/blob/main/src/media/docs/Jackson%20Hales%20Resume.pdf?raw=true"
                rel="noreferrer"
              >
                <DownloadIcon className="h-3 w-3 text-emerald-500 float-left mr-1" />
                Resume
              </a>
            </div>
          </button>
        </div>
      </div>
      <div className="navbar-end"></div>
      {/* Mobile hamburger icon */}
      <div className="lg:hidden navbar-end mr-4">
        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          {!isMobileMenuOpen ? (
            <MenuIcon className="w-8 h-8" />
          ) : (
            <XIcon className="w-8 h-8" />
          )}
        </button>
      </div>
      {/* Mobile open transition animation */}
      <Transition show={isMobileMenuOpen}>
        {/* Mobile menu */}
        {(ref) => <MobileNavbar />}
      </Transition>
    </div>
  );
}
