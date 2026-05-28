function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-12 grid md:grid-cols-2 gap-12">
      <div className="space-y-6">
        <div>
          <span className="text-xs font-bold text-blue-600 tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full">Communications Hub</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-3">Connect With Us Directly</h2>
          <p className="text-slate-500 font-light mt-1">Our support desk operates around the clock to assist you.</p>
        </div>

        <div className="space-y-4 font-light text-slate-600">
          <p><strong>📍 HQ Hub:</strong> Colombo, Sri Lanka</p>
          <p><strong>✉ Admin Mail:</strong> support@cleannest.com</p>
          <p><strong>📞 Hotline:</strong> +94 71 234 5678</p>
        </div>

        <div className="pt-4">
          <a href="https://wa.me/94712345678" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-emerald-600/10 transition-colors">
            💬 Launch Live WhatsApp Query
          </a>
        </div>
      </div>

      {/* Embedded Maps Integration */}
      <div className="h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
        <iframe title="HQ Core Map Coordinates" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.48347852332!2d79.8430018!3d6.9270786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da9b40049e22c!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s" className="w-full h-full border-0" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}

export default Contact;