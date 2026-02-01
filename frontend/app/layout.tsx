import Footer from "../components/footer";
import Navigation from "../components/navigation";
import { firacode_light } from "../styles/font";
import { ThemeProvider } from "next-themes";
import "../styles/global.css";

export const metadata = {
  title: "Kim Min Kyoung",
  description: "Front-end Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="data-theme"
          enableSystem={false}
          defaultTheme="default"
        >
          <div
            className={`bg-bg h-screen p-[30px] transition-colors duration-500 ease-in-out`}
          >
            <div
              className={`${firacode_light.className} border-[0.5px] rounded-[8px] border-border text-[14px]`}
            >
              <Navigation />
              <main className="h-[calc(89vh-60px)] transition-colors duration-500 ease-in-out bg-fg">
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
2;
