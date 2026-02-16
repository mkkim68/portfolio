"use client";

import { useEffect, useState } from "react";
import Education from "./components/education";
import Skill from "./components/skill";
import { TechCategory } from "data/techstacks";
import { SOCIAL_MEDIA } from "data/social-media";
import { Icons } from "src/icons/index";
import Bio from "./components/bio";
import { useLang } from "../LangProvider";
import { getDict } from "data/i18n";

type OpenType = "bio" | "education" | TechCategory | "";

export default function AboutMe() {
  const lang = useLang();
  const t = getDict(lang);
  const [isPersonalInfoOpen, setIsPersonalInfoOpen] = useState<Boolean>(false);
  const [isContacts, setIsContacts] = useState<boolean>(false);

  // Default contacts state: mobile => closed, lg+ => open (and keep in sync on resize)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");

    const apply = (matches: boolean) => {
      setIsContacts(matches);
      setIsPersonalInfoOpen(matches);
    };

    // initial
    apply(mq.matches);

    const onChange = (e: MediaQueryListEvent) => apply(e.matches);

    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    }

    // fallback for older Safari
    // @ts-ignore
    mq.addListener(onChange);
    // @ts-ignore
    return () => mq.removeListener(onChange);
  }, []);

  const [isBioOpen, setIsBioOpen] = useState<Boolean>(false);
  const [isInterestsOpen, setIsInterestsOpen] = useState<Boolean>(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState<Boolean>(false);
  const [isExpOpen, setIsExpOpen] = useState<Boolean>(false);

  const [open, setOpen] = useState<OpenType>("bio");
  const [openContents, setOpenContents] = useState<Array<OpenType>>(["bio"]);

  const handleDeleteContent = (content: OpenType, e: React.MouseEvent) => {
    e.stopPropagation();

    setOpenContents((prev) => {
      const next = prev.filter((item) => item !== content);

      if (open === content) {
        if (next.length === 0) {
          setOpen("");
        } else {
          const closedIdx = prev.findIndex((v) => v === content);
          const nextOpen = next[closedIdx - 1] ?? next[0];
          setOpen(nextOpen);
        }
      } else {
        if (next.length === 0) setOpen("");
        else if (!next.includes(open)) setOpen(next[0]);
      }

      return next;
    });
  };

  return (
    <div className="h-full w-full flex lg:flex-row flex-col [&_*]:transition-colors [&_*]:duration-500 [&_*]:ease-in-out">
      {/* 왼쪽 */}
      <section className="lg:h-full lg:w-[270px] w-full lg:border-r-[0.5px] border-b-[0,5px] border-border flex">
        <div className="w-[50px] h-full hidden lg:flex justify-center pt-[15px]">
          <Icons.Code className="text-border w-[24px] h-[24px]" />
        </div>
        <div className="lg:h-full lg:w-[220px] w-full lg:border-l-[0.5px] border-border">
          <button
            onClick={() => {
              setIsPersonalInfoOpen((prev) => !prev);
              setIsBioOpen(false);
              setIsExpOpen(false);
              setIsInterestsOpen(false);
            }}
            className="cursor-pointer lg:h-[40px] h-[30px] w-full flex lg:p-[20px] px-[20px] py-4 items-center border-b-[0.5px] border-border bg-border/50 lg:bg-fg"
          >
            <h3 className="text-highlight">
              <span
                className={`
                  inline-block
                  !transition-transform !duration-200 !ease-in-out
                  ${isPersonalInfoOpen ? "rotate-180" : "rotate-0"}
                `}
              >
                ▼
              </span>{" "}
              <span>personal-info</span>
            </h3>
          </button>
          <div
            className={`
              overflow-hidden
              !transition-[max-height] !duration-300 !ease-in-out
              ${isPersonalInfoOpen ? "max-h-[300px]" : "max-h-0"}
            `}
          >
            <div
              className={`text-border flex flex-col duration-200
            ${
              isPersonalInfoOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-1"
            }`}
            >
              {/* bio */}
              <div>
                <p
                  onClick={() => setIsBioOpen((prev) => !prev)}
                  className="flex items-center gap-2.5 cursor-pointer w-full px-[10px] py-[5px] hover:bg-hover duration-150
ease-in-out"
                >
                  <Icons.Arrow
                    className={`
                      w-[8px] h-[13px]
                      fill-border
                  inline-block
                  !transition-transform !duration-200 !ease-in-out
                  ${isBioOpen ? "rotate-90" : "rotate-0"}
                `}
                  />
                  <Icons.Folder className="text-function w-[15px] h-[13px]" />
                  <span>bio</span>
                </p>
                <div
                  className={`
                    overflow-hidden
                    !transition-[max-height] !duration-300 !ease-in-out
                    ${isBioOpen ? "max-h-[100px]" : "max-h-0"}
                  `}
                >
                  <p
                    onClick={() => {
                      setOpen("bio");
                      setOpenContents((prev) =>
                        prev.includes("bio") ? prev : [...prev, "bio"],
                      );
                    }}
                    className={`pl-[27px] py-[4px]
                      ${
                        open === "bio"
                          ? "text-highlight bg-focus cursor-default"
                          : "cursor-pointer"
                      } flex items-center gap-[10px] hover:bg-hover duration-150
ease-in-out w-full`}
                  >
                    <Icons.React className="w-[17px] h-[17px] [&_circle]:!fill-[#3178c6] [&_g]:!stroke-[#3178c6] [&_g_*]:!fill-none" />
                    <span>Bio.tsx</span>
                  </p>
                </div>
              </div>
              {/* interests */}
              <div>
                <p
                  onClick={() => setIsInterestsOpen((prev) => !prev)}
                  className="flex items-center gap-2.5 cursor-pointer w-full px-[10px] py-[5px] hover:bg-hover duration-150
ease-in-out"
                >
                  <Icons.Arrow
                    className={`
                      w-[8px] h-[13px]
                      fill-border
                  inline-block
                  !transition-transform !duration-200 !ease-in-out
                  ${isInterestsOpen ? "rotate-90" : "rotate-0"}
                `}
                  />
                  <Icons.Folder className="text-function w-[15px] h-[13px]" />
                  <span>interests</span>
                </p>
                <div
                  className={`
                    overflow-hidden
                    !transition-[max-height] !duration-300 !ease-in-out
                    ${isInterestsOpen ? "max-h-[100px]" : "max-h-0"}
                  `}
                ></div>
              </div>
              {/* experiences */}
              <div>
                <p
                  onClick={() => setIsExpOpen((prev) => !prev)}
                  className={`flex items-center gap-2.5 cursor-pointer w-full px-[10px] py-[5px] hover:bg-hover duration-150
ease-in-out`}
                >
                  <Icons.Arrow
                    className={`
                      w-[8px] h-[13px]
                      fill-border
                  inline-block
                  !transition-transform !duration-200 !ease-in-out
                  ${isExpOpen ? "rotate-90" : "rotate-0"}
                `}
                  />
                  <Icons.Folder className="text-function w-[15px] h-[13px]" />
                  <span>experiences</span>
                </p>
                <div
                  className={`
                    overflow-hidden
                    !transition-[max-height] !duration-300 !ease-in-out
                    ${isExpOpen ? "max-h-[50px]" : "max-h-0"}
                  `}
                >
                  <p
                    onClick={() => {
                      setOpen("education");
                      setOpenContents((prev) =>
                        prev.includes("education")
                          ? prev
                          : [...prev, "education"],
                      );
                    }}
                    className={`
                      pl-[27px] py-[4px]
                      ${
                        open === "education"
                          ? "text-highlight bg-focus cursor-default"
                          : "cursor-pointer"
                      } flex items-center gap-[10px] hover:bg-hover duration-150
ease-in-out w-full`}
                  >
                    <Icons.Markdown className="text-border w-[17px] h-[15px]" />
                    <span>education.md</span>
                  </p>
                </div>
              </div>
              {/* skills */}
              <div>
                <p
                  onClick={() => setIsSkillsOpen((prev) => !prev)}
                  className="flex items-center gap-2.5 cursor-pointer w-full px-[10px] py-[5px] hover:bg-hover duration-150
ease-in-out"
                >
                  <Icons.Arrow
                    className={`
                      w-[8px] h-[13px]
                      fill-border
                  inline-block
                  !transition-transform !duration-200 !ease-in-out
                  ${isSkillsOpen ? "rotate-90" : "rotate-0"}
                `}
                  />
                  <Icons.Folder className="text-function w-[15px] h-[13px]" />
                  <span>skills</span>
                </p>
                <div
                  className={`
                    overflow-hidden
                    !transition-[max-height] !duration-300 !ease-in-out
                    ${isSkillsOpen ? "max-h-[200px]" : "max-h-0"}
                  `}
                >
                  <p
                    onClick={() => {
                      setOpen("frontend");
                      setOpenContents((prev) =>
                        prev.includes("frontend")
                          ? prev
                          : [...prev, "frontend"],
                      );
                    }}
                    className={`
                      pl-[27px] py-[4px]
                      ${
                        open === "frontend"
                          ? "text-highlight bg-focus cursor-default"
                          : "cursor-pointer"
                      } flex items-center gap-[10px] hover:bg-hover duration-150
ease-in-out w-full`}
                  >
                    <Icons.React className="w-[17px] h-[17px] [&_circle]:!fill-[#3178c6] [&_g]:!stroke-[#3178c6] [&_g_*]:!fill-none" />

                    <span>Frontend.tsx</span>
                  </p>
                  <p
                    onClick={() => {
                      setOpen("backend");
                      setOpenContents((prev) =>
                        prev.includes("backend") ? prev : [...prev, "backend"],
                      );
                    }}
                    className={`pl-[27px] py-[4px]
                      ${
                        open === "backend"
                          ? "text-highlight bg-focus cursor-default"
                          : "cursor-pointer"
                      } flex items-center gap-[10px] hover:bg-hover duration-150
ease-in-out w-full`}
                  >
                    <Icons.React className="w-[17px] h-[17px] [&_circle]:!fill-[#3178c6] [&_g]:!stroke-[#3178c6] [&_g_*]:!fill-none" />

                    <span>Backend.tsx</span>
                  </p>
                  <p
                    onClick={() => {
                      setOpen("mobile");
                      setOpenContents((prev) =>
                        prev.includes("mobile") ? prev : [...prev, "mobile"],
                      );
                    }}
                    className={`pl-[27px] py-[4px]
                      ${
                        open === "mobile"
                          ? "text-highlight bg-focus cursor-default"
                          : "cursor-pointer"
                      } flex items-center gap-[10px] hover:bg-hover duration-150
ease-in-out w-full`}
                  >
                    <Icons.React className="w-[17px] h-[17px] [&_circle]:!fill-[#3178c6] [&_g]:!stroke-[#3178c6] [&_g_*]:!fill-none" />

                    <span>Mobile.tsx</span>
                  </p>
                  <p
                    onClick={() => {
                      setOpen("others");
                      setOpenContents((prev) =>
                        prev.includes("others") ? prev : [...prev, "others"],
                      );
                    }}
                    className={`pl-[27px] py-[4px]
                      ${
                        open === "others"
                          ? "text-highlight bg-focus cursor-default"
                          : "cursor-pointer"
                      } flex items-center gap-[10px] hover:bg-hover duration-150
ease-in-out w-full`}
                  >
                    <Icons.React className="w-[17px] h-[17px] [&_circle]:!fill-[#3178c6] [&_g]:!stroke-[#3178c6] [&_g_*]:!fill-none" />
                    <span>Others.tsx</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsContacts((prev) => !prev)}
            className="cursor-pointer lg:h-[40px] h-[30px] w-full flex lg:p-[20px] px-[20px] py-4 items-center border-y-[0.5px] border-border bg-border/50 lg:bg-fg"
          >
            <h3 className="text-highlight">
              <span
                className={`
                  inline-block
                  !transition-transform !duration-200 !ease-in-out
                  ${isContacts ? "rotate-180" : "rotate-0"}
                `}
              >
                ▼
              </span>{" "}
              <span>contacts</span>
            </h3>
          </button>
          <div
            className={`
              lg:hidden overflow-hidden
              !transition-[max-height] !duration-300 !ease-in-out
              ${isContacts ? "max-h-[180px] opacity-100" : "max-h-0 opacity-0"}
            `}
          >
            <SocialLinks />
          </div>
          <div
            className={`
              origin-top hidden lg:block
              !transition-all !duration-300 !ease-in-out min-h-0
              ${isContacts ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}
            `}
          >
            <SocialLinks />
          </div>
        </div>
      </section>
      {/* 메인 */}
      <section className="lg:w-[calc(100%-270px)] w-full flex flex-col text-border overflow-hidden">
        {/* 상단 */}
        <div className="lg:block hidden">
          {openContents.length > 0 ? (
            <div className="h-[40px] border-b-[0.5px] border-border">
              <div className="h-full flex">
                {openContents.map((content) => (
                  <div
                    key={content}
                    onClick={() => setOpen(content)}
                    className={`${
                      open === content ? "bg-focus text-highlight" : ""
                    } h-full p-[15px] pr-[12px] flex items-center w-fit border-r-[0.5px] border-border justify-between  cursor-pointer hover:bg-hover duration-150 ease-in-out`}
                  >
                    <span className="mr-[20px] whitespace-nowrap">
                      {content === "education"
                        ? content + ".md"
                        : content.charAt(0).toUpperCase() +
                          content.slice(1) +
                          ".tsx"}
                    </span>
                    <div
                      className="w-max p-[5px]"
                      onClick={(e) => handleDeleteContent(content, e)}
                    >
                      <Icons.Close
                        className={`w-[10px] h-[11px] ${open === content ? "text-highlight" : "text-border"} `}
                      />
                    </div>
                  </div>
                ))}{" "}
              </div>
            </div>
          ) : (
            <div className="h-full w-full flex flex-col items-center justify-center gap-3">
              <h1 className="text-xl text-scrollbar-hover">No file open</h1>
              <p className="text-border">
                Select a file from the explorer to view its contents
              </p>
            </div>
          )}
        </div>
        {/* 컨텐츠 */}
        {open === "frontend" ? <Skill category="frontend" /> : null}
        {open === "backend" ? <Skill category="backend" /> : null}
        {open === "mobile" ? <Skill category="mobile" /> : null}
        {open === "others" ? <Skill category="others" /> : null}
        {open === "education" ? <Education /> : null}
        {open === "bio" ? <Bio /> : null}
      </section>
    </div>
  );
}

const SocialLinks = () => {
  const lang = useLang();
  const t = getDict(lang);

  return (
    <div className="text-border flex flex-col p-[15px] gap-[10px]">
      <a
        href="mailto:kimminkyoung0608@gmail.com"
        className="flex items-center gap-2 cursor-pointer hover:underline"
      >
        <Icons.Mail className="text-border w-[14px] h-[14px]" />
        <span>{t.contact.sendEmail}</span>
      </a>

      {SOCIAL_MEDIA.map((sns) => (
        <a
          key={sns.id}
          href={sns.url}
          className="flex items-center gap-2 hover:underline"
        >
          <Icons.Link className="w-[14px] h-[14px] text-border" />
          <span>{t.contact.social[sns.id]}</span>
        </a>
      ))}
    </div>
  );
};
