import Navbar from "../components/Navbar";
import bg5 from "../assets/bg5.jpg";
import bg1 from "../assets/bg1.jpg";

function Home() {
  return (
    // Changed bg-slate-50 to bg-white to match your clean navbar design
    <div className="w-full min-h-screen bg-white text-slate-800 antialiased">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[650px] w-full overflow-hidden">
        {/* Background Image with Deep Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={bg5}
            alt="Cleaning Service"
            className="h-full w-full object-cover transform scale-105 motion-safe:animate-pulse animation-duration-[6000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
        </div>

        {/* Hero Content Wrapper */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 sm:px-12 lg:px-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-wider mb-6">
              ✨ Premium Management & Cleaning
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
              Spotless Spaces, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                Effortless Control
              </span>
            </h1>

            <p className="mt-6 text-slate-300 text-lg sm:text-xl font-light max-w-xl leading-relaxed">
              Seamlessly schedule, track, and manage commercial and residential professional cleanings tailored entirely to your workflow.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-xl font-medium shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0">
                Book a Service
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-3.5 rounded-xl font-medium border border-white/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0">
                Explore Features →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK METRICS/TRUST BAR */}
      <section className="w-full bg-white relative z-20 -mt-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-slate-900">99.8%</p>
              <p className="text-sm text-slate-500 font-medium mt-1">Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">500+</p>
              <p className="text-sm text-slate-500 font-medium mt-1">Cleanings Managed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">50+</p>
              <p className="text-sm text-slate-500 font-medium mt-1">Vetted Professionals</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">24/7</p>
              <p className="text-sm text-slate-500 font-medium mt-1">Real-time Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / SYSTEM OVERVIEW SECTION */}
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-[#848b8a] rounded-2xl blur opacity-25 group-hover:opacity-35 transition duration-300" />
            <img
              src={bg1}
              alt="About CleanNest system dashboard"
              className="relative rounded-2xl shadow-md w-full object-cover h-[400px]"
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-bold text-teal-600 tracking-wider uppercase">Intelligent Operations</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-teal-600">
                We manage the chaos so you can enjoy the clean
              </h2>
            </div>

            <p className="text-[#505050] text-lg leading-relaxed font-light">
              At CleanNest, we're redefining asset management through flawless execution. Our custom operations engine couples certified cleaning professionals with precision tracking tools to provide unprecedented consistency and live performance transparency.
            </p>

            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-4 text-sm font-medium text-slate-700">
              <div className="flex items-center gap-2">
                <span className="text-teal-600">✓</span> Automated Scheduling
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-600">✓</span> Real-Time Job Tracking
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-600">✓</span> Instant Digital Invoicing
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-600">✓</span> Eco-Friendly Standards
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;