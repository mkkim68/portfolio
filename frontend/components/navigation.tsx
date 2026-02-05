"use client";

import { Icons } from "@icons/index";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Navigation() {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [path]);

  return (
    <nav className="relative h-[6vh] rounded-t-[8px] bg-fg transition-colors duration-500 ease-in-out">
      <ul className="text-border flex justify-between items-center w-full border-b-[0.5px] border-border h-full">
        <div className="flex h-full w-full">
          <Link
            href="/"
            className="cursor-pointer lg:flex-none flex-1 p-[20px] flex justify-start items-center hover:bg-hover transition-colors duration-150 lg:border-r-[0.5px] lg:border-border lg:w-[270px]"
          >
            kim-min-kyoung
          </Link>
          <Link
            href="/"
            className={`${path === "/" ? "text-highlight" : "inherit"} cursor-pointer 
              ${
                path === "/" ? "border-b-[2px] border-b-string" : "none"
              } hidden lg:flex w-[121px] justify-center border-r-[0.5px] border-border items-center hover:bg-hover transition-colors duration-150`}
          >
            _hello
          </Link>
          <Link
            href="/about-me"
            className={`${path === "/about-me" ? "text-highlight" : "inherit"} cursor-pointer ${
              path === "/about-me" ? "border-b-[2px] border-b-string" : "none"
            } w-[121px] hidden lg:flex justify-center border-r-[0.5px] border-border items-center hover:bg-hover transition-colors duration-150`}
          >
            _about-me
          </Link>
          <Link
            href="/projects"
            className={`${path === "/projects" ? "text-highlight" : "inherit"} cursor-pointer ${
              path === "/projects" ? "border-b-[2px] border-b-string" : "none"
            } w-[121px] hidden lg:flex justify-center border-r-[0.5px] border-border items-center hover:bg-hover transition-colors duration-150`}
          >
            _projects
          </Link>
        </div>
        <Link
          href="/contact-me"
          className={`${path === "/contact-me" ? "text-highlight" : "inherit"} cursor-pointer ${
            path === "/contact-me" ? "border-b-[2px] border-b-string" : "none"
          } w-[150px] h-full hidden lg:flex justify-center border-l-[0.5px] border-border items-center hover:bg-hover transition-colors duration-150`}
        >
          _contact-me
        </Link>
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((v) => !v)}
          className="lg:hidden cursor-pointer px-[15px] h-full flex items-center justify-center rounded-tr-lg hover:bg-hover transition-colors duration-150"
        >
          <Icons.Menu className="w-7 h-7" />
        </button>
      </ul>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            key="mobile-dropdown"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeInOut" }}
            className={
              "lg:hidden absolute left-0 right-0 top-full z-50 flex flex-col justify-between " +
              "h-[calc(89vh-60px)] overflow-y-auto " +
              "border-t-[0.5px] border-border bg-gradient-to-b from-fg via-fg/95 to-fg/50 transition-colors duration-500 ease-in-out"
            }
          >
            <motion.ul
              className="flex flex-col list-none m-0 p-0"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                closed: {},
                open: {
                  transition: {
                    staggerChildren: 0.06,
                    delayChildren: 0.02,
                  },
                },
              }}
            >
              {[
                { href: "/", label: "_hello", active: path === "/" },
                {
                  href: "/about-me",
                  label: "_about-me",
                  active: path === "/about-me",
                },
                {
                  href: "/projects",
                  label: "_projects",
                  active: path === "/projects",
                },
                {
                  href: "/contact-me",
                  label: "_contact-me",
                  active: path === "/contact-me",
                },
              ].map((item) => (
                <motion.li
                  key={item.href}
                  className="list-none w-full"
                  variants={{
                    closed: { opacity: 0, y: -6, filter: "brightness(0.6)" },
                    open: { opacity: 1, y: 0, filter: "brightness(1)" },
                  }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  <Link
                    href={item.href}
                    className={`block w-full p-5 border-b-[0.5px] border-border hover:bg-hover transition-colors duration-150 ${
                      item.active ? "text-highlight" : "text-border"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  closed: { opacity: 0, y: -6, filter: "brightness(0.6)" },
                  open: { opacity: 1, y: 0, filter: "brightness(1)" },
                }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="flex justify-between px-5 py-4 border-b-[0.5px] border-border items-center"
              >
                <span className="text-border cursor-default">_theme</span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setTheme("default")}
                    className={`px-1 py-1 rounded-md !transition-all !duration-200 !ease-in-out ${
                      mounted && theme === "default"
                        ? "bg-white/20"
                        : "hover:-translate-y-0.5 active:translate-y-0.5"
                    }`}
                  >
                    <div className="w-5 h-5 bg-[linear-gradient(200deg,#011627_20%,#43d9ad_100%)]"></div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTheme("red")}
                    className={`px-1 py-1 rounded-md !transition-all !duration-200 !ease-in-out ${
                      mounted && theme === "red"
                        ? "bg-white/20"
                        : "hover:-translate-y-0.5 active:translate-y-0.5"
                    }`}
                  >
                    <div className="w-5 h-5 bg-[linear-gradient(200deg,#2b0303_20%,#bf3d3d_100%)]"></div>
                  </button>
                </div>
              </motion.li>
            </motion.ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
