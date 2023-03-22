const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const routes = require("./routes");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const db = require('./config/connection');

dotenv.config();

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api", routes);

db.once('open', () => {
app.listen(3306, () => {
  console.log("listening on port 3001");
});

});