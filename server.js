// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const helmet = require("helmet");
// // const morgan = require("morgan");
// const routes = require("./routes");
// // const authRoute = require("./routes/auth");
// // const postRoute = require("./routes/posts");
// const db = require('./config/connections');

// dotenv.config();

// //middleware
// app.use(express.json());
// app.use(helmet());
// app.use(morgan("common"));

// app.use(routes);

// db.once('open', () => {
// app.listen(3306, () => {
//   console.log("listening on port 3001");
// });

// });


const express = require('express');
const db = require('./config/connections');
const routes = require('./routes');

const PORT = process.env.PORT || 3006;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});