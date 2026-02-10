import { Icons } from "../../../src/icons/index";
import Icon from "../../../components/Icon";
import { TECH_STACK, TechCategory } from "../../../data/techstacks";
import { firacode_medium } from "../../../styles/font";
type Props = { category: TechCategory };
export default function Skill({ category }: Props) {
  const title = category.charAt(0).toUpperCase() + category.slice(1);
  const colorVar = `var(--color-${category})`;
  const lineArr = Array.from({ length: 30 }, (_, i) => i + 1);
  return (
    <div
      className="h-full w-full flex min-h-0 border-t-[0.5px] border-border lg:border-none"
      style={{ ["--skill-color" as any]: colorVar }}
    >
      <section className="hidden lg:flex h-full w-[50%] border-r-[0.5px] border-border min-h-0 min-w-0 box-border overflow-x-auto overflow-y-auto p-5 cursor-default">
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
            <span className="text-highlight">TECH_STACK</span>
            <span className="text-border">{` } `}</span>
            <span className="text-keyword">from </span>
            <span className="text-string">"data/techstacks"</span>
            <span className="text-border">;</span>
          </p>
          <p>
            <span className="text-transparent">\n</span>
          </p>
          <p>
            <span className="text-keyword">export </span>
            <span className="text-variable">default </span>
            <span className="text-keyword">function </span>
            <span className="text-function">{title}</span>
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
            <span className="text-variable">section </span>
            <span className="text-type">classname</span>
            <span className="text-border">=</span>
            <span className="text-string">"mb-5"</span>
            <span className="text-border">{`>`}</span>
          </p>
          <p className="ml-20">
            <span className="text-border">{`<`}</span>
            <span className="text-variable">h3 </span>
            <span className="text-type">classname</span>
            <span className="text-border">=</span>
            <span className="text-string">
              "text-{category} text-[18px] mb-3"
            </span>
            <span className="text-border">{`>`}</span>
            <span className="text-highlight">{title}</span>
            <span className="text-border">{`<`}</span>
            <span className="text-variable">h3</span>
            <span className="text-border">{`>`}</span>
          </p>
          <p className="ml-20">
            <span className="text-border">{`<`}</span>
            <span className="text-variable">div </span>
            <span className="text-type">classname</span>
            <span className="text-border">=</span>
            <span className="text-string">"flex flex-wrap gap-3"</span>
            <span className="text-border">{`>`}</span>
          </p>
          <p className="ml-24">
            <span className="text-function">{`{`}</span>
            <span className="text-type">TECH_STACK</span>
            <span className="text-border">.</span>
            <span className="text-variable">{category}</span>
            <span className="text-border">.</span>
            <span className="text-function">map</span>
            <span className="text-border">{`((`}</span>
            <span className="text-highlight">stack</span>
            <span className="text-border">{`) => (`}</span>
          </p>
          <p className="ml-28">
            <span className="text-border">{`<`}</span>
            <span className="text-variable">div </span>
          </p>
          <p className="ml-32">
            <span className="text-type">key</span>
            <span className="text-border">=</span>
            <span className="text-function">{`{`}</span>
            <span className="text-highlight">stack</span>
            <span className="text-function">{`}`}</span>
          </p>
          <p className="ml-32">
            <span className="text-type">className</span>
            <span className="text-border">=</span>
            <span className="text-string">
              "flex gap-2 text-[14px] rounded-lg border text-border"
            </span>
          </p>
          <p className="ml-28">
            <span className="text-border">{`>`}</span>
          </p>
          <p className="ml-32">
            <span className="text-border">{`<`}</span>
            <span className="text-number">Icon </span>
          </p>
          <p className="ml-36">
            <span className="text-type">name</span>
            <span className="text-border">=</span>
            <span className="text-function">{`{`}</span>
            <span className="text-highlight">stack as keyof typeof Icons</span>
            <span className="text-function">{`}`}</span>
          </p>
          <p className="ml-36">
            <span className="text-type">className</span>
            <span className="text-border">=</span>
            <span className="text-string">"w-[20px] h-[20px]"</span>
          </p>
          <p className="ml-32">
            <span className="text-border">{`/>`}</span>
          </p>
          <p className="ml-32">
            <span className="text-function">{`{`}</span>
            <span className="text-highlight">stack</span>
            <span className="text-function">{`}`}</span>
          </p>
          <p className="ml-28">
            <span className="text-border">{`</`}</span>
            <span className="text-variable">div</span>
            <span className="text-border">{`>`}</span>
          </p>
          <p className="ml-24">
            <span className="text-border">{`))`}</span>
            <span className="text-function">{`}`}</span>
          </p>
          <p className="ml-20">
            <span className="text-border">{`</`}</span>
            <span className="text-variable">div</span>
            <span className="text-border">{`>`}</span>
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
      <section className="h-full w-full lg:w-[50%] p-[35px] min-h-0 min-w-0 overflow-y-auto box-border flex flex-col items-start">
        <h3
          className={`text-[var(--skill-color)] mb-3 text-[18px] ${firacode_medium.className} transition-colors duration-500 ease-in-out`}
        >
          {title}
        </h3>
        <div className="flex flex-wrap gap-3">
          {TECH_STACK[category].map((stack) => (
            <div
              key={stack}
              className={`flex gap-2 items-center group
                          cursor-default text-[14px]
                          w-fit px-3 py-2 rounded-lg
                          text-border
                          bg-white/5 backdrop-blur-md
                          border border-white/10 border-t-white/20

                          transition-all duration-300 ease-out

                          hover:text-[var(--skill-color)]
                          hover:bg-gradient-to-br
                          hover:from-[color-mix(in_srgb,var(--skill-color)_12%,transparent)]
                          hover:via-white/2
                          hover:to-transparent
                          hover:border-[color-mix(in_srgb,var(--skill-color)_15%,transparent)]
                          hover:border-t-[color-mix(in_srgb,var(--skill-color)_30%,transparent)]
                          hover:-translate-y-[1.5px]`}
            >
              <Icon
                name={stack as keyof typeof Icons}
                className={`w-[20px] h-[20px] ${
                  stack === "Github"
                    ? "text-[#14191D] group-hover:text-[#14191D]"
                    : ""
                }`}
              />
              {stack}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
