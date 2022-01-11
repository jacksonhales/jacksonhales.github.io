import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="float-left">
        <Link to="/">Jackson Hales</Link>
      </div>
      <div>
        <ul className="flex flex-auto justify-between">
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
