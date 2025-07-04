"use client";

import { useState } from "react";
import formatDate from "../../utils/formatdate";

export default function ContactMe() {
  const [isContactOpen, setIsContactOpen] = useState<Boolean>(true);
  const [isFindOpen, setIsFindOpen] = useState<Boolean>(true);
  const [name, setName] = useState<String>("");
  const [email, setEmail] = useState<String>("");
  const [message, setMessage] = useState<String>("");
  let date = new Date();

  return (
    <div className="h-full w-full flex">
      {/* 왼쪽 */}
      <div className="h-full w-[300px] border-r-[0.5px] border-[#607B96]">
        <div>
          <button
            onClick={() => setIsContactOpen((prev) => !prev)}
            className="cursor-pointer h-[45px] w-full flex p-[22px] items-center border-b-[0.5px] border-[#607B96]"
          >
            <h3 className="text-white">{isContactOpen ? "▲" : "▼"} contacts</h3>
          </button>
          {isContactOpen ? (
            <div className="text-[#607B96] flex flex-col p-[22px] gap-2">
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
              <p className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M16.221 12.496V15.6825C16.2211 15.9107 16.1347 16.1304 15.9791 16.2973C15.8236 16.4642 15.6105 16.5659 15.3829 16.5819C14.9891 16.6089 14.6674 16.6234 14.4187 16.6234C6.45507 16.6234 0 10.1683 0 2.20468C0 1.95596 0.0135175 1.63424 0.0414537 1.24043C0.0574246 1.01283 0.159129 0.799769 0.326046 0.644225C0.492962 0.488682 0.712664 0.402241 0.940819 0.402344H4.12735C4.23913 0.402231 4.34696 0.44367 4.4299 0.518613C4.51283 0.593555 4.56495 0.69665 4.57613 0.80787C4.59686 1.01514 4.61578 1.18005 4.63381 1.30531C4.8129 2.55517 5.17992 3.77076 5.72242 4.91089C5.80803 5.09112 5.75215 5.3065 5.58994 5.42185L3.64522 6.81145C4.83427 9.58205 7.04222 11.79 9.81282 12.979L11.2006 11.0379C11.2573 10.9586 11.3401 10.9017 11.4345 10.8772C11.5288 10.8527 11.6288 10.862 11.717 10.9037C12.857 11.4451 14.0723 11.8112 15.3217 11.9896C15.4469 12.0076 15.6118 12.0274 15.8173 12.0472C15.9284 12.0586 16.0312 12.1108 16.106 12.1937C16.1807 12.2767 16.2221 12.3844 16.2219 12.496H16.221Z"
                    fill="#607B96"
                  />
                </svg>
                <span>+821041783253</span>
              </p>
            </div>
          ) : null}
        </div>
        <div>
          <button
            onClick={() => setIsFindOpen((prev) => !prev)}
            className="cursor-pointer h-[40px] w-full flex p-[22px] items-center border-y-[0.5px] border-[#607B96]"
          >
            <h3 className="text-white">
              {isFindOpen ? "▲" : "▼"} find-me-also-in
            </h3>
          </button>
          {isFindOpen ? (
            <div className="text-[#607B96] flex flex-col p-[22px] gap-[10px]">
              <a
                href="https://github.com/mkkim68"
                className="flex items-center gap-2 hover:text-white"
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
                className="flex items-center gap-2 hover:text-white"
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
                className="flex items-center gap-2 hover:text-white"
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
          ) : null}
        </div>
      </div>
      {/* 메인 */}
      <div className="w-[calc(100%-300px)] flex flex-col text-[#607B96] ">
        <div className="h-[45px] border-b-[0.5px] border-[#607B96]">
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
        <div className="flex h-full">
          <div className="flex flex-col items-center w-[45%] border-r-[0.5px] border-[#607B96]">
            <form
              action=""
              className="flex flex-col items-start pt-[115px] gap-7"
            >
              <div className="flex flex-col items-start gap-1.5">
                <label htmlFor="name">_name:</label>
                <input
                  id="name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  className="bg-[#011221] p-[13px] w-[372px] h-[40px] border-[0.5px] border-[#1E2D3D] focus:border-[#607B96] focus:border-[2px] outline-none rounded-[8px]"
                />
              </div>
              <div className="flex flex-col items-start gap-1.5">
                <label htmlFor="email">_email:</label>
                <input
                  id="email"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#011221] p-[13px] w-[372px] h-[40px] border-[0.5px] border-[#1E2D3D] focus:border-[#607B96] focus:border-[2px] outline-none rounded-[8px]"
                />
              </div>
              <div className="flex flex-col items-start gap-1.5">
                <label htmlFor="message">_message:</label>
                <textarea
                  id="message"
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-[#011221] resize-none p-[13px] w-[372px] h-[145px] border-[0.5px] border-[#1E2D3D] focus:border-[#607B96] focus:border-[2px] outline-none rounded-[8px]"
                />
              </div>
              <button className="bg-[#1C2B3A] cursor-pointer hover:bg-[#607B96] active:bg-[#011221] w-[146px] h-[38px] text-white rounded-[8px]">
                submit-message
              </button>
            </form>
          </div>

          <div className="flex justify-center items-start w-[55%] border-r-[0.5px] border-[#607B96] py-[100px] px-[90px]">
            <div className="flex flex-col items-start">
              <div className="flex">
                <span className="mr-[20px]">1</span>
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
              </div>
              <div className="flex">
                <span className="mr-[20px]">2</span>
              </div>
              <div className="flex">
                <span className="mr-[20px]">3</span>
                <p>
                  <span className="text-[#C98BDF]">const </span>
                  <span className="text-[#5565E8]">message</span>
                  <span className="text-[#C98BDF]"> = </span>
                  <span>{`{`}</span>
                </p>
              </div>
              <div className="flex">
                <span className="mr-[20px]">4</span>
                <p>
                  <span className="text-[#5565E8] ml-[10px]">name</span>
                  <span>: </span>
                  <span className="text-[#FEA55F]">{`"${name}"`}</span>
                  <span>,</span>
                </p>
              </div>
              <div className="flex">
                <span className="mr-[20px]">5</span>
                <p>
                  <span className="text-[#5565E8] ml-[10px]">email</span>
                  <span>: </span>
                  <span className="text-[#FEA55F]">{`"${email}"`}</span>
                  <span>,</span>
                </p>
              </div>
              <div className="flex">
                <span className="mr-[20px]">6</span>
                <p>
                  <span className="text-[#5565E8] ml-[10px]">message</span>
                  <span>: </span>
                  <span className="text-[#FEA55F]">{`"${message}"`}</span>
                  <span>,</span>
                </p>
              </div>
              <div className="flex">
                <span className="mr-[20px]">7</span>
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
              </div>
              <div className="flex">
                <span className="mr-[20px]">8</span>
                <p>
                  <span>{`}`}</span>
                </p>
              </div>
              <div className="flex">
                <span className="mr-[20px]">9</span>
              </div>
              <div className="flex">
                <span className="mr-[20px]">0</span>
                <p>
                  <span className="text-[#5565E8]">
                    button.addEventListener
                  </span>
                  <span>(</span>
                  <span className="text-[#FEA55F]">'click'</span>
                  <span>, ()</span>
                  <span className="text-[#C98BDF]">{` => `}</span>
                  <span>{`{`}</span>
                </p>
              </div>
              <div className="flex">
                <span className="mr-[20px]">1</span>
                <p>
                  <span className="text-[#5565E8] ml-[10px]">form</span>
                  <span>.</span>
                  <span className="text-[#5565E8]">send</span>
                  <span>(</span>
                  <span className="text-[#5565E8]">message</span>
                  <span>);</span>
                </p>
              </div>
              <div className="flex">
                <span className="mr-[20px]">2</span>
                <p>
                  <span>{`})`}</span>
                </p>
              </div>
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
