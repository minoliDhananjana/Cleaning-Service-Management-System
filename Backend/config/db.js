const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB Connection Error:', error);

    // If SRV DNS lookups are blocked (common in some networks), allow
    // falling back to a direct connection URI provided in MONGO_DIRECT_URI.
    if (process.env.MONGO_DIRECT_URI) {
      try {
        console.log('Attempting fallback connection using MONGO_DIRECT_URI');
        await mongoose.connect(process.env.MONGO_DIRECT_URI);
        console.log('MongoDB Connected (direct)');
        return;
      } catch (directErr) {
        console.error('Direct MongoDB Connection Error:', directErr);
      }
    }

    process.exit(1);
  }
};

module.exports = connectDB;