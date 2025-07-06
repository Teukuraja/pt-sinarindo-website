export default function CallToAction() {
  return (
    <section
      className="bg-[#F5F5F5] py-20 px-4 sm:px-6"
      data-aos="fade-up"
    >
      <div className="max-w-3xl mx-auto bg-white border border-[#6E6E6E]/20 rounded-lg shadow-sm px-6 sm:px-10 py-12 space-y-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
          Siap Mendukung Proyek Anda
        </h2>

        <p className="text-base sm:text-lg text-[#6E6E6E] max-w-2xl mx-auto leading-relaxed">
          Hubungi kami untuk konsultasi atau penawaran. Kami siap menjadi mitra terpercaya
          untuk mendukung kesuksesan proyek Anda dengan layanan profesional dan terintegrasi.
        </p>

        <a
          href="/contact"
          className="inline-block rounded-full bg-[#F7941E] hover:bg-[#D45500] text-white px-8 py-3 text-base sm:text-lg font-medium shadow-md transition duration-300"
        >
          Hubungi Kami
        </a>
      </div>
    </section>
  );
}
