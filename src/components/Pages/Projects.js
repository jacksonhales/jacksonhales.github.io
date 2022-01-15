import React from "react";
import ProjectCard from "../Cards/ProjectCard";

export default function Projects() {
  return (
    <div className="min-h-screen">
      <div className="bg-neutral grid grid-cols-1 content-center mx-auto rounded-box p-4">
        <h1 className="text-center text-4xl uppercase tracking-wider m-4 text-emerald-500">
          Projects
        </h1>
        <div className="flex flex-col xl:flex-row h-fit content-center mx-auto m-4 gap-8">
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
        </div>
      </div>
    </div>
  );
}
