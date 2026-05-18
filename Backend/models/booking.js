const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  service: String,
  fullName: String,
  date: String,
  time: String,
  address: String,
  contact: String,
  status: {
    type: String,
    default: "Pending",
  },
});

module.exports = mongoose.model("Booking", bookingSchema);