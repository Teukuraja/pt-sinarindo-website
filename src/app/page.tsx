import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-white py-16 px-4 text-center max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold text-red-700 mb-4">
        PT SINARINDO RAESA ANUGRAH
      </h1>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
        General Contractor & Supplier di bidang Electrical, Maintenance Alat Berat, Konstruksi, dan Engineering. 
        Berlokasi di Gresik – Jawa Timur, berdiri pada tahun 2025. Kami siap menjadi mitra terpercaya dengan layanan tenaga kerja dan pengadaan barang yang terintegrasi.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Kenapa Memilih Kami?</h2>
        <ul className="list-disc list-inside text-gray-700 text-left space-y-2">
          <li>✔ Pengalaman di berbagai proyek industri</li>
          <li>✔ Tenaga ahli profesional</li>
          <li>✔ Solusi terintegrasi di bidang kelistrikan & konstruksi</li>
          <li>✔ Komitmen pada kualitas dan kepuasan klien</li>
        </ul>
      </div>

      <Link
        href="/contact"
        className="inline-block bg-red-700 text-white px-6 py-3 rounded-full hover:bg-red-600 transition"
      >
        Hubungi Kami Sekarang
      </Link>
    </section>
  );
}
