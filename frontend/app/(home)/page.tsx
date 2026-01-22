export default function Home() {
  return (
    <div className="h-full w-full flex [&_*]:transition-colors [&_*]:duration-500 [&_*]:ease-in-out overflow-hidden">
      {/* <div className="blur-container lg:hidden">
        <div className="first-blur"></div>
        <div className="second-blur"></div>
      </div> */}
      <div className="flex justify-between items-center lg:mx-auto flex-1 relative xl:max-w-7xl 2xl:w-[90rem] lg:max-w-4xl px-10 py-3 gap-8">
        <div className="flex flex-col justify-center h-full py-16 relative gap-20">
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
        <div className="relative h-[500px] w-[450px] hidden lg:inline-block xl:w-[540px]">
          <div className="blur-[5px] max-h-full w-full h-full absolute">
            <div className="left-[-30%] top-[2%] w-[300px] h-[300px] rotate-[-94.30deg] opacity-40 bg-blur-first blur-[87px] absolute"></div>
            <div className="left-[30%] bottom-[2%] w-[300px] h-[300px] rotate-[13.51deg] opacity-40 bg-blur-second blur-[87px] absolute"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
