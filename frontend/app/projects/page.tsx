"use client";

import { useState } from "react";

export default function Projects() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(true);
  return (
    <div className="h-full w-full flex [&_*]:transition-colors [&_*]:duration-500 [&_*]:ease-in-out">
      <div className="h-full w-[270px] border-r-[0.5px] border-border">
        <div>
          <button
            onClick={() => setIsProjectsOpen((prev) => !prev)}
            className="cursor-pointer h-[40px] w-full flex p-[20px] items-center border-b-[0.5px] border-border"
          >
            <h3 className="text-highlight">
              <span
                className={`
                  inline-block
                  !transition-transform !duration-200 
                  ${isProjectsOpen ? "rotate-180" : "rotate-0"}
                `}
              >
                ▼
              </span>{" "}
              <span>projects</span>
            </h3>
          </button>
          <div
            className={`
              origin-top
              !transition-all !duration-300
              ${isProjectsOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}
            `}
          >
            <div
              className={`text-border flex flex-col p-[10px] gap-2 !duration-200
            ${
              isProjectsOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-1"
            }`}
            ></div>
          </div>
        </div>
      </div>

      <div className="w-[calc(100%-270px)] flex text-border p-[100px] items-start">
        <div className="w-96 h-80 relative">
          <div className="w-96 h-36 left-0 top-0 absolute rounded-tl-2xl rounded-tr-2xl bg-amber-200">
            up
          </div>
          <div className="w-96 h-44 left-0 top-36 absolute rounded-bl-2xl rounded-br-2xl bg-blue-200">
            down
          </div>
        </div>
      </div>
    </div>
  );
}
