import React from "react";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="p-10 footer bg-base-200 text-base-content footer-center shadow-lg my-4 rounded-box">
      <div>
        <div className="grid grid-flow-col gap-4 text-white">
          <a href="https://discordapp.com/users/sonovajack#4084">
            <Icon className="h-8 w-8" icon="simple-icons:discord" />
          </a>
          <a href="https://www.linkedin.com/in/jackson-hales-688b22a0/">
            <Icon className="h-8 w-8" icon="brandico:linkedin-rect" />
          </a>
          <a href="https://github.com/jacksonhales">
            <Icon className="h-8 w-8" icon="akar-icons:github-fill" />
          </a>
        </div>
      </div>
      <div>
        <p>A website by Jackson Hales</p>
        <div className="flex flex-row">
          <p>Made with: </p>
          <div className="flex flex-row space-x-1 ml-2">
            <Icon icon="logos:react" />
            <Icon icon="logos:tailwindcss-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
}
