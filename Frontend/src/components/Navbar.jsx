import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold text-green-600">
        CleanNest
      </h1>

      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <Link
        to="/booking"
        className="bg-green-600 text-white px-4 py-2 rounded-lg"
      >
        Book Now
      </Link>
    </nav>
  );
}

export default Navbar;