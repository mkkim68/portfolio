import { Icons } from "@icons/index";
import Icon from "components/Icon";
import { EXPLORING } from "data/exploring";
import Image from "next/image";

export default function Frontend() {
  return (
    <div className="h-full w-full flex">
      <div className="flex flex-col">
        <section>
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
        </section>
        <section className="flex gap-3">
          {EXPLORING.map((stack) => (
            <Icon
              key={stack}
              name={stack as keyof typeof Icons}
              className="w-[35px] h-[35px]"
            />
          ))}
        </section>
      </div>
    </div>
  );
}
