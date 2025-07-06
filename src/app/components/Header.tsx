import Image from "next/image";

export default function Header() {
  return (
<<<<<<< HEAD
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        <a
          href="/"
          className="flex items-center gap-4 text-xl font-bold text-orange-500 hover:text-orange-600 transition-colors"
=======
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-[#6E6E6E]/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:py-5">
        
        {/* LOGO + BRAND */}
        <a
          href="/"
          className="flex items-center gap-3 md:gap-4 text-xl font-bold text-[#F7941E] hover:text-[#D45500] transition-colors"
>>>>>>> 7bfdd7c (ubah tema)
        >
          <Image
            src="/logo.png"
            alt="Logo Sinarindo"
<<<<<<< HEAD
            width={72}
            height={72}
            className="object-contain"
            priority
          />
          <span className="hidden sm:inline">PT Sinarindo Raesa Anugrah</span>
        </a>
        
        <nav className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base">
=======
            width={96}
            height={96}
            className="object-contain h-12 w-auto md:h-14"
            priority
          />
          <span className="hidden sm:inline text-base md:text-lg lg:text-xl font-semibold text-[#1A1A1A]">
            PT Sinarindo Raesa Anugrah
          </span>
        </a>

        {/* NAVIGATION */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8 text-sm md:text-base font-medium">
>>>>>>> 7bfdd7c (ubah tema)
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/services", label: "Services" },
            { href: "/contact", label: "Contact" },
            { href: "/gallery", label: "Gallery" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
<<<<<<< HEAD
              className="text-gray-800 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 rounded transition-colors"
=======
              className="text-[#1A1A1A] hover:text-[#D45500] focus:outline-none focus:ring-2 focus:ring-[#F7941E] rounded transition-colors"
>>>>>>> 7bfdd7c (ubah tema)
            >
              {item.label}
            </a>
          ))}
        </nav>
<<<<<<< HEAD
        
=======

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded hover:bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#F7941E] transition"
          aria-label="Open Menu"
        >
          <svg
            className="h-6 w-6 text-[#1A1A1A]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

>>>>>>> 7bfdd7c (ubah tema)
      </div>
    </header>
  );
}
