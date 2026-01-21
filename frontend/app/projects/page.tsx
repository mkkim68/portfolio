"use client";

import { PROJECT_STACK } from "data/project-tech";
import { useState } from "react";
import Icon from "components/Icon";
import { Icons } from "@icons/index";
import { PROJECTS } from "data/projects";
import { firacode_medium } from "styles/font";
import { AnimatePresence, motion } from "motion/react";

export default function Projects() {
  const [isProjectsOpen, setIsProjectsOpen] = useState<boolean>(true);
  const [isClicked, setIsClicked] = useState<string[]>([]);
  const filteredProjects =
    isClicked.length === 0
      ? PROJECTS
      : PROJECTS.filter((p) => p.techs.some((t) => isClicked.includes(t)));

  return (
    <div className="h-full w-full flex [&_*]:transition-colors [&_*]:duration-500 [&_*]:ease-in-out">
      <div className="h-full w-[270px] border-r-[0.5px] border-border">
        <div>
          <button
            onClick={() => setIsProjectsOpen((prev) => !prev)}
            className="cursor-pointer h-[40px] w-full flex px-[20px] items-center border-b-[0.5px] border-border"
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
                <label
                  key={stack}
                  className="cursor-pointer flex items-center hover:bg-hover py-[7px] px-[10px] !duration-200"
                >
                  <div className="relative flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      checked={isClicked.includes(stack)}
                      onChange={() => {
                        setIsClicked((prev) =>
                          prev.includes(stack)
                            ? prev.filter((s) => s !== stack)
                            : [...prev, stack]
                        );
                      }}
                    />
                    <div
                      className="w-[18px] h-[18px] border border-border rounded-md
                  transition-colors peer-checked:bg-border flex items-center justify-center"
                    ></div>
                    <Icons.Check className="absolute left-[1px] w-[15px] h-3 text-transparent peer-checked:text-highlight fill-current !transition-colors !duration-200 !ease-in-out" />
                    <Icon
                      name={stack as keyof typeof Icons}
                      className="w-[20px] h-[20px]"
                    />
                    <span className="text-border">{stack}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-[calc(100%-270px)] flex flex-col">
        <div className="h-[40px] min-h-[40px] border-b border-border flex justify-between items-center pr-[10px]">
          <div className="h-[40px] pl-[20px] flex items-center overflow-x-auto whitespace-nowrap">
            <div className="flex items-center">
              <AnimatePresence initial={false} mode="popLayout">
                {isClicked.length === 0
                  ? [
                      <motion.span
                        key="all"
                        className="text-border whitespace-nowrap"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2 }}
                      >
                        All
                      </motion.span>,
                    ]
                  : isClicked.map((tech, idx) => (
                      <motion.span
                        key={tech}
                        className="text-border whitespace-nowrap"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {idx > 0 ? `; ${tech}` : tech}
                      </motion.span>
                    ))}
              </AnimatePresence>
            </div>
          </div>
          <span
            className="cursor-pointer underline text-border"
            onClick={() => setIsClicked([])}
          >
            clear
          </span>
        </div>
        <div className="flex flex-wrap text-border p-[70px] items-start gap-8 overflow-y-auto">
          {filteredProjects.map((p) => (
            <div key={p.title} className="group w-100 cursor-default">
              <div className="h-5 px-2 mb-2">
                <span className={`text-variable ${firacode_medium.className}`}>
                  {p.title}
                </span>
                <span className="text-border"> {p.summary}</span>
              </div>
              <div
                className="w-100 h-115 relative cursor-default rounded-2xl overflow-hidden 
                        ring-1 ring-border
                        group-hover:ring-highlight
                        !transition-all !duration-300 !ease-out
                        group-hover:shadow-[0_0_20px_rgba(93,220,255,0.25)]"
              >
                <img
                  src={p.image}
                  alt={`${p.title} thumbnail`}
                  className="w-100 h-40 left-0 top-0 absolute
                         rounded-tl-2xl rounded-tr-2xl object-cover
                         !transition-transform !duration-300 !ease-out
                         group-hover:scale-[1.1]"
                />
                <div className="w-100 h-75 left-0 top-40 absolute z-10 bg-fg overflow-hidden !duration-300 rounded-bl-2xl rounded-br-2xl border-t border-border group-hover:border-highlight flex flex-col p-5 items-start justify-between ">
                  <p>{p.description}</p>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      {p.techs.map((tech) => (
                        <Icon
                          key={`${p.title}-${tech}`}
                          name={tech as keyof typeof Icons}
                          className="w-[20px] h-[20px]"
                        />
                      ))}
                    </div>
                    <a
                      href={p.github}
                      className="w-fit h-9 text-highlight flex items-center bg-submit-bg hover:bg-border active:bg-submit-bg-active px-3 rounded-md !duration-300"
                    >
                      <span>view-project</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
