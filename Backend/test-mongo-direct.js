require('dotenv').config();
const mongoose = require('mongoose');

// Direct connection using resolved shard hosts to avoid SRV lookup
const user = 'minoli-cms-123';
const pass = 'cms%40123%23mI';
const hosts = 'ac-8kwqjef-shard-00-00.o1gp1yc.mongodb.net:27017,ac-8kwqjef-shard-00-01.o1gp1yc.mongodb.net:27017,ac-8kwqjef-shard-00-02.o1gp1yc.mongodb.net:27017';
const uri = `mongodb://${user}:${pass}@${hosts}/?tls=true&authSource=admin&retryWrites=true&w=majority`;

console.log('Attempting direct connection (masked):', uri.replace(/:(.*)@/, ':*****@'));

mongoose.connect(uri)
  .then(() => {
    console.log('Direct test connection successful');
    return mongoose.disconnect();
  })
  .catch((err) => {
    console.error('Direct test connection error:');
    console.error(err);
    process.exit(1);
  });
