"use client";

import { useEffect, useRef, useState } from "react";
import formatDate from "../../utils/formatdate";
import { Icons } from "@icons/index";
import { SOCIAL_MEDIA } from "data/social-media";
import { firacode_medium } from "styles/font";

export default function ContactMe() {
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [isFindOpen, setIsFindOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [lineArr, setLineArr] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  const previewRef = useRef<HTMLDivElement | null>(null);
  const [w, setWidth] = useState<number>(300);

  let date = new Date();

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrekwbzz";

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [submitError, setSubmitError] = useState<string>("");

  // Default dropdown state: mobile => closed, lg+ => open (and keep in sync on resize)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");

    const apply = (matches: boolean) => {
      setIsContactOpen(matches);
      setIsFindOpen(matches);
    };

    // initial
    apply(mq.matches);

    const onChange = (e: MediaQueryListEvent) => apply(e.matches);

    // subscribe
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

  useEffect(() => {
    if (previewRef.current) {
      const eventHandler = () => {
        const rect = previewRef.current?.getBoundingClientRect();
        if (!rect) return;

        const { width } = rect;

        setWidth(width);
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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name || !email || !message) {
      setSubmitStatus("error");
      setSubmitError("Please fill in all fields.");
      return;
    }

    try {
      setSubmitStatus("submitting");
      setSubmitError("");

      const form = e.currentTarget;
      const formData = new FormData(form);

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        const msg =
          data?.errors?.[0]?.message ||
          data?.error ||
          "Failed to submit. Please try again.";
        throw new Error(msg);
      }

      setSubmitStatus("success");

      form.reset();
      setName("");
      setEmail("");
      setMessage("");

      requestAnimationFrame(() => countLines());
    } catch (err: any) {
      setSubmitStatus("error");
      setSubmitError(err?.message || "Failed to submit. Please try again.");
    }
  }

  return (
    <div
      ref={previewRef}
      className="w-full flex h-full lg:flex-row flex-col [&_*]:transition-colors [&_*]:duration-500 [&_*]:ease-in-out overflow-auto"
    >
      {/* 왼쪽 */}
      <div className="lg:h-full lg:w-[270px] w-full lg:border-r-[0.5px] border-b-[0.5px] border-border">
        <div>
          <button
            onClick={() => setIsContactOpen((prev) => !prev)}
            className="cursor-pointer lg:h-[40px] h-[30px] w-full flex lg:p-[20px] px-[20px] py-4 items-center border-b-[0.5px] border-border bg-border/50 lg:bg-fg"
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
          {/* mobile (lg 미만) */}
          <div
            className={`
              overflow-hidden
              !transition-[max-height,opacity] !duration-300 !ease-in-out
              ${
                isContactOpen ? "max-h-[80px] opacity-100" : "max-h-0 opacity-0"
              }
            `}
          >
            <div className="text-border flex flex-col p-[10px] gap-2">
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
            className="cursor-pointer lg:h-[40px] h-[30px] w-full flex lg:p-[20px] px-[20px] py-4 items-center border-y-[0.5px] border-border bg-border/50 lg:bg-fg"
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
          {/* mobile (lg 미만) */}
          <div
            className={`
              lg:hidden overflow-hidden
              !transition-[max-height] !duration-300 !ease-in-out
              ${isFindOpen ? "max-h-[150px] opacity-100" : "max-h-0 opacity-0"}
            `}
          >
            <FindLinks />
          </div>

          {/* desktop (lg 이상) */}
          <div
            className={`
              origin-top hidden lg:block
              !transition-all !duration-300 min-h-0
              ${isFindOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}
            `}
          >
            <FindLinks />
          </div>
        </div>
      </div>
      {/* 메인 */}
      <div className="lg:w-[calc(100%-270px)] h-full w-full flex flex-col text-highlight cursor-default">
        <div className="h-[40px] border-b-[0.5px] border-border hidden lg:flex">
          <div className="h-full p-[20px] flex items-center w-[167px] border-r-[0.5px] border-border justify-between bg-focus hover:bg-hover transition-all !duration-150">
            <span>contacts</span>
            <Icons.Close className="text-highlight w-[10px] h-[11px]" />
          </div>
        </div>
        <div className="flex flex-1 min-h-0 lg:overflow-hidden">
          <div className="flex flex-col items-center w-full flex-1 min-h-0 lg:border-r-[0.5px] border-border overflow-y-auto">
            {submitStatus === "success" ? (
              <div className="flex flex-1 flex-col items-center justify-center w-full gap-3">
                <h3
                  className={`text-[20px] text-highlight ${firacode_medium.className}`}
                >
                  Thank you! 👽
                </h3>
                <p className="text-[14px] text-border w-[350px] text-center">
                  Your message has been accepted. You will receive answer really
                  soon!
                </p>
                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="p-2 bg-submit-bg cursor-pointer hover:bg-border active:bg-submit-bg-active text-highlight rounded-[8px] !duration-150 ease-in-out"
                >
                  send-new-message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col h-full items-start justify-center gap-7 text-[14px]"
              >
                <div className="flex flex-col items-start gap-1.5">
                  <label htmlFor="name">_name:</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
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
                    name="email"
                    type="text"
                    required
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
                    name="message"
                    required
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
                  <div className="w-[372px] flex justify-end">
                    <span className="text-[12px] text-border">
                      {message.length}/300
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    type="submit"
                    disabled={submitStatus === "submitting"}
                    className={`bg-submit-bg cursor-pointer hover:bg-border active:bg-submit-bg-active w-[146px] h-[38px] text-highlight rounded-[8px] !duration-150 ease-in-out
        ${submitStatus === "submitting" ? "opacity-60 cursor-not-allowed hover:bg-submit-bg" : ""}`}
                  >
                    {submitStatus === "submitting"
                      ? "sending..."
                      : "submit-message"}
                  </button>

                  {submitStatus === "error" ? (
                    <p className="text-[12px] text-[#ff5370]">{submitError}</p>
                  ) : null}
                </div>
              </form>
            )}
          </div>
          {/* 코드부분 */}
          <div
            className={`text-[14px] w-full h-full ${w <= 1150 ? "hidden" : "flex flex-1 min-w-0"} justify-center items-start border-r-[0.5px] border-border pt-[100px]`}
          >
            <div style={{ lineHeight: "20px" }} className="mx-[20px]">
              {lineArr.map((cnt, idx) => (
                <p className="text-right text-border" key={idx}>
                  {cnt}
                </p>
              ))}
            </div>
            <div
              id="content"
              style={{ lineHeight: "20px" }}
              className="flex flex-col items-start whitespace-pre-wrap max-w-[431px] mr-[20px]
    break-all"
            >
              <p>
                <span className="text-keyword">const </span>
                <span className="text-variable">button</span>
                <span className="text-keyword"> = </span>
                <span className="text-variable">document</span>
                <span className="text-border">.</span>
                <span className="text-function">querySelector</span>
                <span className="text-border">(</span>
                <span className="text-string">'#sendBtn'</span>
                <span className="text-border">);</span>
              </p>
              <p>
                <span className="text-keyword">const </span>
                <span className="text-variable">message</span>
                <span className="text-keyword"> = </span>
                <span className="text-border">{`{`}</span>
              </p>
              <p>
                <span className="text-variable ml-3">name</span>
                <span className="text-border">: </span>
                <span className="text-string">{`"${name}"`}</span>
                <span className="text-border">,</span>
              </p>
              <p>
                <span className="text-variable ml-3">email</span>
                <span className="text-border">: </span>
                <span className="text-string">{`"${email}"`}</span>
                <span className="text-border">,</span>
              </p>
              <p>
                <span className="text-variable ml-3">message</span>
                <span className="text-border">: </span>
                <span className="text-string">{`"${message}"`}</span>
                <span className="text-border">,</span>
              </p>
              <p>
                <span className="ml-3 text-border">date: </span>
                <span className="text-string">{`"${formatDate(
                  "day",
                  date.getDay(),
                )} ${date.getDate()} ${formatDate(
                  "month",
                  date.getMonth() + 1,
                )}"`}</span>
              </p>
              <p>
                <span className="text-border">{`}`}</span>
              </p>
              <p>
                <span className="text-variable">button</span>
                <span className="text-border">.</span>
                <span className="text-function">addEventListener</span>
                <span className="text-border">(</span>
                <span className="text-string">'click'</span>
                <span className="text-border">, ()</span>
                <span className="text-keyword">{` => `}</span>
                <span className="text-border">{`{`}</span>
              </p>
              <p>
                <span className="text-variable ml-3">form</span>
                <span className="text-border">.</span>
                <span className="text-function">send</span>
                <span className="text-border">(</span>
                <span className="text-variable">message</span>
                <span className="text-border">);</span>
              </p>
              <p>
                <span className="text-border">{`})`}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const FindLinks = () => (
  <div className="text-border flex flex-col p-[15px] gap-[8px]">
    {SOCIAL_MEDIA.map((sns) => (
      <a
        key={sns.name}
        href={sns.url}
        className="flex items-center gap-2 hover:underline"
      >
        <Icons.Link className="w-[14px] h-[14px] fill-border" />
        <span className="text-border">{sns.description}</span>
      </a>
    ))}
  </div>
);
