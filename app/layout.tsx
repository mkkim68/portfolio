import Footer from "../components/footer";
import Navigation from "../components/navigation";
import "../styles/global.css";
import localFont from "next/font/local";

export const metadata = {
  title: "Kim Min Kyoung",
  description: "Front-end Developer",
};

const firacode_light = localFont({
  src: "../public/fonts/FiraCode-Light.ttf",
  display: "swap",
  weight: "100 900",
  variable: "--font-firacode-light",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-[#010C15] h-screen p-[15px]`}>
        <div
          className={`${firacode_light.className} border-[0.5px] rounded-[8px] border-[#607B96] text-[16px]`}
        >
          <Navigation />
          <div className="h-[calc(88vh-30px)]">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
