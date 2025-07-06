export default function WhyChooseUs() {
  return (
<<<<<<< HEAD
    <section className="bg-white py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Kenapa Memilih Kami
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Komitmen kami adalah memberikan layanan terbaik dan solusi terintegrasi untuk mendukung kesuksesan proyek Anda.
        </p>
        
        <ul className="max-w-3xl mx-auto space-y-4 text-left text-gray-700 text-lg leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="text-orange-500 text-2xl">✔️</span>
            <span>Tenaga ahli profesional dan berpengalaman</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-500 text-2xl">✔️</span>
            <span>Pengalaman menangani berbagai proyek industri</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-500 text-2xl">✔️</span>
            <span>Solusi terintegrasi di bidang kelistrikan & konstruksi</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-500 text-2xl">✔️</span>
            <span>Komitmen pada kualitas dan kepuasan klien</span>
          </li>
        </ul>
=======
    <section
      className="bg-[#F5F5F5] py-20 px-4 sm:px-6"
      data-aos="fade-up"
    >
      <div className="max-w-5xl mx-auto text-center space-y-10">
        
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
          Kenapa Memilih Kami
        </h2>
        
        <p className="text-base sm:text-lg text-[#6E6E6E] max-w-3xl mx-auto leading-relaxed">
          Komitmen kami adalah memberikan layanan terbaik dan solusi terintegrasi untuk mendukung kesuksesan proyek Anda.
        </p>
        
        <ul className="max-w-3xl mx-auto space-y-5 text-left text-[#6E6E6E] text-base sm:text-lg leading-relaxed">
          {[
            "Tenaga ahli profesional dan berpengalaman",
            "Pengalaman menangani berbagai proyek industri",
            "Solusi terintegrasi di bidang kelistrikan & konstruksi",
            "Komitmen pada kualitas dan kepuasan klien"
          ].map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-4 bg-white border border-[#6E6E6E]/20 rounded-lg shadow-sm hover:shadow-md transition px-5 py-4"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <span className="text-[#F7941E] text-xl">✔️</span>
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ul>
        
>>>>>>> 7bfdd7c (ubah tema)
      </div>
    </section>
  );
}
