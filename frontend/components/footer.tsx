"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icons } from "@icons/index";

export default function Footer() {
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="text-border rounded-b-[8px] bg-fg flex justify-between w-full border-t-[0.5px] border-border h-[5vh] transition-colors duration-500 ease-in-out
    [&_*]:transition-colors
    [&_*]:duration-500
    [&_*]:ease-in-out"
    >
      <div className="flex">
        <div className="border-r-[0.5px] border-border w-[150px] flex justify-center items-center">
          <span className="cursor-default">find me in :</span>
        </div>
        <a
          href="https://www.linkedin.com/in/%EB%AF%BC%EA%B2%BD-%EA%B9%80-b36195373/"
          className="border-r-[0.5px] border-border w-[5vh] flex justify-center items-center hover:bg-hover !duration-300"
        >
          <Icons.LinkedIn className="w-[20px] h-[20px] fill-border" />
        </a>
        <a
          href="https://www.instagram.com/mmkkkkkim?igsh=YXB1OTYxcDhxdmR0&utm_source=qr"
          className="border-r-[0.5px] w-[5vh] flex justify-center items-center hover:bg-hover border-border !duration-300"
        >
          <Icons.Instagram className="w-[20px] h-[20px] fill-border" />
        </a>

        <a
          href="https://github.com/mkkim68"
          className="w-[5vh] flex gap-2 justify-center items-center border-r-[0.5px] border-border hover:bg-hover !duration-300"
        >
          <Icons.Github className="w-[20px] h-[20px] fill-border" />
        </a>
      </div>
      <div className="relative flex items-center">
        <div
          className={`
            absolute right-full
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
          {/* theme buttons */}
          <button
            onClick={() => setTheme("default")}
            className={`px-1 py-1 rounded-md !transition-all !duration-200 !ease-in-out ${mounted && theme === "default" ? "bg-white/20" : "hover:-translate-y-0.5 active:translate-y-0.5"}`}
          >
            <div className="w-4 h-4 bg-[linear-gradient(200deg,#011627_20%,#43d9ad_100%)]"></div>
          </button>
          <button
            onClick={() => setTheme("red")}
            className={`px-1 py-1 rounded-md !transition-all !duration-200 !ease-in-out ${mounted && theme === "red" ? "bg-white/20" : "hover:-translate-y-0.5 active:translate-y-0.5"}`}
          >
            <div className="w-4 h-4 bg-[linear-gradient(200deg,#2b0303_20%,#bf3d3d_100%)]"></div>
          </button>
          <button className="px-1 py-1 rounded-md"></button>
        </div>
        <button className="w-[30px] h-[31px] bg-fg z-100 flex justify-center items-center rounded-4xl mr-2 ml-1">
          <Icons.Moon
            onClick={() => {
              setIsThemeOpen((prev) => !prev);
            }}
            className="w-6 h-6 cursor-pointer hover:opacity-80 fill-border transition-all duration-150 active:opacity-50"
          />
        </button>
      </div>
    </div>
  );
}
