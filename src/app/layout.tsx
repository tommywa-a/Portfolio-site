import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ["latin"], variable: "--font-serif", weight: ["400"] });

export const metadata: Metadata = {
  title: "Tomiwa Aderibigbe's Portfolio",
  description: "Tomiwa Aderibigbe - Expert Software Developer | Specializing in React, Next.js, and Modern Web Technologies | Building Fast, Responsive, and User-Centric Web Applications",
  keywords: ["Tomiwa Aderibigbe", "Babatomiwa Aderibigbe", "Portfolio", "Tomiwa Aderibigbe's Portfolio", "Babatomiwa Aderibigbe's Portfolio"],
  authors: [{ name: "Tomiwa Aderibigbe", url: "https://tomiwaaderibigbe.vercel.app/" }],
  openGraph: {
    title: "Tomiwa Aderibigbe's Portfolio",
    description: "Tomiwa Aderibigbe - Expert Software Developer | Specializing in React, Next.js, and Modern Web Technologies | Building Fast, Responsive, and User-Centric Web Applications",
    type: "website",
    locale: "en_US",
    siteName: "Tomiwa Aderibigbe's Portfolio",
    url: "https://tomiwaaderibigbe.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, calistoga.variable, "bg-blue-950 text-white antialiased font-sans")}>{children}</body>
    </html>
  );
}
