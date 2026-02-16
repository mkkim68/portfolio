"use client";

import { PROJECT_STACK } from "data/project-tech";
import { useEffect, useMemo, useState } from "react";
import Icon from "components/Icon";
import { Icons } from "src/icons/index";
import { PROJECTS } from "data/projects";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Projects() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState<string[]>([]);

  const params = useParams<{ lang: string }>();
  const lang = (params?.lang === "ko" ? "ko" : "en") as "en" | "ko";

  const labels = useMemo(
    () =>
      lang === "ko"
        ? {
            title: "projects",
            all: "전체",
            clear: "초기화",
            view: "프로젝트 보기",
          }
        : {
            title: "projects",
            all: "All",
            clear: "clear",
            view: "view-project",
          },
    [lang],
  );

  const projects = PROJECTS[lang];

  const filteredProjects =
    isClicked.length === 0
      ? projects
      : projects.filter((p) => p.techs.some((t) => isClicked.includes(t)));

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const apply = (matches: boolean) => setIsProjectsOpen(matches);
    apply(mq.matches);

    const onChange = (e: MediaQueryListEvent) => apply(e.matches);

    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    }

    // @ts-ignore (old Safari)
    mq.addListener(onChange);
    // @ts-ignore
    return () => mq.removeListener(onChange);
  }, []);

  return (
    <div className="h-full w-full flex lg:flex-row flex-col [&_*]:transition-colors [&_*]:duration-500 [&_*]:ease-in-out">
      <section className="lg:h-full lg:w-[270px] w-full lg:border-r-[0.5px] border-b-[0.5px] border-border">
        <button
          onClick={() => setIsProjectsOpen((prev) => !prev)}
          className="cursor-pointer lg:h-[40px] h-[30px] w-full flex lg:p-[20px] px-[20px] py-4 items-center border-b-[0.5px] border-border bg-border/50 lg:bg-fg"
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
            <span>{labels.title}</span>
          </h3>
        </button>
        <div
          className={`
              lg:hidden overflow-y-auto min-h-0
              !transition-[max-height] !duration-300 !ease-in-out
              ${isProjectsOpen ? "max-h-[180px] opacity-100" : "max-h-0 opacity-0"}
            `}
        >
          <div
            className={`lg:h-[calc(89dvh-100px)] text-border flex flex-col !duration-150 overflow-hidden`}
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
                          : [...prev, stack],
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
        <div
          className={`
              origin-top hidden lg:block
              !transition-all !duration-300 min-h-0
              ${isProjectsOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}
            `}
        >
          <div
            className={`h-[calc(89dvh-100px)] text-border flex flex-col !duration-150 overflow-y-auto`}
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
                          : [...prev, stack],
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
      </section>

      <section className="lg:w-[calc(100%-270px)] w-full flex flex-col overflow-hidden">
        <section className="h-[40px] min-h-[40px] border-b-[0.5px] border-border hidden lg:flex justify-between items-center pr-[10px]">
          <div className="h-[40px] pl-[20px] flex items-center overflow-x-auto whitespace-nowrap">
            <div className="flex items-center">
              <AnimatePresence initial={false} mode="popLayout">
                {isClicked.length === 0 ? (
                  <motion.span
                    key="all"
                    className="text-border whitespace-nowrap"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {labels.all}
                  </motion.span>
                ) : (
                  isClicked.map((tech, idx) => (
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
                  ))
                )}
              </AnimatePresence>
            </div>
          </div>

          <span
            className="cursor-pointer underline text-border"
            onClick={() => setIsClicked([])}
          >
            {labels.clear}
          </span>
        </section>

        <section className="flex flex-wrap text-border lg:p-[70px] lg:items-start items-center justify-center py-[30px] lg:py-[50px] gap-8 lg:gap-13 overflow-y-auto border-t-[0.5px] border-border lg:border-none">
          {filteredProjects.map((p) => (
            <article
              key={p.title}
              className="group w-80 lg:w-100 cursor-default"
            >
              <div className="h-10 lg:h-5 px-2 mb-2 flex flex-col lg:block">
                <span className={`text-variable font-bold`}>{p.title}</span>
                <span className="text-border"> {p.summary}</span>
              </div>

              <div
                className="w-80 lg:w-100 h-120 lg:h-115 relative cursor-default rounded-2xl overflow-hidden 
                  ring-1 ring-border group-hover:ring-highlight
                  !transition-all !duration-300 !ease-out
                  group-hover:shadow-[0_0_20px_rgba(93,220,255,0.25)]"
              >
                <div className="w-80 lg:w-100 h-40 left-0 top-0 absolute rounded-tl-2xl rounded-tr-2xl">
                  <Image
                    fill
                    src={p.image}
                    alt={`${p.title} thumbnail`}
                    className="object-cover !transition-transform !duration-300 !ease-out group-hover:scale-[1.1]"
                  />
                </div>

                <div className="w-80 lg:w-100 h-80 lg:h-75 left-0 top-40 absolute z-10 bg-fg overflow-hidden !duration-300 rounded-bl-2xl rounded-br-2xl border-t border-border group-hover:border-highlight flex flex-col p-5 items-start justify-between">
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
                      <span>{labels.view}</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </section>
    </div>
  );
}
