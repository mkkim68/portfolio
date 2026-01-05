"use client";

import { useEffect, useRef, useState } from "react";
import formatDate from "../../utils/formatdate";

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
    <div className="h-full w-full bg-[#011627] flex">
      {/* 왼쪽 */}
      <div className="h-full w-[300px] border-r-[0.5px] border-[#607B96]">
        <div>
          <button
            onClick={() => setIsContactOpen((prev) => !prev)}
            className="cursor-pointer h-[40px] w-full flex p-[20px] items-center border-b-[0.5px] border-[#607B96]"
          >
            <h3 className="text-white">
              <span
                className={`
                  inline-block
                  transition-transform duration-200 ease-in-out
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
              transition-[max-height] duration-300 ease-in-out
              ${isContactOpen ? "max-h-[70px]" : "max-h-0"}
            `}
          >
            <div
              className={`text-[#607B96] flex flex-col p-[22px] gap-2 duration-200
            ${
              isContactOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-1"
            }`}
            >
              <p className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 17 15"
                  fill="none"
                >
                  <path
                    d="M0.811096 0H15.4108C15.6259 0 15.8322 0.0854545 15.9844 0.237565C16.1365 0.389675 16.2219 0.59598 16.2219 0.811096V13.7886C16.2219 14.0038 16.1365 14.2101 15.9844 14.3622C15.8322 14.5143 15.6259 14.5997 15.4108 14.5997H0.811096C0.59598 14.5997 0.389675 14.5143 0.237565 14.3622C0.0854545 14.2101 0 14.0038 0 13.7886V0.811096C0 0.59598 0.0854545 0.389675 0.237565 0.237565C0.389675 0.0854545 0.59598 0 0.811096 0ZM8.15963 7.04275L2.95888 2.62633L1.90851 3.86244L8.17017 9.17918L14.3191 3.85838L13.2582 2.6312L8.16044 7.04275H8.15963Z"
                    fill="#607B96"
                  />
                </svg>
                <span>kimminkyoung0608@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => setIsFindOpen((prev) => !prev)}
            className="cursor-pointer h-[40px] w-full flex p-[20px] items-center border-y-[0.5px] border-[#607B96]"
          >
            <h3 className="text-white">
              <span
                className={`
                  inline-block
                  transition-transform duration-200 ease-in-out
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
              transition-all duration-300 ease-in-out
              ${isFindOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}
            `}
          >
            <div className="text-[#607B96] flex flex-col p-[22px] gap-[10px]">
              <a
                href="https://github.com/mkkim68"
                className="flex items-center gap-2 hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M6.22222 2.66667V4.44444H1.77778V14.2222H11.5556V9.77778H13.3333V15.1111C13.3333 15.3469 13.2397 15.573 13.073 15.7397C12.9063 15.9064 12.6802 16 12.4444 16H0.888889C0.653141 16 0.427048 15.9064 0.260349 15.7397C0.0936505 15.573 0 15.3469 0 15.1111V3.55556C0 3.31981 0.0936505 3.09372 0.260349 2.92702C0.427048 2.76032 0.653141 2.66667 0.888889 2.66667H6.22222ZM16 0V7.11111H14.2222V3.03378L7.29511 9.96178L6.03822 8.70489L12.9644 1.77778H8.88889V0H16Z"
                    fill="#607B96"
                  />
                </svg>
                <span>Github profile</span>
              </a>
              <a
                href="https://www.linkedin.com/in/%EB%AF%BC%EA%B2%BD-%EA%B9%80-b36195373/"
                className="flex items-center gap-2 hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M6.22222 2.66667V4.44444H1.77778V14.2222H11.5556V9.77778H13.3333V15.1111C13.3333 15.3469 13.2397 15.573 13.073 15.7397C12.9063 15.9064 12.6802 16 12.4444 16H0.888889C0.653141 16 0.427048 15.9064 0.260349 15.7397C0.0936505 15.573 0 15.3469 0 15.1111V3.55556C0 3.31981 0.0936505 3.09372 0.260349 2.92702C0.427048 2.76032 0.653141 2.66667 0.888889 2.66667H6.22222ZM16 0V7.11111H14.2222V3.03378L7.29511 9.96178L6.03822 8.70489L12.9644 1.77778H8.88889V0H16Z"
                    fill="#607B96"
                  />
                </svg>
                <span>Linked-In account</span>
              </a>
              <a
                href="https://www.instagram.com/mmkkkkkim?igsh=YXB1OTYxcDhxdmR0&utm_source=qr"
                className="flex items-center gap-2 hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M6.22222 2.66667V4.44444H1.77778V14.2222H11.5556V9.77778H13.3333V15.1111C13.3333 15.3469 13.2397 15.573 13.073 15.7397C12.9063 15.9064 12.6802 16 12.4444 16H0.888889C0.653141 16 0.427048 15.9064 0.260349 15.7397C0.0936505 15.573 0 15.3469 0 15.1111V3.55556C0 3.31981 0.0936505 3.09372 0.260349 2.92702C0.427048 2.76032 0.653141 2.66667 0.888889 2.66667H6.22222ZM16 0V7.11111H14.2222V3.03378L7.29511 9.96178L6.03822 8.70489L12.9644 1.77778H8.88889V0H16Z"
                    fill="#607B96"
                  />
                </svg>
                <span>Instagram account</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* 메인 */}
      <div className="w-[calc(100%-300px)] flex flex-col text-white cursor-default">
        <div className="h-[40px] border-b-[0.5px] border-[#607B96]">
          <div className="h-full p-[20px] flex items-center w-[167px] border-r-[0.5px] border-[#607B96] justify-between">
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
                fill="#ffffff"
              />
            </svg>
          </div>
        </div>
        <div ref={previewRef} className="flex h-full">
          <div className="flex flex-col items-center w-[100%] border-r-[0.5px] border-[#607B96]">
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
                  className="bg-[#011221] p-[13px] w-[372px] h-[40px] border-[0.5px] border-[#1E2D3D] duration-150
ease-in-out focus:border-[#607B96] focus:border-[2px] outline-none rounded-[8px]"
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
                  className="bg-[#011221] p-[13px] w-[372px] h-[40px] border-[0.5px] border-[#1E2D3D] duration-150
ease-in-out focus:border-[#607B96] focus:border-[2px] outline-none rounded-[8px]"
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
                  spellCheck={false}
                  autoCorrect="off"
                  autoCapitalize="off"
                  className="bg-[#011221] resize-none p-[13px] w-[372px] h-[145px] border-[0.5px] border-[#1E2D3D] duration-150
ease-in-out focus:border-[#607B96] focus:border-[2px] outline-none rounded-[8px]"
                />
              </div>
              <button
                className="bg-[#1C2B3A] cursor-pointer hover:bg-[#607B96] active:bg-[#011221] w-[146px] h-[38px] text-white rounded-[8px] duration-150
ease-in-out"
              >
                submit-message
              </button>
            </form>
          </div>

          <div
            className={`text-[14px] ${
              w <= 800 ? "hidden" : "block"
            } flex justify-center items-start w-[100%] border-r-[0.5px] border-[#607B96] py-[100px] px-[50px]`}
          >
            <div style={{ lineHeight: "20px" }} className="mr-[20px]">
              {lineArr.map((cnt, idx) => (
                <p className="text-right" key={idx}>
                  {cnt}
                </p>
              ))}
            </div>
            <div
              id="content"
              style={{ lineHeight: "20px" }}
              className="flex flex-col items-start w-[98%]"
            >
              <p>
                <span className="text-[#C98BDF]">const </span>
                <span className="text-[#5565E8]">button</span>
                <span className="text-[#C98BDF]"> = </span>
                <span className="text-[#5565E8]">document</span>
                <span>.</span>
                <span className="text-[#5565E8]">querySelector</span>
                <span>(</span>
                <span className="text-[#FEA55F]">'#sendBtn'</span>
                <span>);</span>
              </p>
              <p>
                <span className="text-[#C98BDF]">const </span>
                <span className="text-[#5565E8]">message</span>
                <span className="text-[#C98BDF]"> = </span>
                <span>{`{`}</span>
              </p>
              <p>
                <span className="text-[#5565E8] ml-[10px]">name</span>
                <span>: </span>
                <span className="text-[#FEA55F]">{`"${name}"`}</span>
                <span>,</span>
              </p>
              <p>
                <span className="text-[#5565E8] ml-[10px]">email</span>
                <span>: </span>
                <span className="text-[#FEA55F]">{`"${email}"`}</span>
                <span>,</span>
              </p>
              <p>
                <span className="text-[#5565E8] ml-[10px]">message</span>
                <span>: </span>
                <span className="text-[#FEA55F]">{`"${message}"`}</span>
                <span>,</span>
              </p>
              <p>
                <span className="ml-[10px]">date: </span>
                <span className="text-[#FEA55F]">{`"${formatDate(
                  "day",
                  date.getDay()
                )} ${date.getDate()} ${formatDate(
                  "month",
                  date.getMonth() + 1
                )}"`}</span>
              </p>
              <p>
                <span>{`}`}</span>
              </p>
              <p>
                <span className="text-[#5565E8]">button.addEventListener</span>
                <span>(</span>
                <span className="text-[#FEA55F]">'click'</span>
                <span>, ()</span>
                <span className="text-[#C98BDF]">{` => `}</span>
                <span>{`{`}</span>
              </p>
              <p>
                <span className="text-[#5565E8] ml-[10px]">form</span>
                <span>.</span>
                <span className="text-[#5565E8]">send</span>
                <span>(</span>
                <span className="text-[#5565E8]">message</span>
                <span>);</span>
              </p>
              <p>
                <span>{`})`}</span>
              </p>
            </div>
          </div>
          <div className="w-[25px] border-l-[0.5px] border-[#607B96] flex justify-center pt-1">
            {/* 스크롤인척 */}
            <div className="w-[18px] h-[7px] bg-[#607B96]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
