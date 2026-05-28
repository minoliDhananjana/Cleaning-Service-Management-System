require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;
console.log('Attempting to connect to MongoDB using masked URI:', uri.replace(/:(.*)@/, ':*****@'));

mongoose.connect(uri)
  .then(() => {
    console.log('Test connection successful');
    return mongoose.disconnect();
  })
  .catch((err) => {
    console.error('Test connection error:');
    console.error(err);
    process.exit(1);
  });
