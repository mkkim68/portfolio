import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const LANG_COOKIE = "portfolio_lang" as const;
export type Lang = "en" | "ko";

export function getLangFromPath(pathname?: string | null): Lang {
  const seg = (pathname ?? "/").split("/").filter(Boolean)[0];
  return seg === "ko" ? "ko" : "en";
}

export function buildPathWithLang(
  pathname: string | null | undefined,
  lang: Lang,
) {
  const parts = (pathname ?? "/").split("/").filter(Boolean);
  if (parts[0] === "en" || parts[0] === "ko") parts[0] = lang;
  else parts.unshift(lang);
  return "/" + parts.join("/");
}

export function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()!.split(";").shift();
  return undefined;
}

export function setCookie(name: string, value: string, days = 365) {
  if (typeof document === "undefined") return;
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${value}; Max-Age=${maxAge}; Path=/; SameSite=Lax${
    location.protocol === "https:" ? "; Secure" : ""
  }`;
}

export function getLangCookie(): Lang | undefined {
  const v = getCookie(LANG_COOKIE);
  return v === "en" || v === "ko" ? v : undefined;
}

export function setLangCookie(lang: Lang) {
  setCookie(LANG_COOKIE, lang);
}

export function applyLang(
  router: AppRouterInstance,
  pathname: string | null | undefined,
  lang: Lang,
  opts?: { replace?: boolean },
) {
  const nextPath = buildPathWithLang(pathname, lang);
  if (opts?.replace) router.replace(nextPath);
  else router.push(nextPath);
}

export function syncLangWithCookie(
  router: AppRouterInstance,
  pathname: string | null | undefined,
) {
  const cookieLang = getLangCookie();
  if (!cookieLang) return;

  const current = getLangFromPath(pathname);
  if (cookieLang === current) return;

  applyLang(router, pathname, cookieLang, { replace: true });
}
