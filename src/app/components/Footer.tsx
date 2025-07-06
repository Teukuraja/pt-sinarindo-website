export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#6E6E6E]/20 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center space-y-4">
        <div className="text-sm text-[#1A1A1A]">
          &copy; 2025 PT Sinarindo Raesa Anugrah. All rights reserved.
        </div>
        <div className="flex justify-center flex-wrap gap-6 text-sm">
          <a
            href="/privacy"
            className="text-[#F7941E] hover:text-[#D45500] transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-[#F7941E] hover:text-[#D45500] transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
