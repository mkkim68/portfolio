import { Icons } from "@icons/index";
import Icon from "components/Icon";
import { TECH_STACK } from "data/techstacks";
import { firacode_medium } from "styles/font";

export default function Frontend() {
  return (
    <div className="h-full w-full flex">
      <div className="h-full w-[50%] bg-amber-50/20 border border-r-[0.5px] border-border"></div>
      <div className="h-full w-[50%] p-[35px]">
        <h3
          className={`text-fe mb-3 text-[18px] ${firacode_medium.className} transition-colors duration-500 ease-in-out`}
        >
          Frontend
        </h3>
        <div className="flex flex-wrap gap-3">
          {TECH_STACK.frontend.map((stack) => (
            <div
              key={stack}
              className="flex gap-2
                          cursor-default text-[14px]
                          w-fit px-3 py-2 rounded-lg
                          text-border
                          bg-white/5 backdrop-blur-md
                          border border-white/10 border-t-white/20
    
                          transition-all duration-300 ease-out
    
                          hover:text-fe
                          hover:bg-gradient-to-br hover:from-fe/12 hover:via-white/2 hover:to-transparent
                          hover:border-fe/15 hover:border-t-fe/30 hover:-translate-y-[1.5px]
                        "
            >
              <Icon
                name={stack as keyof typeof Icons}
                className="w-[20px] h-[20px]"
              />
              {stack}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
