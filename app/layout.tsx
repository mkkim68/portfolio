import Footer from "components/footer";
import Navigation from "components/navigation";
import { ThemeProvider } from "next-themes";
import "styles/global.css";

export const metadata = {
  metadataBase: new URL("https://kim-minkyoung.vercel.app"),
  title: "Kim Min Kyoung",
  description: "Front-end Developer Portfolio",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Kim Min Kyoung",
    description: "Front-end Developer Portfolio",
    url: "https://kim-minkyoung.vercel.app",
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
            className={`bg-bg min-h-[100dvh] p-[15px] lg:p-[30px] transition-colors duration-500 ease-in-out`}
          >
            <div
              className={` border-[0.5px] rounded-[8px] border-border text-[14px] h-[calc(100dvh-30px)] lg:h-[calc(100dvh-60px)] flex flex-col min-h-0`}
            >
              <Navigation />
              <main className="flex-1 min-h-0 transition-colors duration-500 ease-in-out bg-fg">
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
