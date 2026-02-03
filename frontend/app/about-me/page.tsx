"use client";

import { useState } from "react";
import Education from "./components/education";
import Skill from "./components/skill";
import { TechCategory } from "data/techstacks";
import { SOCIAL_MEDIA } from "data/social-media";
import { Icons } from "@icons/index";
import Bio from "./components/bio";

type OpenType = "bio" | "education" | TechCategory | "";

export default function AboutMe() {
  const [isPersonalInfoOpen, setIsPersonalInfoOpen] = useState<Boolean>(true);
  const [isContacts, setIsContacts] = useState<Boolean>(true);

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
    <div className="h-full w-full flex">
      {/* 왼쪽 */}
      <div className="h-full w-[270px] border-r-[0.5px] border-border flex">
        <div className="w-[50px] h-full flex justify-center pt-[15px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="fill-border"
          >
            <g opacity="1" clipPath="url(#clip0_1_924)">
              <path d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12 15V17H18V15H12ZM8.414 12L5.586 14.828L7 16.243L11.243 12L7 7.757L5.586 9.172L8.414 12Z" />
            </g>
            <defs>
              <clipPath id="clip0_1_924">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="h-full w-[220px] border-l-[0.5px] border-border">
          <button
            onClick={() => {
              setIsPersonalInfoOpen((prev) => !prev);
              setIsBioOpen(false);
              setIsExpOpen(false);
              setIsInterestsOpen(false);
            }}
            className="cursor-pointer h-[40px] w-full flex p-[20px] items-center border-b-[0.5px] border-border"
          >
            <h3 className="text-highlight">
              <span
                className={`
                  inline-block
                  transition-transform duration-200 ease-in-out
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
              transition-[max-height] duration-300 ease-in-out
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                    className={`
                      fill-border
                  inline-block
                  transition-transform duration-200 ease-in-out
                  ${isBioOpen ? "rotate-90" : "rotate-0"}
                `}
                  >
                    <path d="M4.95 6.36403L-4.94551e-07 1.41403L1.414 2.66411e-05L7.778 6.36403L1.414 12.728L-6.18079e-08 11.314L4.95 6.36403Z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    fill="none"
                    className="
                      fill-border"
                  >
                    <path d="M14.4444 3.61111V12.2778C14.4444 12.4693 14.3684 12.653 14.2329 12.7885C14.0975 12.9239 13.9138 13 13.7222 13H0.722222C0.530677 13 0.346977 12.9239 0.211534 12.7885C0.076091 12.653 0 12.4693 0 12.2778V2.88889H13.7222C13.9138 2.88889 14.0975 2.96498 14.2329 3.10042C14.3684 3.23587 14.4444 3.41957 14.4444 3.61111ZM7.52122 1.44444H0V0.722222C0 0.530677 0.076091 0.346977 0.211534 0.211534C0.346977 0.076091 0.530677 0 0.722222 0H6.07678L7.52122 1.44444Z" />
                  </svg>
                  <span>bio</span>
                </p>
                <div
                  className={`
                    overflow-hidden
                    transition-[max-height] duration-300 ease-in-out
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                    className={`

                fill-border
                  inline-block
                  transition-transform duration-200 ease-in-out
                  ${isInterestsOpen ? "rotate-90" : "rotate-0"}
                `}
                  >
                    <path d="M4.95 6.36403L-4.94551e-07 1.41403L1.414 2.66411e-05L7.778 6.36403L1.414 12.728L-6.18079e-08 11.314L4.95 6.36403Z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    fill="none"
                    className="fill-border"
                  >
                    <path d="M14.4444 3.61111V12.2778C14.4444 12.4693 14.3684 12.653 14.2329 12.7885C14.0975 12.9239 13.9138 13 13.7222 13H0.722222C0.530677 13 0.346977 12.9239 0.211534 12.7885C0.076091 12.653 0 12.4693 0 12.2778V2.88889H13.7222C13.9138 2.88889 14.0975 2.96498 14.2329 3.10042C14.3684 3.23587 14.4444 3.41957 14.4444 3.61111ZM7.52122 1.44444H0V0.722222C0 0.530677 0.076091 0.346977 0.211534 0.211534C0.346977 0.076091 0.530677 0 0.722222 0H6.07678L7.52122 1.44444Z" />
                  </svg>
                  <span>interests</span>
                </p>
                <div
                  className={`
                    overflow-hidden
                    transition-[max-height] duration-300 ease-in-out
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                    className={`fill-border
                  inline-block
                  transition-transform duration-200 ease-in-out
                  ${isExpOpen ? "rotate-90" : "rotate-0"}
                `}
                  >
                    <path d="M4.95 6.36403L-4.94551e-07 1.41403L1.414 2.66411e-05L7.778 6.36403L1.414 12.728L-6.18079e-08 11.314L4.95 6.36403Z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    fill="none"
                    className="fill-border"
                  >
                    <path d="M14.4444 3.61111V12.2778C14.4444 12.4693 14.3684 12.653 14.2329 12.7885C14.0975 12.9239 13.9138 13 13.7222 13H0.722222C0.530677 13 0.346977 12.9239 0.211534 12.7885C0.076091 12.653 0 12.4693 0 12.2778V2.88889H13.7222C13.9138 2.88889 14.0975 2.96498 14.2329 3.10042C14.3684 3.23587 14.4444 3.41957 14.4444 3.61111ZM7.52122 1.44444H0V0.722222C0 0.530677 0.076091 0.346977 0.211534 0.211534C0.346977 0.076091 0.530677 0 0.722222 0H6.07678L7.52122 1.44444Z" />
                  </svg>
                  <span>experiences</span>
                </p>
                <div
                  className={`
                    overflow-hidden
                    transition-[max-height] duration-300 ease-in-out
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="15"
                      viewBox="0 0 17 15"
                      fill="none"
                      className="fill-border"
                    >
                      <path d="M0.811096 0H15.4108C15.6259 0 15.8322 0.0854545 15.9844 0.237565C16.1365 0.389675 16.2219 0.59598 16.2219 0.811096V13.7886C16.2219 14.0038 16.1365 14.2101 15.9844 14.3622C15.8322 14.5143 15.6259 14.5997 15.4108 14.5997H0.811096C0.59598 14.5997 0.389675 14.5143 0.237565 14.3622C0.0854545 14.2101 0 14.0038 0 13.7886V0.811096C0 0.59598 0.0854545 0.389675 0.237565 0.237565C0.389675 0.0854545 0.59598 0 0.811096 0V0ZM4.05548 10.1387V6.89432L5.67767 8.51651L7.29987 6.89432V10.1387H8.92206V4.46103H7.29987L5.67767 6.08322L4.05548 4.46103H2.43329V10.1387H4.05548ZM12.9775 7.70541V4.46103H11.3553V7.70541H9.73315L12.1664 10.1387L14.5997 7.70541H12.9775Z" />
                    </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                    className={`
                  fill-border
                  inline-block
                  transition-transform duration-200 ease-in-out
                  ${isSkillsOpen ? "rotate-90" : "rotate-0"}
                `}
                  >
                    <path d="M4.95 6.36403L-4.94551e-07 1.41403L1.414 2.66411e-05L7.778 6.36403L1.414 12.728L-6.18079e-08 11.314L4.95 6.36403Z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    fill="none"
                    className="fill-border"
                  >
                    <path d="M14.4444 3.61111V12.2778C14.4444 12.4693 14.3684 12.653 14.2329 12.7885C14.0975 12.9239 13.9138 13 13.7222 13H0.722222C0.530677 13 0.346977 12.9239 0.211534 12.7885C0.076091 12.653 0 12.4693 0 12.2778V2.88889H13.7222C13.9138 2.88889 14.0975 2.96498 14.2329 3.10042C14.3684 3.23587 14.4444 3.41957 14.4444 3.61111ZM7.52122 1.44444H0V0.722222C0 0.530677 0.076091 0.346977 0.211534 0.211534C0.346977 0.076091 0.530677 0 0.722222 0H6.07678L7.52122 1.44444Z" />
                  </svg>
                  <span>skills</span>
                </p>
                <div
                  className={`
                    overflow-hidden
                    transition-[max-height] duration-300 ease-in-out
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
            className="cursor-pointer h-[40px] w-full flex p-[20px] items-center border-y-[0.5px] border-border"
          >
            <h3 className="text-highlight">
              <span
                className={`
                  inline-block
                  transition-transform duration-200 ease-in-out
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
              origin-top
              transition-all duration-300 ease-in-out
              ${isContacts ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}
            `}
          >
            <div className="text-border flex flex-col p-[15px] gap-[10px]">
              <a
                href="mailto:kimminkyoung0608@gmail.com"
                className="flex items-center gap-2 cursor-pointer hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 17 15"
                  fill="none"
                  className="fill-border"
                >
                  <path d="M0.811096 0H15.4108C15.6259 0 15.8322 0.0854545 15.9844 0.237565C16.1365 0.389675 16.2219 0.59598 16.2219 0.811096V13.7886C16.2219 14.0038 16.1365 14.2101 15.9844 14.3622C15.8322 14.5143 15.6259 14.5997 15.4108 14.5997H0.811096C0.59598 14.5997 0.389675 14.5143 0.237565 14.3622C0.0854545 14.2101 0 14.0038 0 13.7886V0.811096C0 0.59598 0.0854545 0.389675 0.237565 0.237565C0.389675 0.0854545 0.59598 0 0.811096 0ZM8.15963 7.04275L2.95888 2.62633L1.90851 3.86244L8.17017 9.17918L14.3191 3.85838L13.2582 2.6312L8.16044 7.04275H8.15963Z" />
                </svg>
                <span>Send E-mail</span>
              </a>
              {SOCIAL_MEDIA.map((sns) => (
                <a
                  key={sns.name}
                  href={sns.url}
                  className="flex items-center gap-2 hover:underline"
                >
                  <Icons.Link className="w-[14px] h-[14px] fill-border" />
                  <span>{sns.description}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* 메인 */}
      <div className="w-[calc(100%-270px)] flex flex-col text-border overflow-hidden">
        {/* 상단 */}
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
        {/* 컨텐츠 */}
        {open === "frontend" ? <Skill category="frontend" /> : null}
        {open === "backend" ? <Skill category="backend" /> : null}
        {open === "mobile" ? <Skill category="mobile" /> : null}
        {open === "others" ? <Skill category="others" /> : null}
        {open === "education" ? <Education /> : null}
        {open === "bio" ? <Bio /> : null}
      </div>
    </div>
  );
}
