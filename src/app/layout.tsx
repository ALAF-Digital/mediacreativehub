import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "./style.css";
import "slick-carousel/slick/slick.css";

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Providers from "@/containers/Providers/Providers";
import Header from "@/components/layout/header/Header";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Media Creative Hub",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
