const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routeUrls = require("./routes/route");
const cors = require("cors");

const app = express();

dotenv.config();

PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, () =>
  console.log("Database connected")
);

app.use(express.json());
app.use(cors());
app.use("/app", routeUrls);

app.listen(PORT, () => {
  console.log("Server is listening on port 5000");
});
