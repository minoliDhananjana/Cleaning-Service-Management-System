import Navbar from "./Navbar";

function BookingForm() {
  return (
    <div>
      <Navbar />

      <div className="max-w-3xl mx-auto p-10">
        <h1 className="text-4xl font-bold text-center text-blue-900">
          Book a Service
        </h1>

        <form className="space-y-5 mt-10">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="date"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            placeholder="Address"
            className="w-full border p-3 rounded-lg"
          />

          <button className="bg-green-600 text-white px-6 py-3 rounded-lg w-full">
            Confirm Booking
          </button>

        </form>
      </div>
    </div>
  );
}

export default BookingForm;