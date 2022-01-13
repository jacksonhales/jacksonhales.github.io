import React from "react";

export default function UserCard() {
  return (
    <div className="card glass lg:card-side text-neutral-content">
      <figure className="p-6">
        <img
          src="../../images/profile.png"
          alt="Profile"
          className="rounded-lg shadow-lg"
        />
      </figure>
      <div className="max-w-md card-body">
        <h2 className="card-title">Jackson Hales</h2>
        <p>
          Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente.
        </p>
        <div className="card-actions">
          <button className="btn glass rounded-full">Get Started</button>
        </div>
      </div>
    </div>
  );
}
