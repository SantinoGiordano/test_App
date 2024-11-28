import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "./componets/Nav";



const cutOuts = localFont({
  src:"./fonts/CutOutsFLF.ttf",
  weight: "400",
  variable: "--font-cutouts"
})

const printClearly = localFont({
  src:"./fonts/printClearly.otf",
  weight: "400",
  variable: "--font-printClearly"
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <header >
      <Nav/>
      </header>
        {children}
      </body>
    </html>
  );
}
