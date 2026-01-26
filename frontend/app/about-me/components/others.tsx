import { TECH_STACK } from "data/techstacks";
import { firacode_medium } from "styles/font";

export default function Others() {
  return (
    <div className="h-full p-[35px]">
      <h3
        className={`text-tool mb-3 text-[18px] ${firacode_medium.className} transition-colors duration-500 ease-in-out`}
      >
        Others
      </h3>
      <div className="flex flex-wrap gap-2">
        {TECH_STACK.tools.map((content) => (
          <div
            key={content}
            className="cursor-default text-[14px]
                          w-fit px-3 py-2 rounded-lg
                          text-border
                          bg-white/5 backdrop-blur-md
                          border border-white/10 border-t-white/20
    
                          transition-all duration-300 ease-out
    
                          hover:text-tool
                          hover:bg-gradient-to-br hover:from-tool/12 hover:via-white/2 hover:to-transparent
                          hover:border-tool/15 hover:border-t-tool/30 hover:-translate-y-[1.5px]
                        "
          >
            {content}
          </div>
        ))}
      </div>
    </div>
  );
}
