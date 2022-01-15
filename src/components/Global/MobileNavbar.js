import React from "react";
import { Link } from "react-router-dom";
import { DownloadIcon } from "@heroicons/react/solid";

export default function MobileNavbar() {
  return (
    <div className="py-4 absolute right-0 top-20 mr-4 z-10 lg:hidden bg-transparent">
      <ul className="menu py-3 shadow-lg bg-base-100 rounded-box">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/photography">Photography</Link>
        </li>
        <li>
          <button className="m-4 btn btn-xs w-24 mx-auto bg-transparent border-emerald-500 text-emerald-500 hover:bg-emerald-100">
            <div className="flex flex-col">
              <a
                target="_self"
                href="https://github.com/jacksonhales/jacksonhales.github.io/blob/15b331e619b806fbb785366a91afa2eac0e61946/src/media/docs/Jackson%20Hales%20Resume.pdf?raw=true"
                rel="noreferrer"
              >
                <DownloadIcon className="h-3 w-3 text-emerald-500 float-left mr-1" />
                Resume
              </a>
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
}
