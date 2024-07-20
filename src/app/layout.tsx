import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Container from "@/components/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neeraj",
  description: "neeraj's portfolio",
};

const backgroundStyle = {
  backgroundColor: "#000000",
  backgroundImage: "radial-gradient(circle, #202020 1px, transparent 1px)",
  backgroundSize: "20px 20px",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={backgroundStyle}
        className={`text-zinc-400 ${inter.className}`}
      >
        <Header />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
