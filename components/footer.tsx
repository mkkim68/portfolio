"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Icons } from "../src/icons/index";
import { SOCIAL_MEDIA } from "../data/social-media";
import Icon from "./Icon";
import { ThemeButtons } from "./themebuttons";
import {
  applyLang,
  getLangFromPath,
  setLangCookie,
  syncLangWithCookie,
} from "utils/setlang";

export default function Footer() {
  const [isThemeOpen, setIsThemeOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const currentLang = getLangFromPath(pathname);
  const toggleLang = () => {
    const target = currentLang === "en" ? "ko" : "en";
    setLangCookie(target);
    applyLang(router, pathname, target);
  };

  useEffect(() => {
    syncLangWithCookie(router, pathname);
  }, [pathname]);

  return (
    <div
      className="text-border rounded-b-[8px] bg-fg flex justify-between w-full border-t-[0.5px] border-border h-[5vh] transition-colors duration-500 ease-in-out
    [&_*]:transition-colors
    [&_*]:duration-500
    [&_*]:ease-in-out
    overflow-hidden"
    >
      <div className="flex w-full justify-between lg:justify-start">
        <div className="border-r-[0.5px] border-border w-[150px] flex justify-center items-center rounded-bl-[8px]">
          <span className="cursor-default">find me in :</span>
        </div>
        <div className="flex">
          {SOCIAL_MEDIA.map((sns, idx) => (
            <a
              key={sns.id}
              href={sns.url}
              className={`${idx === 0 ? "border-x-[0.5px] lg:border-r-[0.5px]" : "border-r-[0.5px]"} ${idx === SOCIAL_MEDIA.length - 1 ? "rounded-br-[8px] lg:rounded-none " : ""} border-border w-[5vh] flex justify-center items-center hover:bg-hover !duration-300`}
            >
              <Icon
                name={sns.id as keyof typeof Icons}
                className="w-[2.2vh] h-[2.2vh] fill-border"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="relative lg:flex items-center hidden">
        <div
          className={`
            absolute right-21
            flex gap-1
            rounded-x
            !transition-all !duration-300 !ease-out
            ${
              isThemeOpen
                ? "opacity-100 translate-x-3 scale-100"
                : "opacity-0 translate-x-15 scale-50 pointer-events-none"
            }
          `}
        >
          <ThemeButtons swatchClass="w-4 h-4" />
        </div>
        <button className="w-[30px] h-[31px] bg-fg z-100 flex justify-center items-center rounded-4xl">
          <Icons.Moon
            onClick={() => {
              setIsThemeOpen((prev) => !prev);
            }}
            className="w-[3vh] h-[3vh] cursor-pointer hover:opacity-80 fill-border transition-all duration-150 active:opacity-50"
          />
        </button>
        <button
          type="button"
          onClick={toggleLang}
          aria-label="Toggle language"
          className="px-2 pt-0.5 h-[31px] bg-fg z-100 flex justify-center items-center mr-2 hover:bg-highlight/20 rounded-lg !duration-300 text-center"
        >
          {currentLang === "en" ? "KO" : "EN"}
        </button>
      </div>
    </div>
  );
}
