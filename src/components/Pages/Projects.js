import React from "react";
import ProjectCard from "../Cards/ProjectCard";

export default function Projects() {
  return (
    <div className="min-h-screen">
      <div className="bg-neutral max-w-7xl grid grid-cols-1 content-center mx-auto rounded-box">
        <h1 className="text-center text-4xl uppercase m-4 text-emerald-500">
          Projects
        </h1>
        <div className="flex flex-col lg:flex-row content-center mx-auto gap-4 max-w-7xl m-8">
          <ProjectCard
            title="This Website"
            src={"https://i.imgur.com/jpmrP3K.png"}
            description="Built a custom portfolio website to show off what I've been up to."
            tags={["React", "TailwindCSS", "DaisyUI"]}
          />
          <ProjectCard
            title="Desk Allocation System"
            src="https://i.imgur.com/5n4PxoC.png"
            description="test"
            tags={["React", "TypeScript", "ESLint", "TailwindCSS", "Husky"]}
          />
          <ProjectCard
            title="Memory Attack"
            src={"https://i.imgur.com/7SI5KvY.png"}
            description="test"
            tags={["C++", "SDL2", "Aseprite"]}
          />
        </div>
      </div>
    </div>
  );
}
