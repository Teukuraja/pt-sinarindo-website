export default function WhyChooseUs() {
  return (
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
        
      </div>
    </section>
  );
}
