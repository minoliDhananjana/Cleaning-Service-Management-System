import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 sm:px-12 lg:px-16 ${
        isScrolled
          ? "bg-white shadow-md border-b border-[#00c2a8] py-4"
          : "bg-white py-5" 
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-black tracking-tight bg-linear-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
            CleanNest
          </span>
          <div className="h-2 w-2 rounded-full bg-teal-400" />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                  isActive
                    ? "text-teal-600 font-semibold" // Cleaned up conditional logic since both active states now look the same
                    : "text-slate-700 hover:text-teal-600" // Changed default state from text-white to dark text-slate-700
                }`}
              >
                {link.name}

                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#00c2a8]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* ACTION BUTTON */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/booking"
            className="text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-sm bg-teal-600 text-white hover:bg-teal-500" 
          >
            Book Now
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg transition-colors focus:outline-none"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end">
            <span
              className={`h-0.5 rounded transition-all duration-300 bg-slate-800 ${
                isMobileMenuOpen
                  ? "w-6 rotate-45 translate-y-2"
                  : "w-6"
              }`}
            />
            <span
              className={`h-0.5 rounded transition-all duration-300 bg-slate-800 ${
                isMobileMenuOpen ? "w-0 opacity-0" : "w-4"
              }`}
            />
            <span
              className={`h-0.5 rounded transition-all duration-300 bg-slate-800 ${
                isMobileMenuOpen
                  ? "w-6 -rotate-45 -translate-y-2"
                  : "w-5"
              }`}
            />
          </div>
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col transition-transform duration-300 transform md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <span className="text-xl font-bold bg-linear-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Menu
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-slate-400 hover:text-slate-600 font-bold text-xl"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-4 mb-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-medium p-2 rounded-xl transition-colors ${
                location.pathname === link.path
                  ? "bg-teal-50 text-teal-600 font-semibold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          to="/booking"
          onClick={() => setIsMobileMenuOpen(false)}
          className="w-full text-center bg-teal-600 text-white font-semibold py-3.5 rounded-xl shadow-lg hover:bg-teal-500 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;