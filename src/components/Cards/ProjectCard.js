import React from "react";

export default function ProjectCard(props) {
  return (
    <div className="card card-bordered max-w-sm">
      <figure>
        <img src={props.src} className="w-full" alt="Project profile" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        <div className="card-actions">
          {props.tags.map((tag) => {
            return <div className="badge badge-ghost">{tag}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
