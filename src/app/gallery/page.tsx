export default function Gallery() {
  return (
    <section className="bg-white py-16 px-4 max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold text-red-700 mb-6 text-center">Galeri Proyek Kami</h1>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl mx-auto">
        Dokumentasi beberapa pekerjaan kami di berbagai sektor industri. Foto proyek akan segera diupdate.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-gray-100 h-56 rounded-lg flex items-center justify-center text-gray-400">Foto 1 (Placeholder)</div>
        <div className="bg-gray-100 h-56 rounded-lg flex items-center justify-center text-gray-400">Foto 2 (Placeholder)</div>
        <div className="bg-gray-100 h-56 rounded-lg flex items-center justify-center text-gray-400">Foto 3 (Placeholder)</div>
        <div className="bg-gray-100 h-56 rounded-lg flex items-center justify-center text-gray-400">Foto 4 (Placeholder)</div>
        <div className="bg-gray-100 h-56 rounded-lg flex items-center justify-center text-gray-400">Foto 5 (Placeholder)</div>
        <div className="bg-gray-100 h-56 rounded-lg flex items-center justify-center text-gray-400">Foto 6 (Placeholder)</div>
      </div>
    </section>
  );
}
