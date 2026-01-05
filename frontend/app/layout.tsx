import Footer from "../components/footer";
import Navigation from "../components/navigation";
import { firacode_light } from "../styles/font";
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
    <html lang="en">
      <body className={`bg-[#010C15] h-screen p-[20px]`}>
        <div
          className={`${firacode_light.className} border-[0.5px] rounded-[8px] border-[#607B96] text-[14px]`}
        >
          <Navigation />
          <div className="h-[calc(89vh-40px)]">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
