"use client";

import { PROJECT_STACK } from "data/project-tech";
import { useState } from "react";
import Icon from "components/Icon";
import { Icons } from "@icons/index";

export default function Projects() {
  const [isProjectsOpen, setIsProjectsOpen] = useState<boolean>(true);
  const [isClicked, setIsClicked] = useState<Array<string>>([]);
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
              className={`h-[calc(89vh-100px)] text-border flex flex-col !duration-150 overflow-y-auto`}
            >
              {PROJECT_STACK.map((stack) => (
                <div
                  key={stack}
                  className="flex items-center cursor-default gap-2.5 hover:bg-hover py-[5px] px-[10px] !duration-200"
                >
                  <label className="relative flex items-center cursor-pointer">
                    <input type="checkbox" className="peer sr-only relative" />
                    <div
                      className="w-[18px] h-[18px] border border-border rounded-md 
                  transition-colors peer-checked:bg-border flex items-center justify-center"
                    ></div>
                    <Icons.Check className="absolute w-[15px] h-3 text-transparent peer-checked:text-highlight fill-current !transition-colors !duration-200 !ease-in-out" />
                  </label>
                  <Icon
                    name={stack as keyof typeof Icons}
                    className="w-[20px] h-[20px]"
                  />
                  <span className="text-border">{stack}</span>
                </div>
              ))}
            </div>
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
