import { Icons } from "@icons/index";
import Icon from "components/Icon";
import { EXPERIENCES } from "data/experiences";
import { EXPLORING } from "data/exploring";
import Image from "next/image";
import { firacode_medium } from "styles/font";

export default function Bio() {
  const lineArr = Array.from({ length: 51 }, (_, i) => i + 1);
  return (
    <div className="h-full min-h-0 flex cursor-default">
      <section className="h-full w-[50%] border-r-[0.5px] border-border flex min-h-0 min-w-0 box-border overflow-x-auto overflow-y-auto p-5">
        <div style={{ lineHeight: "20px" }} className="mr-[15px]">
          {lineArr.map((cnt, idx) => (
            <p className="text-right text-border" key={idx}>
              {cnt}
            </p>
          ))}
        </div>
        <div
          style={{ lineHeight: "20px" }}
          className="flex flex-col items-start whitespace-nowrap"
        >
          <p>
            <span className="text-keyword">import </span>
            <span className="text-border">{`{ `}</span>
            <span className="text-highlight">Icons</span>
            <span className="text-border">{` } `}</span>
            <span className="text-keyword">from </span>
            <span className="text-string">"@icons/index"</span>
            <span className="text-border">;</span>
          </p>
          <p>
            <span className="text-keyword">import </span>
            <span className="text-highlight">Icon </span>
            <span className="text-keyword">from </span>
            <span className="text-string">"components/Icon"</span>
            <span className="text-border">;</span>
          </p>
          <p>
            <span className="text-keyword">import </span>
            <span className="text-border">{`{ `}</span>
            <span className="text-highlight">EXPLORING</span>
            <span className="text-border">{` } `}</span>
            <span className="text-keyword">from </span>
            <span className="text-string">"data/exploring"</span>
            <span className="text-border">;</span>
          </p>
          <p>
            <span className="text-keyword">import </span>
            <span className="text-highlight">Image </span>
            <span className="text-keyword">from </span>
            <span className="text-string">"next/image"</span>
            <span className="text-border">;</span>
          </p>
          <p>
            <span className="text-transparent">\n</span>
          </p>
          <p>
            <span className="text-keyword">export </span>
            <span className="text-variable">default </span>
            <span className="text-keyword">function </span>
            <span className="text-function">Bio</span>
            <span className="text-border">{`() {`}</span>
          </p>
          <p className="ml-4">
            <span className="text-keyword">return (</span>
          </p>
          <p className="ml-8">
            <span className="text-border">{`<`}</span>
            <span className="text-variable">div </span>
            <span className="text-type">classname</span>
            <span className="text-border">=</span>
            <span className="text-string">"h-full w-full flex"</span>
            <span className="text-border">{`>`}</span>
          </p>
          <p className="ml-12">
            <span className="text-border">{`<`}</span>
            <span className="text-variable">div </span>
            <span className="text-type">classname</span>
            <span className="text-border">=</span>
            <span className="text-string">"flex flex-col"</span>
            <span className="text-border">{`>`}</span>
          </p>
          <p className="ml-16">
            <span className="text-border">{`<`}</span>
            <span className="text-variable">section</span>
            <span className="text-border">{`>`}</span>
          </p>
          <p className="ml-20">
            <span className="text-border">{`<`}</span>
            <span className="text-number">Image</span>
          </p>
          <p className="ml-24">
            <span className="text-type">src</span>
            <span className="text-border">=</span>
            <span className="text-string">"imgs/photo.jpg"</span>
          </p>
          <p className="ml-24">
            <span className="text-type">alt</span>
            <span className="text-border">=</span>
            <span className="text-string">"profile"</span>
          </p>
          <p className="ml-24">
            <span className="text-type">width</span>
            <span className="text-border">=</span>
            <span className="text-function">{`{`}</span>
            <span className="text-type">{`160`}</span>
            <span className="text-function">{`}`}</span>
          </p>
          <p className="ml-24">
            <span className="text-type">height</span>
            <span className="text-border">=</span>
            <span className="text-function">{`{`}</span>
            <span className="text-type">{`160`}</span>
            <span className="text-function">{`}`}</span>
          </p>
          <p className="ml-24">
            <span className="text-type">classname</span>
            <span className="text-border">=</span>
            <span className="text-string">"float-left"</span>
          </p>
          <p className="ml-20">
            <span className="text-border">{`/>`}</span>
          </p>
          <p className="ml-20">
            <span className="text-border">{`<`}</span>
            <span className="text-variable">p</span>
            <span className="text-border">{`>`}</span>
          </p>
          <p className="ml-24">
            <span className="text-highlight/70">
              Hi, I’m Minkyoung Kim, a frontend developer based in Korea. I was
            </span>
          </p>
          <p className="ml-24">
            <span className="text-highlight/70">
              originally an Electronic Engineering major, and my first encounter
            </span>
          </p>
          <p className="ml-24">
            <span className="text-highlight/70">
              with programming came through basic major courses. While the
            </span>
          </p>
          <p className="ml-24">
            <span className="text-highlight/70">
              curriculum focused heavily on hardware, I found myself far more
            </span>
          </p>
          <p className="ml-24">
            <span className="text-highlight/70">
              interested in the logic and problem-solving aspects of software.
              At
            </span>
          </p>
          <p className="ml-24">
            <span className="text-highlight/70">
              some point, I realized that what truly excited me wasn’t circuits
              or
            </span>
          </p>
          <p className="ml-24">
            <span className="text-highlight/70">
              signals, but building things through code — especially things
              users
            </span>
          </p>
          <p className="ml-24">
            <span className="text-highlight/70">
              could directly interact with. That realization led me to shift my
            </span>
          </p>
          <p className="ml-24">
            <span className="text-highlight/70">
              career path toward software development.
            </span>
          </p>
          <p className="ml-20">
            <span className="text-border">{`</`}</span>
            <span className="text-variable">p</span>
            <span className="text-border">{`>`}</span>
          </p>

          <p className="ml-20">
            <span className="text-border">{`<`}</span>
            <span className="text-variable">p</span>
            <span className="text-border">{`>`}</span>
          </p>
          <p className="ml-24">
            <span className="text-highlight/70">
              Since then, I’ve been focusing on strengthening my skills through
            </span>
          </p>
          <p className="ml-24">
            <span className="text-highlight/70">
              intensive study and a developer bootcamp, where I gained hands-on
            </span>
          </p>
          <p className="ml-24">
            <span className="text-highlight/70">
              experience in web development and frontend engineering. I enjoy
            </span>
          </p>
          <p className="ml-24">
            <span className="text-highlight/70">
              turning ideas into interactive, well-structured user experiences,
            </span>
          </p>
          <p className="ml-24">
            <span className="text-highlight/70">
              and I’m constantly exploring better ways to build maintainable and
            </span>
          </p>
          <p className="ml-24">
            <span className="text-highlight/70">scalable interfaces.</span>
          </p>
          <p className="ml-20">
            <span className="text-border">{`</`}</span>
            <span className="text-variable">p</span>
            <span className="text-border">{`>`}</span>
          </p>
          <p className="ml-16">
            <span className="text-border">{`</`}</span>
            <span className="text-variable">section</span>
            <span className="text-border">{`>`}</span>
          </p>
          <p className="ml-16">
            <span className="text-border">{`<`}</span>
            <span className="text-variable">section </span>
            <span className="text-type">className</span>
            <span className="text-border">=</span>
            <span className="text-string">"flex gap-3"</span>
            <span className="text-border">{`>`}</span>
          </p>
          <p className="ml-20">
            <span className="text-function">{`{`}</span>
            <span className="text-type">EXPLORING</span>
            <span className="text-border">.</span>
            <span className="text-function">map</span>
            <span className="text-border">{`((`}</span>
            <span className="text-highlight">stack</span>
            <span className="text-border">{`) => (`}</span>
          </p>
          <p className="ml-24">
            <span className="text-border">{`<`}</span>
            <span className="text-number">Icon </span>
          </p>
          <p className="ml-28">
            <span className="text-type">key</span>
            <span className="text-border">=</span>
            <span className="text-function">{`{`}</span>
            <span className="text-highlight">stack</span>
            <span className="text-function">{`}`}</span>
          </p>
          <p className="ml-28">
            <span className="text-type">name</span>
            <span className="text-border">=</span>
            <span className="text-function">{`{`}</span>
            <span className="text-highlight">stack as keyof typeof Icons</span>
            <span className="text-function">{`}`}</span>
          </p>
          <p className="ml-28">
            <span className="text-type">className</span>
            <span className="text-border">=</span>
            <span className="text-string">"w-[35px] h-[35px]"</span>
          </p>
          <p className="ml-24">
            <span className="text-border">{`/>`}</span>
          </p>
          <p className="ml-20">
            <span className="text-border">{`))`}</span>
            <span className="text-function">{`}`}</span>
          </p>
          <p className="ml-16">
            <span className="text-border">{`</`}</span>
            <span className="text-variable">section</span>
            <span className="text-border">{`>`}</span>
          </p>
          <p className="ml-12">
            <span className="text-border">{`</`}</span>
            <span className="text-variable">div</span>
            <span className="text-border">{`>`}</span>
          </p>
          <p className="ml-8">
            <span className="text-border">{`</`}</span>
            <span className="text-variable">div</span>
            <span className="text-border">{`>`}</span>
          </p>
          <p className="ml-4">
            <span className="text-keyword">{`)`}</span>
            <span className="text-border">{`;`}</span>
          </p>
          <p>
            <span className="text-border">{`}`}</span>
          </p>
        </div>
      </section>

      <section className="h-full w-[50%] p-6 min-h-0 min-w-0 overflow-y-auto flex flex-col">
        <div>
          <Image
            src="/imgs/photo.jpg"
            alt="profile"
            width={160}
            height={160}
            className="mr-6 mb-2 float-left"
          />
          <p>
            Hi, I’m Minkyoung Kim, a frontend developer based in Korea. I was
            originally an Electronic Engineering major, and my first encounter
            with programming came through basic major courses. While the
            curriculum focused heavily on hardware, I found myself far more
            interested in the logic and problem-solving aspects of software. At
            some point, I realized that what truly excited me wasn’t circuits or
            signals, but building things through code — especially things users
            could directly interact with. That realization led me to shift my
            career path toward software development.
          </p>
          <p className="text-transparent">blank</p>
          <p>
            Since then, I’ve been focusing on strengthening my skills through
            intensive study and a developer bootcamp, where I gained hands-on
            experience in web development and frontend engineering. I enjoy
            turning ideas into interactive, well-structured user experiences,
            and I’m constantly exploring better ways to build maintainable and
            scalable interfaces.
          </p>
        </div>
        <div className="my-3">
          <h1
            className={`text-[18px] ${firacode_medium.className} text-function`}
          >
            Experiences
          </h1>
          {EXPERIENCES.map((data) => (
            <div key={data.name} className="flex my-3 gap-3">
              <div className="flex flex-col items-center w-[85px] shrink-0">
                <div className="flex flex-col items-center bg-function/30 p-2 rounded-xl text-highlight">
                  <p>{data.period.start}</p>
                  <p>|</p>
                  <p>{data.period.end}</p>
                </div>
                <div className="w-0.5 h-full mt-2 bg-gradient-to-b from-function/80 to-transparent rounded-xl" />
              </div>
              <div className="flex-1 p-3 mb-3 flex flex-col gap-1 bg-comment/30 border-[0.5px] border-border rounded-xl">
                <h3
                  className={`text-[16px] ${firacode_medium.className} text-highlight`}
                >
                  {data.name}
                </h3>
                <p className="text-function mb-2">{data.institute}</p>
                <ul className="pl-3 gap-2 flex flex-col">
                  {data.descriptions.map((des) => (
                    <li key={des[0]} className="list-disc">
                      {des}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h1
            className={`text-[18px] ${firacode_medium.className} text-function`}
          >
            Currently exploring
          </h1>
          <div className="flex gap-3 my-3 flex-1 bg-function/10 p-2 rounded-2xl">
            {EXPLORING.map((stack) => (
              <Icon
                key={stack}
                name={stack as keyof typeof Icons}
                className={`w-[35px] h-[35px]`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
