import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED = ["ko", "en"] as const;
type Lang = (typeof SUPPORTED)[number];

function detectLang(req: NextRequest): Lang {
  // 1) (선택) 사용자가 언어 토글로 저장한 쿠키가 있으면 그걸 우선
  const cookieLang = req.cookies.get("lang")?.value;
  if (cookieLang === "ko" || cookieLang === "en") return cookieLang;

  // 2) 브라우저/기기 언어(accept-language) 기반
  const al = req.headers.get("accept-language") ?? "";
  // 예: "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7"
  const first = al.split(",")[0]?.trim().toLowerCase() ?? "";
  if (first.startsWith("ko")) return "ko";

  return "en";
}

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // 내부 Next.js 자원, 정적 파일은 제외
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname.match(/\.(png|jpg|jpeg|gif|webp|svg|ico|css|js|map|txt)$/)
  ) {
    return NextResponse.next();
  }

  const firstSegment = pathname.split("/")[1];

  // 지원하는 언어면 그대로 통과
  if (firstSegment === "ko" || firstSegment === "en") {
    return NextResponse.next();
  }

  // 언어처럼 보이지만 지원하지 않는 prefix (예: /jp, /fr, /de 등)
  // → /en 기준으로 강제 리다이렉트
  if (firstSegment && firstSegment.length === 2) {
    const restPath = pathname.split("/").slice(2).join("/");
    const url = req.nextUrl.clone();
    url.pathname = `/en${restPath ? `/${restPath}` : ""}`;
    url.search = search;
    return NextResponse.redirect(url);
  }

  // 언어 없는 모든 경로 → 언어 붙여서 리다이렉트
  const lang = detectLang(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${lang}${pathname === "/" ? "" : pathname}`;
  url.search = search;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
