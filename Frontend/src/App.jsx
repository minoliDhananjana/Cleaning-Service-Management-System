import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
      {/* Changed bg-slate-50 to bg-white so your page backgrounds 
        blend flawlessly with your new white Navbar style.
      */}
      <div className="flex flex-col min-h-screen bg-white font-sans antialiased text-slate-800 w-full">
        <Navbar />
        
        {/* 'flex-grow' handles keeping your footer at the bottom of short pages.
          'pt-20' provides a safe padding area right under your fixed navigation panel.
        */}
        <main className="flex-grow pt-20 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;