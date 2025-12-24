"use client";

import { useState } from "react";

export default function AboutMe() {
  const [isPersonalInfoOpen, setIsPersonalInfoOpen] = useState<Boolean>(true);
  const [isProInfoOpen, setIsProInfoOpen] = useState<Boolean>(true);
  const [isBioOpen, setIsBioOpen] = useState<Boolean>(false);
  const [isInterestsOpen, setIsInterestsOpen] = useState<Boolean>(false);
  const [isEduOpen, setIsEduOpen] = useState<Boolean>(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState<Boolean>(false);
  const [isExpOpen, setIsExpOpen] = useState<Boolean>(false);

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
              ${isPersonalInfoOpen ? "max-h-[150px]" : "max-h-0"}
            `}
          >
            <div
              className={`text-[#607B96] flex flex-col p-[22px] gap-2 duration-200
            ${
              isPersonalInfoOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-1"
            }`}
            >
              <p
                onClick={() => setIsBioOpen((prev) => !prev)}
                className="flex items-center gap-2.5 cursor-pointer w-min"
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
                <span className={`${isBioOpen ? "text-white" : ""}`}>bio</span>
              </p>
              <p
                onClick={() => setIsInterestsOpen((prev) => !prev)}
                className="flex items-center gap-2.5 cursor-pointer w-min"
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
              <p
                onClick={() => setIsEduOpen((prev) => !prev)}
                className="flex items-center gap-2.5 cursor-pointer w-min"
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
            className="cursor-pointer h-[40px] w-full flex p-[22px] items-center border-y-[0.5px] border-[#607B96]"
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
            `}
          >
            <div className="text-[#607B96] flex flex-col p-[22px] gap-[10px]">
              <p
                onClick={() => setIsSkillsOpen((prev) => !prev)}
                className="flex items-center gap-2.5 cursor-pointer w-min"
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
              <p
                onClick={() => setIsExpOpen((prev) => !prev)}
                className="flex items-center gap-2.5 cursor-pointer w-min"
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
            </div>
          </div>
        </div>
      </div>
      {/* 메인 */}
      <div className="w-[calc(100%-350px)] flex flex-col text-[#607B96] ">
        {/* 상단 */}
        <div className="h-[50px] border-b-[0.5px] border-[#607B96]">
          {/* 컨텐츠 */}
          <div className="h-full p-[22px] flex items-center w-[167px] border-r-[0.5px] border-[#607B96] justify-between">
            <span>contacts</span>
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
      </div>
    </div>
  );
}
