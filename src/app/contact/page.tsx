export default function Contact() {
  return (
    <section className="bg-white py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold text-red-700 mb-6 text-center">
        Hubungi Kami
      </h1>

      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
        Kami siap membantu kebutuhan Anda. Silakan hubungi kami melalui informasi berikut.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-2xl mx-auto mb-10 text-gray-700 text-center space-y-3">
        <p>
          📍 <strong>Alamat:</strong> Jl. Dr. Wahidin Sudiro Husodo XI B1 RT2 RW4 No.27, 
          Singorejo, Kebomas, Gresik, Jawa Timur, 61161
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
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sinarindoraesaanugrah@gmail.com&su=Permintaan%20Informasi&body=Halo%20PT%20Sinarindo,%20saya%20ingin%20bertanya%20mengenai..."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-700 text-white px-6 py-3 rounded-full hover:bg-red-600 transition text-center w-52"
        >
          Email Kami
        </a>
        <a
          href="https://wa.me/6282221744565"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-500 transition text-center w-52"
        >
          WhatsApp Kami
        </a>
      </div>
    </section>
  );
}
