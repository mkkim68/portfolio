import Footer from "../components/footer";
import Navigation from "../components/navigation";
import { firacode_light } from "../styles/font";
import { ThemeProvider } from "next-themes";
import "../styles/global.css";

export const metadata = {
  metadataBase: new URL("https://minkyoung-kim.vercel.app"),
  title: "Kim Min Kyoung",
  description: "Front-end Developer Portfolio",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Kim Min Kyoung",
    description: "Front-end Developer Portfolio",
    url: "https://minkyoung-kim.vercel.app",
    siteName: "Kim Min Kyoung",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Kim Min Kyoung Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="data-theme"
          enableSystem={false}
          defaultTheme="default"
        >
          <div
            className={`bg-bg min-h-screen p-[15px] lg:p-[30px] transition-colors duration-500 ease-in-out`}
          >
            <div
              className={`${firacode_light.className} border-[0.5px] rounded-[8px] border-border text-[14px] h-[calc(100vh-30px)] lg:h-[calc(100vh-60px)] flex flex-col min-h-0`}
            >
              <Navigation />
              <main className="h-[calc(89vh-30px)] lg:h-[calc(89vh-60px)] transition-colors duration-500 ease-in-out bg-fg">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
