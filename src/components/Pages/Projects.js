import React from "react";
import ProjectCard from "../Cards/ProjectCard";

export default function Projects() {
  return (
    <div className="h-full">
      <div className="bg-neutral grid grid-cols-1 mx-auto rounded-box p-8">
        <div className="bg-base-300 border-2 border-emerald-500 px-10 pb-10 pt-8 lg:px-20 lg:pb-8 lg:pt-8 w-8/12 mx-auto rounded-box">
          <h1 className="text-center text-4xl uppercase tracking-wider pb-4 text-emerald-500">
            Projects
          </h1>
          <div className="flex flex-col xl:flex-row h-fit lg:items-baseline items-center mx-auto m-4 gap-8">
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
