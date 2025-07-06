import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ClientWrapper from "./components/ClientWrapper";
import { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className={inter.className}>
      <head>
        <title>PT Sinarindo Raesa Anugrah</title>
        <link rel="icon" type="image/png" href="/logo.png" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <ClientWrapper>
          <Header />
          <main className="max-w-7xl mx-auto px-4">
            {children}
          </main>
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
