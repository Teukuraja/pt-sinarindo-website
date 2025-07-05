export default function Hero() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 text-center max-w-5xl mx-auto space-y-8">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
        Sinarindo Raesa Anugrah
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
        General Contractor & Supplier di bidang Electrical, Maintenance Alat Berat, Konstruksi, dan Engineering.
      </p>
      <a
        href="services"
        className="inline-block bg-orange-400 text-white px-6 py-3 rounded-full hover:bg-orange-500 transition font-medium shadow"
      >
        Lihat Layanan Kami
      </a>
    </section>
  );
}
