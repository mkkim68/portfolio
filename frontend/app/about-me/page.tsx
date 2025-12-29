"use client";

import { useState } from "react";

export default function AboutMe() {
  const [isPersonalInfoOpen, setIsPersonalInfoOpen] = useState<Boolean>(true);
  const [isProInfoOpen, setIsProInfoOpen] = useState<Boolean>(true);
  const [isBioOpen, setIsBioOpen] = useState<Boolean>(false);
  const [isInterestsOpen, setIsInterestsOpen] = useState<Boolean>(false);
  const [isEduOpen, setIsEduOpen] = useState<Boolean>(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState<Boolean>(false);
  const [isExpOpen, setIsExpOpen] = useState<Boolean>(true);

  const [isHard, setIsHard] = useState<Boolean>(false);
  const [isSoft, setIsSoft] = useState<Boolean>(false);
  const [isCareer, setIsCareer] = useState<Boolean>(true);
  const [isOpenSource, setIsOpenSource] = useState<Boolean>(false);
  const [isUniversity, setIsUniversity] = useState<Boolean>(false);
  const [isSSAFY, setIsSSAFY] = useState<Boolean>(false);

  const [open, setOpen] = useState<string>("career");
  const [openContent, setOpenContent] = useState<Array<string>>(["career"]);

  const turnOffAll = () => {
    setIsHard(false);
    setIsSoft(false);
    setIsCareer(false);
    setIsOpenSource(false);
    setIsUniversity(false);
    setIsSSAFY(false);
  };

  const handleDeleteContent = (content: string, e: React.MouseEvent) => {
    if (
      (e.currentTarget as HTMLElement).parentNode?.firstChild?.textContent ===
        openContent[openContent.length - 1] &&
      openContent.length > 1
    ) {
      setOpen(openContent[openContent.length - 2]);

      turnOffAll();
      if (openContent[openContent.length - 2] === "career") {
        setIsCareer(true);
      } else if (openContent[openContent.length - 2] === "open-source") {
        setIsOpenSource(true);
      } else if (openContent[openContent.length - 2] === "hard-skills") {
        setIsHard(true);
      } else if (openContent[openContent.length - 2] === "soft-skills") {
        setIsSoft(true);
      } else if (openContent[openContent.length - 2] === "university") {
        setIsUniversity(true);
      } else if (openContent[openContent.length - 2] === "SSAFY-11th") {
        setIsSSAFY(true);
      }
    }
    setOpenContent(openContent.filter((item) => item !== content));
  };

  return (
    <div className="h-full w-full bg-[#011627] flex">
      {/* 왼쪽 */}
      <div className="h-full w-[350px] border-r-[0.5px] border-[#607B96]">
        <div>
          <button
            onClick={() => {
              setIsPersonalInfoOpen((prev) => !prev);
              setIsBioOpen(false);
              setIsEduOpen(false);
              setIsInterestsOpen(false);
            }}
            className="cursor-pointer h-[50px] w-full flex p-[22px] items-center border-b-[0.5px] border-[#607B96]"
          >
            <h3 className="text-white">
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
              ${isPersonalInfoOpen ? "max-h-[500px]" : "max-h-0"}
            `}
          >
            <div
              className={`text-[#607B96] flex flex-col duration-200
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
                  className="flex items-center gap-2.5 cursor-pointer w-min pt-[22px] px-[22px] pb-[3px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                    className={`
                  inline-block
                  transition-transform duration-200 ease-in-out
                  ${isBioOpen ? "rotate-90" : "rotate-0"}
                `}
                  >
                    <path
                      d="M4.95 6.36403L-4.94551e-07 1.41403L1.414 2.66411e-05L7.778 6.36403L1.414 12.728L-6.18079e-08 11.314L4.95 6.36403Z"
                      fill="#607B96"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    fill="none"
                  >
                    <path
                      d="M14.4444 3.61111V12.2778C14.4444 12.4693 14.3684 12.653 14.2329 12.7885C14.0975 12.9239 13.9138 13 13.7222 13H0.722222C0.530677 13 0.346977 12.9239 0.211534 12.7885C0.076091 12.653 0 12.4693 0 12.2778V2.88889H13.7222C13.9138 2.88889 14.0975 2.96498 14.2329 3.10042C14.3684 3.23587 14.4444 3.41957 14.4444 3.61111ZM7.52122 1.44444H0V0.722222C0 0.530677 0.076091 0.346977 0.211534 0.211534C0.346977 0.076091 0.530677 0 0.722222 0H6.07678L7.52122 1.44444Z"
                      fill="#E99287"
                    />
                  </svg>
                  <span className={`${isBioOpen ? "text-white" : ""}`}>
                    bio
                  </span>
                </p>
                <div
                  className={`
                    overflow-hidden
                    transition-[max-height] duration-300 ease-in-out
                    ${isBioOpen ? "max-h-[100px]" : "max-h-0"}
                  `}
                >
                  {/* <p
                    onClick={() => {
                      turnOffAll();
                      setIsHard(true);
                    }}
                    className={`
                      pl-[47px] py-[4px]
                      ${
                        isHard ? "text-white bg-[#ffffff1a] cursor-default" : "cursor-pointer"
                      } flex items-center gap-[10px] hover:bg-[#ffffff1a] duration-150
ease-in-out w-full`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="15"
                      viewBox="0 0 17 15"
                      fill="none"
                    >
                      <path
                        d="M0.811096 0H15.4108C15.6259 0 15.8322 0.0854545 15.9844 0.237565C16.1365 0.389675 16.2219 0.59598 16.2219 0.811096V13.7886C16.2219 14.0038 16.1365 14.2101 15.9844 14.3622C15.8322 14.5143 15.6259 14.5997 15.4108 14.5997H0.811096C0.59598 14.5997 0.389675 14.5143 0.237565 14.3622C0.0854545 14.2101 0 14.0038 0 13.7886V0.811096C0 0.59598 0.0854545 0.389675 0.237565 0.237565C0.389675 0.0854545 0.59598 0 0.811096 0V0ZM4.05548 10.1387V6.89432L5.67767 8.51651L7.29987 6.89432V10.1387H8.92206V4.46103H7.29987L5.67767 6.08322L4.05548 4.46103H2.43329V10.1387H4.05548ZM12.9775 7.70541V4.46103H11.3553V7.70541H9.73315L12.1664 10.1387L14.5997 7.70541H12.9775Z"
                        fill="#81A1C1"
                      />
                    </svg>
                    <span>hard-skills</span>
                  </p> */}
                </div>
              </div>
              {/* interests */}
              <div>
                <p
                  onClick={() => setIsInterestsOpen((prev) => !prev)}
                  className="flex items-center gap-2.5 cursor-pointer w-min px-[22px] pb-[3px] pt-[7px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                    className={`
                  inline-block
                  transition-transform duration-200 ease-in-out
                  ${isInterestsOpen ? "rotate-90" : "rotate-0"}
                `}
                  >
                    <path
                      d="M4.95 6.36403L-4.94551e-07 1.41403L1.414 2.66411e-05L7.778 6.36403L1.414 12.728L-6.18079e-08 11.314L4.95 6.36403Z"
                      fill="#607B96"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    fill="none"
                  >
                    <path
                      d="M14.4444 3.61111V12.2778C14.4444 12.4693 14.3684 12.653 14.2329 12.7885C14.0975 12.9239 13.9138 13 13.7222 13H0.722222C0.530677 13 0.346977 12.9239 0.211534 12.7885C0.076091 12.653 0 12.4693 0 12.2778V2.88889H13.7222C13.9138 2.88889 14.0975 2.96498 14.2329 3.10042C14.3684 3.23587 14.4444 3.41957 14.4444 3.61111ZM7.52122 1.44444H0V0.722222C0 0.530677 0.076091 0.346977 0.211534 0.211534C0.346977 0.076091 0.530677 0 0.722222 0H6.07678L7.52122 1.44444Z"
                      fill="#43D9AD"
                    />
                  </svg>
                  <span className={`${isInterestsOpen ? "text-white" : ""}`}>
                    interests
                  </span>
                </p>
                <div
                  className={`
                    overflow-hidden
                    transition-[max-height] duration-300 ease-in-out
                    ${isInterestsOpen ? "max-h-[100px]" : "max-h-0"}
                  `}
                >
                  {/* <p
                    onClick={() => {
                      turnOffAll();
                      setIsHard(true);
                    }}
                    className={`
                      pl-[47px] py-[4px]
                      ${
                        isHard ? "text-white bg-[#ffffff1a] cursor-default" : "cursor-pointer"
                      } flex items-center gap-[10px] hover:bg-[#ffffff1a] duration-150
ease-in-out w-full`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="15"
                      viewBox="0 0 17 15"
                      fill="none"
                    >
                      <path
                        d="M0.811096 0H15.4108C15.6259 0 15.8322 0.0854545 15.9844 0.237565C16.1365 0.389675 16.2219 0.59598 16.2219 0.811096V13.7886C16.2219 14.0038 16.1365 14.2101 15.9844 14.3622C15.8322 14.5143 15.6259 14.5997 15.4108 14.5997H0.811096C0.59598 14.5997 0.389675 14.5143 0.237565 14.3622C0.0854545 14.2101 0 14.0038 0 13.7886V0.811096C0 0.59598 0.0854545 0.389675 0.237565 0.237565C0.389675 0.0854545 0.59598 0 0.811096 0V0ZM4.05548 10.1387V6.89432L5.67767 8.51651L7.29987 6.89432V10.1387H8.92206V4.46103H7.29987L5.67767 6.08322L4.05548 4.46103H2.43329V10.1387H4.05548ZM12.9775 7.70541V4.46103H11.3553V7.70541H9.73315L12.1664 10.1387L14.5997 7.70541H12.9775Z"
                        fill="#81A1C1"
                      />
                    </svg>
                    <span>hard-skills</span>
                  </p> */}
                </div>
              </div>
              {/* education */}
              <div>
                <p
                  onClick={() => setIsEduOpen((prev) => !prev)}
                  className={`flex items-center gap-2.5 cursor-pointer w-min px-[22px] "pb-[3px] pt-[7px]`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                    className={`
                  inline-block
                  transition-transform duration-200 ease-in-out
                  ${isEduOpen ? "rotate-90" : "rotate-0"}
                `}
                  >
                    <path
                      d="M4.95 6.36403L-4.94551e-07 1.41403L1.414 2.66411e-05L7.778 6.36403L1.414 12.728L-6.18079e-08 11.314L4.95 6.36403Z"
                      fill="#607B96"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    fill="none"
                  >
                    <path
                      d="M14.4444 3.61111V12.2778C14.4444 12.4693 14.3684 12.653 14.2329 12.7885C14.0975 12.9239 13.9138 13 13.7222 13H0.722222C0.530677 13 0.346977 12.9239 0.211534 12.7885C0.076091 12.653 0 12.4693 0 12.2778V2.88889H13.7222C13.9138 2.88889 14.0975 2.96498 14.2329 3.10042C14.3684 3.23587 14.4444 3.41957 14.4444 3.61111ZM7.52122 1.44444H0V0.722222C0 0.530677 0.076091 0.346977 0.211534 0.211534C0.346977 0.076091 0.530677 0 0.722222 0H6.07678L7.52122 1.44444Z"
                      fill="#3A49A4"
                    />
                  </svg>
                  <span className={`${isEduOpen ? "text-white" : ""}`}>
                    education
                  </span>
                </p>
                <div
                  className={`
                    overflow-hidden
                    transition-[max-height] duration-300 ease-in-out
                    ${isEduOpen ? "max-h-[100px]" : "max-h-0"}
                  `}
                >
                  <p
                    onClick={() => {
                      turnOffAll();
                      setIsUniversity(true);
                      if (!openContent.includes("university")) {
                        setOpenContent([...openContent, "university"]);
                      }
                    }}
                    className={`
                      pl-[47px] py-[4px]
                      ${
                        isUniversity
                          ? "text-white bg-[#ffffff1a] cursor-default"
                          : "cursor-pointer"
                      } flex items-center gap-[10px] hover:bg-[#ffffff1a] duration-150
ease-in-out w-full`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="15"
                      viewBox="0 0 17 15"
                      fill="none"
                    >
                      <path
                        d="M0.811096 0H15.4108C15.6259 0 15.8322 0.0854545 15.9844 0.237565C16.1365 0.389675 16.2219 0.59598 16.2219 0.811096V13.7886C16.2219 14.0038 16.1365 14.2101 15.9844 14.3622C15.8322 14.5143 15.6259 14.5997 15.4108 14.5997H0.811096C0.59598 14.5997 0.389675 14.5143 0.237565 14.3622C0.0854545 14.2101 0 14.0038 0 13.7886V0.811096C0 0.59598 0.0854545 0.389675 0.237565 0.237565C0.389675 0.0854545 0.59598 0 0.811096 0V0ZM4.05548 10.1387V6.89432L5.67767 8.51651L7.29987 6.89432V10.1387H8.92206V4.46103H7.29987L5.67767 6.08322L4.05548 4.46103H2.43329V10.1387H4.05548ZM12.9775 7.70541V4.46103H11.3553V7.70541H9.73315L12.1664 10.1387L14.5997 7.70541H12.9775Z"
                        fill="#81A1C1"
                      />
                    </svg>
                    <span>university</span>
                  </p>

                  <p
                    onClick={() => {
                      turnOffAll();
                      setIsSSAFY(true);
                      if (!openContent.includes("SSAFY-11th")) {
                        setOpenContent([...openContent, "SSAFY-11th"]);
                      }
                    }}
                    className={`
                      pl-[47px] py-[4px]
                      ${
                        isSSAFY
                          ? "text-white bg-[#ffffff1a] cursor-default"
                          : "cursor-pointer"
                      } flex items-center gap-[10px] hover:bg-[#ffffff1a] duration-150
ease-in-out w-full`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="15"
                      viewBox="0 0 17 15"
                      fill="none"
                    >
                      <path
                        d="M0.811096 0H15.4108C15.6259 0 15.8322 0.0854545 15.9844 0.237565C16.1365 0.389675 16.2219 0.59598 16.2219 0.811096V13.7886C16.2219 14.0038 16.1365 14.2101 15.9844 14.3622C15.8322 14.5143 15.6259 14.5997 15.4108 14.5997H0.811096C0.59598 14.5997 0.389675 14.5143 0.237565 14.3622C0.0854545 14.2101 0 14.0038 0 13.7886V0.811096C0 0.59598 0.0854545 0.389675 0.237565 0.237565C0.389675 0.0854545 0.59598 0 0.811096 0V0ZM4.05548 10.1387V6.89432L5.67767 8.51651L7.29987 6.89432V10.1387H8.92206V4.46103H7.29987L5.67767 6.08322L4.05548 4.46103H2.43329V10.1387H4.05548ZM12.9775 7.70541V4.46103H11.3553V7.70541H9.73315L12.1664 10.1387L14.5997 7.70541H12.9775Z"
                        fill="#81A1C1"
                      />
                    </svg>
                    <span>SSAFY-11th</span>
                  </p>
                </div>
              </div>
              <div className="h-[22px]"></div>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              setIsProInfoOpen((prev) => !prev);
              setIsSkillsOpen(false);
              setIsExpOpen(false);
            }}
            // ${isPersonalInfoOpen ? "mt-[22px]" : ""}
            className={`cursor-pointer h-[40px] w-full flex p-[22px] 
              
              items-center border-y-[0.5px] border-[#607B96]`}
          >
            <h3 className="text-white">
              <span
                className={`
                  inline-block
                  transition-transform duration-200 ease-in-out
                  ${isProInfoOpen ? "rotate-180" : "rotate-0"}
                `}
              >
                ▼
              </span>{" "}
              <span>professional-info</span>
            </h3>
          </button>
          <div
            className={`
              origin-top
              transition-all duration-300 ease-in-out
              ${
                isProInfoOpen
                  ? "scale-y-100 opacity-100"
                  : "scale-y-0 opacity-0"
              }
              text-[#607B96] flex flex-col
            `}
          >
            <div>
              <p
                onClick={() => setIsSkillsOpen((prev) => !prev)}
                className="flex items-center gap-2.5 cursor-pointer w-min px-[22px] pt-[22px] pb-[3px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  className={`
                  inline-block
                  transition-transform duration-200 ease-in-out
                  ${isSkillsOpen ? "rotate-90" : "rotate-0"}
                `}
                >
                  <path
                    d="M4.95 6.36403L-4.94551e-07 1.41403L1.414 2.66411e-05L7.778 6.36403L1.414 12.728L-6.18079e-08 11.314L4.95 6.36403Z"
                    fill="#607B96"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="13"
                  viewBox="0 0 15 13"
                  fill="none"
                >
                  <path
                    d="M14.4444 3.61111V12.2778C14.4444 12.4693 14.3684 12.653 14.2329 12.7885C14.0975 12.9239 13.9138 13 13.7222 13H0.722222C0.530677 13 0.346977 12.9239 0.211534 12.7885C0.076091 12.653 0 12.4693 0 12.2778V2.88889H13.7222C13.9138 2.88889 14.0975 2.96498 14.2329 3.10042C14.3684 3.23587 14.4444 3.41957 14.4444 3.61111ZM7.52122 1.44444H0V0.722222C0 0.530677 0.076091 0.346977 0.211534 0.211534C0.346977 0.076091 0.530677 0 0.722222 0H6.07678L7.52122 1.44444Z"
                    fill="#E99287"
                  />
                </svg>
                <span className={`${isSkillsOpen ? "text-white" : ""}`}>
                  skills
                </span>
              </p>
              <div
                className={`
                    overflow-hidden
                    transition-[max-height] duration-300 ease-in-out
                    ${isSkillsOpen ? "max-h-[100px]" : "max-h-0"}
                  `}
              >
                <p
                  onClick={() => {
                    turnOffAll();
                    setIsHard(true);
                    if (!openContent.includes("hard-skills")) {
                      setOpenContent([...openContent, "hard-skills"]);
                    }
                  }}
                  className={`
                      pl-[47px] py-[4px]
                      ${
                        isHard
                          ? "text-white bg-[#ffffff1a] cursor-default"
                          : "cursor-pointer"
                      } flex items-center gap-[10px] hover:bg-[#ffffff1a] duration-150
ease-in-out w-full`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                  >
                    <path
                      d="M0.811096 0H15.4108C15.6259 0 15.8322 0.0854545 15.9844 0.237565C16.1365 0.389675 16.2219 0.59598 16.2219 0.811096V13.7886C16.2219 14.0038 16.1365 14.2101 15.9844 14.3622C15.8322 14.5143 15.6259 14.5997 15.4108 14.5997H0.811096C0.59598 14.5997 0.389675 14.5143 0.237565 14.3622C0.0854545 14.2101 0 14.0038 0 13.7886V0.811096C0 0.59598 0.0854545 0.389675 0.237565 0.237565C0.389675 0.0854545 0.59598 0 0.811096 0V0ZM4.05548 10.1387V6.89432L5.67767 8.51651L7.29987 6.89432V10.1387H8.92206V4.46103H7.29987L5.67767 6.08322L4.05548 4.46103H2.43329V10.1387H4.05548ZM12.9775 7.70541V4.46103H11.3553V7.70541H9.73315L12.1664 10.1387L14.5997 7.70541H12.9775Z"
                      fill="#81A1C1"
                    />
                  </svg>
                  <span>hard-skills</span>
                </p>
                <p
                  onClick={() => {
                    turnOffAll();
                    setIsSoft(true);
                    if (!openContent.includes("soft-skills")) {
                      setOpenContent([...openContent, "soft-skills"]);
                    }
                  }}
                  className={`pl-[47px] py-[4px]
                      ${
                        isSoft
                          ? "text-white bg-[#ffffff1a] cursor-default"
                          : "cursor-pointer"
                      } flex items-center gap-[10px] hover:bg-[#ffffff1a] duration-150
ease-in-out w-full`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                  >
                    <path
                      d="M0.811096 0H15.4108C15.6259 0 15.8322 0.0854545 15.9844 0.237565C16.1365 0.389675 16.2219 0.59598 16.2219 0.811096V13.7886C16.2219 14.0038 16.1365 14.2101 15.9844 14.3622C15.8322 14.5143 15.6259 14.5997 15.4108 14.5997H0.811096C0.59598 14.5997 0.389675 14.5143 0.237565 14.3622C0.0854545 14.2101 0 14.0038 0 13.7886V0.811096C0 0.59598 0.0854545 0.389675 0.237565 0.237565C0.389675 0.0854545 0.59598 0 0.811096 0V0ZM4.05548 10.1387V6.89432L5.67767 8.51651L7.29987 6.89432V10.1387H8.92206V4.46103H7.29987L5.67767 6.08322L4.05548 4.46103H2.43329V10.1387H4.05548ZM12.9775 7.70541V4.46103H11.3553V7.70541H9.73315L12.1664 10.1387L14.5997 7.70541H12.9775Z"
                      fill="#81A1C1"
                    />
                  </svg>
                  <span>soft-skills</span>
                </p>
              </div>
            </div>
            <div>
              <p
                onClick={() => setIsExpOpen((prev) => !prev)}
                className="flex items-center gap-2.5 cursor-pointer w-min px-[22px] pt-[7px] pb-[3px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  className={`
                  inline-block
                  transition-transform duration-200 ease-in-out
                  ${isExpOpen ? "rotate-90" : "rotate-0"}
                `}
                >
                  <path
                    d="M4.95 6.36403L-4.94551e-07 1.41403L1.414 2.66411e-05L7.778 6.36403L1.414 12.728L-6.18079e-08 11.314L4.95 6.36403Z"
                    fill="#607B96"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="13"
                  viewBox="0 0 15 13"
                  fill="none"
                >
                  <path
                    d="M14.4444 3.61111V12.2778C14.4444 12.4693 14.3684 12.653 14.2329 12.7885C14.0975 12.9239 13.9138 13 13.7222 13H0.722222C0.530677 13 0.346977 12.9239 0.211534 12.7885C0.076091 12.653 0 12.4693 0 12.2778V2.88889H13.7222C13.9138 2.88889 14.0975 2.96498 14.2329 3.10042C14.3684 3.23587 14.4444 3.41957 14.4444 3.61111ZM7.52122 1.44444H0V0.722222C0 0.530677 0.076091 0.346977 0.211534 0.211534C0.346977 0.076091 0.530677 0 0.722222 0H6.07678L7.52122 1.44444Z"
                    fill="#43D9AD"
                  />
                </svg>
                <span className={`${isExpOpen ? "text-white" : ""}`}>
                  experiences
                </span>
              </p>
              <div
                className={`
                    origin-top
                    transition-all duration-300 ease-in-out
                    ${
                      isExpOpen
                        ? "scale-y-100 opacity-100"
                        : "scale-y-0 opacity-0"
                    }
                  `}
              >
                <p
                  onClick={() => {
                    turnOffAll();
                    setIsCareer(true);
                    if (!openContent.includes("career")) {
                      setOpenContent([...openContent, "career"]);
                    }
                  }}
                  className={`
                      pl-[47px] py-[4px]
                      ${
                        isCareer
                          ? "text-white bg-[#ffffff1a] cursor-default"
                          : "cursor-pointer"
                      } flex items-center gap-[10px] hover:bg-[#ffffff1a] duration-150
ease-in-out w-full`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                  >
                    <path
                      d="M0.811096 0H15.4108C15.6259 0 15.8322 0.0854545 15.9844 0.237565C16.1365 0.389675 16.2219 0.59598 16.2219 0.811096V13.7886C16.2219 14.0038 16.1365 14.2101 15.9844 14.3622C15.8322 14.5143 15.6259 14.5997 15.4108 14.5997H0.811096C0.59598 14.5997 0.389675 14.5143 0.237565 14.3622C0.0854545 14.2101 0 14.0038 0 13.7886V0.811096C0 0.59598 0.0854545 0.389675 0.237565 0.237565C0.389675 0.0854545 0.59598 0 0.811096 0V0ZM4.05548 10.1387V6.89432L5.67767 8.51651L7.29987 6.89432V10.1387H8.92206V4.46103H7.29987L5.67767 6.08322L4.05548 4.46103H2.43329V10.1387H4.05548ZM12.9775 7.70541V4.46103H11.3553V7.70541H9.73315L12.1664 10.1387L14.5997 7.70541H12.9775Z"
                      fill="#81A1C1"
                    />
                  </svg>
                  <span>career</span>
                </p>
                <p
                  onClick={() => {
                    turnOffAll();
                    setIsOpenSource(true);
                    if (!openContent.includes("open-source")) {
                      setOpenContent([...openContent, "open-source"]);
                    }
                  }}
                  className={`pl-[47px] py-[4px]
                      ${
                        isOpenSource
                          ? "text-white bg-[#ffffff1a] cursor-default"
                          : "cursor-pointer"
                      } flex items-center gap-[10px] hover:bg-[#ffffff1a] duration-150
ease-in-out w-full`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                  >
                    <path
                      d="M0.811096 0H15.4108C15.6259 0 15.8322 0.0854545 15.9844 0.237565C16.1365 0.389675 16.2219 0.59598 16.2219 0.811096V13.7886C16.2219 14.0038 16.1365 14.2101 15.9844 14.3622C15.8322 14.5143 15.6259 14.5997 15.4108 14.5997H0.811096C0.59598 14.5997 0.389675 14.5143 0.237565 14.3622C0.0854545 14.2101 0 14.0038 0 13.7886V0.811096C0 0.59598 0.0854545 0.389675 0.237565 0.237565C0.389675 0.0854545 0.59598 0 0.811096 0V0ZM4.05548 10.1387V6.89432L5.67767 8.51651L7.29987 6.89432V10.1387H8.92206V4.46103H7.29987L5.67767 6.08322L4.05548 4.46103H2.43329V10.1387H4.05548ZM12.9775 7.70541V4.46103H11.3553V7.70541H9.73315L12.1664 10.1387L14.5997 7.70541H12.9775Z"
                      fill="#81A1C1"
                    />
                  </svg>
                  <span>open-source</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 메인 */}
      <div className="w-[calc(100%-350px)] flex flex-col text-[#607B96] ">
        {/* 상단 */}
        <div className="h-[50px] border-b-[0.5px] border-[#607B96]">
          {openContent.length > 0 ? (
            <div className="h-full flex">
              {openContent.map((content) => (
                <div
                  key={content}
                  className={`h-full p-[22px] pr-[17px] flex items-center w-fit border-r-[0.5px] border-[#607B96] justify-between  cursor-pointer hover:bg-[#ffffff0b] duration-150 ease-in-out`}
                >
                  <span className="mr-[20px] whitespace-nowrap">{content}</span>
                  <div
                    className="w-max p-[5px]"
                    onClick={(e) => handleDeleteContent(content, e)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                    >
                      <path
                        d="M5.00005 4.65244L8.71255 0.939941L9.77305 2.00044L6.06055 5.71294L9.77305 9.42544L8.71255 10.4859L5.00005 6.77344L1.28755 10.4859L0.227051 9.42544L3.93955 5.71294L0.227051 2.00044L1.28755 0.939941L5.00005 4.65244Z"
                        fill="#607B96"
                      />
                    </svg>
                  </div>
                </div>
              ))}{" "}
            </div>
          ) : (
            <div className="h-full flex"></div>
          )}
        </div>
        {/* 컨텐츠 */}
      </div>
    </div>
  );
}
