export default function Services() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Layanan Kami
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Kami menyediakan solusi lengkap dan terintegrasi untuk kebutuhan Electrical, Maintenance Alat Berat, Konstruksi, dan Engineering.
        </p>
        
        <div className="grid gap-8 sm:grid-cols-2">
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
        </div>
      </div>
    </section>
  );
}
