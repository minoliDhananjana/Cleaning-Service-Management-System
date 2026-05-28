import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);

  // FETCH BOOKINGS
  useEffect(() => {
    fetchBookings();
  }, []);

  // GET BOOKINGS
  const fetchBookings = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/bookings"
      );

      console.log(res.data);

      setBookings(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-10">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-slate-800 mb-8">
        Admin Dashboard
      </h1>

      {/* TABLE */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

        <table className="w-full">

          {/* TABLE HEAD */}
          <thead className="bg-teal-600 text-white">

            <tr>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Service</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Time</th>
              <th className="p-4 text-left">Status</th>
            </tr>

          </thead>

          {/* TABLE BODY */}
          <tbody>

            {bookings.map((booking) => (

              <tr
                key={booking._id}
                className="border-b hover:bg-slate-50"
              >

                <td className="p-4">
                  {booking.customerName}
                </td>

                <td className="p-4">
                  {booking.email}
                </td>

                <td className="p-4">
                  {booking.phone}
                </td>

                <td className="p-4">
                  {booking.serviceId?.name}
                </td>

                <td className="p-4">
                  {booking.date}
                </td>

                <td className="p-4">
                  {booking.time}
                </td>

                <td className="p-4">
                  <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium">
                    {booking.status}
                  </span>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default AdminDashboard;