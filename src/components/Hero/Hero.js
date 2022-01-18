import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200 text-base-content shadow-lg rounded-box">
      <div className="h-full lg:h-fit">
        <div className="flex h-full lg:h-fit border-2 border-emerald-500 flex-col hero-content lg:flex-row-reverse bg-base-300 rounded-box p-10 lg:p-20">
          <img
            src={"https://i.imgur.com/OGqz5MV.png"}
            className="max-w-sm mask mask-hexagon shadow-2xl "
            alt="The software developer Jackson Hales"
          />
          <div>
            <h4 className="mb-4 text-emerald-500">Hello there, my name is</h4>
            <h1 className="text-6xl font-bold">Jackson Hales</h1>
            <h2 className="text-6xl font-bold opacity-50 mt-2">
              I make software and do things!
            </h2>
            <p className="my-5 max-w-xl">
              I'm a software developer with experience across many technologies
              and platforms. Click below to see what I've been up to.
            </p>
            <button className="btn btn-primary bg-transparent border-emerald-500 text-emerald-500 hover:bg-emerald-200">
              <Link to="/projects">Projects</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
