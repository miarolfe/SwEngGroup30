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
    <html lang="en">
      <body className="grad-bg flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow py-5">
          <AuthProvider>{children}</AuthProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
