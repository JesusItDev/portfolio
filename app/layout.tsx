import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/Header";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jesús Rodríguez Portfolio",
  description: "Made by Jesús Rodríguez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className}`}>
        <Navbar></Navbar>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
