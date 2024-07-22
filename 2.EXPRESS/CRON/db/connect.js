const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/auth")
  .then(() => {
    console.log("MongoDB Connection Succesfully...");
  })
  .catch((err) => {
    console.log(err);
  });
