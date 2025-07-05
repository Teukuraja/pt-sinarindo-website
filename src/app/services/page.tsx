export default function Services() {
  return (
    <section className="bg-white py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold text-red-700 mb-6 text-center">
        Layanan & Proyek Kami
      </h1>

      <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl mx-auto">
        Kami menawarkan layanan profesional yang didukung pengalaman luas di berbagai industri. Siap mendukung kebutuhan Anda dengan solusi terbaik.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold text-red-700 mb-4 text-center">Layanan Unggulan</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Maintenance Electric Robotic Brokk</li>
          <li>Demolition Kiln</li>
          <li>Instalasi Listrik & Instrumentasi</li>
          <li>Pengadaan Sparepart & Peralatan</li>
          <li>Fabrication & Engineering Works</li>
        </ul>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-red-700 mb-4 text-center">Pengalaman Klien</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>PT FREEPORT PAPUA INDONESIA</li>
          <li>PT ALDZAMA</li>
          <li>PT SMELTING GRESIK</li>
          <li>PT ANTAM SULAWESI</li>
          <li>PT SEMEN INDONESIA</li>
          <li>...dan banyak lainnya</li>
        </ul>
      </div>
    </section>
  );
}
