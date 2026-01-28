import { Icons } from "@icons/index";
import Icon from "components/Icon";
import { TECH_STACK } from "data/techstacks";

export default function Frontend() {
  return (
    <div className="h-full w-full flex">
      <div className="flex flex-col">
        <section className="mb-5">
          <h3 className={`text-fe mb-3 text-[18px]`}>Frontend</h3>
          <div className="flex flex-wrap gap-3">
            {TECH_STACK.frontend.map((stack) => (
              <div
                key={stack}
                className="flex gap-2 text-[14px] rounded-lg text-border border"
              >
                <Icon
                  name={stack as keyof typeof Icons}
                  className="w-[20px] h-[20px]"
                />
                {stack}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
