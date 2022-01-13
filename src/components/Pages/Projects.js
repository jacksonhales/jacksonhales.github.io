import React from "react";
import ProjectCard from "../Cards/ProjectCard";

export default function Projects() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-auto space-x-8">
        <ProjectCard
          title="This Website"
          src="../../images/profile.png"
          description="test"
          tags={["React", "TailwindCSS", "DaisyUI"]}
        />
        <ProjectCard
          title="Astrophysics Desk Allocation System"
          src="../../images/profile.png"
          description="test"
          tags={["React", "TypeScript", "ESLint", "TailwindCSS", "Husky"]}
        />
        <ProjectCard
          title="Memory Attack"
          src="../../images/profile.png"
          description="test"
          tags={["C++", "SDL2", "Aseprite"]}
        />
      </div>
    </div>
  );
}
