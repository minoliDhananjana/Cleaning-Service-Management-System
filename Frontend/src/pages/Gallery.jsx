function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=400",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400",
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=400",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=400",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=400"
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-12">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-xs font-bold text-blue-600 tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full">Visual Portfolio</span>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-3">Proof of Execution</h2>
        <p className="text-slate-500 font-light mt-1">Explore real transformations delivered by our system tracking modules.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <div key={i} className="group relative h-72 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            <img src={src} alt={`Clean space example ${i+1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white text-sm font-medium tracking-wide">✓ Checked Operations Standard Matrix</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;