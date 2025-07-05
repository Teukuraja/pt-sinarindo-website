export default function About() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl sm:text-5xl font-bold text-red-700 mb-6 text-center">
        Tentang Kami
      </h1>

      <p className="text-base sm:text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
        PT SINARINDO RAESA ANUGRAH adalah General Contractor & Supplier di bidang Electrical, Maintenance Alat Berat, Konstruksi, dan Engineering. Berlokasi di Gresik – Jawa Timur, berdiri pada tahun 2025 dengan komitmen menyediakan layanan tenaga kerja dan pengadaan barang yang terintegrasi.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 sm:p-6 text-gray-700 space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold text-red-700 text-center">
          Visi Kami
        </h2>
        <p className="text-sm sm:text-base text-center">
          Menjadi mitra terpercaya dalam penyediaan layanan profesional di sektor industri konstruksi, maintenance, dan engineering.
        </p>

        <h2 className="text-lg sm:text-xl font-semibold text-red-700 text-center">
          Misi Kami
        </h2>
        <ul className="list-disc list-inside text-sm sm:text-base max-w-md mx-auto space-y-2">
          <li>Menyediakan layanan berkualitas tinggi dengan tenaga ahli profesional.</li>
          <li>Memenuhi kebutuhan klien dengan solusi terintegrasi.</li>
          <li>Menjaga keselamatan kerja dan standar mutu.</li>
          <li>Berinovasi untuk mendukung perkembangan industri.</li>
        </ul>
      </div>
    </section>
  );
}
