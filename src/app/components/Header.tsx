import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        <a
          href="/"
          className="flex items-center gap-4 text-xl font-bold text-orange-500 hover:text-orange-600 transition-colors"
        >
          <Image
            src="/logo.png"
            alt="Logo Sinarindo"
            width={72}
            height={72}
            className="object-contain"
            priority
          />
          <span className="hidden sm:inline">PT Sinarindo Raesa Anugrah</span>
        </a>
        
        <nav className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base">
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
              className="text-gray-800 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 rounded transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        
      </div>
    </header>
  );
}
