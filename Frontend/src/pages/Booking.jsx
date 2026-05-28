import { useEffect, useState } from "react";
import axios from "axios";

import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUserAlt,
  FaWhatsapp,
  FaStar,
  FaEnvelope,
} from "react-icons/fa";

function BookingForm() {
  const [services, setServices] = useState([]);

  const [formData, setFormData] = useState({
    serviceId: "",
    date: "",
    time: "",
    customerName: "",
    email: "",
    phone: "",
    address: "",
  });

  const [message, setMessage] = useState("");

  // FETCH SERVICES
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/services")
      .then((res) => {
        console.log("Services:", res.data);
        setServices(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // HANDLE CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting:", formData);

    // VALIDATION
    if (
      !formData.serviceId ||
      !formData.date ||
      !formData.time ||
      !formData.customerName ||
      !formData.email ||
      !formData.phone ||
      !formData.address
    ) {
      setMessage("Please fill all required fields.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/bookings",
        formData
      );

      console.log(res.data);

      setMessage("Booking Successful!");

      // CLEAR FORM
      setFormData({
        serviceId: "",
        date: "",
        time: "",
        customerName: "",
        email: "",
        phone: "",
        address: "",
      });

    } catch (error) {
      console.log(error);

      const serverMsg = error?.response?.data?.message || error?.message;
      if (error.response) {
        console.log(error.response.data);
      }

      setMessage(serverMsg || "Booking failed.");
    }
  };

  return (
    <section className="bg-gradient-to-br from-slate-100 to-blue-50 py-20 px-4">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>

          <div className="inline-flex items-center gap-2 bg-blue-100 text-teal-600 px-4 py-2 rounded-full mb-5">
            <FaStar />
            <span className="font-medium">
              Professional Cleaning Service
            </span>
          </div>

          <h2 className="text-5xl font-bold text-slate-800 leading-tight mb-6">
            Book Your Cleaning Service
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Fast, reliable, and affordable cleaning solutions for homes,
            offices, and apartments.
          </p>

          <a
            href="https://wa.me/94771234567"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-2xl font-semibold transition duration-300 shadow-lg"
          >
            <FaWhatsapp className="text-xl" />
            Chat on WhatsApp
          </a>

        </div>

        {/* FORM */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">

          <div className="mb-8">
            <h3 className="text-3xl font-bold text-slate-800 mb-2">
              Make a Booking
            </h3>

            <p className="text-gray-500">
              Fill your details below.
            </p>
          </div>

          {/* MESSAGE */}
          {message && (
            <div className="mb-6 bg-blue-100 text-teal-600 p-4 rounded-xl">
              {message}
            </div>
          )}

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* SERVICE */}
            <div>
              <label className="font-medium text-slate-700 block mb-2">
                Select Service
              </label>

              <select
  name="serviceId"
  value={formData.serviceId}
  onChange={handleChange}
  className="w-full border border-gray-200 bg-gray-50 p-4 rounded-2xl"
>
  <option value="">Choose Service</option>

  {services.map((service) => (
    <option
      key={service._id}
      value={service._id}
    >
      {service.name}
    </option>
  ))}
</select>
            </div>

            {/* DATE & TIME */}
            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label className="font-medium text-slate-700 block mb-2">
                  Date
                </label>

                <div className="relative">

                  <FaCalendarAlt className="absolute top-5 left-4 text-gray-400" />

                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full border border-gray-200 bg-gray-50 p-4 pl-12 rounded-2xl"
                  />
                </div>
              </div>

              <div>
                <label className="font-medium text-slate-700 block mb-2">
                  Time
                </label>

                <div className="relative">

                  <FaClock className="absolute top-5 left-4 text-gray-400" />

                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full border border-gray-200 bg-gray-50 p-4 pl-12 rounded-2xl"
                  />
                </div>
              </div>

            </div>

            {/* NAME */}
            <div>
              <label className="font-medium text-slate-700 block mb-2">
                Full Name
              </label>

              <div className="relative">

                <FaUserAlt className="absolute top-5 left-4 text-gray-400" />

                <input
                  type="text"
                  name="customerName"
                  placeholder="Enter your full name"
                  value={formData.customerName}
                  onChange={handleChange}
                  className="w-full border border-gray-200 bg-gray-50 p-4 pl-12 rounded-2xl"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="font-medium text-slate-700 block mb-2">
                Email
              </label>

              <div className="relative">

                <FaEnvelope className="absolute top-5 left-4 text-gray-400" />

                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      "Please enter a valid email address"
                    )
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  className="w-full border border-gray-200 bg-gray-50 p-4 pl-12 rounded-2xl"
                />
              </div>
            </div>

            {/* PHONE */}
            <div>
              <label className="font-medium text-slate-700 block mb-2">
                Phone Number
              </label>

              <div className="relative">

                <FaPhoneAlt className="absolute top-5 left-4 text-gray-400" />

                <input
                  type="text"
                  name="phone"
                  placeholder="0771234567"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-200 bg-gray-50 p-4 pl-12 rounded-2xl"
                />
              </div>
            </div>

            {/* ADDRESS */}
            <div>
              <label className="font-medium text-slate-700 block mb-2">
                Address
              </label>

              <div className="relative">

                <FaMapMarkerAlt className="absolute top-5 left-4 text-gray-400" />

                <textarea
                  name="address"
                  rows="4"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border border-gray-200 bg-gray-50 p-4 pl-12 rounded-2xl"
                ></textarea>

              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-500 text-white py-4 rounded-2xl font-semibold text-lg transition"
            >
              Confirm Booking
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

export default BookingForm;