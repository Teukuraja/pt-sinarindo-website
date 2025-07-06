import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
<<<<<<< HEAD
import { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] });
=======
import ClientWrapper from "./components/ClientWrapper";
import { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
>>>>>>> 7bfdd7c (ubah tema)

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className={inter.className}>
      <body className="bg-white text-gray-900 antialiased">
<<<<<<< HEAD
        <Header />
        <main className="max-w-7xl mx-auto px-4">
          {children}
        </main>
        <Footer />
=======
        <ClientWrapper>
          <Header />
          <main className="max-w-7xl mx-auto px-4">
            {children}
          </main>
          <Footer />
        </ClientWrapper>
>>>>>>> 7bfdd7c (ubah tema)
      </body>
    </html>
  );
}
