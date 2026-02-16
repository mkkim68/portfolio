// app/(i18n)/[lang]/layout.tsx
import { notFound } from "next/navigation";
import { LangProvider } from "./LangProvider";

const SUPPORTED = ["ko", "en"] as const;
export type Lang = (typeof SUPPORTED)[number];

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  return <LangProvider lang={lang}>{children}</LangProvider>;
}
