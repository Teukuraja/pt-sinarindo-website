export default function Contact() {
  return (
    <section
      className="bg-[#F5F5F5] py-20 px-4 sm:px-6"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
          Hubungi Kami
        </h1>
        <p className="text-base sm:text-lg text-[#6E6E6E] max-w-2xl mx-auto leading-relaxed">
          Kami siap membantu kebutuhan Anda. Silakan hubungi kami melalui informasi berikut.
        </p>

        <div className="bg-white border border-[#6E6E6E]/20 rounded-lg shadow-sm p-6 sm:p-8 text-left text-[#6E6E6E] max-w-2xl mx-auto space-y-4">
          <p>
            📍 <strong>Alamat:</strong>{" "}
            <a
              href="https://www.google.com/maps/search/?api=1&query=PT.+Sinarindo+Raesa+Anugrah,+Jl.+DR.+Wahidin+Sudiro+Husodo+Gg.+XI+No.B1+Rt02,+RW.04,+Dahanrejo,+Singorejo,+Kec.+Kebomas,+Kabupaten+Gresik,+Jawa+Timur+61161"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F7941E] hover:underline"
            >
              PT. Sinarindo Raesa Anugrah, Jl. DR. Wahidin Sudiro Husodo Gg. XI No.B1 Rt02, RW.04, Dahanrejo, Singorejo, Kec. Kebomas, Kabupaten Gresik, Jawa Timur 61161
            </a>
          </p>
          <p>
            📞 <strong>Telepon:</strong> 0822 2174 4565
          </p>
          <p>
            ✉️ <strong>Email:</strong> sinarindoraesaanugrah@gmail.com
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="mailto:sinarindoraesaanugrah@gmail.com?subject=Permintaan%20Informasi&body=Halo%20PT%20Sinarindo,%20saya%20ingin%20bertanya%20mengenai..."
            className="inline-block bg-[#F7941E] hover:bg-[#D45500] text-white hover:text-white px-6 py-3 rounded-full transition-colors font-medium shadow text-center w-52"
          >
            Kirim Email
          </a>
          <a
            href="https://wa.me/6282221744565?text=Halo%20PT%20Sinarindo,%20saya%20ingin%20bertanya%20mengenai..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white hover:text-white px-6 py-3 rounded-full transition-colors font-medium shadow text-center w-52"
          >
            Chat via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
