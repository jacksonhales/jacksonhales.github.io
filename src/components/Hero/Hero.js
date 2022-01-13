import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200 shadow-lg rounded-box">
      <div className="flex-col hero-content lg:flex-row-reverse xl:space-x-40">
        <img
          src={"https://i.imgur.com/OGqz5MV.png"}
          className="max-w-sm rounded-box shadow-2xl"
          alt="The software developer Jackson Hales"
        />
        <div>
          <h4 className="mb-4 text-emerald-500">Hello there, my name is</h4>
          <h1 className="text-6xl font-bold">Jackson Hales</h1>
          <h2 className="text-6xl font-bold opacity-50 mt-2">
            I make things and do stuff.
          </h2>
          <p className="my-5 max-w-xl">
            I'm a software developer with experience across many technologies
            and platforms. Click below to see what I've been up to!
          </p>
          <button className="btn btn-primary bg-transparent border-emerald-500 text-emerald-500 hover:bg-emerald-100">
            <Link to="/projects">Projects</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
