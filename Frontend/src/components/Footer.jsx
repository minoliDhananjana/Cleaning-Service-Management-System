import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* BRAND & DESCRIPTION */}
        <div className="md:col-span-2 space-y-4">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
              CleanNest
            </span>
            <div className="h-1.5 w-1.5 rounded-full bg-teal-400" />
          </Link>
          <p className="text-sm font-light text-slate-400 max-w-sm leading-relaxed">
            Next-generation property care and enterprise cleaning management software. We unite vetted professionals with custom tracking suites for immaculate results.
          </p>
        </div>

        {/* QUICK NAVIGATION */}
        <div className="space-y-4">
          <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-widest">
            Platform
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition-colors duration-200 font-light">
                Home Overview
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition-colors duration-200 font-light">
                Management Services
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-white transition-colors duration-200 font-light">
                Visual Showcase
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors duration-200 font-light">
                Support Desk
              </Link>
            </li>
          </ul>
        </div>

        {/* OPERATIONS INFO */}
        <div className="space-y-4">
          <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-widest">
            Headquarters
          </h3>
          <ul className="space-y-2.5 text-sm font-light">
            <li className="flex items-center gap-2">
              <span className="text-blue-400">✉</span> support@cleannest.com
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">📞</span> +94 71 234 5678
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">📍</span> Colombo, Sri Lanka
            </li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT & CREDITS */}
      <div className="border-t border-slate-800/60 py-6 text-xs text-slate-500 font-light">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div>
            &copy; {currentYear} CleanNest Operations Inc. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-slate-400 transition-colors">Privacy Framework</a>
            <a href="#terms" className="hover:text-slate-400 transition-colors">Service Level Agreement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;