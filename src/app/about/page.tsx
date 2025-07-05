export default function About() {
  return (
    <section className="bg-white py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold text-red-700 mb-6 text-center">Tentang Kami</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
        PT SINARINDO RAESA ANUGRAH adalah General Contractor & Supplier yang berdiri pada tahun 2025 di Gresik, Jawa Timur. 
        Kami bergerak di bidang Electrical, Maintenance alat berat, jasa konstruksi, dan engineering. 
        Dengan semangat profesionalisme dan inovasi, kami mendukung berbagai proyek industri dengan layanan tenaga kerja ahli dan pengadaan barang berkualitas.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Visi</h2>
        <p className="text-gray-700">
          Menjadi mitra terpercaya untuk solusi jasa dan pengadaan barang di berbagai sektor industri.
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Misi</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Memberikan layanan berkualitas tinggi.</li>
          <li>Menyediakan solusi terintegrasi di bidang kelistrikan dan konstruksi.</li>
          <li>Mengutamakan kepuasan dan kepercayaan klien.</li>
          <li>Membangun hubungan jangka panjang yang saling menguntungkan.</li>
        </ul>
      </div>
    </section>
  );
}
