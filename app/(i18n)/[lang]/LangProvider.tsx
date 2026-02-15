"use client";

import { createContext, useContext } from "react";
import type { Lang } from "./layout";

const LangContext = createContext<Lang | null>(null);

export function LangProvider({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

export function useLang() {
  const v = useContext(LangContext);
  if (!v) throw new Error("useLang must be used within <LangProvider />");
  return v;
}
