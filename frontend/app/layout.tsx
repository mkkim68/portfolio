import Footer from "../components/footer";
import Navigation from "../components/navigation";
import { firacode_light } from "../styles/font";
import { ThemeProvider } from "next-themes";
import "../styles/global.css";
import Providers from "./providers";

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
        <Providers>
          <div className={`bg-bg h-screen p-[30px]`}>
            <div
              className={`${firacode_light.className} border-[0.5px] rounded-[8px] border-border text-[14px]`}
            >
              <Navigation />
              <div className="h-[calc(89vh-60px)]">{children}</div>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
