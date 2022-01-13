import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar my-4 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div className="px-2 mx-2 navbar-start">
        <span className="text-lg font-bold text-emerald-500">
          <Link to="/">Jackson Hales</Link>
        </span>
      </div>
      <div className="hidden px-2 mx-2 navbar-center lg:flex">
        <div className="flex items-stretch space-x-8 uppercase">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/photography">Photography</Link>
          <button className="btn btn-xs bg-transparent border-emerald-500 text-emerald-500 hover:bg-emerald-100">
            <Link to="/resume">Resume</Link>
          </button>
        </div>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
