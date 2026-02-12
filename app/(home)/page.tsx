"use client";
import { Icons } from "../../src/icons/index";
import TypingGame from "./components/typinggame";
import { CODE_LINES } from "../../data/code-lines";

export default function Home() {
  return (
    <div className="h-full w-full flex [&_*]:transition-colors [&_*]:duration-500 [&_*]:ease-in-out overflow-hidden">
      <div className="max-h-full w-[100%] h-[100%] pointer-events-none fixed lg:hidden inset-0">
        <div
          className="
            absolute left-[30%] top-[35%]
            -translate-x-1/2 -translate-y-1/2
            w-[700px] h-[700px]
            opacity-70
            bg-[radial-gradient(circle_at_50%_50%,_rgb(var(--blur-first-rgb)/0.5)_0%,_rgb(var(--blur-first-rgb)/0.18)_30%,_rgb(var(--blur-first-rgb)/0)_65%)]
          "
        />
        <div
          className="
            absolute right-[20%] bottom-[30%]
            translate-x-1/2 translate-y-1/2
            w-[700px] h-[700px]
            opacity-70
            bg-[radial-gradient(circle_at_50%_50%,_rgb(var(--blur-second-rgb)/0.5)_0%,_rgb(var(--blur-second-rgb)/0.18)_30%,_rgb(var(--blur-second-rgb)/0)_65%)]
          "
        />
      </div>

      <div className="flex lg:justify-center items-center justify-start lg:mx-auto flex-1 relative xl:max-w-7xl 2xl:w-[90rem] lg:max-w-5xl px-10 py-3 gap-8">
        <div className="flex flex-col w-full max-w-[450px] justify-center h-full py-16 relative gap-20">
          <div>
            <p className="text-border text-[17px]">Hi all. I am</p>
            <h1 className="text-[40px] text-highlight">Kim Min Kyoung</h1>
            <h3 className="text-xl text-blur-second">
              {`>`} Front-end developer
            </h3>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-border hidden lg:block">
              // complete the game to continue
            </p>
            <p className="text-border hidden lg:block">
              // you can also see it on my Github page
            </p>
            <p className="text-border block lg:hidden">
              // find my profile on Github:
            </p>
            <p className="">
              <span className="text-blur-second cursor-default">const </span>
              <span className="text-blur-first cursor-default">
                githubLink{" "}
              </span>
              <span className="text-highlight cursor-default">= </span>
              <a
                href="https://github.com/mkkim68"
                className="text-github underline lg:no-underline break-all"
              >
                "https://github.com/mkkim68"
              </a>
            </p>
          </div>
        </div>
        {/*게임 */}
        <div className="relative h-[500px] w-[500px] hidden lg:inline-block xl:w-[540px]">
          <div className="blur-[5px] max-h-full w-full h-full absolute z-10 pointer-events-none">
            <div className="left-[0%] top-[10%] w-[250px] h-[300px] rotate-[-94.30deg] opacity-70 bg-blur-first blur-[120px] absolute z-9 pointer-events-none"></div>
            <div className="right-[0%] top-[50%] w-[250px] h-[300px] rotate-[13.51deg] opacity-70 bg-blur-second blur-[120px] absolute z-8 pointer-events-none"></div>
          </div>
          <div className="flex flex-col px-5 py-10 xl:p-10 items-center justify-between transition-colors duration-500 ease-in-out w-full h-full border border-game-border rounded-lg bg-[linear-gradient(153.43deg,_rgb(var(--game-bg-rgb)/0.7),_rgb(var(--blur-first-rgb)/0.09)_100%)]">
            <div className="relative w-full">
              <TypingGame lines={CODE_LINES} />
            </div>
            {/* screws */}
            {[
              "absolute top-3 left-3",
              "absolute top-3 right-3",
              "absolute bottom-3 right-3",
              "absolute bottom-3 left-3",
            ].map((pos) => (
              <div key={pos} className={pos}>
                <div className="w-[20px] h-[20px] rounded-full relative overflow-hidden bg-white/5 shadow-[0_2px_6px_rgba(0,0,0,0.35),inset_0_0.5px_0_rgba(255,255,255,0),inset_0_-1px_0_rgba(0,0,0,0.35)]">
                  <div className="absolute -top-[6px] -left-[6px] w-[20px] h-[20px] rounded-full bg-white/5 blur-[2px]" />
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(70%_70%_at_50%_30%,_rgba(255,255,255,0.13)_0%,_rgba(255,255,255,0.08)_40%,_rgba(0,0,0,0.18)_100%)]" />
                  <Icons.Close className="text-[#0000008c] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10.5px] h-[12px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
