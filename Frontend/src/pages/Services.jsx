import bg2 from "../assets/bg2.jpg";
import bg52 from "../assets/bg52.jpg";
import bg53 from "../assets/bg53.jpg";
import bg54 from "../assets/bg54.jpg";
import bg55 from "../assets/bg55.jpg";
import bg56 from "../assets/bg56.jpg";
import bg57 from "../assets/bg57.jpg";
import bg58 from "../assets/bg58.jpg";
import bg59 from "../assets/bg59.jpg";
import React from "react";
import BookingForm from "./Booking";
import { Link } from "react-router-dom";

import {
  FaHouse,
  FaBuilding,
  FaCouch,
  FaKitchenSet,
  FaBath,
  FaTruckMoving,
  FaBroom,
} from "react-icons/fa6";

import { MdWindow } from "react-icons/md";

const services = [
  {
    id: 1,
    name: "Deep Home Cleaning",
    price: "LKR 8,500",
    icon: <FaHouse />,
    image: bg57,
    description:
      "Complete top-to-bottom cleaning for your entire home using eco-friendly products.",
  },
  {
    id: 2,
    name: "Office Cleaning",
    price: "LKR 12,000",
    icon: <FaBuilding />,
    image: bg58,
    description:
      "Professional office cleaning solutions for productive and hygienic workspaces.",
  },
  {
    id: 3,
    name: "Sofa & Carpet Cleaning",
    price: "LKR 6,500",
    icon: <FaCouch />,
    image: bg59,
    description:
      "Deep steam cleaning to remove stains, dust, and allergens from fabrics.",
  },
  {
    id: 4,
    name: "Kitchen Cleaning",
    price: "LKR 5,000",
    icon: <FaKitchenSet />,
    image: bg56,
    description:
      "Grease-free kitchen cleaning for cabinets, sinks, tiles, and appliances.",
  },
  {
    id: 5,
    name: "Bathroom Sanitization",
    price: "LKR 4,500",
    icon: <FaBath />,
    image: bg55,
    description:
      "Complete bathroom sanitization with germ protection and fresh finishing.",
  },
  {
    id: 6,
    name: "Move-In / Move-Out",
    price: "LKR 10,000",
    icon: <FaTruckMoving />,
    image: bg54,
    description:
      "Perfect cleaning before moving into a property or after moving out.",
  },
  {
    id: 7,
    name: "Glass Cleaning",
    price: "LKR 3,500",
    icon: <MdWindow />,
    image: bg53,
    description:
      "Crystal-clear glass and window cleaning with streak-free results.",
  },
  {
    id: 8,
    name: "Post Construction",
    price: "LKR 15,000",
    icon: <FaBroom />,
    image: bg52,
    description:
      "Heavy-duty cleaning after renovations and construction projects.",
  },
];

function Services() {
  return (
    // Outer container set to w-full to avoid width limitations from global CSS rules
    <div className="w-full min-h-screen bg-white text-slate-800 antialiased">
      
      

      {/* SERVICES DISPLAY SECTION */}
      <section className="w-full bg-[#ffffff] py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          {/* SECTION TITLE 
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-600 tracking-tight">
              What We Offer
            </h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto font-light">
              Explore our premium cleaning services designed to make your life
              easier and your environment healthier.
            </p>
          </div>*/}

          {/* SERVICES GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 group flex flex-col h-full"
              >
                {/* IMAGE */}
                <div className="overflow-hidden h-48 w-full relative">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* ICON */}
                  <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center text-xl mb-4 shadow-sm">
                    {service.icon}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {service.name}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow font-light">
                    {service.description}
                  </p>

                  {/* BOTTOM INFO PANEL */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-auto">
                    <span className="text-slate-900 font-extrabold text-lg">
                      {service.price}
                    </span>
                    <Link
                      to="/booking"
                      className="bg-teal-600 hover:bg-teal-500 text-white px-5 py-2 rounded-xl text-sm font-semibold transition shadow-sm"
                    >
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* IMAGE CONTAINER */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-3xl blur opacity-25" />
            <img
              src={bg2}
              alt="Why Choose Our System"
              className="relative rounded-3xl shadow-md object-cover w-full h-[400px]"
            />
          </div>

          {/* CONTENT PANEL */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-600 tracking-tight">
              Why Choose Us?
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-light">
              We provide trusted, affordable, and professional cleaning services
              with experienced staff and modern cleaning technology.
            </p>

            <div className="space-y-4 pt-2">
              {[
                "Experienced Cleaning Team",
                "Eco-Friendly Products",
                "Affordable Pricing",
                "100% Customer Satisfaction",
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <p className="text-slate-700 font-medium text-sm sm:text-base">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* ACTION REDIRECT */}
            <Link
              to="/booking"
              className="inline-block mt-4 bg-teal-600 hover:bg-teal-500 text-white px-8 py-3.5 rounded-xl text-base font-semibold transition shadow-md shadow-teal-600/10"
            >
              Book a Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;