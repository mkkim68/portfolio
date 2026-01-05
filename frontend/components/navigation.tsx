"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className="h-[6vh] rounded-[8px] bg-[#011627]">
      <ul className="text-[#607B96] flex justify-between w-full border-b-[0.5px] h-full">
        <div className="flex">
          <li className="p-[20px] flex justify-start items-center border-r-[0.5px] w-[270px]">
            <span>kim-min-kyoung</span>
          </li>
          <li
            className={`${
              path === "/" ? "border-b-[2px] border-b-[#FEA55F]" : "none"
            } w-[121px] flex justify-center border-r-[0.5px] items-center`}
          >
            <Link
              href="/"
              className={`${path === "/" ? "text-white" : "inherit"}`}
            >
              _hello
            </Link>
          </li>
          <li
            className={`${
              path === "/about-me"
                ? "border-b-[2px] border-b-[#FEA55F]"
                : "none"
            } w-[121px] flex justify-center border-r-[0.5px] items-center`}
          >
            <Link
              href="/about-me"
              className={`${path === "/about-me" ? "text-white" : "inherit"}`}
            >
              _about-me
            </Link>
          </li>
          <li
            className={`${
              path === "/projects"
                ? "border-b-[2px] border-b-[#FEA55F]"
                : "none"
            } w-[121px] flex justify-center border-r-[0.5px] items-center`}
          >
            <Link
              href="/projects"
              className={`${path === "/projects" ? "text-white" : "inherit"}`}
            >
              _projects
            </Link>
          </li>
        </div>
        <li
          className={`${
            path === "/contact-me"
              ? "border-b-[2px] border-b-[#FEA55F]"
              : "none"
          } w-[150px] flex justify-center border-l-[0.5px] items-center`}
        >
          <Link
            href="/contact-me"
            className={`${path === "/contact-me" ? "text-white" : "inherit"}`}
          >
            _contact-me
          </Link>
        </li>
      </ul>
    </nav>
  );
}
