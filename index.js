const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();
const PORT = process.env.PORT || 5000;
const CONNECTION = process.env.CONNECTION;

mongoose.set("strictQuery", false);
mongoose
  .connect(CONNECTION, () => {
    console.log("connected to database");
  })
  .then(() => {
    const app = express();

    app.listen(PORT, () => {
      console.log("Connected to port " + PORT);
    });
  });
