const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/service_project")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch(() => {
    console.log("MongoDB Not Connected");
  });

module.exports = mongoose;
