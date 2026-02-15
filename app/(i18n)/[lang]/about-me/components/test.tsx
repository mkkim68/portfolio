import { Icons } from "src/icons/index";
import Icon from "components/Icon";
import { EXPLORING } from "data/exploring";
import Image from "next/image";
import { useLang } from "../../LangProvider";
import { getDict } from "data/i18n";

export default function Frontend() {
  const lang = useLang();
  const t = getDict(lang);
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
          <p>{t.bio.introduction.p1}</p>
          <p className="text-transparent">blank</p>
          <p>{t.bio.introduction.p2}</p>
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
