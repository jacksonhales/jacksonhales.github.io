import React from "react";

export default function ProjectCard(props) {
  return (
    <div className="card card-bordered border-2 border-base-100 w-96 bg-base-100 h-full">
      <figure>
        <img src={props.src} className="h-52" alt="Project profile" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        <div className="card-actions">
          {props.tags.map((tag) => {
            return (
              <div key={tag} className="badge badge-ghost">
                {tag}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
