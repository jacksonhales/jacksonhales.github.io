import React from "react";

export default function ProjectCard(props) {
  return (
    <div className="card card-bordered border-2 border-base-100 w-96 bg-base-200 h-full">
      <img
        src={props.src}
        className="h-52 object-cover"
        alt="Project profile"
      />
      <div className="card-body p-4">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        <div className="card-actions">
          {props.tags.map((tag) => {
            return (
              <div key={tag} className="badge bg-base-300 badge-ghost">
                {tag}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
