export default function Hero() {
  return (
    <section
      className="bg-white py-24 px-4 sm:px-6"
      data-aos="fade-up"
    >
      <div className="max-w-3xl mx-auto text-center space-y-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
          Sinarindo Raesa Anugrah
        </h1>
        <p className="text-base sm:text-lg text-[#6E6E6E] max-w-2xl mx-auto leading-relaxed">
          General Contractor & Supplier di bidang Electrical, Maintenance Alat Berat,
          Konstruksi, dan Engineering.
        </p>
        <a
          href="/services"
          className="inline-block rounded-full bg-[#F7941E] hover:bg-[#D45500] text-white px-8 py-3 text-base sm:text-lg font-medium shadow-md transition duration-300"
        >
          Lihat Layanan Kami
        </a>
      </div>
    </section>
  );
}
