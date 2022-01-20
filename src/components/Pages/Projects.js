import React from "react";
import ProjectCard from "../Cards/ProjectCard";

export default function Projects() {
  return (
    <div className="h-full w-full">
      <div className="bg-neutral rounded-box lg:p-8 lg:w-full">
        <div className="bg-base-300 border-2 border-emerald-500 w-full py-8 px-4 lg:px-15 rounded-box">
          <h1 className="text-center text-4xl uppercase tracking-wider pb-8 text-emerald-500">
            Projects
          </h1>
          <div className="flex flex-wrap flex-row place-content-evenly h-fit gap-4">
            <ProjectCard
              title="This Website"
              src={"https://i.imgur.com/jpmrP3K.png"}
              description="A custom portfolio website to show off what I've been up to."
              tags={["React", "TailwindCSS", "DaisyUI", "Visual Studio Code"]}
            />
            <ProjectCard
              title="Desk Allocation System"
              src="https://i.imgur.com/5n4PxoC.png"
              description="A system built for the Computer Science Capstone Project, used by Swinburnes' Centre for Astrophysics and Supercomputing to manage their workspaces."
              tags={[
                "React",
                "TypeScript",
                "ESLint",
                "TailwindCSS",
                "Husky",
                "Visual Studio Code",
              ]}
            />
            <ProjectCard
              title="Memory Attack"
              src={"https://i.imgur.com/kUOXid4.png"}
              description="A card battle game where you build your hand by matching two and can face off against NPCs of varying difficulty."
              tags={["C++", "SDL2", "Aseprite", "Visual Studio 2019"]}
            />
            <ProjectCard
              title="Flogger"
              src={"https://i.imgur.com/Ui9Skxc.png"}
              description="A fitness routine tracking Android application."
              tags={[
                "Android Studio",
                "Android Room",
                "Kotlin",
                "Material Design",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
