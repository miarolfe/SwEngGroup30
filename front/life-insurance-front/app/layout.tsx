import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "./Providers.js";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <body className="grad-bg flex flex-col min-h-screen h-full">
        <Header />
        <main className="grow">
          <AuthProvider>{children}</AuthProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
