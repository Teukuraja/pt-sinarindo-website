"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-red-700 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          {/* Logo + Brand */}
          <div className="flex flex-col sm:flex-row items-center sm:space-x-3 text-center sm:text-left mb-2 sm:mb-0">
            <Image
              src="/logo.png"
              alt="PT Sinarindo Logo"
              width={56}
              height={56}
              className="rounded sm:w-14 sm:h-14 w-14 h-14"
              priority
            />
            <h1 className="text-lg sm:text-xl font-bold mt-2 sm:mt-0">
              PT SINARINDO RAESA ANUGRAH
            </h1>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-5 mt-2 sm:mt-0">
            <Link href="/" className="hover:underline text-sm sm:text-base">Home</Link>
            <Link href="/about" className="hover:underline text-sm sm:text-base">About</Link>
            <Link href="/services" className="hover:underline text-sm sm:text-base">Services</Link>
            <Link href="/contact" className="hover:underline text-sm sm:text-base">Contact</Link>
            <Link href="/gallery" className="hover:underline text-sm sm:text-base">Gallery</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
