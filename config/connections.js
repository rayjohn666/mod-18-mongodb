// const mongoose = require("mongoose");

// const connectionString =
//   process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialDB";

// mongoose.connection(
//   connectionString,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => {
//     console.log("Connected to MongoDB");
//   }
// );

// module.exports = connection;


const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;