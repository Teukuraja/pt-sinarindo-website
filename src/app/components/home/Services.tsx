export default function Services() {
  return (
<<<<<<< HEAD
    <section className="bg-white py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Layanan Kami
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
=======
    <section
      className="bg-[#F5F5F5] py-20 px-4 sm:px-6"
      data-aos="fade-up"
    >
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
          Layanan Kami
        </h2>
        <p className="text-base sm:text-lg text-[#6E6E6E] max-w-3xl mx-auto leading-relaxed">
>>>>>>> 7bfdd7c (ubah tema)
          Kami menyediakan solusi lengkap dan terintegrasi untuk kebutuhan Electrical, Maintenance Alat Berat, Konstruksi, dan Engineering.
        </p>
        
        <div className="grid gap-8 sm:grid-cols-2">
<<<<<<< HEAD
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Instalasi Listrik Industri
            </h3>
            <p className="text-gray-700">
              Pemasangan & perawatan sistem listrik industri yang aman dan efisien.
            </p>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Maintenance Alat Berat
            </h3>
            <p className="text-gray-700">
              Perawatan dan perbaikan alat berat dengan standar tinggi.
            </p>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Konstruksi Bangunan
            </h3>
            <p className="text-gray-700">
              Pengerjaan proyek konstruksi dengan kualitas terbaik.
            </p>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Engineering & Procurement
            </h3>
            <p className="text-gray-700">
              Solusi terintegrasi untuk kebutuhan engineering & pengadaan.
            </p>
          </div>
=======
          {[
            {
              title: "Instalasi Listrik Industri",
              desc: "Pemasangan & perawatan sistem listrik industri yang aman dan efisien.",
            },
            {
              title: "Maintenance Alat Berat",
              desc: "Perawatan dan perbaikan alat berat dengan standar tinggi.",
            },
            {
              title: "Konstruksi Bangunan",
              desc: "Pengerjaan proyek konstruksi dengan kualitas terbaik.",
            },
            {
              title: "Engineering & Procurement",
              desc: "Solusi terintegrasi untuk kebutuhan engineering & pengadaan.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-[#6E6E6E]/20 rounded-lg shadow-sm hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                {service.title}
              </h3>
              <p className="text-[#6E6E6E] leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
>>>>>>> 7bfdd7c (ubah tema)
        </div>
      </div>
    </section>
  );
}
