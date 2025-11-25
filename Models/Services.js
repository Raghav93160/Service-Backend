const { required } = require("joi");
const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  icon: {
    type: String, // optional (for icon name or image url)
  },
  expertiseTitle: {
    type: String, // array of points like ["Machine Learning", "Deep Learning"]
    required: true,
  },
  expertise: {
    type: [String], // array of points like ["Machine Learning", "Deep Learning"]
    default: [],
  },
  perfectFor: {
    type: String,
  },
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;