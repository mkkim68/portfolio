// data/i18n/index.ts
import { ko } from "./ko";
import { en } from "./en";
import type { Lang } from "app/(i18n)/[lang]/layout";

export function getDict(lang: Lang) {
  return lang === "ko" ? ko : en;
}
