"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-red-700 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap sm:flex-nowrap justify-between items-center">
        <div className="flex items-center space-x-3 w-full sm:w-auto justify-center sm:justify-start mb-2 sm:mb-0">
          <Image
            src="/logo.png"
            alt="PT Sinarindo Logo"
            width={48}
            height={48}
            className="rounded sm:w-12 sm:h-12 w-10 h-10"
            priority
          />
          <h1 className="text-base sm:text-xl font-bold text-center sm:text-left">
            PT SINARINDO RAESA ANUGRAH
          </h1>
        </div>

        <nav className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-4 w-full sm:w-auto">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/gallery" className="hover:underline">Gallery</Link>
        </nav>
      </div>
    </header>
  );
}
