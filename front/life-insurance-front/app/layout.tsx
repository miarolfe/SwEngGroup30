import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {AuthProvider} from "./Providers.js";
import "./globals.css";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><AuthProvider>{children}</AuthProvider></body>
    </html>
  );
}
