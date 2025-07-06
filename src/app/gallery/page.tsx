export default function Gallery() {
  return (
<<<<<<< HEAD
    <section className="bg-white py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Galeri Proyek Kami
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
=======
    <section
      className="bg-[#F5F5F5] py-20 px-4 sm:px-6"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
          Galeri Proyek Kami
        </h1>
        <p className="text-base sm:text-lg text-[#6E6E6E] max-w-2xl mx-auto leading-relaxed">
>>>>>>> 7bfdd7c (ubah tema)
          Dokumentasi beberapa proyek dan pekerjaan yang telah kami tangani dengan profesionalisme tinggi.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
<<<<<<< HEAD
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-gray-50 border border-gray-200 rounded-lg shadow hover:shadow-md transition overflow-hidden"
            >
              <div className="aspect-w-4 aspect-h-3 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
=======
          {[1, 2, 3, 4, 5, 6].map((item, idx) => (
            <div
              key={item}
              className="bg-white border border-[#6E6E6E]/20 rounded-lg shadow-sm hover:shadow-md transition overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="aspect-w-4 aspect-h-3 bg-[#F5F5F5] flex items-center justify-center text-[#6E6E6E] text-sm">
>>>>>>> 7bfdd7c (ubah tema)
                Foto Proyek {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
