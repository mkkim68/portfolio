"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className="h-[6vh] rounded-[8px] bg-fg transition-colors duration-500 ease-in-out">
      <ul className="text-border flex justify-between w-full border-b-[0.5px] h-full">
        <div className="flex">
          <Link
            href="/"
            className="cursor-pointer p-[20px] flex justify-start items-center hover:bg-hover transition-colors duration-150 border-r-[0.5px] w-[270px]"
          >
            kim-min-kyoung
          </Link>
          <Link
            href="/"
            className={`${path === "/" ? "text-highlight" : "inherit"} cursor-pointer ${
              path === "/" ? "border-b-[2px] border-b-string" : "none"
            } w-[121px] flex justify-center border-r-[0.5px] items-center hover:bg-hover transition-colors duration-150`}
          >
            _hello
          </Link>
          <Link
            href="/about-me"
            className={`${path === "/about-me" ? "text-highlight" : "inherit"} cursor-pointer ${
              path === "/about-me" ? "border-b-[2px] border-b-string" : "none"
            } w-[121px] flex justify-center border-r-[0.5px] items-center hover:bg-hover transition-colors duration-150`}
          >
            _about-me
          </Link>
          <Link
            href="/projects"
            className={`${path === "/projects" ? "text-highlight" : "inherit"} cursor-pointer ${
              path === "/projects" ? "border-b-[2px] border-b-string" : "none"
            } w-[121px] flex justify-center border-r-[0.5px] items-center hover:bg-hover transition-colors duration-150`}
          >
            _projects
          </Link>
        </div>
        <Link
          href="/contact-me"
          className={`${path === "/contact-me" ? "text-highlight" : "inherit"} cursor-pointer ${
            path === "/contact-me" ? "border-b-[2px] border-b-string" : "none"
          } w-[150px] flex justify-center border-l-[0.5px] items-center hover:bg-hover transition-colors duration-150`}
        >
          _contact-me
        </Link>
      </ul>
    </nav>
  );
}
