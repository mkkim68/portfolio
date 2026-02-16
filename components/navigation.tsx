"use client";

import { Icons } from "../src/icons/index";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ThemeButtons } from "./themebuttons";
import { applyLang, getLangFromPath, Lang, setLangCookie } from "utils/setlang";

export default function Navigation() {
  const params = useParams<{ lang?: string | string[] }>();
  const rawLang = params?.lang;
  const lang = Array.isArray(rawLang) ? rawLang[0] : (rawLang ?? "en");
  const router = useRouter();

  const pathname = usePathname();

  const path = pathname?.startsWith(`/${lang}`)
    ? pathname.slice(`/${lang}`.length) || "/"
    : pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSettingsOpen(false);
  }, [pathname]);

  const currentLang = getLangFromPath(pathname);

  const setLang = (lang: Lang) => {
    setLangCookie(lang);
    applyLang(router, pathname, lang);
  };

  return (
    <nav className="relative h-[6vh] rounded-t-[8px] bg-fg transition-colors duration-500 ease-in-out">
      <ul className="text-border flex justify-between items-center w-full border-b-[0.5px] border-border h-full">
        <div className="flex h-full w-full">
          <Link
            href={`/${lang}`}
            className="cursor-pointer lg:flex-none flex-1 p-[20px] flex justify-start items-center hover:bg-hover transition-colors duration-150 lg:border-r-[0.5px] lg:border-border lg:w-[270px]"
          >
            kim-min-kyoung
          </Link>
          <Link
            href={`/${lang}`}
            className={`${path === "/" ? "text-highlight" : "inherit"} cursor-pointer 
              ${
                path === "/" ? "border-b-[2px] border-b-string" : "none"
              } hidden lg:flex w-[121px] justify-center border-r-[0.5px] border-border items-center hover:bg-hover transition-colors duration-150`}
          >
            _hello
          </Link>
          <Link
            href={`/${lang}/about-me`}
            className={`${path === "/about-me" ? "text-highlight" : "inherit"} cursor-pointer ${
              path === "/about-me" ? "border-b-[2px] border-b-string" : "none"
            } w-[121px] hidden lg:flex justify-center border-r-[0.5px] border-border items-center hover:bg-hover transition-colors duration-150`}
          >
            _about-me
          </Link>
          <Link
            href={`/${lang}/projects`}
            className={`${path === "/projects" ? "text-highlight" : "inherit"} cursor-pointer ${
              path === "/projects" ? "border-b-[2px] border-b-string" : "none"
            } w-[121px] hidden lg:flex justify-center border-r-[0.5px] border-border items-center hover:bg-hover transition-colors duration-150`}
          >
            _projects
          </Link>
        </div>
        <Link
          href={`/${lang}/contact-me`}
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
              "h-[calc(89vh-31px)] overflow-y-hidden " +
              "border-t-[0.5px] border-border bg-gradient-to-b from-fg via-fg/95 to-fg/80 transition-colors duration-500 ease-in-out"
            }
          >
            <motion.ul
              className="flex flex-col list-none m-0 p-0 justify-between"
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
                {
                  id: "hello",
                  href: `/${lang}`,
                  label: "_hello",
                  active: path === "/",
                },
                {
                  id: "about",
                  href: `/${lang}/about-me`,
                  label: "_about-me",
                  active: path === "/about-me",
                },
                {
                  id: "projects",
                  href: `/${lang}/projects`,
                  label: "_projects",
                  active: path === "/projects",
                },
                {
                  id: "contact",
                  href: `/${lang}/contact-me`,
                  label: "_contact-me",
                  active: path === "/contact-me",
                },
              ].map((item) => (
                <motion.li
                  key={item.id}
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
                className="list-none w-full"
              >
                <button
                  type="button"
                  onClick={() => setIsSettingsOpen(true)}
                  className="cursor-pointer w-full text-left flex justify-between items-center p-5 border-b-[0.5px] border-border hover:bg-hover transition-colors duration-150"
                  aria-haspopup="dialog"
                  aria-expanded={isSettingsOpen}
                >
                  <span className="text-border">_settings</span>
                  <Icons.Arrow className="w-[8px] h-[13px] text-border" />
                </button>
              </motion.li>
            </motion.ul>
            <AnimatePresence>
              {isSettingsOpen ? (
                <motion.div
                  key="settings-modal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18, ease: "easeInOut" }}
                  className="absolute inset-0 z-50"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Settings"
                >
                  {/* Backdrop */}
                  <button
                    type="button"
                    aria-label="Close settings"
                    className="absolute inset-0 w-full h-full bg-black/40"
                    onClick={() => setIsSettingsOpen(false)}
                  />

                  {/* Panel */}
                  <motion.div
                    initial={{ y: 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 16, opacity: 0 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute left-0 right-0 bottom-0 rounded-t-[12px] border-t-[0.5px] border-border bg-fg p-5"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-border">_settings</span>
                      <button
                        type="button"
                        aria-label="Close settings"
                        onClick={() => setIsSettingsOpen(false)}
                        className="p-2 cursor-pointer rounded-lg hover:bg-hover transition-colors duration-150 flex items-center justify-center"
                      >
                        <Icons.Close className="w-[10px] h-[11px] text-border" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between py-3 border-b-[0.5px] border-border">
                      <span className="text-border cursor-default">_theme</span>
                      <div className="flex gap-2 items-center justify-center">
                        <ThemeButtons swatchClass="w-5 h-5" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between py-3">
                      <span className="text-border cursor-default">
                        _language
                      </span>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setLang("en")}
                          aria-label="Set language in English"
                          className={`${currentLang === "en" ? "bg-highlight/20 text-highlight" : "text-border"} px-2 h-[31px] bg-fg flex justify-center items-center hover:bg-highlight/20 rounded-lg !duration-300`}
                        >
                          EN
                        </button>
                        <button
                          type="button"
                          onClick={() => setLang("ko")}
                          aria-label="Set language in Korean"
                          className={`${currentLang === "ko" ? "bg-highlight/20 text-highlight" : "text-border"} px-2 h-[31px] bg-fg flex justify-center items-center hover:bg-highlight/20 rounded-lg !duration-300`}
                        >
                          KO
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
