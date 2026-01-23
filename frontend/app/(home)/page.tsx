import { Icons } from "@icons/index";

export default function Home() {
  return (
    <div className="h-full w-full flex [&_*]:transition-colors [&_*]:duration-500 [&_*]:ease-in-out overflow-hidden">
      {/* <div className="blur-container lg:hidden">
        <div className="first-blur"></div>
        <div className="second-blur"></div>
      </div> */}
      <div className="flex justify-center items-center lg:mx-auto flex-1 relative xl:max-w-7xl 2xl:w-[90rem] lg:max-w-4xl px-10 py-3 gap-8">
        <div className="flex flex-col w-[450px] justify-center h-full py-16 relative gap-20">
          <div>
            <p className="text-border text-[18px]">Hi all. I am</p>
            <h1 className="text-[50px] text-highlight">Kim Min Kyoung</h1>
            <h3 className="text-2xl text-blur-second">
              {`>`} Front-end developer
            </h3>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-border">// complete the game to continue</p>
            <p className="text-border">
              // you can also see it on my Github page
            </p>
            <p>
              <span className="text-blur-second">const </span>
              <span className="text-blur-first">githubLink </span>
              <span className="text-highlight">= </span>
              <span className="text-github">"https://github.com/mkkim68"</span>
            </p>
          </div>
        </div>
        {/*게임 */}
        <div className="relative h-[500px] w-[450px] hidden lg:inline-block xl:w-[540px]">
          <div className="blur-[5px] max-h-full w-full h-full absolute z-1000 pointer-events-none">
            <div className="left-[0%] top-[10%] w-[250px] h-[300px] rotate-[-94.30deg] opacity-70 bg-blur-first blur-[120px] absolute z-990 pointer-events-none"></div>
            <div className="right-[0%] top-[50%] w-[250px] h-[300px] rotate-[13.51deg] opacity-70 bg-blur-second blur-[120px] absolute z-980 pointer-events-auto"></div>
          </div>
          <div className="transition-colors duration-500 ease-in-out w-full h-full border border-game-border rounded-lg bg-[linear-gradient(153.43deg,_rgb(var(--game-bg-rgb)/0.7),_rgb(var(--blur-first-rgb)/0.09)_100%)]">
            {/* screws */}
            <div className="absolute top-3 left-3">
              <div
                className="w-[20px] h-[20px] rounded-full relative"
                style={{
                  boxShadow:
                    "rgb(13, 67, 65) 2px 2px 4px 0px, rgb(26, 130, 119) 0px 1px 2px 0px inset",
                  background:
                    "radial-gradient(73% 73% at 50% 27%, rgb(25, 108, 106) 15%, rgb(17, 75, 74) 100%)",
                }}
              >
                <div className="absolute inset-0 flex justify-center items-center"></div>
              </div>
            </div>
            <div className="absolute top-3 right-3">
              <div
                className="w-[20px] h-[20px] rounded-full relative"
                style={{
                  boxShadow:
                    "rgb(13, 67, 65) 2px 2px 4px 0px, rgb(31, 129, 119) 0px 1px 2px 0px inset",
                  background:
                    "radial-gradient(73% 73% at 50% 27%, rgba(33, 125, 122, 0.7) 15%, rgb(17, 75, 74) 100%)",
                }}
              >
                <div className="absolute inset-0 flex justify-center items-center"></div>
              </div>
            </div>
            <div className="absolute bottom-3 right-3">
              <div
                className="w-[20px] h-[20px] rounded-full relative"
                style={{
                  boxShadow:
                    "gb(18, 44, 78) 2px 2px 4px 0px, rgb(44, 88, 141) 0px 1px 2px 0px inset",
                  background:
                    "radial-gradient(73% 73% at 50% 27%, rgb(35, 75, 124) 15%, rgb(18, 46, 79) 100%)",
                }}
              >
                <div className="absolute inset-0 flex justify-center items-center"></div>
              </div>
            </div>
            <div className="absolute bottom-3 left-3">
              <div
                className="w-[20px] h-[20px] rounded-full relative"
                style={{
                  boxShadow:
                    "rgb(9, 45, 50) 2px 2px 4px 0px, rgb(22, 100, 92) 0px 1px 2px 0px inset",
                  background:
                    "radial-gradient(73% 73% at 50% 27%, rgb(22, 76, 81) 15%, rgb(13, 58, 64) 100%)",
                }}
              >
                <div className="absolute inset-0 flex justify-center items-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
