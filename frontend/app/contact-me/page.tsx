"use client";

import { useEffect, useRef, useState } from "react";
import formatDate from "../../utils/formatdate";
import { Icons } from "@icons/index";

export default function ContactMe() {
  const [isContactOpen, setIsContactOpen] = useState<Boolean>(true);
  const [isFindOpen, setIsFindOpen] = useState<Boolean>(true);
  const [name, setName] = useState<String>("");
  const [email, setEmail] = useState<String>("");
  const [message, setMessage] = useState<String>("");
  const [lineArr, setLineArr] = useState<Array<number>>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  const previewRef = useRef<HTMLDivElement | null>(null);
  const [w, setWidth] = useState<number>(300);

  let date = new Date();

  useEffect(() => {
    if (previewRef.current) {
      const eventHandler = () => {
        const { width } = previewRef.current?.getBoundingClientRect();

        setWidth(width);
        // console.log(width, height);
      };

      const resizeObserver = new ResizeObserver(eventHandler);
      resizeObserver.observe(previewRef.current);

      return () => resizeObserver.disconnect();
    }
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      countLines();
    });
  }, [w]);

  function countLines() {
    var el = document.getElementById("content");
    var divHeight = el.offsetHeight;
    var lineHeight = parseInt(el.style.lineHeight);
    var lines = divHeight / lineHeight;
    let i = 0;
    const last = lineArr[lineArr.length - 1] ?? 0;
    // console.log(line, last, lineArr);
    if (last < lines) {
      i = last;
      let temp = [];
      for (i; i < lines; i++) {
        temp.push(i + 1);
      }
      setLineArr((prev) => [...prev, ...temp]);
    } else if (lines < last) {
      setLineArr((prev) => prev.slice(0, lines));
    }
  }

  return (
    <div className="h-full w-full flex [&_*]:transition-colors [&_*]:duration-500 [&_*]:ease-in-out">
      {/* 왼쪽 */}
      <div className="h-full w-[270px] border-r-[0.5px] border-border">
        <div>
          <button
            onClick={() => setIsContactOpen((prev) => !prev)}
            className="cursor-pointer h-[40px] w-full flex p-[20px] items-center border-b-[0.5px] border-border"
          >
            <h3 className="text-highlight">
              <span
                className={`
                  inline-block
                  !transition-transform !duration-200 ease-in-out
                  ${isContactOpen ? "rotate-180" : "rotate-0"}
                `}
              >
                ▼
              </span>{" "}
              <span>contacts</span>
            </h3>
          </button>
          <div
            className={`
              overflow-hidden
              !transition-[max-height] !duration-300
              ${isContactOpen ? "max-h-[40px]" : "max-h-0"}
            `}
          >
            <div
              className={`text-border flex flex-col p-[10px] gap-2 !duration-200
            ${
              isContactOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-1"
            }`}
            >
              <a
                href="mailto:kimminkyoung0608@gmail.com"
                className="flex items-center gap-2 cursor-pointer hover:underline"
              >
                <Icons.Mail className="w-[14px] h-[14px] fill-border" />
                <span className="text-border">kimminkyoung0608@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => setIsFindOpen((prev) => !prev)}
            className="cursor-pointer h-[40px] w-full flex p-[20px] items-center border-y-[0.5px] border-border"
          >
            <h3 className="text-highlight">
              <span
                className={`
                  inline-block
                  !transition-transform !duration-200
                  ${isFindOpen ? "rotate-180" : "rotate-0"}
                `}
              >
                ▼
              </span>{" "}
              <span>find-me-also-in</span>
            </h3>
          </button>
          <div
            className={`
              origin-top
              !transition-all !duration-300
              ${isFindOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}
            `}
          >
            <div className="text-border flex flex-col p-[15px] gap-[8px]">
              <a
                href="https://github.com/mkkim68"
                className="flex items-center gap-2 hover:underline"
              >
                <Icons.Link className="w-[14px] h-[14px] fill-border" />
                <span className="text-border">Github profile</span>
              </a>
              <a
                href="https://www.linkedin.com/in/%EB%AF%BC%EA%B2%BD-%EA%B9%80-b36195373/"
                className="flex items-center gap-2 hover:underline"
              >
                <Icons.Link className="w-[14px] h-[14px] fill-border" />
                <span className="text-border">Linked-In account</span>
              </a>
              <a
                href="https://www.instagram.com/mmkkkkkim?igsh=YXB1OTYxcDhxdmR0&utm_source=qr"
                className="flex items-center gap-2 hover:underline"
              >
                <Icons.Link className="w-[14px] h-[14px] fill-border" />
                <span className="text-border">Instagram account</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* 메인 */}
      <div className="w-[calc(100%-270px)] flex flex-col text-highlight cursor-default">
        <div className="h-[40px] border-b-[0.5px] border-border">
          <div className="h-full p-[20px] flex items-center w-[167px] border-r-[0.5px] border-border justify-between bg-focus hover:bg-hover transition-all !duration-150">
            <span>contacts</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              className="fill-highlight"
            >
              <path d="M5.00005 4.65244L8.71255 0.939941L9.77305 2.00044L6.06055 5.71294L9.77305 9.42544L8.71255 10.4859L5.00005 6.77344L1.28755 10.4859L0.227051 9.42544L3.93955 5.71294L0.227051 2.00044L1.28755 0.939941L5.00005 4.65244Z" />
            </svg>
          </div>
        </div>
        <div ref={previewRef} className="flex h-full overflow-hidden">
          <div className="flex flex-col items-center w-[100%] border-r-[0.5px] border-border">
            <form
              action=""
              className="flex flex-col items-start pt-[115px] gap-7 text-[14px]"
            >
              <div className="flex flex-col items-start gap-1.5">
                <label htmlFor="name">_name:</label>
                <input
                  id="name"
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                    countLines();
                  }}
                  spellCheck={false}
                  autoCorrect="off"
                  autoCapitalize="off"
                  className="bg-submit-bg-active p-[13px] w-[372px] h-[40px] border-[0.5px] border-input-b duration-150
ease-in-out focus:border-border focus:border-[2px] outline-none rounded-[8px]"
                />
              </div>
              <div className="flex flex-col items-start gap-1.5">
                <label htmlFor="email">_email:</label>
                <input
                  id="email"
                  type="text"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    countLines();
                  }}
                  spellCheck={false}
                  autoCorrect="off"
                  autoCapitalize="off"
                  className="bg-submit-bg-active p-[13px] w-[372px] h-[40px] border-[0.5px] border-input-b duration-150
ease-in-out focus:border-border focus:border-[2px] outline-none rounded-[8px]"
                />
              </div>
              <div className="flex flex-col items-start gap-1.5">
                <label htmlFor="message">_message:</label>
                <textarea
                  id="message"
                  onChange={(e) => {
                    setMessage(e.target.value);
                    countLines();
                  }}
                  maxLength={300}
                  spellCheck={false}
                  autoCorrect="off"
                  autoCapitalize="off"
                  className="bg-submit-bg-active resize-none p-[13px] w-[372px] h-[145px] border-[0.5px] border-input-b duration-150
ease-in-out focus:border-border focus:border-[2px] outline-none rounded-[8px]"
                />
              </div>
              <button
                className="bg-submit-bg cursor-pointer hover:bg-border active:bg-submit-bg-active w-[146px] h-[38px] text-highlight rounded-[8px] !duration-150
ease-in-out"
              >
                submit-message
              </button>
            </form>
          </div>
          {/* 코드부분 */}
          <div
            className={`text-[14px] ${
              w <= 800 ? "hidden" : "block"
            } flex justify-center items-start w-[100%] border-r-[0.5px] border-border pt-[100px] px-[50px]`}
          >
            <div style={{ lineHeight: "20px" }} className="mr-[20px]">
              {lineArr.map((cnt, idx) => (
                <p className="text-right text-border" key={idx}>
                  {cnt}
                </p>
              ))}
            </div>
            <div
              id="content"
              style={{ lineHeight: "20px" }}
              className="flex flex-col items-start w-[98%] whitespace-pre-wrap
    break-all"
            >
              <p>
                <span className="text-declare">const </span>
                <span className="text-variable">button</span>
                <span className="text-declare"> = </span>
                <span className="text-variable">document</span>
                <span className="text-border">.</span>
                <span className="text-variable">querySelector</span>
                <span className="text-border">(</span>
                <span className="text-string">'#sendBtn'</span>
                <span className="text-border">);</span>
              </p>
              <p>
                <span className="text-declare">const </span>
                <span className="text-variable">message</span>
                <span className="text-declare"> = </span>
                <span className="text-border">{`{`}</span>
              </p>
              <p>
                <span className="text-variable ml-[10px]">name</span>
                <span className="text-border">: </span>
                <span className="text-string">{`"${name}"`}</span>
                <span className="text-border">,</span>
              </p>
              <p>
                <span className="text-variable ml-[10px]">email</span>
                <span className="text-border">: </span>
                <span className="text-string">{`"${email}"`}</span>
                <span className="text-border">,</span>
              </p>
              <p>
                <span className="text-variable ml-[10px]">message</span>
                <span className="text-border">: </span>
                <span className="text-string">{`"${message}"`}</span>
                <span className="text-border">,</span>
              </p>
              <p>
                <span className="ml-[10px] text-border">date: </span>
                <span className="text-string">{`"${formatDate(
                  "day",
                  date.getDay()
                )} ${date.getDate()} ${formatDate(
                  "month",
                  date.getMonth() + 1
                )}"`}</span>
              </p>
              <p>
                <span className="text-border">{`}`}</span>
              </p>
              <p>
                <span className="text-variable">button.addEventListener</span>
                <span className="text-border">(</span>
                <span className="text-string">'click'</span>
                <span className="text-border">, ()</span>
                <span className="text-declare">{` => `}</span>
                <span className="text-border">{`{`}</span>
              </p>
              <p>
                <span className="text-variable ml-[10px]">form</span>
                <span className="text-border">.</span>
                <span className="text-variable">send</span>
                <span className="text-border">(</span>
                <span className="text-variable">message</span>
                <span className="text-border">);</span>
              </p>
              <p>
                <span className="text-border">{`})`}</span>
              </p>
            </div>
          </div>
          <div className="w-[25px] border-l-[0.5px] border-border flex justify-center pt-1">
            <div className="w-[18px] h-[7px] bg-border"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
