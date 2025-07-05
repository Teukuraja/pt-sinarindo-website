export default function CallToAction() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Siap Mendukung Proyek Anda
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Hubungi kami untuk konsultasi atau penawaran. Kami siap menjadi mitra terpercaya
          untuk mendukung kesuksesan proyek Anda dengan layanan profesional dan terintegrasi.
        </p>
        <a
          href="/contact"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-colors font-medium shadow"
        >
          Hubungi Kami
        </a>
      </div>
    </section>
  );
}
