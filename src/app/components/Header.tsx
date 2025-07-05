"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-red-700 text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="text-lg font-bold">
          <Link href="/">PT SINARINDO RAESA ANUGRAH</Link>
        </h1>
        <nav className="space-x-4">
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
