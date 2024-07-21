import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "@/components/header";
import Container from "@/components/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "neeraj",
  description: "neeraj's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`text-zinc-400 bg-black bg-[radial-gradient(circle,#202020_1px,transparent_1px)] bg-[size:20px_20px] ${inter.className}`}
      >
        <div></div>
        <div>
          <Header />
          <Container>{children}</Container>
        </div>
      </body>
    </html>
  );
}
