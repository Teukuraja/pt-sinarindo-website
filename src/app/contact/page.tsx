"use client";

export default function Contact() {
  const handleEmailClick = () => {
    if (typeof window !== "undefined") {
      const isMobile = /iPhone|iPad|iPod|Android|Mobile/i.test(
        window.navigator.userAgent
      );

      if (isMobile) {
        window.location.href = "mailto:sinarindoraesaanugrah@gmail.com?subject=Permintaan%20Informasi&body=Halo%20PT%20Sinarindo,%20saya%20ingin%20bertanya%20mengenai...";
      } else {
        window.open(
          "https://mail.google.com/mail/?view=cm&fs=1&to=sinarindoraesaanugrah@gmail.com&su=Permintaan%20Informasi&body=Halo%20PT%20Sinarindo,%20saya%20ingin%20bertanya%20mengenai...",
          "_blank"
        );
      }
    }
  };

  return (
    <section className="bg-white py-10 px-4 sm:px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-5xl font-bold text-red-700 mb-6 text-center">
        Hubungi Kami
      </h1>

      <p className="text-sm sm:text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
        Kami siap membantu kebutuhan Anda. Silakan hubungi kami melalui informasi berikut.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 sm:p-6 max-w-2xl mx-auto mb-10 text-gray-700 text-left space-y-4">
        <div className="flex items-start space-x-2">
          <span className="text-red-600">📍</span>
          <p className="text-sm sm:text-base">
            <strong>Alamat:</strong> Jl. Dr. Wahidin Sudiro Husodo XI B1 RT2 RW4 No.27, Singorejo, Kebomas, Gresik, Jawa Timur, 61161
          </p>
        </div>
        <div className="flex items-start space-x-2">
          <span className="text-red-600">📞</span>
          <p className="text-sm sm:text-base">
            <strong>Telepon:</strong> 0822 2174 4565
          </p>
        </div>
        <div className="flex items-start space-x-2">
          <span className="text-red-600">✉️</span>
          <p className="text-sm sm:text-base">
            <strong>Email:</strong> sinarindoraesaanugrah@gmail.com
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button
          onClick={handleEmailClick}
          className="bg-red-700 text-white px-6 py-3 rounded-full hover:bg-red-600 transition text-center w-full sm:w-52"
        >
          Email Kami
        </button>

        <a
          href="https://wa.me/6282221744565"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-500 transition text-center w-full sm:w-52"
        >
          WhatsApp Kami
        </a>
      </div>
    </section>
  );
}
