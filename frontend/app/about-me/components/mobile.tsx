import { TECH_STACK } from "data/techstacks";
import { firacode_medium } from "styles/font";

export default function Mobile() {
  return (
    <div className="h-full p-[35px] flex-col">
      <section className="mb-5">
        <h3
          className={`text-mb mb-3 text-[18px] ${firacode_medium.className} transition-colors duration-500 ease-in-out`}
        >
          Mobile
        </h3>
        <div className="flex flex-wrap gap-2">
          {TECH_STACK.mobile.map((content) => (
            <div
              key={content}
              className="cursor-default text-[14px]
                          w-fit px-3 py-2 rounded-lg
                          text-border
                          bg-white/5 backdrop-blur-md
                          border border-white/10 border-t-white/20
    
                          transition-all duration-300 ease-out
    
                          hover:text-mb
                          hover:bg-gradient-to-br hover:from-mb/12 hover:via-white/2 hover:to-transparent
                          hover:border-mb/15 hover:border-t-mb/30 hover:-translate-y-[1.5px]
                        "
            >
              {content}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
