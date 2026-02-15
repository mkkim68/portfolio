// app/(i18n)/[lang]/layout.tsx
import { notFound } from "next/navigation";
import { LangProvider } from "./LangProvider";

const SUPPORTED = ["ko", "en"] as const;
export type Lang = (typeof SUPPORTED)[number];

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Lang };
}) {
  return <LangProvider lang={params.lang}>{children}</LangProvider>;
}
