const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["web", "design", "ai"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  gradient: {
    type: String,
    default: "from-blue-500 to-black",
  },
  icon: {
    type: String,
    default: "💫",
  },
  image: {
    type: String,  // multer upload path
  },

  // ⭐ NEW FIELD: Website URL
  liveUrl: {
    type: String,
    default: "",
  }

}, { timestamps: true });


const FeatureProject = mongoose.model("FeatureProject", projectSchema);

module.exports = FeatureProject;
